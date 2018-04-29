import React, { Fragment } from "react";
import { BottomBar } from "./BottomBar";
import { Proposal } from "./Proposal";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_ALL_PROPOSALS = gql`
  {
    allProposals {
      text
      votes
      id
    }
  }
`;

export const Proposals = () => (
  <Fragment>
    <Query query={GET_ALL_PROPOSALS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading ...";
        if (error) return `Error! ${error.message}`;

        return data.allProposals.map(({ text, votes, id }, index) => (
          <Proposal votes={votes} id={id} key={index}>
            {text}
          </Proposal>
        ));
      }}
    </Query>
    <BottomBar />
  </Fragment>
);
