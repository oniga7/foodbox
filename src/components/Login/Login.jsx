import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const url="http://localhost:8084/admin"

export default function Login() {
  const [isAdmin, setIsAdmin] = useState(false)
  const navigate  = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    isAdmin && navigate("/admin");
  }, [isAdmin])

  const onSubmit = (data) => {
    axios.post(`${url}/${data.username}`,data)
      .then(res => {
        setIsAdmin(res.data)
      })
  };

  return (
    <div>
      <p className="title">Login Form</p>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="username" {...register("username", { required: true })} placeholder="Name"/>
        {errors.username && <span style={{ color: "red" }}>
         *Name* is mandatory </span>}
        <input type="password" {...register("password", { required: true })} placeholder="Password"/>
        {errors.password && <span style={{ color: "red" }}>
         *Password* is mandatory </span>}
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }}/>
        {!isAdmin && <span style={{ color: "red" }}>Invalid Credentials</span>}
      </form>
    </div>
  );
}