import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Nav from "./components/nav";
import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;