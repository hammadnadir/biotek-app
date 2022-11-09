import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";

function NewFooter() {
  return (
    // <div className="expense-footer">
    //   <div className="footer-data">
    //     <Container>
    //       <div className="icons">
    //         <i className="bi bi-clipboard2"></i>
    //         <div className="home-icon">
    //           <i className="bi bi-house-fill"></i>
    //         </div>
    //         <i className="bi bi-gear"></i>
    //       </div>
    //     </Container>
    //   </div>
    // </div>
  <div className="expense-footer">
    <div className="footer-data">
      <Container>
        <div className="icons">
          {/* <i className="bi bi-clipboard2"></i>
          <div className="home-icon">
            <i className="bi bi-house-fill"></i>
          </div>
          <i className="bi bi-gear"></i> */}
          <div className={`new-icons `}><i className="bi bi-house"></i></div>
          <div className={`new-icons `}><i className="bi bi-clipboard"></i></div>
          <div className={`new-icons `}><i className="bi bi-bell"></i></div>
          <div className={`new-icons `}><i className="bi bi-chat-dots"></i></div>
          <div className={`new-icons `}><i className="bi bi-gear"></i></div>
        </div>
      </Container>
    </div>
  </div>
    );
}

export default NewFooter;
