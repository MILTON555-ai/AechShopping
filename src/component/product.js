// import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Products = (props) => {
  let product = props.product;
  let cart = props.cart;
  let setCart = props.setCart;

  return (
    <div className="card-item col-lg-3 col-md-6">
      <Card className="mb-5 py-2 card" style={{ width: "18rem" }}>
        <Card.Img className="card-image" variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>₹ {product.price}</Card.Text>
          {cart.includes(product) ? (
            <Button
              variant="dark"
              onClick={() => {
                setCart(cart.filter((c) => c.id !== product.id));
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              variant="dark"
              onClick={() => {
                setCart([...cart, product]);
              }}
            >
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
