import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMe from "../components/Aboutme";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import "../style/HomePageStyle.css";

export default function HomePage() {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        alignItems: "center",
        //minHeight: "80vh",
        //textAlign: "center",
        padding: "5px",
        boxSizing: "border-box"
      }}
    >
      <Row style={{ width: "100%", maxWidth: "1200px" }}>
        <Col 
          style={{
            display: "flex",
            flexDirection: "column",
            //alignItems: "center",
            gap: "0px" // can adjust this to change spacing for vertical elements
          }}
        >
          {/* Section 1: About me */}
          <h1 style={{ marginTop: "5rem" }}>About me</h1>
          <hr className="my-custom-hr"/>
          <div style={{ marginTop: "1rem" }}>
            <AboutMe />
          </div>

          {/* Section 2: Experiences */}
          <h1 style={{ marginTop: "150px" }}>Experiences</h1>
          <hr className="my-custom-hr"/>
          <div>
            <Experience />
          </div>
        </Col>
        <Contact />
      </Row>
    </Container>
  );
}