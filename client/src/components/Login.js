import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Login = () => {

const handleSubmit = e => {
  e.preventDefault();
  axiosWithAuth()
  .post('/login', user)
  .then(res => {
    localStorage.setItem('token', res.data.payload);
    props.history.push('/bubblepage')
  })
  .catch(err => {
    console.error(err);
  })
}

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
