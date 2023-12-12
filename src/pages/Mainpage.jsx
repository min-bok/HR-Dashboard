import React from "react";
import { Header } from "../components";
import Layout from "../components/layout/Layout";
import Nav from "../components/Nav";
import { Dashboard } from "../components/admin";

export default function Mainpage() {
  return (
    <Layout>
      <Header />
      <Nav />
      <Dashboard />
    </Layout>
  );
}
