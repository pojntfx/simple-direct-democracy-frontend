import React, { Component } from "react";
import { Button, Segment, Grid } from "semantic-ui-react";
import { BarChart } from "./BarChart";

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
          <BarChartVisualizer
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            height={height}
            data={data}
          />
        );
      default:
        return <div>No such visualizer has been implemented yet.</div>;
    }
  }
}

const BarChartVisualizer = ({ zoomIn, zoomOut, height, data }) => [
  <Segment key="1">
    <Grid columns={2}>
      <Grid.Column textAlign="left" verticalAlign="middle">
        <span>Tap a bar to get the proposal!</span>
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
