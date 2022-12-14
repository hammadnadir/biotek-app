import React from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { book, edit, home1, logout, usersss } from "../../../assets";
import { logoutRequest } from "../../../redux/auth";
import { getCurrentUser } from "../../../utils";
import "./styles.scss";

function User({ show, setShow }) {
  const dispatch = useDispatch();
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutRequest());
    // handleClose();
  };
  const handleHome = () => {
    navigate("/");
    setShow(false);
  };
  console.log(user.data.user.avatar);

  return (
    <div className="user_details_data">
      <div className="user_account">
        <Link to="/edit_profile">
          <div className="main_user_data">
            <img src={`${`https://www.biotecherp.work/public/storage/`}${user?.data?.user?.avatar}`} alt="" />
            <div className="user_name">
              {/* <h5>Abdullah Ali</h5> */}
              <h5>{`${user.data.user.name}`}</h5>
              <p>{user.data.user.email}</p>
            </div>
          </div>
        </Link>
        {/* <div className="edit_user_main">
            <div className="icon_img">
              <img src={edit} alt="img" />
            </div>
            <h4>Edit Profile</h4>
          </div> */}
      </div>
      {/* <Link to="/"> */}
      <div className="user_home" onClick={handleHome}>
        <div className="icon_img">
          <img src={home1} alt="img" />
        </div>
        <h4>Home</h4>
      </div>
      {/* </Link> */}
      <div className="user_logout" onClick={handleLogout}>
        <div className="icon_img">
          <img src={logout} alt="img" />
        </div>
        <h4>Log out</h4>
      </div>
    </div>
  );
}

export default User;
