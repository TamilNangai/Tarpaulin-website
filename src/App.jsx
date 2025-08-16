import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Contactpage from "./Contactpage"
import Aboutpage from "./Aboutpage"
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        {/* <Route path="/Product" element={<Product />} /> */}
        <Route path="/Contactpage" element={<Contactpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
