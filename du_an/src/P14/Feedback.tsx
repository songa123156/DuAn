import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const Feedback = () => {
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
              Hỗ trợ
            </a>
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Feedback
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
              Feedback
            </p>
          </div>

          <div
            style={{
              width: "764px",
              height: "750px",
              top: "185px",
              left: "651px",
              gap: "0px",
              borderRadius: "16px",
              position: "absolute",
              background: "#2F2F41B2",
            }}
          >
            <div
              style={{
                width: "154px",
                height: "24px",
                top: "40px",
                left: "32px",
                gap: "0px",
                position: "absolute",
                color: "#FFFFFF",
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                }}
              >
                Tên người dùng
              </span>
            </div>
            <input
              defaultValue={"Ng.Tuyết"}
              style={{
                width: "700px",
                height: "48px",
                top: "72px",
                left: "32px",
                padding: "11px 24px 13px 16px",
                gap: "0px",
                borderRadius: "8px ",
                position: "absolute",
                background: "#2B2B3F",
                color: "white",
              }}
            />

            <div
              style={{
                height: "24px",
                top: "144px",
                left: "32px",
                gap: "0px",
                position: "absolute",
                color: "#FFFFFF",
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                }}
              >
                Bạn muốn được hỗ trợ vấn đề gì?
              </span>
            </div>
            <select
              style={{
                width: "700px",
                height: "48px",
                top: "176px",
                left: "32px",
                padding: "11px 24px 13px 16px",
                gap: "0px",
                borderRadius: "8px ",
                position: "absolute",
                background: "#2B2B3F",
                color: "white",
              }}
              name=""
              id=""
            >
              <option selected value="Chọn vấn đề bạn cần được hỗ trợ">
                Chọn vấn đề bạn cần được hỗ trợ
              </option>
              <option value="Tài khoản">Tài khoản</option>
              <option value="Quản lý doanh thu">Quản lý doanh thu</option>
              <option value="Vấn đề bản quyền">Vấn đề bản quyền</option>
              <option value="Khác">Khác</option>
            </select>

            <div
              style={{
                width: "154px",
                height: "24px",
                top: "248px",
                left: "32px",
                gap: "0px",
                position: "absolute",
                color: "#FFFFFF",
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                }}
              >
                Nội dung
              </span>
            </div>
            <textarea
              defaultValue={"Nhập nội dung"}
              style={{
                width: "700px",
                height: "300px",
                top: "280px",
                left: "32px",
                padding: "11px 24px 13px 16px",
                gap: "0px",
                borderRadius: "8px ",
                position: "absolute",
                background: "#2B2B3F",
                color: "white",
              }}
            />
          </div>
          <div
            style={{
              width: "168px",
              height: "48px",
              top: "976px",
              left: "950px",
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
                Gửi
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
