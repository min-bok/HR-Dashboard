import React from "react";
import styled from "styled-components";

export default function CircleButton({
  size = "33px",
  color = "red",
  icon: Icon,
}) {
  return (
    <Wrap size={size} color={color}>
      {Icon && <Icon />}
    </Wrap>
  );
}

const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ color }) => color};
  border-radius: 100%;
`;
