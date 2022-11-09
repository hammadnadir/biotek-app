import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.scss"

const ModalPage = ({handleShowModal,setShowModal,showModal ,handleCloseModal ,ExpenseDelete}) => {

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} animation={false} centered>
        <div className="modal-data">
          <h3>Delete</h3>
          <div className="delete-expense"><p>Do You Want to Delete This expense.?</p></div>
          <div className="decesions">
            <p onClick={ExpenseDelete}>Yes</p>
            <p onClick={handleCloseModal}>No</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalPage;
