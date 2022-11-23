import { Button, Dropdown } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";
import { SearchField } from "../../common";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVoucherRequest } from "../../../redux/voucher";
import { getExpenseRequest } from "../../../redux/expense";
import axios from "axios";

function VoucherData() {
  const dispatch = useDispatch();
  const { voucher } = useSelector((state) => state.voucher);

  useEffect(() => {
    // dispatch(getVoucherRequest());
    // axios
    //   .get("http://192.168.10.189:8000/api/expense")
    //   .then(function (response) {
    //     console.log(response);
    //   });
    // console.log("Hi");
  }, []);
  console.log(voucher);

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
          {voucher &&
            voucher.data &&
            voucher?.data?.lfes?.map((item, index) => {
              return (
                <div className="main_vouchers" key={index}>
                  <div
                    className="dot-icon"
                    // onClick={() => handleShow(item)}
                  >
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i className="bi bi-three-dots new_icon"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {/* {list.map((data, index) => { */}
                        {/* return ( */}
                        {/* <div className="opened-cruds" key={index}>
                              <i className={data.icon} />
                               <p>{data.name}</p>
                            </div> */}
                        <Dropdown.Item>
                          <i className="bi bi-eye-fill" />
                          <Link to="/expense"><p>View</p></Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="bi bi-pencil-square" />
                          <p>Edit</p>
                        </Dropdown.Item>
                        <Dropdown.Item
                        // onClick={handleShowModal}
                        >
                          <i className="bi bi-trash-fill" />
                          <p>Delete</p>
                        </Dropdown.Item>
                        {/* <ModalPage
                              setShowModal={setShowModal}
                              handleShowModal={handleShowModal}
                              showModal={showModal}
                              handleCloseModal={handleCloseModal}
                              ExpenseDelete={() => handleExpenseDelete(item)}
                            /> */}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="inner_main_data">
                    <p>
                      Voucher ID # <span> &nbsp;LFP-{item.id}</span>
                    </p>
                    <p>
                      Date: <span>{item.created_at}</span>
                    </p>
                  </div>
                  <div className="bottom-data">
                    <div className="sub_menues">
                      <h3>Descritpion : </h3>
                      <p> &nbsp;{item.remarks}</p>
                    </div>
                    <div className="sub_menues">
                      <h3>Total Expense : </h3>
                      <p> &nbsp;Rs. {item.expence}</p>
                    </div>
                    <div className="sub_menues">
                      <h3>Remarks : </h3>
                      <p> &nbsp;{item.remarks}</p>
                    </div>
                    <div className="sub_menues">
                      <h3>Status : </h3>&nbsp;
                      {item.status === 2 && (
                        <p className="approved">Approved</p>
                      )}
                      {item.status === 3 && (
                        <p className="recheck">Recheck Required</p>
                      )}
                      {item.status === 4 && (
                        <p className="pending">Pending for CEO Approval</p>
                      )}
                      {item.status === 5 && (
                        <p className="disagree">Disagree by CEO</p>
                      )}
                      {item.status !== 2 &&
                        item.status !== 3 &&
                        item.status !== 4 &&
                        item.status !== 5 && (
                          <p className="all_rounder">Approvel pending</p>
                        )}
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
