import "../styles/cart.css";
import { useEffect, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Products from "./product";

const Cart = (props) => {
  let cart = props.cart;
  let setCart = props.setCart;

  let [total, setTotal] = useState([]);

  useEffect(() => {
    setTotal(cart.reduce((sum, curr) => sum + curr.price, 0));
  }, []);

  return (
    <div className="cart ">
      <div className="cart-product mt-3">
      {(cart.length == 0 )? (<h1 style={{"textAlign":"center"}}>cart is empty</h1>) : 
        (<h4 style={{"textAlign":"center"}}> Total item: {cart.length}</h4>)}
        <br />
        {cart.map((product) => (
          <ListGroup className="mx-4">
            <ListGroup.Item>
              <Row>
                <Col>
                  <img className="cart-img" src={product.img} alt="" />
                </Col>
                <Col>
                  <p>{product.title}</p>
                </Col>
                <Col>
                  <p>{product.price}</p>
                </Col>
                <Col>
                  <Button
                    variant="dark"
                    onClick={() => {
                      setCart(cart.filter((c) => c.id !== product.id));
                    }}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
      <div className="total bg-dark p-5">
        <h3>Total {cart.length} item</h3>
        <h4>Total : ₹ {total}</h4>
         <Button variant="light" className="checkout-btn">Checkout</Button>
       
      </div>
    </div>
  );
};

{
  /* <div className="cart-item p-5 mb-2">
            <div className="cart-img me-4  ">
              <img src={product.img} height="100" alt="" />
            </div>
            <div className="details">
              <h5>{product.title}</h5>
              <p>₹ {product.price}</p>
              <Button
                variant="dark"
                onClick={() => {
                  setCart(cart.filter((c) => c.id !== product.id));
                }}
              >
                Remove
              </Button>
            </div>
          </div> */
  {
    /* <Products product={product} key={product.id} cart={cart} setCart={setCart}/> */
  }
}

export default Cart;
