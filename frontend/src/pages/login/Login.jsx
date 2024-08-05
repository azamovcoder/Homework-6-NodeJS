import "./Login.scss";

import { NavLink, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect } from "react";

import { setToken } from "../../context/slices/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import useGetValue from "../../hook/useGetValue";
import { useSignInMutation } from "../../context/api/userApi";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [signIn, { data, isError, error, isSuccess }] = useSignInMutation();
  const { user, handleChange } = useGetValue(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && data) {
      const token = data.token; // Adjust according to the actual data structure
      dispatch(setToken(token));
      navigate("/home");
      toast.success("Welcome");
    }
  }, [isSuccess, data, dispatch, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(user);
  };
  useEffect(() => {
    if (isError) {
      toast.error("Username or Password is wrong");
    }
  });
  return (
    <Fragment>
      <form onSubmit={handleLogin} action="" className="form_login">
        <div className="df">
          <label htmlFor="">Username</label>
          <input
            value={user.username}
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Enter Username"
          />
        </div>
        <div className="df">
          <label htmlFor="">Password</label>
          <input
            value={user.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="df">
          <p>Have not account</p>
          <NavLink to={"/register"}>Register</NavLink>
        </div>
        <button>Log In</button>
      </form>
    </Fragment>
  );
};

export default Login;
