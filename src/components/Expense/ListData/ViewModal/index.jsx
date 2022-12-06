import React from "react";
import { Modal } from "react-bootstrap";
import { TextFieldForm } from "../../../common";
import "./styles.scss";
import { Carousel } from "react-responsive-carousel";

function ViewModal({
  viewModal,
  handleCloseViewModal,
  data,
  setShowEditModal
}) {
  // const [boxOpen, setBoxOpen] = useState(false);
  // const [imageIndex, setImageIndex] = useState(0);
  // const [data, setData] = useState({});
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  // const { expense } = useSelector((state) => state.expense);

  // useEffect(()=>{
  // setData(expense?.data?.lfe_daywise[index])
  // },[index])
  const showEditModals=()=>{
    handleCloseViewModal(true)
    setShowEditModal(true)
  }

  return (
    <div className="view_modal">
        <Modal
          show={viewModal}
          onHide={handleCloseViewModal}
          animation={false}
          centered
        >
          <div className="view_data">
            <div className="close_icon" onClick={handleCloseViewModal}><i className="bi bi-x"></i></div>
            <h1>
              Expense <span>(LFE-345)</span>
            </h1>
            <i className="bi bi-pencil-square" onClick={showEditModals}></i>
            <div className="images_carousel">
              {data.image === "no_image.jpg" && (
                <p className="no_image">No Image Avalible</p>
              )}
              {/* {data?.image.length == 0 && (
                <p className="no_image">No Image Avalible</p>
              )} */}
              {/* {data && data.image && data.image != "no_image.jpg" && ( */}
                <Carousel>
                  {data && data.image && data.image.length > 0 && data?.image?.map((item, index) => {
                    return (
                      <div key={index} className="main_data_img">
                        <img
                          src={item}
                          // onClick={() => setBoxOpen(true)}
                          alt="img"
                        />
                      </div>
                    );
                  })}
                </Carousel>
              {/* )} */}
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
                  value={`Expense Account : ${data && data.expense_head && data.expense_head.account_no}`}
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
                value={`Narration : ${data && data.lfe_narration && data.lfe_narration}`}
                placeholder="Narration"
              />
              <TextFieldForm
                placeholder="Amount"
                //   value={`Date : ${date}-${month}-${year}`}
                value={`Amount : ${data && data.lfe_amount && data.lfe_amount}`}
              />
            </div>
          </div>
        </Modal>
    </div>
  );
}

export default ViewModal;
