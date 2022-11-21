import React from "react";
import { Button, Modal } from "react-bootstrap";
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

  // const [data , setEditData] = useState({})
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   if (data){
  //     setEditData(data)
  //   }
  // },[data])

  const handleEdit = (id) => {
    dispatch(editExpenseRequest(id));
  };

  const { expense } = useSelector((state) => state.expense);

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const handleDeleteFirbase = (item) => {
    const desertRef = ref(storage, item);
    deleteObject(desertRef).then(() => {
      const filtered = data.image.filter((img) => {
        return img !== item;
      });
      console.log(filtered);
      const allData = [...data];
      allData.image = filtered;
      // setEditData(data);
    }).catch((error) => {
      console.log(error)
    });
  };


  return (
    <div className="edit_modal">
      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        animation={false}
        centered
      >
        <div className="edit_data">
          <h1>Edit</h1>
          <i className="bi bi-pencil-square delete_icon"></i>
          <div className="images_carousel">
            {/* {data.image === "no_image.jpg" && (
              <p className="no_image">No Image Avalible</p>
            )} */}
            {/* {data.image !== "no_image.jpg" && ( */}
              <Carousel>
                {data.image.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item} alt="img" />
                    </div>
                  );
                })}
              </Carousel>
            {/* )} */}
          </div>
          <div className="expense_total_images">
            {data?.image.map((item,index) => {
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
                value={`Expense Voucher # LFE-${data.liberty_factory_exp_id}`}
              />
              <TextFieldForm
                placeholder="Expense Voucher # "
                name="lfe_id"
                // value={formData.expense?.data?.lfe_id}
                hidden
              />
            </div>
            <div className="two_inputs">
              <TextFieldForm value={`Date : ${date}-${month}-${year}`} />
              <TextFieldForm
              value={`Expense Account : ${data.expense_head.account_no}`}
            //   ${formData.expense_account}
              />
            </div>
            <div>
              <SelectForm
                label="Expense Head:"
                optionsData={expense?.data?.expense_heads}
                // name="expense_head"
                // onChange={handleHeadChange}
                value={data.expense_head}
              />
            </div>
            <TextFieldForm
            //   value={`Date : ${date}-${month}-${year}`}
            value={`Narration : ${data.lfe_narration}`}
            placeholder="Narration"
            />
            <TextFieldForm
            //   value={`Date : ${date}-${month}-${year}`}
            value={`Amount : ${data.lfe_amount}`}
            placeholder="Amount"
            />
          </div>
          <div className="update_btn">
            <Button onClick={() => handleEdit(id)}>Update</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EditModal;
