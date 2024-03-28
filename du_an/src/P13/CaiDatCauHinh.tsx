import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const CaiDatCauHinh = () => {
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
              Cài đặt
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
              Cài đặt cấu hình
            </p>
          </div>

          <div
            style={{
              width: "571px",
              height: "320px",
              top: "186px",
              position: "absolute",
              left: "229px",
              gap: "0",
              borderRadius: "16px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hinhduocchon.png?alt=media&token=cae6ab85-38b6-4796-b516-5f79ebbd2b8f"
              alt="hinhduocchon"
            />
          </div>

          <div
            style={{
              width: "950px",
              height: "160px",
              top: "266px",
              left: "873px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            <div style={{ display: "inline-block", marginRight: 53 }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Group.png?alt=media&token=46bf70bf-f53b-4ad2-8fa6-5d4e04db6423"
                alt="Group"
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Rectangle7.png?alt=media&token=8c03d7fd-37c7-4d69-a3c4-6c65764ed6b8"
                alt="Rectangle 7"
              />
            </div>
            <div
              style={{
                display: "inline-block",
                marginLeft: 23,
                marginRight: 24,
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Rectangle8.png?alt=media&token=02a3d8e1-3c6b-48d9-ac9b-39abc753f306"
                alt="Rectangle 8"
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Rectangle9.png?alt=media&token=571e0bf6-0f55-46bd-8cf6-cb2a7e8680c9"
                alt="Rectangle 9"
              />
            </div>
            <div style={{ display: "inline-block", marginLeft: 51 }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/ChevronRight.png?alt=media&token=d7c17d09-29e8-4d10-a6f5-a0bf11e7673d"
                alt="Chevron Right"
              />
            </div>
          </div>
          <div
            style={{
              width: "80px",
              height: "24px",
              top: "442px",
              left: "1029px",
              gap: "0",
              position: "absolute",
              fontWeight: "500",
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0.005em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Theme 2
          </div>
          <div
            style={{
              width: "80px",
              height: "24px",
              top: "442px",
              left: "1291px",
              gap: "0",
              position: "absolute",
              fontWeight: "500",
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0.005em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Theme 3
          </div>
          <div
            style={{
              width: "80px",
              height: "24px",
              top: "442px",
              left: "1555px",
              gap: "0",
              position: "absolute",
              fontWeight: "500",
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0.005em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Theme 4
          </div>

          <div
            style={{
              width: "153px",
              height: "24px",
              top: "602px",
              left: "229px",
              position: "absolute",
              gap: "0",
              fontWeight: "700",
              fontFamily: "Montserrat",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Ngôn ngữ hiển thị
          </div>

          <select
            style={{
              width: "246px",
              height: "48px",
              position: "absolute",
              top: "594px",
              left: "402px",
              padding: "12px 12px 12px 16px",
              gap: "0",
              borderRadius: "8px",
              border: "1px solid #727288",
              justifyContent: "space-between",
              background: "#2B2B3F",
              color: "white",
            }}
            name=""
            id=""
          >
            <option value="tiếng việt">Tiếng Việt</option>
            <option value="tiếng anh">Tiếng Anh</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CaiDatCauHinh;
