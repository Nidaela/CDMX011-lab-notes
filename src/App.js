import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Signup from "./Signup";
import Board from "./Board";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}
