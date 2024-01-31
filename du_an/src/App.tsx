import React from "react";
import "./App.css";
import Log from "./login/Log";

import { Routes, Route } from "react-router-dom";
import Forget from "./login/Foget";
import DaMK from "./login/DatlaiMK";
import Navbar from "./quanly/Navbar";
import DoiMK from "./quanly/DoiMK";

function App() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflowY: "auto",
          backgroundColor: "#1E1E2E",
        }}
      >
        <Routes>
          <Route path="/" element={<Log />}></Route>
          <Route path="/login" element={<Log></Log>}></Route>
          <Route path="/foget" element={<Forget />}></Route>
          <Route path="/Datlaimatkhau" element={<DaMK />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/navbar/DoiMK" element={<DoiMK />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
