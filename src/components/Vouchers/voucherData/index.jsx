import { Button, Dropdown } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";
import { SearchField } from "../../common";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVoucherEditRequest,
  getVoucherViewRequest,
} from "../../../redux/voucher";
import { useState } from "react";


function VoucherData() {

  const [inputData ,setInputData] = useState("");
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const { voucher } = useSelector((state) => state.voucher);

  const handleEditVoucher = (item) => {
    dispatch(getVoucherEditRequest(item.id));
  };

  const handleViewVoucher = (item) => {
    dispatch(getVoucherViewRequest(item.id));
  };

  const handleChange = (value) => {
    setInputData(value)
    filterData(value)
  };
  useEffect(()=>{
    setData(voucher?.data?.lfes)
   console.log("Here",voucher?.data?.lfes)
  },[voucher?.data?.lfes])

  const excludeColumns = ["supplyrecheckremarks"];

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(voucher?.data?.lfes);
    else {
      const filteredData = voucher?.data?.lfes?.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key]?.toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

  return (
    <div className="main_voucher_page">
      <Container>
        <div className="voucher_data">
          <div
            className="voucher_btns"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button>
              <Link to="/expense">
                <i className="bi bi-plus" />
                Company Exp
              </Link>
            </Button>
            {/* <Button>
              <i className="bi bi-plus" />
              Factory Exp
            </Button> */}
          </div>
          <div className="search_header">
            <SearchField
              type="input"
              placeholder="Search....."
              icon="bi bi-search"
              name="search_data"
              onChange={(e)=>handleChange(e.target.value)}
              value={inputData}
            />
          </div>
          {/* {voucher && */}
            {/* voucher.data && */}
            {/* voucher?.data?.lfes?.map((item, index) => { */}
            { data &&
              data.map((item, index) => {
              return (
                <div className="main_vouchers" key={index}>
                  <div className="dot-icon">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i className="bi bi-three-dots new_icon"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleViewVoucher(item)}>
                          <i className="bi bi-eye-fill" />
                          <p>View</p>
                        </Dropdown.Item>
                        {item.status !== "2" && <Dropdown.Item onClick={() => handleEditVoucher(item)}>
                          <i className="bi bi-pencil-square" />
                          <p>Edit</p>
                        </Dropdown.Item>}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div
                    className="inner_main_data"
                    // onClick={() => handleViewVoucher(item)}
                  >
                    <p>
                      Voucher ID # <span> &nbsp;LFP-{item.id}</span>
                    </p>
                    <p>
                      Date: <span>{item.created_at}</span>
                    </p>
                  </div>
                  <div
                    className="bottom-data"
                  >
                    <div onClick={() => handleViewVoucher(item)} style={{width: "fit-content"}}>
                      <div className="sub_menues">
                        <h3>Descritpion : </h3>
                        <p> &nbsp;{item.remarks}</p>
                      </div>
                      <div className="sub_menues">
                        <h3>Total Expense : </h3>
                        <p> &nbsp;Rs. {JSON.parse(item.expence).toLocaleString('en-US')}</p>
                      </div>
                      <div className="sub_menues">
                        <h3>Remarks : </h3>
                        <p> &nbsp;{item.remarks}</p>
                      </div>
                      <div className="sub_menues">
                        <h3>Status : </h3>&nbsp;
                        {item.status === "2" && (
                          <p className="approved">Approved</p>
                        )}
                        {item.status === "3" && (
                          <p className="recheck">Recheck Required</p>
                        )}
                        {item.status === "4" && (
                          <p className="pending">Pending for CEO Approval</p>
                        )}
                        {item.status === "5" && (
                          <p className="disagree">Disagree by CEO</p>
                        )}
                        {item.status !== "2" &&
                          item.status !== "3" &&
                          item.status !== "4" &&
                          item.status !== "5" && (
                            <p className="all_rounder">Approvel pending</p>
                          )}
                      </div>
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
