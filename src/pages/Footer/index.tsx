import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Median from "../../assets/median.svg";
import Twitter from "../../assets/twitter.svg";
import Telegram from "../../assets/telegram.svg";
import Instagram from "../../assets/instagram.svg";
import "./index.scss";

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col xs={4} className="footer-links">
          <p className="Footer-nav-auto">Docs</p>
          <p className="Footer-nav-auto">Contact Us</p>
        </Col>

        <Col xs={8} className="footer-social-media">
          <img alt="Logo" src={Median} className="footer-logo" />
          <img alt="Logo" src={Twitter} className="footer-logo" />
          <img alt="Logo" src={Instagram} className="footer-logo" />
          <img alt="Logo" src={Telegram} className="footer-logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
