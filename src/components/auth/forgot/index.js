import { Link , useParams } from "react-router-dom";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { TextField , Button } from "../../common";
import { useDispatch } from "react-redux";
// import { forgotPassword } from "../../services/auth";
import "./styles.scss"
import { forgotRequest } from "../../../redux/auth";

const Forgot = () => {
  const [input, setInput] = useState({});
  const [err, setErr] = useState({});
//   const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useParams();
//   const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    validateErr(input);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validateErr = (value) => {
    let error = {};
    const valEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value?.email && !token) {
      error.email = "Required field";
    } else if (!value?.email?.match(valEmail) && !token) {
      error.email = "Invalid Email";
    }
    if (Object.keys(error).length > 0) {
      setErr(error);
    } else {
      console.log(input);
    //   if (!token) {
    //     dispatch(forgotPassword({ ...input, reset_link: `${origin}/forget` }));
    //   } else {
    //     if (input.password === input.confirm_password) {
    //       dispatch(forgotPassword({ password: input.password, token: token }));
    //     }
    //   }
    if (!token) {
        dispatch(forgotRequest({ ...input, reset_link: `${window.location.origin}/forgot-password` }));
      } else {
        if (input.password === input.confirm_password) {
          dispatch(forgotRequest({ password: input.password, token: token }));
        }
      }
      setErr({});
    }
  };

  return (
    <div className="forget-page">
      <Container>
        <Form className="main-form" onSubmit={handleSubmit}>
          <div className="reset-password">
            <h2>RESET PASSWORD</h2>
            <p>We will send you an email to reset your password.</p>
          </div>

          {token ? (
            <>
              <TextField type="password" label="Password" name="password" value={input.password || ""} onChange={handleChange} />
              <div className="errors">
                <span>{err.password}</span>
              </div>

              <TextField type="password" label="Confirm password" name="confirm_password" value={input.confirm_password || ""} onChange={handleChange} />
              <div className="errors">
                <span>{err.confirm_password}</span>
              </div>
            </>
          ) : (
            <>
              <TextField  name="email" placeholder="Enter your email" value={input.email || ""} onChange={handleChange} />
              <div className="errors">
                <span>{err.email}</span>
              </div>
            </>
          )}
          <Button name="SUBMIT" type="submit" />
          <p>
            <Link to="/login">Cancel</Link>
          </p>
        </Form>
      </Container>
    </div>
  );
}

export default Forgot;
