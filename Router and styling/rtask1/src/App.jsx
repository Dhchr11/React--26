import React from "react";

import "./App.css";
// import Router from './Router'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";
import Contactpage from "./Contactpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />

          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
