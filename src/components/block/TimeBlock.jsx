import React from "react";
import styled from "styled-components";
import { SVGSun } from "../../svg";
import BasicButton from "../button/BasicButton";

export default function TimeBlock() {
  return (
    <Wrap>
      <div className="time">
        <SVGSun />
        <Time>
          8:02:09 AM <span>Realtime Insight</span>
        </Time>
      </div>
      <Date>
        <span>Today:</span>
        <p>18th November 2023</p>
      </Date>
      <BasicButton>View Attendence</BasicButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 251px;
  height: 302px;
  border-radius: 15px;
  background-color: white;
  padding: 50px 0;

  div.time {
    display: flex;
    align-items: center;
    gap: 9px;
  }
`;

const Time = styled.strong`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: var(--gray-lv3-color);

  span {
    font-size: 12px;
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;

  p {
    line-height: 28px;
  }
`;
