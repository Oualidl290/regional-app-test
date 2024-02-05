import React from 'react';
import './App.css'
import Card from './components/card';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import { FiHome } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";

function App() {
  return (
    <>
    <div className="listing">
        <div className="items">
          <div className="routing">
            <Link to="/home"><FiHome size={40}/></Link>
          </div>
          <div className="routing">
            <Link to="/card"><LuShoppingCart size={40}/></Link>

          </div>
        </div>
    </div>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/card" element={<Card />} />
    </Routes>
    </>
  )
}

export default App
