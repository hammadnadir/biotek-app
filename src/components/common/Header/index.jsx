import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { logo } from "../../../assets";
import SearchField from "../SearchField";
import "./styles.scss";

function Header() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="main-data">
      <Container>
        <div className="inner-data">
          <div className="logo-img">
            <img src={logo} alt="logo-img" />
          </div>
          <div className="main-icons">
            <div className="icons">
              <i className="bi bi-bell-fill"></i>
            </div>
            <div className="icons">
              <i className="bi bi-chat-dots-fill"></i>
            </div>
            <div className="icons">
              <i className="bi bi-person-fill"></i>
            </div>
          </div>
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
      </Container>
    </div>
  );
}

export default Header;
