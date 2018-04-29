import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes/Routes";
import "semantic-ui-css/semantic.min.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3000"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("direct-democracy-frontend")
);
