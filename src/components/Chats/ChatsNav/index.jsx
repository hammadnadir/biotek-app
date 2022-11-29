import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import "./styles.scss";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { backarrow, message, search, vdots } from "../../../assets";

function ChatsNav() {
  // const navigate = useNavigate();

  // const handleBack = () => {
  //   navigate("/expense");
  // };

  return (
    <div className="chats_nav">
      <Container>
        <div className="chats_nav_data">
          <Link to="/voucher">
            <div className="back-btn">
              <img src={backarrow} alt="backarrow" />
            </div>
          </Link>
          <div className="main-heading">
            <h1>Chats</h1>
          </div>
          <div className="chats_icons">
            <div className="user-icon">
              <img src={search} alt="search_icon" />
            </div>
            <div className="user-icon">
              <img src={message} alt="message_icon" />
            </div>
            <div className="dot-icon user-icon">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img src={vdots} alt="dots" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <i className="bi bi-eye-fill" />
                    <Link to="/expense">
                      <p>View</p>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <i className="bi bi-pencil-square" />
                    <p>Edit</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ChatsNav;
