import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const url="http://localhost:8084/customers";

export default function Registration() {
  const {register, handleSubmit, formState: { errors } } = useForm();
  const navigate  = useNavigate();

  const onSubmit = (data) => {
    axios.post(`${url}`,data)
      .then(() => {
        navigate("/userlogin")
      })
   
  };
  
  return (
    <React.Fragment>
      <p className="title">Registration Form</p>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email", { required: true })} placeholder="Email"/>
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
        <input type="password" {...register("password", { required: true })} placeholder="Password"/>
        {errors.password && <span style={{ color: "red" }}>
        *Password* is mandatory </span>}
        <input type="text" {...register("name", { required: true })} placeholder="Name"/>
        {errors.name && <span style={{ color: "red" }}>
        *Name* is mandatory </span>}
        <input type="text" {...register("contact")} placeholder="Contact"/>
        <input type="text" {...register("address")} placeholder="Address"/>
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }}/>
      </form>
    </React.Fragment>
  );
}