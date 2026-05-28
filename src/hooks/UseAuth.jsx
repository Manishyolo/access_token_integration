import React from "react";
import { useForm } from "react-hook-form";
import AxiosInstance from "../config/AxiosConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authReducer";

const UseAuth = () => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async (data) => {
    try {
      const res = await AxiosInstance.post("/api/user/login", data);
      console.log("response from login", res);
      dispatch(addUser(res.data.user));
      
    } catch (error) {
      console.log("error from login", error);
    }

    console.log(data);
  };

  const onRegister = async (data) => {
    try {
      const res = await AxiosInstance.post("/api/user/register", data);

      console.log("response from register", res);
    } catch (error) {
      console.log("error from register", error);
    }
  };
  return {
    register,
    handleSubmit,
    errors,
    onLogin,
    onRegister,
  };
};

export default UseAuth;
