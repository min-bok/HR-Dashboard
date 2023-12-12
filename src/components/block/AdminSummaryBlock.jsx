import React from "react";
import styled from "styled-components";
import { SVGIncrease, SVGDecrease } from "../../svg";

export default function AdminSummary({
  number,
  title,
  description,
  Icon,
  change,
}) {
  return (
    <Cont>
      <h1>
        {number}
        <span>
          <Icon />
        </span>
      </h1>

      <h2>{title}</h2>
      <p>
        <Badge bgColor={change === "increase" ? "#98ce7130 " : "#CE717130"}>
          {change === "increase" ? <SVGIncrease /> : <SVGDecrease />}
        </Badge>
        {description}
      </p>
    </Cont>
  );
}

AdminSummary.defaultProps = {
  number: 100,
  title: "Title",
  description: "Description",
  icon: "default-icon",
  change: () => {},
};

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 134px;
  border-radius: 15px;
  padding: 20px 25px;
  background-color: white;

  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 38px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 100%;
      background-color: #e6eaf5;
    }
  }

  h2 {
    font-size: 16px;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 6px;
  }
`;

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
`;
