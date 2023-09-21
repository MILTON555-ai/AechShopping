import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Fashion from "./component/fashion";
import Electronics from "./component/electronics";
import Cart from "./component/cart";
import LogIn from "./component/login";
import { useState } from "react";
import Error from "./component/404";
import Men from "./component/men";
import Women from "./component/women";
import Kids from "./component/kids";

function App() {
  let [cart,setCart] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/fashion/*" element={<Fashion cart={cart} setCart={setCart}/>}/>
          <Route path="/electronics" element={<Electronics cart={cart} setCart={setCart}/>}/>
          <Route path="/men" element={<Men cart={cart} setCart={setCart} />}/>
          <Route path="/women" element={<Women cart={cart} setCart={setCart} />}/>
          <Route path="/kids" element={<Kids cart={cart} setCart={setCart} />}/>

          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route path="/" element={<LogIn/>}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

