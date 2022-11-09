import React, { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { book } from "../../../assets";
import "./styles.scss";
import { vouchers } from "../../../data";
import { Button } from "react-bootstrap";
import { v4 } from "uuid";
import { storage } from "../../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { Dropdown } from "react-bootstrap";
import ModalPage from "./Modal";

function ListData() {
  const [showData, setShowData] = useState(true);
  const [vouchersData, setVouchersData] = useState([]);
  const [inputData, setInputData] = useState({});
  const [imagesupload, setImagesupload] = useState([]);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const reference = useRef();
  const imageListRef = ref(storage, "images/");

  //   const uploadPic = () => {
  //     if (imagesupload) {
  //       const imageRef = ref(storage, `images/${imagesupload.name + v4()}`);
  //       uploadBytes(imageRef, imagesupload).then((snapshot) => {
  //         getDownloadURL(snapshot.ref).then((url) => {
  //           setImagesList([...imagesList, url]);
  //         });
  //       });
  //     }
  //   };
  useEffect(()=>{
    setVouchersData(vouchers)
  },[])

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
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  
  const handleExpenseDelete = (item) => {
    vouchersData.map((data) => {
      return item.id === data.id 
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

  return (
    <div className="list-data">
      <div className="top-data">
        <Container>
          <div className="main-data-lists">
            <div className="hand-cash">
              <h3>Remaining Cash in Hand</h3>
            </div>
            <div className="total-amount">
              <h2>Rs. 1949131.00</h2>
            </div>
            <h4>Today Total Expanses</h4>
            <div className="end-price">
              <h3>Rs. 1949131.00</h3>
            </div>
            <div className="two-btns">
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
            </div>
          </div>
        </Container>
      </div>
      {showData && (
        <div className="section2">
          <Container>
            <div className="section2-data">
              <h2>Expenses Info.</h2>
              {vouchersData &&
                vouchersData.length > 0 &&
                vouchersData.map((item, index) => {
                  return (
                    <div className="voucher-lists" key={index}>
                      {/* {show && (
                        <div className="side-menues">
                          {list.map((data, index) => {
                            return (
                              <div className="opened-cruds" key={index}>
                                <i className={data.icon} />
                                <p>{data.name}</p>
                              </div>
                            );
                          })}
                        </div>
                      )} */}
                      <div
                        className="dot-icon"
                        // onClick={() => handleShow(item)}
                      >
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            <i className="bi bi-three-dots"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {/* {list.map((data, index) => { */}
                            {/* return ( */}
                            {/* <div className="opened-cruds" key={index}>
                              <i className={data.icon} />
                               <p>{data.name}</p>
                            </div> */}
                            <Dropdown.Item key={index}>
                              <i className="bi bi-eye-fill" />
                              <p>View</p>
                            </Dropdown.Item>
                            <Dropdown.Item key={index}>
                              <i className="bi bi-pencil-square" />
                              <p>Edit</p>
                            </Dropdown.Item>
                            <Dropdown.Item
                              key={index}
                              onClick={handleShowModal}
                            >
                              <i className="bi bi-trash-fill" />
                              <p>Delete</p>
                            </Dropdown.Item>
                            <ModalPage
                              setShowModal={setShowModal}
                              handleShowModal={handleShowModal}
                              showModal={showModal}
                              handleCloseModal={handleCloseModal}
                              ExpenseDelete={() =>
                                handleExpenseDelete(item)
                              }
                            />
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="list-img">
                        <img src={item.image} alt="bbok-img" />
                      </div>
                      <div className="voucher-data">
                        <div className="voucher-no">
                          <div className="menus">
                            Voucher # <span>{item.voucher}LFE-452</span>
                          </div>
                          <div className="menus">
                            Account # <span>{item.voucher}</span>
                          </div>
                        </div>
                        <div className="menus">
                          Expense Head :<span>{item.head}</span>
                        </div>
                        <div className="menus">
                          Narrations:
                          <span>{item.narration}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Container>
        </div>
      )}
      {!showData && (
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
                {/* <select>
                  <option>aa</option>
                  <option>aa</option>
                  <option>aa</option>
                  <option>aa</option>
                </select> */}
                <input
                  type="text"
                  name="expense-account "
                  placeholder="Expense Account"
                />
              </div>
              <div className="new-fields-data">
                {/* <div className="input-data-section">
                  <input type="text" />
                </div> */}
                {/* <div className="select-fields"> */}
                <select name="expense-head">
                  <option>Select One</option>
                  <option>aa</option>
                  <option>aa</option>
                  <option>aa</option>
                </select>
                {/* </div> */}
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
      )}
    </div>
  );
}

export default ListData;
