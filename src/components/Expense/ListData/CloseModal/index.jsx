import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch} from "react-redux";
import {
  clearExpenseRequest,
} from "../../../../redux/expense";
import { TextField } from "../../../common";
import "./styles.scss";

const CloseModal = ({
  setCloseModal,
  closeModal,
  id
}) => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({});
  //   const navigate = useNavigate()
  //   const { setExpense } = useSelector((state) => state.expense);

  //   const handleExpenseDel = (id) => {
  //     setShowModal(false)
  //     dispatch(deleteExpenseRequest({deleteid: id }));
  //     if (setExpense){
  //       navigate("/voucher");
  //     }
  //   }

  const handleClearAll = () => {
    setCloseModal(false)
    const data = {...inputData,id: id}
    setInputData({})
    dispatch(clearExpenseRequest(data));
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };
  const handleCloseit = () => {
    setInputData({})
    setCloseModal(false)
  }

  return (
    <div className="close_modal">
      <Modal
        show={closeModal}
        onHide={() => setCloseModal(false)}
        animation={false}
        centered
      >
        <div className="remarks_data">
        <h2>Remarks</h2>
        <Form onSubmit={handleClearAll}>
          <TextField
            placeholder="Remarks"
            name="remarks"
            value={inputData.remarks || ""}
            onChange={handleChange}
          />
          <div>
            <Button onClick={handleCloseit}>Close</Button>
            <Button type="submit">Yes I'm Sure</Button>
          </div>
        </Form>
        </div>
        {/* <div className="new_modal_data">
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
        </div> */}
      </Modal>
    </div>
  );
};

export default CloseModal;
