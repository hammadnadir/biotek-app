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

function EditModal({
  showEditModal,
  handleCloseEditModal,
  data,
}) {
  const [editData, setEditData] = useState({});
  const { setExpense } = useSelector((state) => state.expense);

  const dispatch = useDispatch();
  const reference = useRef();
  const navigate = useNavigate();

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
      expense_head: editData.expense_head.account_no,
      lfe_narration: editData.lfe_narration,
      lfe_amount: editData.lfe_amount,
      images: editData.image,
      // id: editVoucher?.in[0]?.liberty_factory_exp_id
    };
    dispatch(editExpenseRequest(editFormData));
    if (setExpense){
      navigate("/voucher");
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

  const handleDeleteFirbase = (item) => {
    // const desertRef = ref(storage, item);
    // deleteObject(desertRef).then(() => {
    const filtered = editData.image.filter((img) => {
      return img !== item;
    });
    console.log(filtered);
    setEditData({ ...editData, image: filtered });
    console.log({ ...editData, image: filtered });
    //   console.log(editData)
    // }).catch((error) => {
    //   console.log(error)
    // });
  };

  const handleHeadChange = (e) => {
    // alert(e.target.value)
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
      expense_account: e.target.value,
    });
  };
  const handleImageUpload = (e) => {
    const data = [];
    for (let x = 0; x < e.target.files.length; x++) {
      data.push(URL.createObjectURL(e.target.files[x]));
    }
    setEditData({ ...editData, image: [...editData.image, ...data] });
  };

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
            {editData.image !== "no_image.jpg" && (
              <Carousel>
                {editData &&
                  editData.image &&
                  editData.image.length > 0 &&
                  editData.image.map((item, index) => {
                    return (
                      <div key={index} className="main_data_img">
                        <img src={item} alt="img" />
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
              editData?.image.map((item, index) => {
                return (
                  <div className="expense_images" key={index}>
                    <img src={item} alt="upload-images" />
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
                // placeholder="Expense Voucher # "
                // value={`Expense Voucher # LFE-${editData && editData.liberty_factory_exp_id && editData.liberty_factory_exp_id}`}
                name="liberty_factory_exp_id"
                value={`Expense Voucher # LFE-${editData.liberty_factory_exp_id}`}
              />
              <TextFieldForm
                placeholder="Expense Voucher # "
                name="lfe_id"
                // value={formData.expense?.editData?.lfe_id}
                hidden
              />
            </div>
            <div className="two_inputs">
              <TextFieldForm value={`Date : ${date}-${month}-${year}`} />
              <TextFieldForm
                name="expense_head.account_no"
                value={`Expense Account : ${editData.expense_account}`}
                id="exp_acc"
                // value={`Expense Account : ${editData && editData?.expense_head?.account_no}`}
                //   ${formData.expense_account}
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
              //   value={`Date : ${date}-${month}-${year}`}
              value={`${editData?.lfe_narration}`}
              placeholder="Narration"
              name="lfe_narration"
              onChange={handleChange}
              // required
            />
            <TextFieldForm
              //   value={`Date : ${date}-${month}-${year}`}
              value={`${editData?.lfe_amount}`}
              placeholder="Amount"
              name="lfe_amount"
              onChange={handleChange}
              // required
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
