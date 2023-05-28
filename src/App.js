import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Productdetails from "./pages/ProductDetails";
import OrderProduct from "./pages/OrderProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productdetails" element={<Productdetails/>}/>
          <Route path="/orderproduct" element={<OrderProduct/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
