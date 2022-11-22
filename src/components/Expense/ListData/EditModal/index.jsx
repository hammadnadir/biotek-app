import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { book } from "../../../../assets";
import { SelectForm, TextFieldForm } from "../../../common";
import { Carousel } from "react-responsive-carousel";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { editExpenseRequest } from "../../../../redux/expense";
import { useState } from "react";
import { useEffect } from "react";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../../../firebase";
 

function EditModal({handleShowEditModal,setShowEditModal,showEditModal,handleCloseEditModal,ExpenseEdit,id,data}) {

  const [editData , setEditData] = useState({})
  const dispatch = useDispatch();

  useEffect(()=>{
    if (data){
      setEditData({...data})
    }
  },[data])

  const handleFormSubmit = (e) => {
   e.preventDefault();
   console.log("HI")
   const editFormData = { lfe_id: editData.id,expense_head:editData.expense_head.account_no ,lfe_narration: editData.lfe_narration ,lfe_amount: editData.lfe_amount ,images: editData.image }
   dispatch(editExpenseRequest(editFormData));
  }
  const handleChange = (e) => {
    setEditData({...editData,[e.target.name]:e.target.value});
  }
  console.log(data)

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
      setEditData({...editData ,image: filtered});
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
      expense_account: e.target.value
    });
  };

  console.log(editData?.expense_head?.account_title)

  return (
    <div className="edit_modal">
      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        animation={false}
        centered
      >
        <Form  onSubmit={handleFormSubmit} className="edit_data">
          <h1>Edit</h1>
          <i className="bi bi-pencil-square delete_icon"></i>
          <div className="images_carousel">
            {editData.image === "no_image.jpg" && (
              <p className="no_image">No Image Avalible</p>
            )}
            {editData.image !== "no_image.jpg" && (
              <Carousel>
                {editData && editData.image && editData.image.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item} alt="img" />
                    </div>
                  );
                })}
              </Carousel>
            )}
          </div>
          <div className="expense_total_images">
            {editData && editData.image && editData?.image.map((item,index) => {
              return (
                <div className="expense_images" key={index}>
                  <img src={item} alt="upload-images" />
                  <i
                    className="bi bi-x"
                    onClick={(e) =>
                      handleDeleteFirbase(item)
                    }
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
              // defaultValue={`Expense Account : ${editData && editData?.expense_head?.account_no}`}
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
              />
            </div>
            <TextFieldForm
            //   value={`Date : ${date}-${month}-${year}`}
            value={`${editData?.lfe_narration}`}
            placeholder="Narration"
            name="lfe_narration"
            onChange={handleChange}
            />
            <TextFieldForm
            //   value={`Date : ${date}-${month}-${year}`}
            value={`${editData?.lfe_amount}`}
            placeholder="Amount"
            name="lfe_amount"
            onChange={handleChange}
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
