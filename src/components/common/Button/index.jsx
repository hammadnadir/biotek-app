import React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

function MainButton({ name, ...props }) {
  return (
    <div className="button-field">
      <Button {...props}>{name}</Button>
    </div>
  );
}

export default MainButton;
