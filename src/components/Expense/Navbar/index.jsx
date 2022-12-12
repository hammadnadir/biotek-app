import React from "react";
import { Container } from "react-bootstrap";
// import { Navigate, useNavigate } from "react-router-dom";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import User from "../../common/User";

function NavExpense({searchVal, setSearchVal}) {

  const [show ,setShow] = useState(false)
  // const navigate = useNavigate();

  // const handleBack = () => {
  //   navigate("/expense");
  // };
  return (
    <div className="expense-navbar">
      <Container>
        <div className="nav-data">
          <Link to="/voucher">
            <div className="back-btn">
              <i className="bi bi-arrow-left-short"></i>
            </div>
          </Link>
          <div className="main-heading">
            <h1>New Expense</h1>
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

export default NavExpense;
