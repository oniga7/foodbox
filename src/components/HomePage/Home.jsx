import React, { useEffect, useState, useCallback } from "react";
import DishCard from "./DishCard";
import axios from "axios";
import "./Home.css"

const productsURL = "http://localhost:8084/products";

export default function Home({data}) {
   const [products, setProducts] = useState([])
   const [finalData, setFinalData] = useState([])

  const getProducts = useCallback(() => {
    axios.get(`${productsURL}/cust`)
    .then(res => {
      setProducts(res.data)
    })
  }, [])

  useEffect(() => {
   getProducts();  
 }, [getProducts])

 useEffect(() => {
   if(data.length > 0) setFinalData(data) 
   else setFinalData(products) 
 }, [data, products])

 return (
    <div className="home">
      {finalData.map((item, id) => {
         return <DishCard product={item} key={id}/>
      })}
    </div>
 )
}