import React, { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./styles.scss";
import { vouchers } from "../../../data";
import { Button } from "react-bootstrap";
import { v4 } from "uuid";
import { storage } from "../../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { Dropdown } from "react-bootstrap";
import ModalPage from "./Modal";
import { SearchField } from "../../common";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getExpenseRequest, setExpencesData } from "../../../redux/expense";
import { noimg } from "../../../assets";
import EditModal from "./EditModal";
import ViewModal from "./ViewModal";
import { editExpenseRequest } from "../../../redux/expense";
import { deleteExpenseRequest } from "../../../redux/expense";
import { history } from "../../../redux/history";
import { useLocation } from "react-router-dom";

function ListData({ searchVal, setSearchVal, handleSearchVal }) {
  const [vouchersData, setVouchersData] = useState([]);
  const [inputData, setInputData] = useState({});
  const [imagesupload, setImagesupload] = useState([]);
  const [itemData, setItemData] = useState({});
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [viewModal, setShowViewModal] = useState(false);
  const [itemId, setItemId] = useState(0);
  const [showMain, setShowMain] = useState(false);

  const reference = useRef();
  const navigate = useLocation();
  const dispatch = useDispatch();
  const imageListRef = ref(storage, "images/");
  const { expense } = useSelector((state) => state.expense);
  const { editVoucher } = useSelector((state) => state.voucher);
  const { setExpense } = useSelector((state) => state.expense);

  console.log(editVoucher);
  console.log(navigate.pathname)
  useEffect(() => {
    setVouchersData(vouchers);
  }, []);

  useEffect(() => {
    if (setExpense){
      dispatch(setExpencesData(true));
    }
    return () => {
      dispatch(setExpencesData(false));
    };
  }, [navigate.pathname]);

  useEffect(()=>{
    console.log("ABCD",setExpense)
  },[setExpense])

  const monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const month = monthsName[date.getMonth()];
  const year = date.getFullYear();

  const handleShowModal = (item) => {
    setShowEditModal(false);
    setShowViewModal(false);
    setShowModal(true);
    setItemData(item);
    setItemId(item.id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowEditModal = (item) => {
    setShowEditModal(true);
    setShowViewModal(false);
    setShowModal(false);
    setItemData(item);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  const ExpenseEdit = () => {};

  const handleShowViewModal = (item) => {
    setShowEditModal(false);
    setShowViewModal(true);
    setShowModal(false);
    setItemData(item);
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
  };
  const ExpenseView = (item) => {};

  const handleExpenseDelete = (item) => {
    vouchersData.map((data) => {
      return item.id === data.id;
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImagesupload((prev) => [...prev, url]);
        });
      });
    });
    console.log(imagesupload);
  }, []);

  //   const handleUpload = (e) => {
  // reference.current.click();
  // if (imagesupload) {
  // alert("hi")
  //   };

  const handleUpload = (e) => {
    let data = [];
    for (let i = 0; i < e.target.files.length; i++) {
      data.push(e.target.files[i]);
      const imageRef = ref(
        storage,
        `images/${month}_${year}/${data[i].name + v4()}`
      );
      uploadBytes(imageRef, data[i]);
    }
    // setImagesupload([...imagesupload, ...data]);
    //   .then((snapshot) => {
    //    getDownloadURL(snapshot.ref).then((url) => {
    //   setImagesList([...imagesList, url]);
    // });
    //   });
    // }
  };

  const list = [
    { name: "View", icon: "bi bi-eye-fill" },
    { name: "Edit", icon: "bi bi-pencil-square" },
    { name: "Delete", icon: "bi bi-trash-fill" },
  ];

  const handleShow = (item) => {
    vouchers.map((data) => {
      return item.id === data.id && setShow(!show);
    });
  };

  useEffect(() => {
    console.log(imagesupload);
  }, [imagesupload]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const sum =
    expense?.data?.balance - expense?.data?.in[0]?.total_in ||
    expense?.data?.balance;

  return (
    <div className="list-data">
      <div className="top-data">
        <Container>
          <div className="main-data-lists">
            <div className="hand-cash">
              <h3>Remaining Cash in Hand</h3>
            </div>
            <div className="prices">
              <div>
                <div className="total-amount">
                  <h2>Rs. {expense?.data?.balance}</h2>
                </div>
                <h4>Today Total Expanses</h4>
                <div className="end-price">
                  <h3>Rs. {sum}</h3>
                </div>
              </div>
              <Link to="/new-expense">
                <div className="new-icon">
                  <i className="bi bi-plus"></i>
                </div>
              </Link>
            </div>
            {/* <div className="two-btns">
              <div
                className={`expenses ${showData ? "selected" : ""}`}
                onClick={() => setShowData(true)}
              >
                <h2>Expense</h2>
              </div>
              <div
                className={`expenses ${showData ? "" : "selected"}`}
                onClick={() => setShowData(false)}
              >
                <h2>New Expense</h2>
              </div>
            </div> */}
            <SearchField
              icon="bi bi-search"
              placeholder="Company, Report, Labels etc...."
              onChange={handleSearchVal}
            />
          </div>
        </Container>
      </div>
      <div className="section2">
        <Container>
          <div className="section2-data">
            <h2>Expenses Info.</h2>
            {setExpense
              ? editVoucher &&
                editVoucher.daywise
                  ?.filter((data) => data.lfe_narration.includes(searchVal))
                  .map((item, index) => {
                    return (
                      <div className="voucher-lists" key={index}>
                        <ModalPage
                          setShowModal={setShowModal}
                          handleShowModal={handleShowModal}
                          showModal={showModal}
                          handleCloseModal={handleCloseModal}
                          ExpenseDelete={() => handleExpenseDelete(item)}
                          id={itemId}
                        />
                        <EditModal
                          setShowEditModal={setShowEditModal}
                          handleShowEditModal={handleShowEditModal}
                          showEditModal={showEditModal}
                          handleCloseEditModal={handleCloseEditModal}
                          ExpenseEdit={() => ExpenseEdit(item)}
                          data={itemData}
                          id={itemId}
                        />
                        <ViewModal
                          setShowViewModal={setShowViewModal}
                          handleShowViewModal={handleShowViewModal}
                          viewModal={viewModal}
                          handleCloseViewModal={handleCloseViewModal}
                          ExpenseView={() => ExpenseView(item)}
                          setShowEditModal={setShowEditModal}
                          data={itemData}
                        />
                        <div className="dot-icon">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              <i className="bi bi-three-dots"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => handleShowViewModal(item)}
                              >
                                <i className="bi bi-eye-fill" />
                                <p>View</p>
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleShowEditModal(item)}
                              >
                                <i className="bi bi-pencil-square" />
                                <p>Edit</p>
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleShowModal(item)}
                              >
                                <i className="bi bi-trash-fill" />
                                <p>Delete</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="list-img">
                          {item.image[0] === "no_image.jpg" ? (
                            <img src={noimg} alt="book-img" />
                          ) : (
                            <img src={item.image[0]} alt="book-img" />
                          )}
                        </div>
                        <div
                          className="voucher-data"
                          onClick={() => handleShowViewModal(item)}
                        >
                          <div className="voucher-no">
                            <div className="menus">
                              Voucher #{" "}
                              <span>&nbsp;{item.liberty_factory_exp_id}</span>
                            </div>
                            <div className="menus">
                              Account #{" "}
                              <span>
                                {" "}
                                &nbsp;{item.expense_head?.account_no}
                              </span>
                            </div>
                          </div>
                          <div className="menus">
                            Expense Head:{" "}
                            <span>&nbsp;{item.lf_expense_name}</span>
                          </div>
                          <div className="menus">
                            Narrations:
                            <span>&nbsp;{item.lfe_narration}</span>
                          </div>
                          <div className="menus">
                            Amount:
                            <span>&nbsp;{item.lfe_amount}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
              : expense &&
                expense?.data?.lfe_daywise
                  ?.filter((data) => data.lfe_narration.includes(searchVal))
                  .map((item, index) => {
                    return (
                      <div className="voucher-lists" key={index}>
                        <ModalPage
                          setShowModal={setShowModal}
                          handleShowModal={handleShowModal}
                          showModal={showModal}
                          handleCloseModal={handleCloseModal}
                          ExpenseDelete={() => handleExpenseDelete(item)}
                          id={itemId}
                        />
                        <EditModal
                          setShowEditModal={setShowEditModal}
                          handleShowEditModal={handleShowEditModal}
                          showEditModal={showEditModal}
                          handleCloseEditModal={handleCloseEditModal}
                          ExpenseEdit={() => ExpenseEdit(item)}
                          data={itemData}
                          id={itemId}
                        />
                        <ViewModal
                          setShowViewModal={setShowViewModal}
                          handleShowViewModal={handleShowViewModal}
                          viewModal={viewModal}
                          handleCloseViewModal={handleCloseViewModal}
                          ExpenseView={() => ExpenseView(item)}
                          setShowEditModal={setShowEditModal}
                          data={itemData}
                        />
                        <div className="dot-icon">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              <i className="bi bi-three-dots"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => handleShowViewModal(item)}
                              >
                                <i className="bi bi-eye-fill" />
                                <p>View</p>
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleShowEditModal(item)}
                              >
                                <i className="bi bi-pencil-square" />
                                <p>Edit</p>
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleShowModal(item)}
                              >
                                <i className="bi bi-trash-fill" />
                                <p>Delete</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="list-img">
                          {item.image[0] === "no_image.jpg" ? (
                            <img src={noimg} alt="book-img" />
                          ) : (
                            <img src={item.image[0]} alt="book-img" />
                          )}
                        </div>
                        <div
                          className="voucher-data"
                          onClick={() => handleShowViewModal(item)}
                        >
                          <div className="voucher-no">
                            <div className="menus">
                              Voucher #{" "}
                              <span>&nbsp;{item.liberty_factory_exp_id}</span>
                            </div>
                            <div className="menus">
                              Account #{" "}
                              <span>
                                {" "}
                                &nbsp;{item.expense_head?.account_no}
                              </span>
                            </div>
                          </div>
                          <div className="menus">
                            Expense Head:{" "}
                            <span>&nbsp;{item.lf_expense_name}</span>
                          </div>
                          <div className="menus">
                            Narrations:
                            <span>&nbsp;{item.lfe_narration}</span>
                          </div>
                          <div className="menus">
                            Amount:
                            <span>&nbsp;{item.lfe_amount}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
          </div>
        </Container>
      </div>

      {/* {!showData && (
        <div className="new-section">
          <Container>
            <Form className="new-section-data" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Expense Voucher # "
                name="voucher-no"
              />
              <input
                type="file"
                multiple
                style={{ display: "none" }}
                ref={reference}
                onChange={handleUpload}
                name="images"
              />
              <div className="select-fields-data">
                <select name="date">
                  <option>Date</option>
                  <option>aa</option>
                  <option>aa</option>
                  <option>aa</option>
                </select>
                <input
                  type="text"
                  name="expense-account "
                  placeholder="Expense Account"
                />
              </div>
              <div className="new-fields-data">
                <select name="expense-head">
                  <option>Select One</option>
                  <option>aa</option>
                  <option>aa</option>
                  <option>aa</option>
                </select>
              </div>
              <div className="input-data">
                <input type="text" placeholder="Narrations:" />
              </div>
              <div className="input-data">
                <input type="text" placeholder="Add Amount:" />
              </div>
              <div className="end-data">
                <Button onClick={() => reference.current.click()}>
                  <i className="bi bi-upload"></i>&nbsp;&nbsp;Upload Image
                </Button>
                <div className="btn_status" type="submit">
                  <i className="bi bi-check2"></i>
                </div>
                <div className="btn_cross">
                  <i className="bi bi-plus"></i>
                </div>
              </div>
            </Form>
          </Container>
        </div>
      )} */}
    </div>
  );
}

export default ListData;
