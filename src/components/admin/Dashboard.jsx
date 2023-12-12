import React from "react";
import styled from "styled-components";
import { AdminSummary } from "../block";
import { summaryData } from "../../dummyData";

export default function Dashboard() {
  return (
    <Wrap>
      {summaryData.map((data, index) => (
        <AdminSummary key={index} {...data}></AdminSummary>
      ))}
    </Wrap>
  );
}

const Wrap = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 33px;
`;
