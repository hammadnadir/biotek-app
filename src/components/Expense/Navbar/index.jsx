import React from "react";
import { Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles.scss";

function NavExpense() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="expense-navbar">
      <Container>
        <div className="nav-data">
          <div className="back-btn" onClick={handleBack}>
            <i className="bi bi-arrow-left-short"></i>
          </div>
          <div className="main-heading">
            <h1>Expense</h1>
          </div>
          <div className="user-icon">
            <i className="bi bi-person-fill"></i>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavExpense;
