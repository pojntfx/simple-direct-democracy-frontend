import React, { Component } from "react";
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
import { EndpointSelection } from "./components/endpointselection/EndpointSelection";
import { injectGlobal } from "styled-components";

injectGlobal`
body {
  background: url("/start-bg.jpg")!important;
  background-size: cover!important;
}
`;

// Config (set to skip setup)
let endpoint = undefined;

class MainUI extends Component {
  render() {
    if (endpoint) {
      // TODO: Add error handling for ws & http
      const link = split(
        ({ query }) => {
          const { kind, operation } = getMainDefinition(query);
          return kind === "OperationDefinition" && operation === "subscription";
        },
        new WebSocketLink({
          uri: `ws:/${endpoint}:3000/`,
          options: {
            reconnect: true
          }
        }),
        new HttpLink({
          uri: `http://${endpoint}:3000`,
          credentials: "same-origin"
        })
      );

      const client = new ApolloClient({
        link,
        cache: new InMemoryCache()
      });

      return (
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      );
    } else {
      const setEndpoint = newEndpoint => {
        endpoint = newEndpoint;
        this.forceUpdate();
      };
      return <EndpointSelection onEndpointSubmit={setEndpoint} />;
    }
  }
}

ReactDOM.render(
  <MainUI />,
  document.getElementById("direct-democracy-frontend")
);
