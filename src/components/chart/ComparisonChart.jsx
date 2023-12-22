import React from "react";
import styled from "styled-components";
import LineChart from "./LineChart";
import { lineChartData } from "../../dummyData";

export default function ComparisonChart() {
  return (
    <Wrap>
      <h1>
        Attendance Comparison Chart <span>Daily</span>
        <span>Weekly</span>
        <span>Monthly</span>
      </h1>
      <LineChart data={lineChartData} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 725px;
  height: 303px;
  border-radius: 15px;
  background-color: white;
  padding: 30px;

  h1 {
    font-size: 1.6rem;
    font-weight: 200;
  }
`;
