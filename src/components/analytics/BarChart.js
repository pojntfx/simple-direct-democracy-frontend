import React from "react";
import { Chart, Axis, Tooltip, Geom, Coord, G2 } from "bizcharts";

// Disable tracking by AliPay. WTH though ...
G2.track(false);

export const BarChart = ({ data, height }) => (
  <Chart height={height} data={data} forceFit padding={0}>
    <Coord transpose />
    <Axis
      name="text"
      label={{ offset: -15, textStyle: { fill: "#000" } }}
      line={{ lineWidth: 0 }}
    />
    <Axis name="votes" line={{ lineWidth: 0 }} />
    <Tooltip />
    <Geom type="interval" position="text*votes" opacity={(33, 133, 208, 0.2)} />
  </Chart>
);
