import { Button } from "react-bootstrap";
import React from "react";
import { Container, Form } from "react-bootstrap";
import "./styles.scss";
import { SelectForm, TextFieldForm, TextFieldNew } from "../common";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createExpenseRequest, getExpenseRequest } from "../../redux/expense";
import { useState } from "react";
import { storage } from "../../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";

function AddExpense() {
  const [imageUpload, setImageUpload] = useState([]);
  const [formData, setFormData] = useState({});
  const [inputList, setInputList] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [narrationData, setNarrationData] = useState([]);
  const [amountData, setAmountData] = useState([]);

  const dispatch = useDispatch();
  const { expense } = useSelector((state) => state.expense);

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
    console.log("aaaaaaaa");
    const allFieldData = {
      lfe_narration: narrationData,
      lfe_amount: amountData,
      liberty_factory_exp_id: expense.data.lfe_id,
      expense_head: formData.expense_head,
      images: allImages,
    };
    dispatch(createExpenseRequest(allFieldData));
    // axios
    //   .post("http://192.168.10.189:8000/api/store_expense", allFieldData)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    console.log(allFieldData);
  };

  const handleNarrationChange = (val, index) => {
    let temp = [...narrationData];
    temp[index] = val.target.value;
    setNarrationData(temp);
    console.log(temp);
  };

  const handleAmountChange = (val, index) => {
    let damp = [...amountData];
    damp[index] = val.target.value;
    setAmountData(damp);
    console.log(damp);
  };

  const handleUpload = (e, index) => {
    console.log(arrayIndex);
    const data = [];
    const urls = [];
    for (let x = 0; x < e.target.files.length; x++) {
      data.push(e.target.files[x]);
      const imageRef = ref(
        storage,
        `images/${monthAlphabet}_${year}/${data[x].name + v4()}`
      );
      uploadBytes(imageRef, data[x]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          if (url) {
            urls.push(url);
            if (urls.length === e.target.files.length) {
              console.log(urls);
              const firebaseArray = [...allImages];
              firebaseArray[arrayIndex] =
                firebaseArray[arrayIndex] &&
                firebaseArray[arrayIndex].length > 0
                  ? [...firebaseArray[arrayIndex], ...urls]
                  : [...urls];
              setAllImages(firebaseArray);
              console.log(allImages);
            }
          }
        });
      });
    }
    console.log([...data]);
    const arrayabc = [...imageUpload];
    arrayabc[arrayIndex] =
      arrayabc[arrayIndex].length > 0
        ? [...arrayabc[arrayIndex], ...data]
        : [...data];
    setImageUpload(arrayabc);
    if (urls.length > 0) {
      allImages[arrayIndex] = [...urls];
      console.log(allImages);
    }
  };

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
    setFormData({
      expense_account: expense?.data?.expense_heads[0].account_no,
      expense_head: expense?.data?.expense_heads[0].account_no,
    });
    console.log(expense?.data?.expense_heads[0].account_no);
  }, [expense]);

  const handleDeleteFirbase = (val, index, item) => {
    const data = item;
    console.log(index);
    const desertRef = ref(storage, data);
    deleteObject(desertRef)
      // const PicRef = storage.refFromURL(item);
      // PicRef.delete();
      // deleteObject(desertRef)
      .then(() => {
        // setAllImages(allImages.filter((item) => item !== url));
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(data);

    // console.loog()
    storage
      .ref(`/images/November_2022/${item}`)
      .delete()
      .then(() => {
        // setAllImages(allImages.filter((item) => item !== url));
        alert("Picture is deleted successfully!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(getExpenseRequest());
    // axios
    //   .get("http://192.168.10.189:8000/api/add_expense?unit_expense=1" 
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  const handleAdd = () => {
    // console.log(inputList.length + 1);
    const abc = [...inputList, []];
    setInputList(abc);
  };

  useEffect(() => {
    document.getElementById("addnew").click();
  }, []);

  const handleBthClick = (index) => {
    reference.current.click();
    setArrayIndex(index);
    // console.log(arrayIndex);
  };

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
                name="lfe_id"
                value={formData.expense?.data?.lfe_id}
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
                value={formData.expense_head}
              />
            </div>
            {inputList.map((item, index) => {
              return (
                <div key={index}>
                  <p>
                    Sr. # <span>{index + 1}</span>
                  </p>
                  <TextFieldNew
                    label="Narrations:"
                    name="lfe_narration"
                    required
                    onChange={(val) => handleNarrationChange(val, index)}
                  />
                  <TextFieldNew
                    label="Add Amount:"
                    type="number"
                    required
                    name="lfe_amount"
                    onChange={(val) => handleAmountChange(val, index)}
                  />
                  <div className="expense_total_images">
                    {allImages[index] &&
                      allImages[index].map((item, index) => {
                        return (
                          <div className="expense_images" key={index}>
                            <img src={item} alt="upload-images" />
                            <i
                              className="bi bi-x"
                              onClick={(val) =>
                                handleDeleteFirbase(val, index, item)
                              }
                            ></i>
                          </div>
                        );
                      })}
                  </div>
                  <div className="upload_btn">
                    <Button onClick={() => handleBthClick(index)}>
                      <i className="bi bi-upload"></i>Upload More
                    </Button>
                  </div>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={reference}
                    multiple
                    onChange={(e) => handleUpload(e, index)}
                    accept="image/jpg, image/jpeg, image/png"
                  />
                </div>
              );
            })}
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default AddExpense;
