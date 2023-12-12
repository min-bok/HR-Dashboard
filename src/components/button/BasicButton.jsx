import React from "react";
import styled from "styled-components";

export default function BasicButton({
  children,
  width,
  bgColor,
  height,
  onClick,
}) {
  return (
    <Wrap width={width} height={height} bgColor={bgColor} onClick={onClick}>
      {children}
    </Wrap>
  );
}

BasicButton.defaultProps = {
  width: 178,
  height: 41,
  bgColor: "var(--primary-color)",
  onClick: () => {},
};

const Wrap = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  font-size: 16px;
  border-radius: 10px;
  font-weight: lighter;
`;
