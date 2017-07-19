import { VictoryArea, VictoryChart, VictoryGroup } from "victory";
import React from "react";

const AreaChart = props =>
  <div
    style={{
      width: "150px",
      position: "absolute",
      bottom: "20px",
      right: "20px"
    }}
  >
    <VictoryChart width={300} height={300}>
      <VictoryGroup
        style={{
          data: { strokeWidth: 1, fillOpacity: 0.4 }
        }}
      >
        <VictoryArea
          style={{
            data: { fill: "cyan", stroke: "cyan" }
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
        <VictoryArea
          style={{
            data: { fill: "magenta", stroke: "magenta" }
          }}
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 2 },
            { x: 3, y: 6 },
            { x: 4, y: 2 },
            { x: 5, y: 6 }
          ]}
        />
      </VictoryGroup>
    </VictoryChart>
  </div>;

export default AreaChart;
