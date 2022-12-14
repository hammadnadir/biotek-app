import { Button } from "react-bootstrap";
import React from "react";
import { Container, Form } from "react-bootstrap";
import "./styles.scss";
import { SelectForm, TextFieldForm, TextFieldNew } from "../common";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createExpenseRequest } from "../../redux/expense";
import { useState } from "react";
import { storage } from "../../firebase";

import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import { setLoading } from "../../redux/global";
// import axios from "axios";

function AddExpense() {
  const [imageUpload, setImageUpload] = useState([]);
  const [formData, setFormData] = useState({});
  const [inputList, setInputList] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [narrationData, setNarrationData] = useState([]);
  const [amountData, setAmountData] = useState([]);
  // const [expense ,setExpense] = useState({})

  const dispatch = useDispatch();
  const { expense } = useSelector((state) => state.expense);

  console.log(expense);
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
    const allFieldData = {
      lfe_narration: narrationData,
      lfe_amount: amountData,
      liberty_factory_exp_id: expense?.data?.lfe_id,
      expense_head: formData.expense_head,
      images: allImages,
    };
    dispatch(createExpenseRequest(allFieldData));
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
    // dispatch(setLoading(false))
    console.log(arrayIndex);
    const data = [];
    const urls = [];
    for (let x = 0; x < e.target.files.length; x++) {
      dispatch(setLoading(true));
      data.push(e.target.files[x]);
      const imageRef = ref(
        storage,
        `images/${monthAlphabet}_${year}/${data[x].name + v4()}`
      );
      uploadBytes(imageRef, data[x]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          if (url) {
            urls.push(url);
            dispatch(setLoading(true));
            if (urls.length === e.target.files.length) {
              dispatch(setLoading(false));
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
      // dispatch(setLoading(false))
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
    // eslint-disable-next-line
  }, [expense]);

  const handleDeleteFirbase = (e, index, key, item) => {
    const desertRef = ref(storage, item);
    dispatch(setLoading(true));
    deleteObject(desertRef)
      .then(() => {
        const filtered = allImages[key].filter((img) => {
          return img !== item;
        });
        console.log(filtered);
        const data = [...allImages];
        data[key] = filtered;
        setAllImages(data);
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        console.log(error);
      });
    // const filtered = allImages[key].filter((img) => {
    //   return img !== item;
    // });
    // console.log(filtered);
    // const data = [...allImages];
    // data[key] = filtered;
    // setAllImages(data);
  };

  const handleAdd = () => {
    const abc = [...inputList, []];
    setInputList(abc);
  };

  useEffect(() => {
    document.getElementById("addnew").click();
    // eslint-disable-next-line
  }, []);

  const handleBthClick = (index) => {
    console.log(index);
    setArrayIndex(index);
    if (reference.current) {
      reference.current.click();
    } else {
      document.getElementById("abcdef").click();
    }
  };
  const handleExpenseDelete = (e, index, item) => {
    console.log(index);
    const abcdd = [...inputList];
    const filterData = abcdd.filter((data) => data !== item);
    setInputList(filterData);
    const narr = [...narrationData];
    const data = narr[index];
    const filtered = narr.filter((item) => {
      return item !== data;
    });
    console.log(data);
    setNarrationData(filtered);
    const amou = [...amountData];
    const dataAmount = amou[index];
    console.log(dataAmount);
    const filteredNew = amou.filter((item) => {
      return item !== dataAmount;
    });
    setAmountData(filteredNew);
    // for (let x = 0; x < item.image.length; x++) {
    //   const desertRef = ref(storage, item.image[x]);
    //   deleteObject(desertRef);
    //   .then(() => {
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // };
    const images = [...allImages];
    const specific = images[index];
    const filteredImg = images?.filter((img) => {
      return img !== specific;
    });
    setAllImages(filteredImg);
    console.log(filteredImg);
  };

  return (
    <div className="add_expense">
      <Form className="add_expense_data" onSubmit={handleSubmit}>
        <Container>
          <div className="expense_button">
            <Button type="submit">Save</Button>
            {/* <Button id="addnew" onClick={handleAdd}>
              <i className="bi bi-plus"></i>Add Line
            </Button> */}
          </div>
        </Container>
        <div>
          <Container>
            <div className="voucher_field">
              <TextFieldForm
                placeholder="Expense Voucher # "
                value={`Expense Voucher # LFE-${expense?.data?.lfe_id}`}
              />
              <TextFieldForm
                placeholder="Expense Voucher # "
                name="lfe_id"
                value={formData.expense?.data?.lfe_id}
                hidden
              />
            </div>
            <div className="two_inputs">
              <TextFieldForm value={`Date : ${date}-${month}-${year}`} />
              <TextFieldForm
                value={`Expense Account : ${formData.expense_account}`}
              />
              {/* <TextFieldNew
                label="Expense Account:"
                type="number"
                value={formData.expense_account}
                onChange={handleChange}
              /> */}
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
          </Container>
          {inputList.map((item, index) => {
            return (
              <div key={index} className="main_narrations">
                {index > 0 && (
                  <div
                    className="delete_icon"
                    onClick={(e) => handleExpenseDelete(e, index, item)}
                  >
                    <i className="bi bi-x"></i>
                  </div>
                )}
                <div className="expense-count">
                  <h2>
                    Expense # <span>&nbsp;{index + 1}</span>
                  </h2>
                </div>
                <Container>
                  <div className="expense_fields">
                    <div className="attachment_fields">
                      <TextFieldNew
                        // label="Narrations:"
                        name="lfe_narration"
                        required
                        placeholder="Narration"
                        onChange={(val) => handleNarrationChange(val, index)}
                      />
                      <div className="attachment_file">
                        <TextFieldNew
                          // label="Add Amount:"
                          type="number"
                          required
                          name="lfe_amount"
                          placeholder="Amount"
                          onChange={(val) => handleAmountChange(val, index)}
                        />
                        <div className="upload_btn">
                          <Button onClick={() => handleBthClick(index)}>
                            <i className="bi bi-paperclip"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                    {allImages[index] && (
                      <div className="attachments">
                        <h3>Attachments :</h3>
                        <div className="expense_total_images">
                          {allImages[index] &&
                            allImages[index].length > 0 &&
                            // allImages[index].length > 0 &&
                            allImages[index].map((item, key) => {
                              return (
                                <div className="expense_images" key={key}>
                                  <img src={item} alt="upload-images" />
                                  <i
                                    className="bi bi-x"
                                    onClick={(e) =>
                                      handleDeleteFirbase(e, key, index, item)
                                    }
                                  ></i>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                    <input
                      type="file"
                      style={{ display: "none" }}
                      ref={reference}
                      multiple
                      onChange={(e) => handleUpload(e, index)}
                      accept="image/jpg, image/jpeg, image/png"
                      id="abcdef"
                    />
                  </div>
                </Container>
              </div>
            );
          })}
          <Container>
            <div className="new_line">
              <Button id="addnew" onClick={handleAdd}>
                <i className="bi bi-plus"></i>Add Line
              </Button>
            </div>
          </Container>
        </div>
      </Form>
    </div>
  );
}

export default AddExpense;
