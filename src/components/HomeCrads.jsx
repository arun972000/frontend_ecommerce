/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./card.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetailModal from './ProductInfo';
import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';

function HomeCards({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch({ type: 'UPDATE_DATA', payload: item });
    toast.success('Item added to cart', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  return (
<>

      <Card className="shadow p-3 mb-5 bg-white rounded text-center" style={{ width: "18rem", position: "relative" }}>
        <div className="image-container">
          <Card.Img variant="top" src={item.images[0]} width="200" height="200" />
          <div className="top-right-box"></div>
          <div className="shine-overlay" style={{ position: "absolute", top: 3, right: 4 }}>
            <span style={{ color: "black" }}><b>{item.discountPercentage}% OFF</b></span>
          </div>
        </div>
        <Card.Body>
          <Card.Title className="text-primary">{item.title.slice(0, 15)}</Card.Title>
          <Card.Text>
            Rs. {item.price * 80}
          </Card.Text>
          <IconButton color="primary" onClick={handleShow} aria-label="add to shopping cart">
          <VisibilityIcon />
          </IconButton>
          <IconButton color="primary" onClick={addToCart} aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Card.Body>
      </Card>
      <ProductDetailModal show={show} onHide={handleClose} product={item} />
  

  </>
  );
}

export default HomeCards;