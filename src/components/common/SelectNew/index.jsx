import React, { useRef } from "react";
import "./styles.scss";

function SelectForm({ label, optionsData ,handleHeadChange,...props }) {
  const reference = useRef();
  const handleClick = () => {
    reference.current.focus();
  };

  return (
    <div className="select-field-new">
      <label className="label-field" onClick={handleClick}>
        {label}
      </label>
      {/* <input type="text" ref={reference} className="input-field" {...props} /> */}
      <select {...props}>
        {
          optionsData?.map((item,index)=>{
            return(
              <option key={index} value={item.account_no}>{item.account_title}</option>
            )
          })
        }
        {/* <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option> */}
      </select>
    </div>
  );
}

export default SelectForm;
