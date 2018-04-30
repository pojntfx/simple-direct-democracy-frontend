import React, { Fragment } from "react";
import { BottomBar } from "./BottomBar";
import { Proposal } from "./Proposal";
import gql from "graphql-tag";
import { Subscription, Query } from "react-apollo";

const ALL_PROPOSALS_SUBSCRIPTION = gql`
  subscription {
    updatedProposals {
      text
      votes
      id
    }
  }
`;

const ALL_PROPOSALS_QUERY = gql`
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
    <Subscription subscription={ALL_PROPOSALS_SUBSCRIPTION}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <Query query={ALL_PROPOSALS_QUERY}>
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
          );
        if (error) return `Error! ${error.message}`;

        return data.updatedProposals.map(({ text, votes, id }, index) => (
          <Proposal votes={votes} id={id} key={index}>
            {text}
          </Proposal>
        ));
      }}
    </Subscription>
    <BottomBar />
  </Fragment>
);
