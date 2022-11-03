import React, { useState } from "react";
import { TextField , Button } from "../../common";
import { Container, Form } from "react-bootstrap";
// import { signupRequest } from "../../services/auth";
import { useDispatch } from "react-redux";
import "./styles.scss"

function Signup() {
  const [input, setInput] = useState({});
  const [err, setErr] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    validateErr(input);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validateErr = (value) => {
    let error = {};
    const valEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.first_name) {
      error.first_name = "Required field";
    }
    if (!value.last_name) {
      error.last_name = "Required field";
    }
    if (!value.password) {
      error.password = "Required field";
    }
    if (!value.email) {
      error.email = "Required field";
    } else if (!value.email.match(valEmail)) {
      error.email = "Invalid Email";
    }
    if (!value.password) {
      error.password = "Required field";
    }
    if (!value.phone) {
      error.phone = "Required field";
    }
    if (!value.street) {
      error.street = "Required field";
    }
    if (!value.city) {
      error.city = "Required field";
    }
    if (!value.state) {
      error.state = "Required field";
    }
    if (!value.zip) {
      error.zip = "Required field";
    }
    if (Object.keys(error).length > 0) {
      setErr(error);
    } else {
      setErr({});
      console.log(value);
    //   dispatch(signupRequest(input));
      // console.log(input);
    }
  };
  return (
    <div className="signup-page">
      <Container>
        <Form className="main-form" onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <TextField
            label="First Name"
            name="first_name"
            type="input"
            value={input.first_name}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.first_name}</span>
          </div>
          <TextField
            label="Last Name"
            name="last_name"
            type="input"
            value={input.last_name}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.last_name}</span>
          </div>
          <TextField
            label="Email"
            name="email"
            type="text"
            value={input.email}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.email}</span>
          </div>
          <div className="password-field">
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "input" : "password"}
              value={input.password}
              onChange={handleChange}
            />
            {
              showPassword ? <i className="bi bi-eye" onClick={()=>setShowPassword(false)}></i> : <i className="bi bi-eye-slash" onClick={()=>setShowPassword(true)}></i>
            }
            <div className="errors">
              <span>{err.password}</span>
            </div>
          </div>
          <TextField
            label="phone"
            name="phone"
            type="input"
            value={input.phone}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.phone}</span>
          </div>
          <TextField
            label="City"
            name="city"
            type="input"
            value={input.city}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.city}</span>
          </div>
          <TextField
            label="Street"
            name="street"
            type="input"
            value={input.street}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.street}</span>
          </div>
          <TextField
            label="State"
            name="state"
            type="input"
            value={input.state}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.state}</span>
          </div>
          <TextField
            label="zip code"
            name="zip"
            type="input"
            value={input.zip}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.zip}</span>
          </div>
          <Button name="CREATE" type="submit" />
        </Form>
      </Container>
    </div>
  );
}

export default Signup;
