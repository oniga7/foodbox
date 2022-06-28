import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NoImage from '../../img/noimage.jpg'
import axios from 'axios';

const cartURL = "http://localhost:8084/carts"

export default function DishCard({product}) {

  const handleAddCart = (prod) => {
    let cart = {};
    cart.id = prod.id;
    cart.quantity = 1;
    cart.price = prod.price;
    cart.product = prod;
    axios.post(`${cartURL}`,cart)
      .then(res => {
        // console.log(res)
      })
  }

  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        title={product.name}
        subheader={product.category}
      />
      <CardMedia
        component="img"
        height="194"
        image={NoImage}
        alt="No img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {product.discount > 0 ?
        <>
          <div style={{ textDecorationLine: 'line-through', marginRight: '5px' }}>{`${product.actualPrice}$`}</div>
          <div>{`${product.price}$`}</div>
        </> :
        <div>{`${product.price}$`}</div>
        }
        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleAddCart(product)}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}