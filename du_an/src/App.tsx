import React from "react";
import "./App.css";
import Log from "./login/Log";

import { Routes, Route } from "react-router-dom";
import Forget from "./login/Foget";
import DaMK from "./login/DatlaiMK";
// import Navbar from "./quanly/Navbar";
import DoiMK from "./quanly/DoiMK";
import DanhSachHopDong from "./p3/DanhSachHopDong";
import ChiTietHopDong from "./p3/ChiTietHopDong";
import Trang1 from "./quanly/Navbar";
import SuaThongTin from "./quanly/suathongtin";
import LoiLink from "./login/loilink";
import KhoiPhucMK from "./login/khoiphucmk";
import TacPhamUyQuyen from "./p3/TacPhamUyQuyen";
import ChinhSuaTacPham from "./p3/ChinhSuaTacPham";

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
          <Route path="/KPMK" element={<KhoiPhucMK />}></Route>
          <Route path="/loilink" element={<LoiLink />}></Route>
          <Route path="/Datlaimatkhau" element={<DaMK />}></Route>
          <Route path="/navbar" element={<Trang1 />}></Route>
          <Route path="/navbar/DoiMK" element={<DoiMK />}></Route>
          <Route path="/DShopdong" element={<DanhSachHopDong />}></Route>
          <Route path="/suathongtin" element={<SuaThongTin />}></Route>
          <Route path="/ChiTietHopDong" element={<ChiTietHopDong />}></Route>
          <Route path="/TacPhamUyQuyen" element={<TacPhamUyQuyen />}></Route>
          <Route path="/ChinhSuaTacPham" element={<ChinhSuaTacPham />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
