import "./Users.scss";

import React, { Fragment, useState } from "react";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../context/api/userApi";

import NotFemale from "../../assets/not-fml.jpeg";
import NotImg from "../../assets/not.jpg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { logout } from "../../context/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UsersFront = () => {
  const dispatch = useDispatch();
  const [skip, setPage] = useState(1);
  const limit = 4;

  const { data, isLoading } = useGetUsersQuery({ limit, skip });
  const [deleteUserById] = useDeleteUserMutation();

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <Fragment>
      <div className="container">
        <div className="user__cards ">
          {data?.payload?.map((user) => (
            <div key={user?.id} className="user__cards__card">
              <div className="user__cards__card__img">
                <img
                  src={user?.gender === "male" ? NotImg : NotFemale}
                  alt="user.img"
                />
              </div>
              <div className="user__cards__card__info">
                <h3>
                  {user?.fname} {user?.lname}
                </h3>
                <div className="df">
                  <p>{user?.username}</p>
                  <span>{user?.budget}$</span>
                </div>
                <div className="df">
                  <p>{user?.gender}</p>
                  <button
                    onClick={() => {
                      deleteUserById(user?._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="user__pagination container">
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(data?.total / limit)}
              page={skip}
              onChange={handleChange}
              color="primary"
            />
          </Stack>
        </div>
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </Fragment>
  );
};

export default UsersFront;
