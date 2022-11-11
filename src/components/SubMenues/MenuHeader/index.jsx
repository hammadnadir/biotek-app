import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { logo } from "../../../assets";
import { SearchField } from "../../common";
import "./styles.scss";

function MenuHeader() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="menu-header">
      <Container>
        <div className="menu-data">
          <div className="top_field">
            <div className="icons">
              <i className="bi bi-person-fill"></i>
            </div>
            <img src={logo} alt="logo-img" />
          </div>
          <div className="search-header">
            <SearchField
              type="input"
              name="input"
              placeholder="Search....."
              icon="bi bi-search"
              value={input || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MenuHeader;
