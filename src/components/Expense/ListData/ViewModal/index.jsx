import React, { useState, useCallback } from "react";
import { Modal } from "react-bootstrap";
import { TextFieldForm } from "../../../common";
import "./styles.scss";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { noimg } from "../../../../assets";
import ImageViewer from "react-simple-image-viewer";

function ViewModal({
  viewModal,
  handleCloseViewModal,
  data,
  setShowEditModal,
}) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index, item) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const showEditModals = () => {
    handleCloseViewModal(true);
    setShowEditModal(true);
  };
  const { viewExpense, setExpense } = useSelector((state) => state.expense);

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
                value={`Expense Voucher # ${data.liberty_factory_exp_id}`}
              />
              <TextFieldForm
                placeholder="Expense Voucher # "
                name="lfe_id"
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
              />
            </div>
            <TextFieldForm
              value={`Narration : ${
                data && data.lfe_narration && data.lfe_narration
              }`}
              placeholder="Narration"
            />
            <TextFieldForm
              placeholder="Amount"
              value={`Amount : ${data && data.lfe_amount && data.lfe_amount}`}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ViewModal;
