import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes/Routes";
import "semantic-ui-css/semantic.min.css";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { ApolloProvider } from "react-apollo";

// TODO: Add error handling for ws & http
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  new WebSocketLink({
    uri: `ws://192.168.178.44:3000`,
    options: {
      reconnect: true
    }
  }),
  new HttpLink({
    uri: "http://192.168.178.44:3000",
    credentials: "same-origin"
  })
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("direct-democracy-frontend")
);
