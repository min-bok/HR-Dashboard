import React from "react";
import styled from "styled-components";
import { TimeBlock, AdminSummaryBlock } from "../block";
import { summaryData } from "../../dummyData";
import { ComparisonChart } from "../chart";

export default function Dashboard() {
  return (
    <>
      <Wrap>
        <TimeBlock />
        <div className="summary">
          {summaryData.map((data, index) => (
            <AdminSummaryBlock key={index} {...data}></AdminSummaryBlock>
          ))}
        </div>
      </Wrap>
      <Wrap>
        <ComparisonChart />
      </Wrap>
    </>
  );
}

const Wrap = styled.section`
  display: grid;
  width: 1106px;
  grid-template-columns: 1fr 1fr;
  /* margin-top: 107px; */

  div.summary {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 33px;
  }
`;
