import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { SelectForm, TextFieldForm } from "../../../common";
import { Carousel } from "react-responsive-carousel";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { editExpenseRequest } from "../../../../redux/expense";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getVoucherEditRequest } from "../../../../redux/voucher";
import { noimg } from "../../../../assets";
import { setLoading } from "../../../../redux/global";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { storage } from "../../../../firebase";
import { v4 } from "uuid";
import ImageViewer from "react-simple-image-viewer";
import { useCallback } from "react";

function EditModal({ showEditModal, handleCloseEditModal, data }) {
  const [editData, setEditData] = useState({});
  const { setExpense } = useSelector((state) => state.expense);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index, item) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    console.log("ooooooo", item.image);
    // setFullImage(item.image);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const dispatch = useDispatch();
  const reference = useRef();
  const navigate = useNavigate();

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
  useEffect(() => {
    if (data) {
      setEditData({ ...data, expense_account: data?.expense_head?.account_no });
    }
    // eslint-disable-next-line
  }, [data]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCloseEditModal();
    const editFormData = {
      lfe_id: editData.id,
      expense_head: editData.expense_account,
      lfe_narration: editData.lfe_narration,
      lfe_amount: editData.lfe_amount,
      images: editData.image,
    };

    dispatch(editExpenseRequest(editFormData));
    if (setExpense) {
      dispatch(getVoucherEditRequest(editData.liberty_factory_exp_id));
    }
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const { expense } = useSelector((state) => state.expense);

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const monthAlphabet = monthName[newDate.getMonth()];

  const handleDeleteFirbase = (item) => {
    const desertRef = ref(storage, item);
    dispatch(setLoading(true));
    deleteObject(desertRef)
      .then(() => {
        const filtered = editData.image.filter((img) => {
          return img !== item;
        });
        setEditData({ ...editData, image: filtered });
        if(filtered.length <= 0){
          setEditData({ ...editData, image: ["no_image.jpg"] });
        }
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        console.log(error);
      });
  };

  const handleHeadChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
      expense_account: e.target.value,
      lf_expense_name: e.target.value,
    });
    console.log(editData);
  };
  const handleImageUpload = (e) => {
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
              setEditData({ ...editData, image: editData.image[0] === "no_image.jpg" ? [...urls] : [...editData.image, ...urls]   });
            }
          }
        });
      });
    }
  };
  useEffect(()=>{
  // if(editData.image.length === 0){
  // setEditData({ ...editData, image: ["no_image.jpg"] });
  // }
  },[editData])

  return (
    <div className="edit_modal">
      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        animation={false}
        centered
      >
        <Form onSubmit={handleFormSubmit} className="edit_data">
          <div className="close_icon" onClick={handleCloseEditModal}>
            <i className="bi bi-x"></i>
          </div>
          <h1>Edit</h1>
          <i
            className="bi bi-paperclip delete_icon"
            onClick={() => reference.current.click()}
          ></i>
          <input
            type="file"
            multiple
            ref={reference}
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <div className="images_carousel">
            {editData.image === "no_image.jpg" && (
              <p className="no_image">No Image Avalible</p>
            )}
            {isViewerOpen && (
              <ImageViewer
                src={editData.image}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                className="image_view"
              />
            )}
            {editData.image !== "no_image.jpg" && (
              <Carousel>
                { editData &&
                  editData.image &&
                  editData.image.length > 0 &&
                  editData.image.map((item, index) => {
                    return (
                      <div key={index} className="main_data_img"  onClick={() => openImageViewer(0, item)}>
                        {item === "no_image.jpg" ? (
                          <img src={noimg} alt="" />
                        ) : (
                          <img src={item} alt="" />
                        )}
                      </div>
                    );
                  })}
              </Carousel>
            )}
          </div>
          <div className="expense_total_images">
            {editData &&
              editData.image &&
              editData.image !== "no_image.jpg" &&
              editData.image.map((item, index) => {
                return (
                  <div className="expense_images" key={index}>
                    {item === "no_image.jpg" ? (
                      ""
                    ) : (
                      <img src={item} alt="" />
                    )}
                    <i
                      className="bi bi-x"
                      onClick={(e) => handleDeleteFirbase(item)}
                    ></i>
                  </div>
                );
              })}
          </div>
          <div className="form_fields">
            <div className="voucher_field">
              <TextFieldForm
                name="liberty_factory_exp_id"
                value={`Expense Voucher # LFE-${editData.liberty_factory_exp_id}`}
              />
              <TextFieldForm
                placeholder="Expense Voucher # "
                name="lfe_id"
                hidden
              />
            </div>
            <div className="two_inputs">
              <TextFieldForm value={`Date : ${date}-${month}-${year}`} />
              <TextFieldForm
                name="expense_head.account_no"
                value={`Expense Account : ${editData.expense_account}`}
                id="exp_acc"
              />
            </div>
            <TextFieldForm
              placeholder="Expense Voucher # "
              name="lfe_id"
              value={editData?.lfe_id}
              hidden
            />
            <div>
              <SelectForm
                label="Expense Head:"
                optionsData={expense?.data?.expense_heads}
                name="account_title"
                onChange={handleHeadChange}
                value={editData?.account_title}
                id="abcd"
                selectField={
                  editData &&
                  editData?.expense_head &&
                  editData?.expense_head?.account_no &&
                  editData?.expense_head?.account_no
                }
              />
            </div>
            <TextFieldForm
              value={`${editData?.lfe_narration}`}
              placeholder="Narration"
              name="lfe_narration"
              onChange={handleChange}
              type="text"
            />
            <TextFieldForm
              value={`${editData?.lfe_amount}`}
              placeholder="Amount"
              name="lfe_amount"
              onChange={handleChange}
              type="number"
            />
          </div>
          <div className="update_btn">
            <Button type="submit">Update</Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default EditModal;
