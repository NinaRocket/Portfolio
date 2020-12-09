import React from "react";
import "./about.css";
//import styled from "styled-components";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Bio from "../images/NRocketPic.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 15 }}>
        <Row>
          <Col xs={5}>
            <h1>About Me</h1>
          </Col>
        </Row>
        <div className="border-top my-3 py-3"></div>
        <Row>
          <Col xs={3}>
            <img
              className="img"
              src={Bio}
              alt="Nina, a late 30's woman is smiling"
            />
          </Col>
          <Col xs={9}>
            <h3>Welcome to my page!</h3>
            <p className="card-text" style={{ fontSize: 18 }}>
              {" "}
              My name is Nina Rocket and I am a full time working Mom to 6
              unique individual humans. I have a Bachelors degree in Psychology
              with a Minor in Sociocultural Anthropology. I am a web developer,
              new to the field after completing a full stack web development
              bootcamp with the University of Arizona in partnership with
              Triology Education. This page will be updated in the future...
              maybe...
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="links" size="md-12">
            <p>
              <h3>Professional Links:</h3>
              <a className="link" href="https://github.com/NinaRocket">
                Nina's GitHub
              </a>
              <br />
              <a
                className="link"
                href="https://www.linkedin.com/in/ninarocket/"
              >
                Nina's LinkedIn
              </a>
              <br />

              <h3>Extracurricular Activities:</h3>
              {/* <a className="link" href="https://medium.com/@enRocket">
                Nina's Blog
              </a> */}

              <a
                className="link"
                href="https://www.visualizingimmigrantphoenix.com/individual-projects/nina-rocket/"
              >
                2018 Visualizing Immigrant Phoenix Project
              </a>
              <br />
              <a className="link" href="https://karachi2018.jimdofree.com/">
                2018 Karachi, Pakistan: Walking Between Slums and Skyscrapers of
                Neoliberal Urbanism
              </a>
              <br />
              <sub>
                Karachi website is built with jimdo. I plan to redesign in the
                future.
              </sub>
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
