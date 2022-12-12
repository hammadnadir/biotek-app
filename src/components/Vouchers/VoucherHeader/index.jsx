import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import User from "../../common/User";
import "./styles.scss";

function VoucherHeader() {

  const [show ,setShow] = useState(false)
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
          <div className="user-icon" onClick={()=>setShow(!show)}>
            <i className="bi bi-person-fill"></i>
            {show ? <User show={show} setShow={setShow}/> : ""}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default VoucherHeader;
