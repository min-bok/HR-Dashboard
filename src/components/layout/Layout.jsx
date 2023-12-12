import React from "react";
import styled from "styled-components";

export default function Layout({ children }) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  position: relative;
  display: flex;
  width: 1229px;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
`;
