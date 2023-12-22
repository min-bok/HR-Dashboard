import { ResponsiveLine } from "@nivo/line";
import React from "react";

export default function lineChart({ data }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "0",
        max: "100",
        stacked: false,
      }}
      yFormat={(value) => `${Math.round(value)}%`}
      curve="cardinal"
      axisLeft={{
        tickValues: [0, 20, 40, 60, 80, 100],
      }}
      colors={"var(--primary-color)"}
      enableArea={true}
      areaOpacity={0.1}
      pointSize={8}
      pointColor={"white"}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      enableSlices="x"
      useMesh={true}
      tooltip={"none"}
    />
  );
}

// 툴팁 수정 및 그래프 수정
