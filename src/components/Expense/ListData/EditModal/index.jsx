import React from "react";
import { Button, Modal } from "react-bootstrap";
import { book } from "../../../../assets";
import { SelectForm, TextFieldForm } from "../../../common";
import { Carousel } from "react-responsive-carousel";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { editExpenseRequest } from "../../../../redux/expense";

function EditModal({
  handleShowEditModal,
  setShowEditModal,
  showEditModal,
  handleCloseEditModal,
  ExpenseEdit,
  id,
}) {
  const images = [
    {
      img: book,
    },
    {
      img: book,
    },
    {
      img: book,
    },
    {
      img: book,
    },
    {
      img: book,
    },
    {
      img: book,
    },
    {
      img: book,
    },
  ];
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(editExpenseRequest(id));
  };

  const { expense } = useSelector((state) => state.expense);

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

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
            <Carousel>
              <div>
                <img src={book} alt="img" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src={book} alt="img" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={book} alt="img" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
          <div className="expense_total_images">
            {images.map((item, key) => {
              return (
                <div className="expense_images" key={key}>
                  <img src={book} alt="upload-images" />
                  <i
                    className="bi bi-x"
                    // onClick={(e) =>
                    //   handleDeleteFirbase(e, key, index, item)
                    // }
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="form_fields">
            <div className="voucher_field">
              <TextFieldForm
                placeholder="Expense Voucher # "
                // value={`Expense Voucher # LFE-${expense?.data?.lfe_id}`}
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
              value={`Expense Account : 
            
              `}
            //   ${formData.expense_account}
              />
            </div>
            <div>
              <SelectForm
                label="Expense Head:"
                optionsData={expense?.data?.expense_heads}
                // name="expense_head"
                // onChange={handleHeadChange}
                // value={formData.expense_head}
              />
            </div>
            <TextFieldForm
            //   value={`Date : ${date}-${month}-${year}`}
            placeholder="Narration"
            />
            <TextFieldForm
            //   value={`Date : ${date}-${month}-${year}`}
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
