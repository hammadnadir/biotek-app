import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteExpenseRequest } from "../../../../redux/expense";
import "./styles.scss";

const ModalPage = ({
  handleShowModal,
  setShowModal,
  showModal,
  handleCloseModal,
  ExpenseDelete,
  id
}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { setExpense } = useSelector((state) => state.expense);

  const handleExpenseDel = (id) => {
    dispatch(deleteExpenseRequest({deleteid: id }));
    if (setExpense){
      navigate("/voucher");
    }
  }
  
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        animation={false}
        centered
      >
        <div className="new_modal_data">
          <div className="warning_icon">
            <i className="bi bi-trash3-fill delete_it" />
            <h2>WARNING.!</h2>
          </div>
          <div className="data">
            <p>
              Deleting the expense will permanently remove it from your list.
            </p>
          </div>
          <div className="btns_two">
            <Button onClick={() => setShowModal(false)}>No</Button>
            <Button  onClick={() => handleExpenseDel(id)}>Yes</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalPage;
