import { useEffect, useState } from "react";
import Products from "./product";
import '../styles/electronics.css'

const Electronics = ( props) => {
 let cart = props.cart;
  let setCart = props.setCart;
 

    let [items,setItems] = useState([])
  
    useEffect(() => {
        let fetchData = async() =>{
          let response = await fetch("http://localhost:2000/electronics");
          let resData = await response.json();
          setItems(resData);

        }
        fetchData();
    },[])

    

console.log(cart);
  return (
    <div className="electronics row m-5">
    
      {items.map((product)=>(
    <Products product={product} cart={cart} setCart={setCart} key={product.id}/>

    ))}

    </div>
  );
};

export default Electronics;
