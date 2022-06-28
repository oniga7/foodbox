import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios'
import AdminTable from "./AdminTable";
import { columns } from "../../constants/columns";
import { Box } from "@mui/material";

const productsURL = "http://localhost:8084/products";

export default function Admin() {
  const [products, setProducts] = useState([])

  const getProducts = useCallback(() => {
    axios.get(`${productsURL}/Admin`)
    .then(res => {
      setProducts(res.data)
    })
  }, [])

  useEffect(() => {
    getProducts();  
  }, [getProducts])

  const addRow = (newData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            newData.id = Math.floor(Math.random() * 100000);
            newData.imagepath = '';
            newData.price = parseFloat(newData.price)
            newData.actualPrice = parseFloat(newData.actualPrice)
            newData.discount = parseFloat(newData.discount)
            axios
            .post(`${productsURL}`, newData)
            .then(() => {
              getProducts();
            })        
        }, 1000);
        resolve()
      })
  }

  const updateRow = (newData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = newData.id;
            newData.price = parseFloat(newData.price)
            newData.actualPrice = parseFloat(newData.actualPrice)
            newData.discount = parseFloat(newData.discount)
            axios.put(`${productsURL}/${id}`, newData)
            .then(() => {
              getProducts();
            })
          
          resolve()
        }, 1000)
      })
  }

  const deleteRow = (oldData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = oldData.id;
            axios.delete(`${productsURL}/${id}`)
            .then(() => {
              getProducts();
            })
          
          resolve()
        }, 1000)
      })
  }

  const actions={
    onRowAdd: (newData) => addRow(newData),
    onRowUpdate: (newData) => updateRow(newData),
    onRowDelete: (oldData) => deleteRow(oldData),
  }

 return (
    <Box sx={{ mx: 'auto', mt:5 }}>
       <AdminTable
            columns={columns}
            title={'PRODUCTS'}
            data={products}
            actions={actions}
        />
    </Box>
 )
}