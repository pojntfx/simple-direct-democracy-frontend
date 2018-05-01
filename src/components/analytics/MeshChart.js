import React from "react";
import { Chart, Tooltip, Geom, Coord, G2, Label } from "bizcharts";

// Disable tracking by AliPay. WTH though ...
G2.track(false);

// Make it a mesh and not a normal pie chart
const getPoint = (p0, p1, ratio) => ({
  x: (1 - ratio) * p0.x + ratio * p1.x,
  y: (1 - ratio) * p0.y + ratio * p1.y
});

const pointRatio = 0.7;
G2.Shape.registerShape("interval", "triangleShape", {
  draw(cfg, container) {
    let centerPoint = {
      x: cfg.points[3].x,
      y: (cfg.points[2].y + cfg.points[3].y) / 2
    };
    centerPoint = this.parsePoint(centerPoint);

    const points = this.parsePoints(cfg.points);
    const tmpPoint1 = getPoint(points[0], points[3], pointRatio);
    const tmpPoint2 = getPoint(points[1], points[2], pointRatio);
    let path = [];
    path.push(["M", points[0].x, points[0].y]);
    path.push(["L", points[1].x, points[1].y]);
    path.push(["L", tmpPoint2.x, tmpPoint2.y]);
    path.push(["L", centerPoint.x, centerPoint.y]);
    path.push(["L", tmpPoint1.x, tmpPoint1.y]);
    path.push("Z");
    return container.addShape("path", {
      attrs: {
        fill: cfg.color,
        path: path,
        lineWidth: 1,
        stroke: "white"
      }
    });
  }
});

export const MeshChart = ({ data, height }) => (
  <Chart height={height} data={data} forceFit>
    <Coord type="theta" radius={0.8} />
    <Tooltip
      showTitle={false}
      itemTpl="<li>{name}<br/><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{value}</li>"
    />
    <Geom
      type="intervalStack"
      position="votes"
      color="text"
      shape="triangleShape"
      tooltip={[
        "text*votes",
        (text, votes) => ({
          name: text,
          value: ` votes: ${votes}`
        })
      ]}
    >
      <Label content="text" />
    </Geom>
  </Chart>
);
