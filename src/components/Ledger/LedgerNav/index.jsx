import React from "react";
import { Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles.scss";
import { Link } from "react-router-dom";

function LedgerNav() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/expense");
  };
  return (
    <div className="expense-navbar">
      <Container>
        <div className="nav-data">
          <Link to="/voucher">
            <div className="back-btn">
              <i className="bi bi-arrow-left-short"></i>
            </div>
          </Link>
          <div className="main-heading">
            <h1>Ledger</h1>
          </div>
          <div className="user-icon">
            <i className="bi bi-person-fill"></i>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LedgerNav;

// import React from "react";

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
