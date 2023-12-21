import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';

import { BeUrl } from "../Url";
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';



export default function ReviewPage() {
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const data = useSelector(state => state.cartReducer.cart)
  const onRemoveItem = (index) => {
    dispatch({
      type: "REMOVE_DATA",
      payload: index,
    });
  }
  const onEmptyCart = () => {

    dispatch({
      type: "EMPTY_CART",
    });

  }

  const onContinueShopping = () => {
    navigate("/")
  }
  const total = data.reduce((acc, val) => acc + val.price, 0)
  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51OM62mSFK9aYcAmKNRgmyDmuPWcF8vpA9Lwd52rRWyZ9nzWmXOvO5iotgJTxhwaRL7lEaYYUKHgFpKSE0NqcoyAn00PSldvdw8");

    const body = {
      products: data
    }
    const headers = {

      "Content-Type": "application/json"
    }
    const response = await fetch(`${BeUrl}/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id

    });


    if (result.error) {
      console.log(result.error);
    }
  }

  return (
    <div className="container">
   
      <div>
        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <Button variant="danger" onClick={onEmptyCart}>
            Empty Cart
          </Button>
        </div>
       
        <h2>Items in Cart</h2>
        {data.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>1</td>
                  <td>₹ {item.price *80}</td>
                  <td>
                    <Button variant="danger" onClick={() => onRemoveItem(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No items in the cart</p>
        )}

        {data.length > 0 && (
          <div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <Button variant="primary" onClick={onContinueShopping} style={{ marginRight: '10px' }}>
                Continue Shopping
              </Button>
              <Button variant="success" onClick={makePayment}>
                Checkout
              </Button>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <strong>Grand Total: ${total}</strong>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}