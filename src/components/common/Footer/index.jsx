import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";

function Footer() {
  return (
    <div className="footer-page">
      <div className="footer-data">
        <Container>
          <div className="icons">
            <i className="bi bi-clipboard2"></i>
            <div className="home-icon"><i className="bi bi-house-fill"></i></div>
            <i className="bi bi-gear"></i>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
