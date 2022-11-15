import { Button } from "react-bootstrap";
import React from "react";
import { Container, Form } from "react-bootstrap";
import "./styles.scss";
import { SelectForm, TextFieldForm, TextFieldNew } from "../common";
import { Link } from "react-router-dom";
import { books } from "../../assets";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExpenseRequest } from "../../redux/expense";
import { useState } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function AddExpense() {
  const [optionData, setOptionData] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);
  const [formData, setFormData] = useState({});
  const [inputList, setInputList] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [narrationsData, setNarrationData] = useState([]);
  const [addAmount, setAddAmount] = useState([]);

  const dispatch = useDispatch();
  const { expense } = useSelector((state) => state.expense);

  //   console.log(expense.data.expense_heads.account_title);

  const reference = useRef();
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const monthName = [
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
  const monthAlphabet = monthName[newDate.getMonth()];

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    validateData(formData);
    // .then((snapshot)=>{
    //   getDownloadURL(snapshot.ref).then((url)=>{
    //     setImageList((prev)=> [...prev, url])
    //   })
  };
  const validateData = (data) => {
    // let error = {};
    // const newArray = [];
    console.log(imageUpload[0].name);
  };

  const handleUpload = (e, val, index) => {
    // const indexValue=index;
    console.log(val);
    const data = [];
    for (let x = 0; x < e.target.files.length; x++) {
      data.push(e.target.files[x]);
      const imageRef = ref(
        storage,
        `images/${month}_${year}/${data[x].name + v4()}`
      );
      uploadBytes(imageRef, data[x]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setAllImages((prev) => [...prev, url]);
        });
      });
    }
    // setImageUpload([...imageUpload,[...data]]);
    // console.log("no");
    console.log([...data]);
    // setImageUpload([[...data]]);
    const mainData = [...data];
    imageUpload[index] = mainData;
    // console.log([...imageUpload,[...data]])
    // setAllImages([]);
    console.log(imageUpload);
  };
  // console.log(imageUpload);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = (item, index) => {
    const filterArray = imageUpload[index].filter((data) => {
      return data !== item;
    });
    setImageUpload([...filterArray]);
  };

  const handleHeadChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      expense_account: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getExpenseRequest());
    setOptionData(
      expense?.data?.expense_heads.map((item) => item.account_title)
    );
  }, []);
  // useEffect(() => {
  //   setInputList(
  //     inputList.concat(
  //       <div key={inputList.length}>
  //         <p>
  //           Sr. # <span>{inputList.length + 1}</span>
  //         </p>
  //         <TextFieldNew
  //           label="Narrations:"
  //           name="lfe_narration"
  //           onChange={handleChange}
  //           value={narrationsData.narrations}
  //         />
  //         <TextFieldNew
  //           label="Add Amount:"
  //           type="number"
  //           name="lfe_amount"
  //           onChange={handleChange}
  //           value={formData.add_amount}
  //         />
  //         <div className="expense_total_images">
  //           {imageUpload[0]?.map((item, index) => {
  //             return (
  //               <div className="expense_images" key={index}>
  //                 <img src={URL.createObjectURL(item)} alt="upload-images" />
  //                 <i className="bi bi-x" onClick={() => handleDelete(item)}></i>
  //               </div>
  //             );
  //           })}
  //         </div>
  //         <div className="upload_btn">
  //           <Button onClick={() => reference.current.click()}>
  //             <i className="bi bi-upload"></i>Upload More
  //           </Button>
  //         </div>
  //         <input
  //           type="file"
  //           style={{ display: "none" }}
  //           ref={reference}
  //           multiple
  //           // value={inputList?.length}
  //           onChange={(e) => handleUpload(e,inputList.length)}
  //         />
  //       </div>
  //     )
  //   );
  // }, []);

  const handleAdd = () => {
    console.log(inputList.length + 1);
    const abc = [...inputList, []];
    setInputList(abc);
  };
  useEffect(() => {
    document.getElementById("addnew").click();
  }, []);
  // console.log(inputList.length);

  return (
    <div className="add_expense">
      <Container>
        <Form className="add_expense_data" onSubmit={handleSubmit}>
          <div className="expense_button">
            <Button type="submit">Save</Button>
            <Button id="addnew" onClick={handleAdd}>
              Add Line
            </Button>
          </div>
          <div>
            <div className="voucher_field">
              <TextFieldForm
                placeholder="Expense Voucher # "
                value={`LFE-${expense?.data?.lfe_id}`}
              />
              <TextFieldForm
                placeholder="Expense Voucher # "
                name="liberty_factory_exp_id"
                value={expense?.data?.lfe_id}
                hidden
              />
            </div>
            <div className="two_inputs">
              <TextFieldForm value={`Date ${date}-${month}-${year}`} />
              <TextFieldNew
                label="Expense Account:"
                type="number"
                value={formData.expense_account}
                onChange={handleChange}
              />
            </div>
            <div>
              <SelectForm
                label="Expense Head:"
                optionsData={expense?.data?.expense_heads}
                name="expense_head"
                onChange={handleHeadChange}
              />
            </div>
            {/* <div>
              <p>
                Sr. # <span>1</span>
              </p>
              <TextFieldNew
                label="Narrations:"
                name="lfe_narration"
                onChange={handleChange}
                value={formData.narrations}
              />
              <TextFieldNew
                label="Add Amount:"
                type="number"
                name="lfe_amount"
                onChange={handleChange}
                value={formData.add_amount}
              />
              <div className="expense_total_images">
                {imageUpload[0]?.map((item, index) => {
                  return (
                    <div className="expense_images" key={index}>
                      <img
                        src={URL.createObjectURL(item)}
                        alt="upload-images"
                      />
                      <i
                        className="bi bi-x"
                        onClick={() => handleDelete(item)}
                      ></i>
                    </div>
                  );
                })}
              </div>
              <div className="upload_btn">
                <Button onClick={() => reference.current.click()}>
                  <i className="bi bi-upload"></i>Upload More
                </Button>
              </div>
              <input
                type="file"
                style={{ display: "none" }}
                ref={reference}
                multiple
                onChange={(e) => handleUpload(e,index)}
              />
            </div> */}
            {inputList.map((item, index) => {
              return (
                <div key={index}>
                  <p>
                    Sr. # <span>{index + 1}</span>
                  </p>
                  <TextFieldNew
                    label="Narrations:"
                    name="lfe_narration"
                    onChange={handleChange}
                    value={formData.narrations}
                  />
                  <TextFieldNew
                    label="Add Amount:"
                    type="number"
                    name="lfe_amount"
                    onChange={handleChange}
                    value={formData.add_amount}
                  />
                  <div className="expense_total_images">
                    {imageUpload[index]?.map((item, index) => {
                      return (
                        <div className="expense_images" key={index}>
                          <img
                            src={URL.createObjectURL(item)}
                            alt="upload-images"
                          />
                          <i
                            className="bi bi-x"
                            onClick={() => handleDelete(item, index)}
                          ></i>
                        </div>
                      );
                    })}
                  </div>
                  <div className="upload_btn">
                    <Button onClick={() => reference.current.click()}>
                      <i className="bi bi-upload"></i>Upload More
                    </Button>
                  </div>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={reference}
                    multiple
                    onChange={(e, item) => handleUpload(e, item, index)}
                  />
                </div>
              );
            })}
            {/* {inputList?.map((item)=>{
              return(
                {item}
              )
            })} */}
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default AddExpense;
