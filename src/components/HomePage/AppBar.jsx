import React, { useState, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const productsURL = "http://localhost:8084/products"

export default function Bar({setData}) {
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  let t;

  const onProductChange = useCallback((event) => {
    clearTimeout(t);
    const newValue = event.target.value;
    setProduct(newValue);
    t = setTimeout(() => {
      axios.get(`${productsURL}/search/${newValue}`)
      .then(res => {
        setData(res.data)
    })
    }, 500);
    return () => clearTimeout(t);
  }, []);

  const handleOnClick = () => {
    navigate("/")
  }

  return (
    <Box >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOnClick}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <SearchIcon />
            <input
              type="text"
              value={product}
              onChange={onProductChange}
              placeholder='Search'/>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FoodBox
          </Typography>
          <Link
            to="/cart"
            component="button"
            style={{ textDecoration: 'none', color:"white", fontSize:'14' }}
            >
            CART
          </Link>
          <Link
            to="/signin"
            component="button"
            style={{ textDecoration: 'none', color:"white", fontSize:'14', marginLeft:"10px" }}
            >
            REGISTER
          </Link>
          <Link
            to="/userlogin"
            component="button"
            style={{ textDecoration: 'none', color:"white", fontSize:'14', marginLeft:"10px" }}
            >
            USER LOGIN
          </Link>
          <Link
            to="/login"
            component="button"
            style={{ textDecoration: 'none', color:"white", fontSize:'14', marginLeft:"10px" }}
            >
            ADMIN LOGIN
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}