import React, { Fragment, Component } from "react";
import { BottomBar } from "./BottomBar";
import { Proposal } from "./Proposal";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { List, Transition, Dimmer, Loader } from "semantic-ui-react";

const ALL_PROPOSALS_QUERY = gql`
  {
    allProposals {
      text
      votes
      id
    }
  }
`;

const ALL_PROPOSALS_SUBSCRIPTION = gql`
  subscription {
    updatedProposals {
      text
      votes
      id
    }
  }
`;

export class Proposals extends Component {
  render() {
    return (
      <Fragment>
        <Query query={ALL_PROPOSALS_QUERY} pollInterval={2000}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading)
              return (
                <Dimmer active inverted>
                  <Loader>Loading ...</Loader>
                </Dimmer>
              );
            if (error) return `Error! ${error.message}`;

            return (
              <ProposalList
                proposals={data.allProposals}
                subscribeToNewProposals={() => {
                  subscribeToMore({
                    document: ALL_PROPOSALS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      return {
                        allProposals: subscriptionData.data.updatedProposals
                      };
                    }
                  });
                }}
              />
            );
          }}
        </Query>
        <BottomBar />
      </Fragment>
    );
  }
}

class ProposalList extends Component {
  componentDidMount() {
    this.props.subscribeToNewProposals();
  }

  render() {
    const { proposals } = this.props;

    return (
      <Transition.Group as={List} duration={200} animation="scale">
        {proposals.map(({ text, votes, id }, index) => (
          <List.Item key={index}>
            <Proposal votes={votes} id={id} key={index}>
              {text}
            </Proposal>
          </List.Item>
        ))}
      </Transition.Group>
    );
  }
}
