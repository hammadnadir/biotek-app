import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation , NavLink } from "react-router-dom";
import "./styles.scss";

function Footer() {

  const location = useLocation()
  // console.log(location.pathname)

  return (
  <div className="main-footer">
    <div className="footer-data">
      <Container>
        <div className="icons">
          <div className={`new-icons `}><NavLink to="/" className={({isActive}) => (isActive ? "active" : 'none')}><i className="bi bi-house"></i></NavLink></div>
          <div className={`new-icons `}><NavLink to="/expense" className={({isActive}) => (isActive ? "active" : 'none')}><i className="bi bi-clipboard"></i></NavLink></div>
          <div className={`new-icons `}><NavLink to="/a" className={({isActive}) => (isActive ? "active" : 'none')}><i className="bi bi-bell"></i></NavLink></div>
          <div className={`new-icons `}><NavLink to="/b" className={({isActive}) => (isActive ? "active" : 'none')}><i className="bi bi-chat-dots"></i></NavLink></div>
          <div className={`new-icons `}><NavLink to="/c" className={({isActive}) => (isActive ? "active" : 'none')}><i className="bi bi-gear"></i></NavLink></div>
        </div>
      </Container>
    </div>
  </div>
    );
}

export default Footer;
