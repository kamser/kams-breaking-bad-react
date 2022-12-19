import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Layouts/navbar/navbar'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Episodes from './Pages/Episodes/Episodes';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="episodes" element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;
