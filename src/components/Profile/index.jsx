import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { backarrow, book, camera, close, noimg, photo } from "../../assets";
import { getCurrentUser } from "../../utils";
import { TextField } from "../common";
import "./styles.scss";

function ProfileMain() {
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState({});
  const reference = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = getCurrentUser();
//   console.log(user.data.user);

  useEffect(()=> {
   setUserData({
    name: user.data.user.name,
    email: user.data.user.email,
    phone : user.data.user.mobile_number,
    locale : user.data.user.settings.locale,
   });
   const abcd = `https://www.biotecherp.work/public/storage/`
   setImage(`${abcd}${user.data.user.avatar}`)
  //  console.log(`${abcd}${user.data.user.avatar}`)
  },[]);
//   useEffect(()=>{
//     console.log(user.data.user.avatar)
//    },[user])
   
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    reference.current.click();
  };
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password === userData.confirm_password) {
      console.log({...userData,...image});
      setUserData({
        email: "",
        password: "",
        confirm_password: "",
        phone: "",
        locale: ""
      });
      setImage({});
    }
  };
  const handleClear = () => {
    setUserData({ ...userData, name: "" });
  };
  const handleBack = () => {
    navigate("/")
  }

  return (
    <Form className="main_user_page" onSubmit={handleSubmit}>
      <div className="user_div">
        <div className="main_image_user">
          <img src={image} className="photo" alt="" /> 
        </div>
          <div className="data_users">
            <div className="back-btn" onClick={handleBack}>
              <img src={backarrow} alt="backarrow" />
            </div>
          </div>
        <div className="edit_profile">
          <h2>View Profile</h2>
          <div className="circled_user">
          <img src={image} className="photo_main" alt="" /> 
            {/* <img src={photo} className="photo_main" alt="" /> */}
            {/* <div className="camera_img" onClick={handleClick}>
              <img src={camera} className="camera" alt="" />
            </div> */}
          </div>
          <div className="users_name">
            {/* <input
              type="text"
              name="name"
              // onChange={handleChange}
              value={userData.name}
            /> */}
            <h2>{userData.name}</h2>
            {/* {userData?.name?.length > 0 && (
              <img src={close} alt="" onClick={handleClear} />
            )} */}
          </div>
        </div>
      </div>
      <input
        type="file"
        ref={reference}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <Container>
        <div>
        <TextField
            placeholder="name"
            // name="email"
            value={userData.name}
            // onChange={handleChange}
            type="name"
          />
          <TextField
            placeholder="abcd@gmail.com"
            name="email"
            value={userData.email}
            // onChange={handleChange}
            type="email"
          />
          {/* <TextField
            placeholder="phone"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            type="phone"
          /> */}
          {/* <TextField
            placeholder="Type Password......"
            name="password"
            value={userData.password}
            onChange={handleChange}
            type="password"
          />
          <TextField
            placeholder="Retype Password......"
            name="confirm_password"
            value={userData.confirm_password}
            onChange={handleChange}
            type="password"
          /> */}
          <TextField
            placeholder="ABC xyz"
            name="locale"
            value={userData.locale}
            // onChange={handleChange}
          />
          {/* <div className="main_btns">
            <Button type="submit">Save</Button>
          </div> */}
        </div>
      </Container>
    </Form>
  );
}

export default ProfileMain;
