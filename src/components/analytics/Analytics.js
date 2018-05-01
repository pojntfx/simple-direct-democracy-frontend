import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Button, Segment, Grid, Dimmer, Loader } from "semantic-ui-react";

import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";

const data = [
  { proposal: "Be awesome", votes: 1 },
  { proposal: "Great", votes: 2 },
  { proposal: "Unicorn", votes: 3 },
  { proposal: "Trains", votes: 4 },
  { proposal: "New Internet", votes: 5 },
  { proposal: "Jian Yang", votes: 6 },
  { proposal: "Richard", votes: 7 },
  { proposal: "Dinesh", votes: 8 },
  { proposal: "Gilfoyle", votes: 9 }
];

const ALL_PROPOSALS_QUERY = gql`
  {
    allProposals {
      text
      votes
    }
  }
`;

const ALL_PROPOSALS_SUBSCRIPTION = gql`
  subscription {
    updatedProposals {
      text
      votes
    }
  }
`;

export class Analytics extends Component {
  state = {
    height: data.length * 50
  };

  zoomIn = () => this.setState({ height: this.state.height + data.length * 5 });

  zoomOut = () =>
    this.setState({ height: this.state.height - data.length * 5 });

  render() {
    const { zoomIn, zoomOut } = this;
    const { height } = this.state;
    const { type } = this.props;

    switch (type) {
      case "bar-chart":
        return (
          <ProposalsQuery>
            {/* <TestDataDisplay /> */}
            <BarChartVisualizer
              zoomIn={zoomIn}
              zoomOut={zoomOut}
              height={height}
            />
          </ProposalsQuery>
        );
      case "pie-chart":
        return (
          <ProposalsQuery>
            <PieChartVisualizer height={height} />
          </ProposalsQuery>
        );
      default:
        return <div>No such visualizer has been implemented yet.</div>;
    }
  }
}

const ProposalsQuery = ({ children }) => (
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
        <ProposalsWrapper
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
        >
          {children}
        </ProposalsWrapper>
      );
    }}
  </Query>
);

class ProposalsWrapper extends Component {
  componentDidMount() {
    this.props.subscribeToNewProposals();
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          data: this.props.proposals
        })}
      </div>
    );
  }
}

// const TestDataDisplay = ({ data }) => <div>{JSON.stringify(data)}</div>;

const BarChartVisualizer = ({ zoomIn, zoomOut, height, data }) => [
  <Segment key="1">
    <Grid columns={2}>
      <Grid.Column textAlign="left" verticalAlign="middle">
        <span>Tap or click a bar to get detailed info!</span>
      </Grid.Column>
      <Grid.Column textAlign="right" verticalAlign="middle">
        <Button onClick={zoomIn} icon="zoom" />
        <Button onClick={zoomOut} icon="zoom out" />
      </Grid.Column>
    </Grid>
  </Segment>,
  <Segment key="2">
    <BarChart height={height} data={data} />
  </Segment>
];

const PieChartVisualizer = ({ height, data }) => [
  <Segment key="1">
    <span>Tap or click a piece to get detailed info!</span>
  </Segment>,
  <Segment key="2">
    <PieChart height={height} data={data} />
  </Segment>
];
