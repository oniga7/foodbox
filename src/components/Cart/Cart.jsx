import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import OrderSummary from "./OrderSummary";

const cartURL = "http://localhost:8084/carts"

export default function Cart({customerEmail}) {
    const [carts, setCarts] = useState([])
    const [open, setOpen] = React.useState(false);

    const getCarts = useCallback(() => {
        axios.get(`${cartURL}`)
        .then(res => {
            setCarts(res.data)
        })
      }, [])
    
      useEffect(() => {
        getCarts();  
     }, [getCarts])

     const handleAdd = (cart) => {
        axios.put(`${cartURL}/add/${cart.id}`, cart)
        .then(() => {
            getCarts();
        })
     }

     const handleRemove = (cart) => {
        axios.put(`${cartURL}/minus/${cart.id}`, cart)
        .then(() => {
            getCarts();
        })
    }

    const handleDelete = (cart) => {
        axios.delete(`${cartURL}/${cart.id}`, cart)
        .then(() => {
            getCarts();
        })
    }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
    const totalPrice = carts.reduce((total, current) => total += current.price, 0)

  return (
    <Box sx={{ flexGrow: 1, mt:2}}>
      <p>Your Cart</p>
      <Grid container spacing={2} sx={{ mb:2 }}>
      <Grid item xs={3}>Item</Grid>
      <Grid item xs={3}>Quantity</Grid>
      <Grid item xs={3}>Price</Grid>
      <Grid item xs={3}>Actions</Grid>
      </Grid>
      <Grid container spacing={2}>
        {carts.map((cart, i) => {
            return (
              <>
                <Grid item xs={3}>{cart.product.name}</Grid>
                <Grid item xs={3}>{cart.quantity}</Grid>
                <Grid item xs={3}>{cart.price}</Grid>
                <Grid item xs={3}>
                  <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleRemove(cart)}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleAdd(cart)}>
                    <AddBoxIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleDelete(cart)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </>
            )
        })}
      </Grid>
      <Grid container spacing={2} sx={{ mt:2 }}>
      <Grid item xs={3}>Total price:</Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>{totalPrice}</Grid>
      <Grid item xs={3}></Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt:10 }}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Button variant="contained" onClick={handleOpen}>Order Summary</Button>
      </Grid>
      <Grid item xs={3}></Grid>
      </Grid>
      <OrderSummary
        open={open}
        handleClose={handleClose}
        email={customerEmail}
        carts={carts}
        totalPrice={totalPrice}
      />
    </Box>
  );
}