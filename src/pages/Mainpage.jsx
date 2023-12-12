import React from "react";
import { Header } from "../components";
import Layout from "../components/layout/Layout";
import Nav from "../components/Nav";

export default function Mainpage() {
  return (
    <Layout>
      <Header />
      <Nav />
      {/* <p>여기 메인페이지</p> */}
    </Layout>
  );
}
