import React from "react";
import { Modal } from "react-bootstrap";
import { SelectForm, TextFieldForm } from "../../../common";
import "./styles.scss";
import { Carousel } from "react-responsive-carousel";
import { book } from "../../../../assets";
import { useSelector } from "react-redux";

function ViewModal({ viewModal, handleCloseViewModal, ExpenseView }) {

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const { expense } = useSelector((state) => state.expense);

  return (
    <div className="view_modal">
      <Modal
        show={viewModal}
        onHide={handleCloseViewModal}
        animation={false}
        centered
      >
        <div className="view_data">
          <h1>
            Expense <span>(LFE-345)</span>
          </h1>
          <i className="bi bi-pencil-square"></i>
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
              <TextFieldForm
                value={`Date : ${date}-${month}-${year}`}
              />
              <TextFieldForm
              // value={`Expense Account : ${formData.expense_account}`}
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
            placeholder="Amount"
            //   value={`Date : ${date}-${month}-${year}`}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ViewModal;
