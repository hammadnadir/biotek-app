import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.scss";

function MessageNav() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/expense");
  };

  return (
    <div className="message_nav">
      <Container>
        <div className="message_nav_data">
          <Link to="/voucher">
            <div className="back-btn">
              <i className="bi bi-arrow-left-short"></i>
            </div>
          </Link>
          <div className="main-heading">
            <h1>Notification</h1>
          </div>
          <div className="dot-icon">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="bi bi-three-dots-vertical"></i>
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
      </Container>
    </div>
  );
}

export default MessageNav;

// import React from "react";
// import { Container } from "react-bootstrap";
// import { Navigate, useNavigate } from "react-router-dom";
// import "./styles.scss";
// import { Link } from "react-router-dom";

// function NavExpense({searchVal, setSearchVal}) {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate("/expense");
//   };
//   return (
//     <div className="expense-navbar">
//       <Container>
//         <div className="nav-data">
//           <Link to="/voucher">
//             <div className="back-btn">
//               <i className="bi bi-arrow-left-short"></i>
//             </div>
//           </Link>
//           <div className="main-heading">
//             <h1>New Expense</h1>
//           </div>
//           <div className="user-icon">
//             <i className="bi bi-person-fill"></i>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default NavExpense;
