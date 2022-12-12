import React, { useEffect, useState, useCallback } from "react";
import { Button, Container } from "react-bootstrap";
import "./styles.scss";
import { vouchers } from "../../../data";
// import { v4 } from "uuid";
import { storage } from "../../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Dropdown } from "react-bootstrap";
import ModalPage from "./Modal";
import { SearchField } from "../../common";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageViewer from "react-simple-image-viewer";
import { setExpencesData } from "../../../redux/expense";
import { noimg } from "../../../assets";
import EditModal from "./EditModal";
import ViewModal from "./ViewModal";
// import { editExpenseRequest } from "../../../redux/expense";
// import { deleteExpenseRequest } from "../../../redux/expense";
// import { history } from "../../../redux/history";
import { useLocation } from "react-router-dom";
import CloseModal from "./CloseModal";
import { setViewData } from "../../../redux/expense";

function ListData({ searchVal, handleSearchVal }) {
  const [vouchersData, setVouchersData] = useState([]);
  // const [inputData, setInputData] = useState({});
  const [imagesupload, setImagesupload] = useState([]);
  const [itemData, setItemData] = useState({});
  const [fullImage, setFullImage] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [viewModal, setShowViewModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [itemId, setItemId] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index, item) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    console.log("ooooooo", item.image);
    setFullImage(item.image);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  // const [showMain, setShowMain] = useState(false);

  // const reference = useRef();
  const navigate = useLocation();
  const dispatch = useDispatch();
  const imageListRef = ref(storage, "images/");
  const { expense } = useSelector((state) => state.expense);
  const { viewVoucher, editVoucher } = useSelector((state) => state.voucher);
  const { viewExpense, setExpense } = useSelector((state) => state.expense);

  useEffect(() => {
    setVouchersData(vouchers);
    // eslint-disable-next-line
  }, []);
  console.log("sdss", viewExpense, viewVoucher);
  // console.log(JSON.parse(viewVoucher?.lfes?.lfdaywise[0]?.image));
  // console.log(editVoucher.daywise[0].image);
  // console.log(JSON.parse(viewVoucher?.lfes?.lfdaywise[0]?.image.split(".")))

  // const excludeColumns = [];

  // const filterData = (value) => {
  //   const lowercasedValue = value.toLowerCase().trim();
  //   if (lowercasedValue === "") setData(voucher?.data?.lfes);
  //   else {
  //     const filteredData = voucher?.data?.lfes?.filter(item => {
  //       return Object.keys(item).some(key =>
  //         excludeColumns.includes(key) ? false : item[key]?.toString().toLowerCase().includes(lowercasedValue)
  //       );
  //     });
  //     setData(filteredData);
  //   }
  // }

  useEffect(() => {
    if (viewExpense) {
      dispatch(setViewData(true));
    }
    return () => {
      dispatch(setViewData(false));
    };
    // eslint-disable-next-line
  }, [navigate.pathname]);

  useEffect(() => {
    if (setExpense) {
      dispatch(setExpencesData(true));
    }
    return () => {
      dispatch(setExpencesData(false));
    };
    // eslint-disable-next-line
  }, [navigate.pathname]);

  // const monthsName = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  // const date = new Date();
  // const month = monthsName[date.getMonth()];
  // const year = date.getFullYear();

  const handleShowModal = (item) => {
    setShowEditModal(false);
    setShowViewModal(false);
    setShowModal(true);
    setItemData(item);
    setItemId(item.id);
  };
  // const handleShowCloseModal = () => {
  //   setShowEditModal(false);
  //   setShowViewModal(false);
  //   setShowModal(false);
  //   setCloseModal(true);
  // }

  const handleCCloseModal = () => {
    // setShowEditModal(false);
    // setShowViewModal(false);
    // setShowModal(true);
    // setItemData(item);
    // setItemId(item.id);
    setCloseModal(true);
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
    // eslint-disable-next-line
  }, []);

  //   const handleUpload = (e) => {
  // reference.current.click();
  // if (imagesupload) {
  // alert("hi")
  //   };

  // const handleUpload = (e) => {
  //   let data = [];
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     data.push(e.target.files[i]);
  //     const imageRef = ref(
  //       storage,
  //       `images/${month}_${year}/${data[i].name + v4()}`
  //     );
  //     uploadBytes(imageRef, data[i]);
  //   }
  // };

  // const list = [
  //   { name: "View", icon: "bi bi-eye-fill" },
  //   { name: "Edit", icon: "bi bi-pencil-square" },
  //   { name: "Delete", icon: "bi bi-trash-fill" },
  // ];

  // const handleShow = (item) => {
  //   vouchers.map((data) => {
  //     return item.id === data.id && setShow(!show);
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const handleInputChange = (e) => {
  //   setInputData({ ...inputData, [e.target.name]: e.target.value });
  // };
  // useEffect(() => {
  //   let called = true;
  //   if (called) {
  //     axios
  //       .get("http://192.168.10.189:8000/api/add_expense?unit_expense=1")
  //       .then(function (response) {
  //         console.log(response);
  //       });
  //   }
  //   return () => {
  //     called = false;
  //   };
  // }, []);

  const sum =
    expense?.data?.balance - expense?.data?.in[0]?.total_in ||
    expense?.data?.balance ||
    editVoucher?.balance;

  return (
    <div className="list-data">
      <div className="top-data">
        <Container>
          <div className="main-data-lists">
            {!setExpense && !viewExpense && (
              <div className="hand-cash">
                <h3>Remaining Cash in Hand</h3>
              </div>
            )}
            {setExpense && (
              <div className="hand-cash">
                <h3>Total Expense</h3>
              </div>
            )}
            {viewExpense && (
              <div className="hand-cash">
                <h3>Total Expense</h3>
              </div>
            )}
            <div className="prices">
              {setExpense && (
                <div className="end-price">
                  <h3>
                    Rs.{" "}
                    {!setExpense
                      ? -(-expense?.data?.balance + sum) || 0
                      : editVoucher.in[0].total_in}
                  </h3>
                </div>
              )}
              {viewExpense && (
                <div className="end-price">
                  <h3>Rs. {viewVoucher?.in[0]?.total_in}</h3>
                </div>
              )}
              {!setExpense && !viewExpense && (
                <div>
                  <div className="total-amount">
                    <h2>
                      Rs. {expense?.data?.balance || editVoucher?.balance}
                    </h2>
                  </div>
                  <h4>Today Total Expanses</h4>
                  <div className="end-price">
                    <h3>
                      Rs.{" "}
                      {!setExpense
                        ? -(-expense?.data?.balance + sum) || 0
                        : editVoucher.in[0].total_in}
                    </h3>
                  </div>
                </div>
              )}
              {!setExpense && !viewExpense && (
                <Link to="/new-expense">
                  <div className="new-icon">
                    <i className="bi bi-plus"></i>
                  </div>
                </Link>
              )}
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
            <div className="clear_form_data">
              <h2>Expenses Info.</h2>
              {!viewExpense &&
                expense &&
                expense?.data?.lfe_daywise.length > 0 && (
                  <div className="clear-form">
                    <Button onClick={() => setCloseModal(true)}>
                      Close Form
                    </Button>
                    <CloseModal
                      setCloseModal={setCloseModal}
                      handleCCloseModal={handleCCloseModal}
                      closeModal={closeModal}
                      id={expense?.data?.lfe_id}
                    />
                  </div>
                )}
            </div>
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
                        {!viewExpense ? (
                          <div className="dot-icon">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id={`dropdown-basic${index}`}
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
                        ) : (
                          ""
                        )}
                        <div>
                          {/* {images.map((src, index) => (
                            <img
                              src={src}
                              onClick={() => openImageViewer(index)}
                              width="300"
                              key={index}
                              style={{ margin: "2px" }}
                              alt=""
                            />
                          ))} */}

                          {isViewerOpen && (
                            <ImageViewer
                              src={fullImage}
                              currentIndex={currentImage}
                              disableScroll={false}
                              closeOnClickOutside={true}
                              onClose={closeImageViewer}
                              className="image_view"
                            />
                          )}
                        </div>
                        <div
                          className="list-img"
                          onClick={() => openImageViewer(0, item)}
                        >
                          {item.image[0] === "no_image.jpg" ? (
                            <img src={noimg} alt="" />
                          ) : (
                            <img src={item.image[0]} alt="" />
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
                            <img src={noimg} alt="" />
                          ) : (
                            <img src={item.image[0]} alt="" />
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
            {viewExpense &&
              viewVoucher?.lfes?.lfdaywise
                ?.filter((data) => data.lfe_narration.includes(searchVal))
                .map((item, index) => {
                  return (
                    <div className="voucher-lists" key={index}>
                      {/* <ModalPage
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
                      /> */}
                      <ViewModal
                        setShowViewModal={setShowViewModal}
                        handleShowViewModal={handleShowViewModal}
                        viewModal={viewModal}
                        handleCloseViewModal={handleCloseViewModal}
                        ExpenseView={() => ExpenseView(item)}
                        setShowEditModal={setShowEditModal}
                        data={itemData}
                      />
                      {!viewExpense ? (
                        <div className="dot-icon">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id={`dropdown-basic${index}`}
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
                      ) : (
                        ""
                      )}
                      <div>
                        {/* {images.map((src, index) => (
                            <img
                              src={src}
                              onClick={() => openImageViewer(index)}
                              width="300"
                              key={index}
                              style={{ margin: "2px" }}
                              alt=""
                            />
                          ))} */}

                        {isViewerOpen && (
                          <ImageViewer
                            src={fullImage}
                            currentIndex={currentImage}
                            disableScroll={false}
                            closeOnClickOutside={true}
                            onClose={closeImageViewer}
                            className="image_view"
                          />
                        )}
                      </div>
                      <div
                        className="list-img"
                        onClick={() => openImageViewer(0, item)}
                      >
                        {item.image[0] === "no_image.jpg" ? (
                          <img src={noimg} alt="" />
                        ) : (
                          <img
                            src={JSON.parse(item.image)}
                            alt=""
                          />
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
                            <span> &nbsp;{item.account?.account_no}</span>
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
    </div>
  );
}

export default ListData;
