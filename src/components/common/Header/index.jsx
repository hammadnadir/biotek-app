import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { logo } from "../../../assets";
import { getCurrentUser } from "../../../utils";
import SearchField from "../SearchField";
import User from "../User";
import "./styles.scss";

function Header({ val ,setVal }) {
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const user = getCurrentUser();
  // console.log(user.data.session_id.session_id);

  return (
    <div className="main-data">
      <Container>
        <div className="inner-data">
          <div className="top_field">
            <div className="icons" onClick={()=>setShow(!show)}>
              <i className="bi bi-person-fill"></i>
            </div>
            {show && <User show={show} setShow={setShow}/>}
            <img src={logo} alt="logo-img" />
          </div>
          <div className="search-header">
            <SearchField
              type="input"
              name="input"
              placeholder="Search....."
              icon="bi bi-search"
              value={val || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
