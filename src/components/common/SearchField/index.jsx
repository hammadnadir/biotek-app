import React, { useRef, useState } from "react";
import "./styles.scss";

function SearchField({ label, icon,...props }) {

  const reference = useRef();

  const handleClick = () => {
    reference.current.focus();
  };

  return (
    <div className="select-field">
      <label className="label-field" onClick={handleClick}>
        <i className={icon} />
      </label>
      <p>Search For?</p>
      <input type="text" ref={reference} className="search-field" {...props} />
    </div>
  );
}

export default SearchField;
