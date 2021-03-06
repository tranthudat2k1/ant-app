import React from "react";
import Layout from "../components/Layout";
import { Row, Col } from "antd";
import Intro from "../components/Intro";
import Head from "next/head";

const intro = () => {
  return (
    <Layout>
      <Row justify="center">
        <Intro></Intro>
      </Row>
    </Layout>
  );
};

export default intro;
