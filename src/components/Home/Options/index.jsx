import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";
import { cards, cardsNew } from "../../../data";
import { aaa } from "../../../assets";

function Options() {
  return (
    <div className="options-page">
      <Container>
        <div className="options-data">
          {cards.map((item, index) => {
            return (
              <div className="main-inner-data" key={index}>
                <div className="cards"><img src={aaa} alt="logo"/></div>
                <p>data</p>
              </div>
            );
          })}
        </div>
        <div className="recent-data">
          <h1>Recent Links</h1>
          <div className="options-new-data">
            {cardsNew.map((item, index) => {
              return (
                <div className="main-inner-data" key={index}>
                  <div className="cards"><img src={aaa} alt="logo"/></div>
                  <p>data</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Options;
