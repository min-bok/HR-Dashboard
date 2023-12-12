import React, { useState } from "react";
import styled from "styled-components";
import { SVGDashboard, SVGDayoff, SVGHistory } from "../svg";

const icons = [
  { key: "dashboard", Component: SVGDashboard },
  { key: "dayoff", Component: SVGDayoff },
  { key: "history", Component: SVGHistory },
];

export default function Nav() {
  const [isHover, setIsHover] = useState(null);

  const handleMouseEnter = (key) => setIsHover(key);
  const handleMouseLeave = () => setIsHover(null);

  return (
    <Wrap>
      {icons.map(({ key, Component }) => (
        <Button
          key={key}
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <Component
            color={isHover === key ? "var(--primary-color)" : undefined}
          />
        </Button>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 68px;
  height: 283px;
  border-radius: 15px;
  background-color: white;
  padding: 40px 0;
  box-shadow: 0px 8px 28px 0px rgba(72, 89, 102, 0.1);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: border-left 0.1s ease;

  &:hover {
    border-left: 6px solid var(--primary-color);
  }
`;
