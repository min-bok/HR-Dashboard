import React from "react";
import styled from "styled-components";

export default function Layout({ children }) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  position: relative;
  display: flex;
  width: 1229px;
  height: auto;
  flex-direction: column;
  align-items: flex-end;
  margin: 60px auto;
`;
