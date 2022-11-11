import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

function VoucherHeader() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="voucher-navbar">
      <Container>
        <div className="nav-data">
          <div className="back-btn" onClick={handleBack}>
            <i className="bi bi-arrow-left-short"></i>
          </div>
          <div className="main-heading">
            <h1>Voucher</h1>
          </div>
          <div className="user-icon">
            <i className="bi bi-person-fill"></i>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default VoucherHeader;
