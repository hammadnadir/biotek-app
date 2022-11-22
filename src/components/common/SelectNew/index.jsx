import React, { useRef } from "react";
import "./styles.scss";

function SelectForm({ label, optionsData ,handleHeadChange,selected,...props }) {
  const reference = useRef();
  const handleClick = () => {
    reference.current.focus();
  };

  return (
    <div className="select-field-new">
      {/* <label className="label-field" onClick={handleClick}>
        {label}
      </label> */}
      {/* <i className="bi bi-caret-down-fill"></i> */}
      {/* <input type="text" ref={reference} className="input-field" {...props} /> */}
      <div className="icon"></div>
      <select defaultValue="" {...props}>
        {
          optionsData?.map((item,index)=>{
            return(
              <option key={index} value={item.account_no}>{item.account_title}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default SelectForm;
