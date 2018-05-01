import React, { Component, Fragment } from "react";
import { Chart, Axis, Tooltip, Geom, Coord, G2 } from "bizcharts";
import { Button, Segment, Grid } from "semantic-ui-react";

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

  // Disable tracking by AliPay. WTH though ...
  componentDidMount = () => G2.track(false);

  render() {
    const { zoomIn, zoomOut } = this;
    const { height } = this.state;

    return (
      <Fragment>
        <Segment>
          <Grid columns={2}>
            <Grid.Column textAlign="left" verticalAlign="middle">
              <span>Tap a bar to get the proposal!</span>
            </Grid.Column>
            <Grid.Column textAlign="right" verticalAlign="middle">
              <Button onClick={zoomIn} icon="zoom" />
              <Button onClick={zoomOut} icon="zoom out" />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <Chart height={height} data={data} forceFit padding={0}>
            <Coord transpose />
            <Axis
              name="proposal"
              label={{ offset: -15, textStyle: { fill: "#000" } }}
              line={{ lineWidth: 0 }}
            />
            <Axis name="votes" line={{ lineWidth: 0 }} />
            <Tooltip />
            <Geom
              type="interval"
              position="proposal*votes"
              opacity={(33, 133, 208, 0.2)}
            />
          </Chart>
        </Segment>
      </Fragment>
    );
  }
}
