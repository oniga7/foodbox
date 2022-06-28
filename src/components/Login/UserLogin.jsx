import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const url="http://localhost:8084/customers";

export default function UserLogin({setCustomerEmail}) {
  const [isLogged, setIsLogged] = useState(false)
  const navigate  = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    isLogged && navigate("/");
  }, [isLogged])

  const onSubmit = (data) => {
    axios.post(`${url}/${data.email}`,data)
      .then(res => {
        setIsLogged(res.data)
        if(res.data) setCustomerEmail(data.email)
      })
  };

  return (
    <div>
      <p className="title">Login Form</p>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email", { required: true })} placeholder="Email"/>
        {errors.email && <span style={{ color: "red" }}>
         *Email* is mandatory </span>}
        <input type="password" {...register("password", { required: true })} placeholder="Password"/>
        {errors.password && <span style={{ color: "red" }}>
         *Password* is mandatory </span>}
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }}/>
      </form>
    </div>
  );
}