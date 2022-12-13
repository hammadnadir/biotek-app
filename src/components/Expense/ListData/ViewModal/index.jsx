import React, { useState, useCallback } from "react";
import { Modal } from "react-bootstrap";
import { TextFieldForm } from "../../../common";
import "./styles.scss";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import { noimg } from "../../../../assets";
import ImageViewer from "react-simple-image-viewer";

function ViewModal({
  viewModal,
  handleCloseViewModal,
  data,
  setShowEditModal,
}) {
  // const [boxOpen, setBoxOpen] = useState(false);
  // const [imageIndex, setImageIndex] = useState(0);
  // const [data, setData] = useState({});
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index, item) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    console.log(data.image);
    // setFullImage(item.image);

  }, []);
  console.log(data.image)

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  // const abcd = json(data?.image,true);

  // const { expense } = useSelector((state) => state.expense);

  // useEffect(()=>{
  // setData(expense?.data?.lfe_daywise[index])
  // },[index])
  const showEditModals = () => {
    handleCloseViewModal(true);
    setShowEditModal(true);
  };
  const { viewExpense, setExpense } = useSelector((state) => state.expense);
  console.log(data,"llllllllllll");

  return (
    <div className="view_modal">
      <Modal
        show={viewModal}
        onHide={handleCloseViewModal}
        animation={false}
        centered
      >
        <div className="view_data">
          <div className="close_icon" onClick={handleCloseViewModal}>
            <i className="bi bi-x"></i>
          </div>
          <h1>
            Expense <span>(LFE-{data.liberty_factory_exp_id})</span>
          </h1>
          {!viewExpense ? (
            <i className="bi bi-pencil-square" onClick={showEditModals}></i>
          ) : (
            ""
          )}
          <div className="images_carousel">
            {data.image === "no_image.jpg" && (
              <p className="no_image">No Image Avalible</p>
            )}
            {/* {data?.image.length == 0 && (
                <p className="no_image">No Image Avalible</p>
              )} */}
            {/* {data && data.image && data.image != "no_image.jpg" && ( */}
            {isViewerOpen && (
              <ImageViewer
                src={viewExpense ? data.status === "2" ? [data.image] :  JSON.parse(data.image) : data.image}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                className="image_view"
              />
            )}
            {!viewExpense && (
              <Carousel>
                {data.image !== "no_image.jpg" &&
                  data &&
                  data.image &&
                  data.image.length > 0 &&
                  data?.image?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="main_data_img"
                        onClick={() => openImageViewer(0, item)}
                      >
                        {item === "no_image.jpg" ? (
                          <img src={noimg} alt="" />
                        ) : (
                          <img src={item} alt="img" />
                        )}
                      </div>
                    );
                  })}
              </Carousel>
            )}
            {viewExpense && (
              <Carousel>
                {data.image !== undefined && data.image !== "no_image.jpg" ? (
                  data.status === "2" ? <div
                  className="main_data_img"
                  onClick={() => openImageViewer(0, data)}
                >
                  <img src={data.image} alt="" />
                </div> :
                  <div
                    className="main_data_img"
                    onClick={() => openImageViewer(0, JSON.parse(data.image))}
                  >
                    <img src={JSON.parse(data.image)} alt="" />
                  </div>
                ) : (
                  <div
                    className="main_data_img"
                    onClick={() => openImageViewer(0, [noimg])}
                  >
                    <img src={noimg} alt="img" />
                  </div>
                )}
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
              {!viewExpense ? (
                <TextFieldForm
                  value={`Expense Account : ${
                    data && data.expense_head && data.expense_head.account_no
                  }`}
                />
              ) : (
                <TextFieldForm
                  value={`Expense Account : ${
                    data && data?.account?.account_no
                  }`}
                />
              )}
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
              value={`Narration : ${
                data && data.lfe_narration && data.lfe_narration
              }`}
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
