import React from "react";
import styled from "styled-components";
import { SVGLogo, SVGAlertIcon } from "../svg";
import { CircleButton, ToggleBtn } from "./button";
import Profile from "./Header/Profile";

export default function Header() {
  return (
    <Wrap>
      <SVGLogo />
      <div className="side">
        <SearchForm>
          <input
            className="searchInput"
            type="text"
            placeholder="Quick Search..."
          />
        </SearchForm>
        <ToggleBtn />
        <CircleButton color={"#CFD7FD"} icon={SVGAlertIcon} />
        <Profile />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 83px;
  border-radius: 15px;
  box-shadow: 0px 8px 28px 0px rgba(72, 89, 102, 0.1);
  background-color: white;
  padding: 0 30px;

  div.side {
    display: flex;
    gap: 20px;
  }
`;

const SearchForm = styled.form`
  input.searchInput {
    width: 287px;
    height: 36px;
    background-color: var(--gray-lv1-color);
    border: none;
  }
`;
