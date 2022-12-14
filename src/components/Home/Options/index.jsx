import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";
import { cards } from "../../../data";
import { expenseImg, document } from "../../../assets";
import { Link } from "react-router-dom";

function Options({ val }) {
  return (
    <div className="options-page">
      <Container>
        <div className="scroll_data">
          <div className="options-data">
            <div className="main-inner-data">
              <Link to="/voucher">
                <div className="cards">
                  <img src={expenseImg} alt="expenseImg" />
                </div>
              </Link>
              <p>Expense</p>
            </div>
            {cards
              .filter((data) => data.text.includes(val))
              .map((item, index) => {
                return (
                  <div className="main-inner-data" key={index}>
                    <Link to="/">
                      <div className="cards">
                        <img src={item.img} alt="logo" />
                      </div>
                    </Link>
                    <p>{item.text}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="recent-data">
          <h1>Recent Links</h1>
          <div className="options_new">
            <div className="main-inner">
              <Link to="/voucher">
                <div className="cards">
                  <img src={document} alt="logo" />
                </div>
              </Link>
              <p>Dashboard</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Options;
