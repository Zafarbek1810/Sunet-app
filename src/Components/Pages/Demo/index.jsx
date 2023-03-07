import { Anchor, Col, Row } from "antd";
import React, { useState } from "react";
import Container from "../../Common/Container";
import Header from "../Header";
import Footer from "../Footer";
import { DemoWrapper } from "./Demo.stye";
import Step1 from "./step1";
import Step2 from "./step2";
import { useRouter } from "next/router";

const Demo = () => {
  const [activePage, setActivePage] = useState(1);
  const router = useRouter();

  let Component = null;
  switch (activePage) {
    case 1: {
      Component = <Step1 />;
      break;
    }
    case 2: {
      Component = <Step2 />;
      break;
    }
  }

  const tabMassiv = [
    {
      title: "Step1",
      id: 1,
    },
    {
      title: "Step2",
      id: 2,
    },
    {
      title: "Step3",
      id: 3,
    },
    {
      title: "Step4",
      id: 4,
    },
    {
      title: "Step5",
      id: 5,
    },
    {
      title: "Step6",
      id: 6,
    },
    {
      title: "Step7",
      id: 7,
    },
    {
      title: "Step8",
      id: 8,
    },
  ];

  return (
    <>
      <Header />
      <DemoWrapper>
            <div className="wrap">
            <Row >
            <Col span={8}>
              <Anchor
              className="anch"
                items={[
                  {
                    key: "part-1",
                    href: "#part-1",
                    title: "Part 1",
                  },
                  {
                    key: "part-2",
                    href: "#part-2",
                    title: "Part 2",
                  },
                  {
                    key: "part-3",
                    href: "#part-3",
                    title: "Part 3",
                  },
                ]}
              />
            </Col>
            <Col span={16}>
              <div
                id="part-1"
                style={{
                  height: "50vh",
                  background: "rgb(243, 35, 35)",
                }}
                >
                  <Step1/>
                  </div>
              <div
                id="part-2"
                style={{
                  height: "50vh",
                  background: "rgb(23, 233, 23)",
                }}
                >
                <Step2/>
                </div>
              <div
                id="part-3"
                style={{
                  height: "50vh",
                  background: "rgb(0,0,255)",
                }}
                >
                <Step1/>
                </div>
            </Col>
          </Row>
            </div>
          

        {/* <Container>
          <div className="wrap">
          <div className="tabs">
            {tabMassiv.map((item, index) => {
              return (
                <button
                  onClick={() => setActivePage(item.id)}
                  key={index}
                  className={`tab-item ${
                    activePage === item.id ? "active" : ""
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        <div className="component">{Component}</div>
          </div>
        </Container> */}
      </DemoWrapper>
      <Footer />
    </>
  );
};

export default Demo;
