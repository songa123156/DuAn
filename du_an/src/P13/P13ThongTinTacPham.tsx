import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const P13ThongTinTacPham = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let user = location.state && location.state.user;

  const [ThongBao1, setThongBao1] = useState("Đang kích hoạt");

  const handleCheck1 = () => {
    if (ThongBao1 === "Đang kích hoạt") {
      setThongBao1("Ngừng kích hoạt");
    } else setThongBao1("Đang kích hoạt");
  };

  const handleDangXuat = () => {
    navigate("/");
  };

  //   useEffect(() => {
  //     if (user === null) navigate("/");
  //   }, []);

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        {/* <div className="sidebar">
          <div className="logo">
            <img src="/img/logo.png" alt="Logo navbar" />
          </div>
          <ul>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Kho bản ghi
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Playlist
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Lập lịch phát
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Quản lý doanh thu
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Cài đặt
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Hỗ trợ
              </a>
            </li>
          </ul>
        </div> */}
        <Navbar></Navbar>

        <div>
          {/* <nav
            className="navbar"
            style={{
              width: "100%",
              justifyContent: "flex-end",
              marginRight: "75px",
              marginBottom: "16px",
              marginTop: "24px",

              height: "80px",
              // backgroundColor: "#1e1e2e",
              display: "inline-flex",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            <select
              style={{
                backgroundColor: "transparent",
                border: 0,
                color: "white",
                marginRight: 24,
              }}
            >
              <option value="vi" data-icon="VN">
                Tiếng Việt
              </option>
              <option value="en" data-icon="🇺🇸">
                English
              </option>
              <option value="ja" data-icon="🇯🇵">
                日本語
              </option>
              <option value="ko" data-icon="🇰🇷">
                한국어
              </option>
            </select>
            <div className="logo">
              <img
                src="/img/logo.png"
                alt="Icon"
                style={{ marginTop: "300%" }}
              />
            </div>
            <div className="login" style={{ color: "white" }}>
              <span>Welcome, {user}</span>
            </div>
          </nav> */}

          <div
            // className="container"
            style={{
              top: 86,
              marginTop: "10px",
              left: 229,
              position: "absolute",
            }}
          >
            <a
              className="parent-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Trang chủ
            </a>
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Cài đặt hệ thống
            </a>
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thông tin tác phẩm
            </a>
          </div>

          <div
            style={{
              width: 489,
              height: 48,
              top: 114,
              left: 229,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
            >
              Cài đặt hệ thống
            </p>
          </div>

          <div
            style={{
              width: "1611px",
              height: "750px",
              top: "186px",
              left: "229px",
              gap: "0",
              borderRadius: "16px ",
              position: "absolute",
              background: "#2F2F41B2",
            }}
          >
            <div
              style={{
                width: "278px",
                height: "24px",
                top: "40px",
                left: "40px",
                gap: "0",
                position: "absolute",
                fontWeight: "700",
                fontFamily: "Montserrat",
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#E5E5E5",
              }}
            >
              Cài đặt chu kỳ đối soát
            </div>

            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                top: "118px",
                left: "40px",
                gap: "8px",
                position: "absolute",
                color: "white",
              }}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Đối soát theo quý
                </label>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                top: "174px",
                left: "40px",
                gap: "8px",
                position: "absolute",
                color: "white",
              }}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Đối soát theo tháng
                </label>
              </div>
            </div>

            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                top: "230px",
                left: "72px",
                gap: "4px",
                position: "absolute",
                color: "white",
              }}
            >
              Ngày bắt đầu:
            </div>
            <input
              type="date"
              style={{
                width: "298px",
                height: "fit-content",
                top: "218px",
                left: "273px",
                padding: "11px 16px 13px 16px",
                gap: "0",
                borderRadius: "8px 0 0 0",
                border: "1px solid #727288",
                justifyContent: "space-between",
                position: "absolute",
                background: "#33334D",
                color: "white",
                opacity: "0.5",
              }}
            />

            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                top: "230px",
                left: "743px",
                gap: "4px",
                position: "absolute",
                color: "white",
              }}
            >
              Ngày kết thúc:
            </div>
            <input
              type="date"
              style={{
                width: "298px",
                height: "fit-content",
                top: "218px",
                left: "944px",
                padding: "11px 16px 13px 16px",
                gap: "0",
                borderRadius: "8px 0 0 0",
                border: "1px solid #727288",
                justifyContent: "space-between",
                position: "absolute",
                background: "#33334D",
                color: "white",
                opacity: "0.5",
              }}
            />
          </div>
          <div
            style={{
              width: "168px",
              height: "48px",
              top: "976px",
              left: "876px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <a href="/DanhSachDoiTacUyQuyen">
              <button
                className="butoon"
                style={{
                  color: "white",
                  background: "#FF7506",
                  marginLeft: "16px",
                }}
              >
                Lưu
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default P13ThongTinTacPham;
