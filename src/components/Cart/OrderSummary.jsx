import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function OrderSummary({open, handleClose, email, carts, totalPrice}) {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <p>Your Order</p>
          <Grid container spacing={2} sx={{ mb:2 }}>
          <Grid item xs={4}>Item</Grid>
          <Grid item xs={4}>Quantity</Grid>
          <Grid item xs={4}>Price</Grid>
          </Grid>
          <Grid container spacing={2}>
            {carts.map((cart, i) => {
                return (
                  <>
                    <Grid item xs={4}>{cart.product.name}</Grid>
                    <Grid item xs={4}>{cart.quantity}</Grid>
                    <Grid item xs={4}>{cart.price}</Grid>
                  </>
                )
            })}
          </Grid>
          <Grid container spacing={2} sx={{ mt:2 }}>
          <Grid item xs={4}>Total price:</Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>{totalPrice}</Grid>
          </Grid>
          </Box>
        </Modal>
      </div>
    );
  }