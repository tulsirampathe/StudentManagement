import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home1 from "./components/Home1";
import Login1 from "./components/Login1";
import Update from "./components/Update";

function App() {
  return (
    <div>
      <div className="mainContainer"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/Login1" element={<Login1 />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
