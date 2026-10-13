import './App.css'
import styles from './App.module.css' 
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
