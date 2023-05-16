import { BrowserRouter , Route,Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <div>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
