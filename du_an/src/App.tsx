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
import ChinhSuaThongTin from "./p3/ChinhSuaThongTin";
import ChiTietHopDong2 from "./p3/ChiTietHopDong2";
import ThemHopDongUyQuyen from "./p3/ThemHopDongUyQuyen";
import ThemHopDongUyQuyen2 from "./p3/ThemHopDongUyQuyen2";
import ThemBanGhi from "./p3/ThemBanGhi";
import DanhSachHopDongKhaiThac from "./p3.1/DanhSachHopDongKhaiThac";
import ChiTiepHopDongKhaiThac from "./p3.1/ChiTiepHopDongKhaiThac";
import SaoChepHopDong from "./p3.1/SaoChepHopDong";
import ChinhSuaHopDong from "./p3.1/ChinhSuaHopDong";
import ThemHopDongMoi from "./p3.1/ThemHopDongMoi";
import DanhSachLichPhat from "./LapLichPhat/DanhSachLichPhat";
import ChiTietLichPhat from "./LapLichPhat/ChiTietLichPhat";
import ChinhSuaLichPhat from "./LapLichPhat/ChinhSuaLichPhat";
import ApLichChoThietBi from "./LapLichPhat/ApLichChoThietBi";
import ThemLichPhatMoi from "./LapLichPhat/ThemLichPhatMoi";
import DonViSuDung from "./p6/DonViSuDung";
import ChiTietP6 from "./p6/ChiTietP6";
import ThemNguoiDung from "./p6/ThemNguoiDung";
import ThongTinNguoiDung from "./p6/ThongTinNguoiDung";
import ChinhSuaTTNguoiDung from "./p6/ChinhSuaTTNguoiDung";
import DanhSachThietBi from "./p8/DanhSachThietBi";
import P8ThemThietBiMoi from "./p8/P8ThemThietBiMoi";
import ChiTietThieBiP8 from "./p8/ChiTietThieBiP8";
import DanhSachDoiTacUyQuyen from "./p7/DanhSachDoiTacUyQuyen";
import CapNhatThongTin from "./p7/CapNhatThongTin";
import QuanLyPhanPhoiDoanhThu from "./p10/QuanLyPhanPhoiDoanhThu";
import ChiTietDoanhThu from "./p10/ChiTietDoanhThu";
import LichSuDoiSoatDoanhThu from "./P11/LichSuDoiSoatDoanhThu";
import P11ChiTietDoanhThu from "./P11/P11ChiTietDoanhThu";
import DaChotDoiSoat from "./P11/DaChotDoiSoat";
import DoanhThuHopDongKhaiThac from "./P11.1/DoanhThuHopDongKhaiThac";
import BaoCaoChiTiet from "./P11.1/BaoCaoChiTiet";
import Thang3BaoCao from "./P11.1/Thang3BaoCao";
import LichSuDongBoThietBi from "./P11.1/LichSuDongBoThietBi";
import ChartBaoCaoDoanhThu from "./P11.1/ChartBaoCaoDoanhThu";
import PhanQuyenNguoiDung from "./p12/PhanQuyenNguoiDung";
import PhanQuyenCapNhatTTNguoiDung from "./p12/PhanQuyenCapNhatTTNguoiDung";
import P12ThemNguoiDungMoi from "./p12/P12ThemNguoiDungMoi";
import VaiTroNguoiDungTrenHeThong from "./p12/VaiTroNguoiDungTrenHeThong";
import PhanQuyenNguoiDungCapNhat from "./p12/PhanQuyenNguoiDungCapNhat";
import ThemVaiTroNguoiDung from "./p12/ThemVaiTroNguoiDung";
import CaiDatCauHinh from "./P13/CaiDatCauHinh";
import CaiDatCauHinhThongTinTacPham from "./P13/CaiDatCauHinhThongTinTacPham";
import ChinhSuaThongTinTacPhamP13 from "./P13/ChinhSuaThongTinTacPhamP13";
import QuanLyLoaiHopDong from "./P13/QuanLyLoaiHopDong";
import CanhBaoHetHanTacPham from "./P13/CanhBaoHetHanTacPham";
import LoaiHopDong3 from "./P13/LoaiHopDong3";
import DoiSoatTheoThang from "./P13/DoiSoatTheoThang";
import P13ThongTinTacPham from "./P13/P13ThongTinTacPham";
import TaiApp from "./P14/TaiApp";
import Feedback from "./P14/Feedback";
import FeedbackAdmin from "./P14/FeedbackAdmin";
import FeedbackThu from "./P14/FeedbackThu";
import HuongDanSuDung from "./P14/HuongDanSuDung";
import ThemBanGhiPlayList from "./P5/ThemBanGhiPlayList";
import TestNavbarAn from "./test/TestNavbarAn";
import TestCheckBoxKichHoat from "./test/TestCheckBoxKichHoat";

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
          <Route
            path="/ChinhSuaThongTin"
            element={<ChinhSuaThongTin></ChinhSuaThongTin>}
          ></Route>
          <Route path="/ChiTietHopDong2" element={<ChiTietHopDong2 />}></Route>
          <Route
            path="/ThemHopDongUyQuyen"
            element={<ThemHopDongUyQuyen />}
          ></Route>
          <Route
            path="/ThemHopDongUyQuyen2"
            element={<ThemHopDongUyQuyen2 />}
          ></Route>
          <Route path="/ThemBanGhi" element={<ThemBanGhi />}></Route>
          <Route
            path="/DanhSachHopDongKhaiThac"
            element={<DanhSachHopDongKhaiThac />}
          ></Route>
          <Route
            path="/ChiTiepHopDongKhaiThac"
            element={<ChiTiepHopDongKhaiThac />}
          ></Route>
          <Route path="/SaoChepHopDong" element={<SaoChepHopDong />}></Route>
          <Route path="/ChinhSuaHopDong" element={<ChinhSuaHopDong />}></Route>
          <Route path="/ThemHopDongMoi" element={<ThemHopDongMoi />}></Route>
          <Route
            path="/DanhSachLichPhat"
            element={<DanhSachLichPhat />}
          ></Route>
          <Route path="/ChiTietLichPhat" element={<ChiTietLichPhat />}></Route>
          <Route
            path="/ChinhSuaLichPhat"
            element={<ChinhSuaLichPhat />}
          ></Route>
          <Route
            path="/ApLichChoThietBi"
            element={<ApLichChoThietBi />}
          ></Route>
          <Route path="/ThemLichPhatMoi" element={<ThemLichPhatMoi />}></Route>
          <Route path="/DonViSuDung" element={<DonViSuDung />}></Route>
          <Route path="/ChiTietP6" element={<ChiTietP6 />}></Route>
          <Route path="/ThemNguoiDung" element={<ThemNguoiDung />}></Route>
          <Route
            path="/ThongTinNguoiDung"
            element={<ThongTinNguoiDung />}
          ></Route>
          <Route
            path="/ChinhSuaTTNguoiDung"
            element={<ChinhSuaTTNguoiDung />}
          ></Route>
          <Route path="/DanhSachThietBi" element={<DanhSachThietBi />}></Route>
          <Route
            path="/P8ThemThietBiMoi"
            element={<P8ThemThietBiMoi />}
          ></Route>
          <Route path="/ChiTietThieBiP8" element={<ChiTietThieBiP8 />}></Route>
          <Route
            path="/DanhSachDoiTacUyQuyen"
            element={<DanhSachDoiTacUyQuyen />}
          ></Route>
          <Route path="/CapNhatThongTin" element={<CapNhatThongTin />}></Route>
          <Route
            path="/QuanLyPhanPhoiDoanhThu"
            element={<QuanLyPhanPhoiDoanhThu />}
          ></Route>
          <Route path="/ChiTietDoanhThu" element={<ChiTietDoanhThu />}></Route>
          <Route
            path="/LichSuDoiSoatDoanhThu"
            element={<LichSuDoiSoatDoanhThu />}
          ></Route>
          <Route
            path="/P11ChiTietDoanhThu"
            element={<P11ChiTietDoanhThu />}
          ></Route>
          <Route path="/DaChotDoiSoat" element={<DaChotDoiSoat />}></Route>
          <Route
            path="/DoanhThuHopDongKhaiThac"
            element={<DoanhThuHopDongKhaiThac />}
          ></Route>
          <Route path="/BaoCaoChiTiet" element={<BaoCaoChiTiet />}></Route>
          <Route path="/Thang3BaoCao" element={<Thang3BaoCao />}></Route>
          <Route
            path="/LichSuDongBoThietBi"
            element={<LichSuDongBoThietBi />}
          ></Route>
          <Route
            path="/ChartBaoCaoDoanhThu"
            element={<ChartBaoCaoDoanhThu />}
          ></Route>
          <Route
            path="/PhanQuyenNguoiDung"
            element={<PhanQuyenNguoiDung />}
          ></Route>
          <Route
            path="/PhanQuyenCapNhatTTNguoiDung"
            element={<PhanQuyenCapNhatTTNguoiDung />}
          ></Route>
          <Route
            path="/P12ThemNguoiDungMoi"
            element={<P12ThemNguoiDungMoi />}
          ></Route>
          <Route
            path="/VaiTroNguoiDungTrenHeThong"
            element={<VaiTroNguoiDungTrenHeThong />}
          ></Route>
          <Route
            path="/PhanQuyenNguoiDungCapNhat"
            element={<PhanQuyenNguoiDungCapNhat />}
          ></Route>
          <Route
            path="/ThemVaiTroNguoiDung"
            element={<ThemVaiTroNguoiDung />}
          ></Route>
          <Route path="/CaiDatCauHinh" element={<CaiDatCauHinh />}></Route>
          <Route
            path="/CaiDatCauHinhThongTinTacPham"
            element={<CaiDatCauHinhThongTinTacPham />}
          ></Route>
          <Route
            path="/ChinhSuaThongTinTacPhamP13"
            element={<ChinhSuaThongTinTacPhamP13 />}
          ></Route>
          <Route
            path="/QuanLyLoaiHopDong"
            element={<QuanLyLoaiHopDong />}
          ></Route>
          <Route
            path="/CanhBaoHetHanTacPham"
            element={<CanhBaoHetHanTacPham />}
          ></Route>
          <Route path="/LoaiHopDong3" element={<LoaiHopDong3 />}></Route>
          <Route
            path="/DoiSoatTheoThang"
            element={<DoiSoatTheoThang />}
          ></Route>
          <Route
            path="/P13ThongTinTacPham"
            element={<P13ThongTinTacPham />}
          ></Route>
          <Route path="/TaiApp" element={<TaiApp />}></Route>
          <Route path="/Feedback" element={<Feedback />}></Route>
          <Route path="/FeedbackAdmin" element={<FeedbackAdmin />}></Route>
          <Route path="/FeedbackThu" element={<FeedbackThu />}></Route>
          <Route path="/HuongDanSuDung" element={<HuongDanSuDung />}></Route>
          <Route
            path="/ThemBanGhiPlayList"
            element={<ThemBanGhiPlayList />}
          ></Route>
          <Route path="/TestNavbarAn" element={<TestNavbarAn />}></Route>
          <Route
            path="/TestCheckBoxKichHoat"
            element={<TestCheckBoxKichHoat />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
