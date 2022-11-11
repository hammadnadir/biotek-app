import { Button } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";
import { SearchField } from "../../common";
import { Link } from "react-router-dom";

function VoucherData() {
  const data = [
    {
      id: 1,
      voucher_id: "LFE-892",
      date: "5/11/2022",
      description: "Expense against the LFe-892 on 5/11/2022",
      expense_price: "20,0000.00",
      remarks: "5/11/2022",
      status: "Approved",
    },
    {
      id: 2,
      voucher_id: "LFE-892",
      date: "5/11/2022",
      description: "Expense against the LFe-892 on 5/11/2022",
      expense_price: "20,0000.00",
      remarks: "5/11/2022",
      status: "Approved",
    },
    {
      id: 3,
      voucher_id: "LFE-892",
      date: "5/11/2022",
      description: "Expense against the LFe-892 on 5/11/2022",
      expense_price: "20,0000.00",
      remarks: "5/11/2022",
      status: "Approved",
    },
    {
      id: 4,
      voucher_id: "LFE-892",
      date: "5/11/2022",
      description: "Expense against the LFe-892 on 5/11/2022",
      expense_price: "20,0000.00",
      remarks: "5/11/2022",
      status: "Approved",
    },
  ];
  return (
    <div className="main_voucher_page">
      <Container>
        <div className="voucher_data">
          <div className="voucher_btns">
              <Button>
              <Link to="/expense">
                <i className="bi bi-plus" />
                Company Exp
                </Link>
              </Button>
            <Button>
              <i className="bi bi-plus" />
              Factory Exp
            </Button>
          </div>
          <div className="search_header">
            <SearchField
              type="input"
              placeholder="Search....."
              icon="bi bi-search"
            />
          </div>
          {data.map((item, index) => {
            return (
              <div className="main_vouchers" key={index}>
                <div className="inner_main_data">
                  <p>
                    Voucher ID # <span>LFE-892{item.voucher_id}</span>
                  </p>
                  <p>
                    Date: <span>5/11/2022{item.date}</span>
                  </p>
                </div>
                <div className="bottom-data">
                  <div className="sub_menues">
                    <h3>Descritpion : </h3>
                    <p> {item.description}</p>
                  </div>
                  <div className="sub_menues">
                    <h3>Total Expense : </h3>
                    <p> Rs. {item.expense_price}</p>
                  </div>
                  <div className="sub_menues">
                    <h3>Remarks : </h3>
                    <p> {item.remarks}</p>
                  </div>
                  <div className="sub_menues">
                    <h3>Status : </h3>
                    <p> {item.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default VoucherData;
