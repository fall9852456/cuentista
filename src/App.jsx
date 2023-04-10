import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product';
import Category from './pages/category';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products">
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="id/:productId" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>  );
}

export default App

