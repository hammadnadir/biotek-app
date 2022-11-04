import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { TextField, Button } from "../../common";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { useDispatch } from "react-redux";
// import { loginForm } from "../../../redux/auth";
import { loginRequest } from "../../../redux/auth";
import { logo } from "../../../assets";

function Login() {
  const [input, setInput] = useState({});
  const [err, setErr] = useState({});
  const [showPassword, setShowPassword] = useState(false);

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
      dispatch(loginRequest(value));
      // dispatch(loginForm(value))
      console.log(value);
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
        <div className="main-login">
          <Form className="main-form" onSubmit={handleSubmit}>
            <img src={logo} alt="logo-img" />
            <h1>Sign In</h1>
            <TextField
              type="text"
              placeholder="E-mail"
              name="email"
              value={input.email || ""}
              onChange={handleChange}
            />
            { err.email &&( <div className="errors">
              <span>{err.email}</span>
            </div>)}
            <div className="password-field">
              <TextField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={input.password || ""}
                onChange={handleChange}
              />
              {
                showPassword ? <i className="bi bi-eye-fill" onClick={()=>setShowPassword(false)}></i> : <i class="bi bi-eye-slash-fill"  onClick={()=>setShowPassword(true)}></i>
              }
              
              
            </div>
           { err.password &&( 
           <div className="errors">
              <span>{err.password}</span>
            </div>
            )}
            <p>
              <Link to="/login">Forget your Password?</Link>
            </p>
            <Button name="Sign In" type="submit" />
            <small>
              Don’t Have An Account.?<Link to="/login"> Sign Up</Link>
            </small>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
