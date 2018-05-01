import React from "react";
import { Chart, Axis, Tooltip, Geom, Coord, G2, Label } from "bizcharts";

// Disable tracking by AliPay.
G2.track(false);

export const PieChart = ({ data, height }) => (
  <Chart height={height} data={data} padding={0} forceFit>
    <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
    <Axis name="votes" />
    <Tooltip
      showTitle={false}
      itemTpl="<li>{name}<br/><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{value}</li>"
    />
    <Geom
      type="intervalStack"
      position="votes"
      color="text"
      tooltip={[
        "text*votes",
        (text, votes) => ({
          name: text,
          value: ` votes: ${votes}`
        })
      ]}
    >
      <Label content="text" formatter={(val, text) => text.point.text} />
    </Geom>
  </Chart>
);
