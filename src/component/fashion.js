import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Products from "./product";
import '../styles/fashion.css'
import Women from "./women";
import Kids from "./kids";


const Fashion = (props) => {
    let cart = props.cart;
    let setCart = props.setCart;
   
  
      let [items,setItems] = useState([])
    
      useEffect(() => {
          let fetchData = async() =>{
            let response = await fetch("http://localhost:2000/fashion");
            let resData = await response.json();
            setItems(resData);
  
          }
          fetchData();
      },[])
  
      
  
  console.log(cart);
    return (
        

      <div className="fashion row m-5">

      <Routes>
        <Route path="/fashion/women" element={<Women cart={cart} setCart={setCart} />}/>
        <Route path="/fashion/kids" element={<Kids cart={cart} setCart={setCart} />}/>
      </Routes>

<div className="categories">
      <ul>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>
    </div>

        {items.map((product)=>(
      <Products product={product} cart={cart} setCart={setCart} key={product.id}/>
  
      ))}
  
      </div>
        
     );
}
 
export default Fashion;