import { Col, Row, Typography } from "antd";
import React from "react";
import Settings from "../component/Settings";

export default function Search() {
  return (
    <>
      <Row justify="end">
        <Col>
          <Settings />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: "Caligrahhy" }}>
            찾아야한다.
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col span={12}>검색</Col>
      </Row>
    </>
  );
}
