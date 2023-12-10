import React from "react";
import styled from "styled-components";

export default function ToggleButton() {
  return (
    <Wrap>
      {/* checked=true이면 다크모드 */}
      <input type="checkbox" id="toggleBtn" hidden />
      <label htmlFor="toggleBtn">
        <span className="switch" />
      </label>
    </Wrap>
  );
}

const Wrap = styled.div`
  input:checked + label span {
    transform: translateX(100%);
  }

  label {
    position: relative;
    display: block;
    width: 56px;
    height: 32px;
    border-radius: 32px;
    background-color: var(--primary-color);
    padding: 5px;
    cursor: pointer;

    span {
      position: absolute;
      display: block;
      width: 22px;
      height: 22px;
      background-color: var(--background-color);
      border-radius: 50%;
      transform: translateX(0%);
      transition: all 0.2s ease-in;
    }
  }
`;
