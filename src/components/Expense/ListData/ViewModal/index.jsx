import React from "react";
import { Modal } from "react-bootstrap";
import { SelectForm, TextFieldForm } from "../../../common";
import "./styles.scss";
import { Carousel } from "react-responsive-carousel";
import { book } from "../../../../assets";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function ViewModal({ viewModal, handleCloseViewModal, ExpenseView, item ,index,data}) {
  const [boxOpen, setBoxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  // const [data, setData] = useState({});
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const { expense } = useSelector((state) => state.expense);

  // console.log(index);

  useEffect(()=>{
    if (expense){
      // setData(expense?.data?.lfe_daywise[0])
    }
  },[expense])
  // useEffect(()=>{
  // setData(expense?.data?.lfe_daywise[index])
  // },[index])


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
            {data.image === "no_image.jpg" && (
              <p className="no_image">No Image Avalible</p>
            )}
            {data && data.image && data.image !== "no_image.jpg" && (
              <Carousel>
                {data.image.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={item}
                        onClick={() => setBoxOpen(true)}
                        alt="img"
                      />
                    </div>
                  );
                })}
              </Carousel>
            )}
          </div>
          <div className="form_fields">
            <div className="voucher_field">
              <TextFieldForm
                placeholder="Expense Voucher # "
                // value={`Expense Voucher # LFE-${expense.data.lfe_id}`}
                value={`Expense Voucher # ${data.liberty_factory_exp_id}`}
              />
              <TextFieldForm
                placeholder="Expense Voucher # "
                name="lfe_id"
                // value={formData.expense.data.lfe_id}
                hidden
              />
            </div>
            <div className="two_inputs">
              <TextFieldForm value={`Date : ${date}-${month}-${year}`} />
              <TextFieldForm
                value={`Expense Account : ${data.expense_head.account_no}`}
              />
            </div>
            <div>
              <TextFieldForm
                label="Expense Head:"
                value={`${data.lf_expense_name}`}
                // selected={data.lf_expense_name}
                // optionsData={expense.data.expense_heads}
                // name="expense_head"
                // onChange={handleHeadChange}
                // value={formData.expense_head}
              />
            </div>
            <TextFieldForm
              //   value={`Date : ${date}-${month}-${year}`}
              value={`Narration : ${data.lfe_narration}`}
              placeholder="Narration"
            />
            <TextFieldForm
              placeholder="Amount"
              //   value={`Date : ${date}-${month}-${year}`}
              value={`Amount : ${data.lfe_amount}`}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ViewModal;
