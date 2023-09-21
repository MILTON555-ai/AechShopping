import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Products from "./product";

import { Button, Card } from "react-bootstrap";

const Kids = (props) => {
  let cart = props.cart;
  let setCart = props.setCart;
  

  let [items, setItems] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:2000/kids");
      let resData = await response.json();
      setItems(resData);
    };
    fetchData();
  }, []);

  return (
    <div className="men ">
    
      <div className="categories pb-2">
        <ul>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
      </div>
      <h1 style={{"text-align":"center"}}>KIDS</h1>
      <div className="row  pt-4">
        
          {items.map((product) => (
            <div className="item col-lg-3 col-md-6">
            <Card className="mb-5 py-2 card" style={{ width: "18rem" }}>
              <Card.Img
                className="card-image"
                variant="top"
                src={product.img}
              />
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
              </Card.Body>{" "}
              {/* <Products product={product} cart={cart} setCart={setCart} key={product.id}/> */}
            </Card>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Kids;
