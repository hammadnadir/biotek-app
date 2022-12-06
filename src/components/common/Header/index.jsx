import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { logo } from "../../../assets";
import { getCurrentUser } from "../../../utils";
import SearchField from "../SearchField";
import "./styles.scss";

function Header() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const user = getCurrentUser();
  console.log(user.data.session_id.session_id);

  return (
    <div className="main-data">
      <Container>
        <div className="inner-data">
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

export default Header;
