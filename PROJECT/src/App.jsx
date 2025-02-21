import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Nav from "./components/nav";
import "./App.css";
import Registration from "./components/SignUp";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;