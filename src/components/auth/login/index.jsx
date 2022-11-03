import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { TextField, Button } from "../../common";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { loginForm } from "../../../redux/auth";

function Login() {
  const [input, setInput] = useState({});
  const [err, setErr] = useState({});

  const navigate = useNavigate();
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
    if (!value.email) {
      error.email = "Required field";
    } else if (!value.email.match(valEmail)) {
      error.email = "Invalid Email";
    }
    if (!value.password) {
      error.password = "Required field";
    }
    if (Object.keys(error).length > 0) {
      setErr(error);
    } else {
      console.log(input);
      dispatch(loginForm(value))
      //   signIn("credentials", { ...input, redirect: false }).then((response) => {
      //     if (response?.ok) {
      //       navigate("/account");
      //     }
      //   });
      setErr({});
    }
  };

  return (
    <div className="login-page">
      <Container>
        <Form className="main-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <TextField
            type="text"
            label="Email"
            name="email"
            value={input.email || ""}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.email}</span>
          </div>
          <TextField
            type="password"
            label="Password"
            name="password"
            value={input.password || ""}
            onChange={handleChange}
          />
          <div className="errors">
            <span>{err.password}</span>
          </div>
          <p>
            <Link to="/forgot">Forgot your password?</Link>
          </p>
          <Button name="SIGN IN" type="submit" />
          <p>
            <Link to="/signup">Create account</Link>
          </p>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
