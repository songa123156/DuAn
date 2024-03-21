import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const TaiApp = () => {
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
              Tải App
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
              Tải App
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              left: 464.02,
            }}
          >
            <img src="/images/Vector.png" alt="Vector" />
          </div>

          <div
            style={{
              width: "639px",
              height: "114px",
              top: "263px",
              left: "726px",
              gap: "0",
              position: "absolute",
            }}
          >
            <div
              style={{
                width: "639px",
                height: "78px",

                fontFamily: "Montserrat",
                fontSize: "64px",
                fontWeight: "600",
                lineHeight: "78.02px",
                textAlign: "center",
                color: "white",
              }}
            >
              Ứng dụng <span style={{ color: "#FF7506" }}>VCPMC</span>
            </div>
          </div>

          <div
            style={{
              width: "480px",
              height: "0px",
              top: "377px",
              left: "805px",
              gap: "0",
              borderTop: "2px dashed #FF7506",
              position: "absolute",
            }}
          />

          <div
            style={{
              width: "544px",
              height: "86px",
              top: "411px",
              left: "773px",
              gap: "0",
              position: "absolute",
            }}
          >
            <div
              style={{
                fontFamily: "Montserrat",
                fontSize: "32px",
                fontWeight: "400",
                lineHeight: "39.01px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Bạn vui lòng chọn <br />{" "}
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "39.01px",
                  textAlign: "center",
                }}
              >
                nền tảng
              </span>{" "}
              phù hợp để trải nghiệm
            </div>
          </div>

          <div
            style={{
              width: "350px",
              height: "373px",
              top: "570px",
              left: "409px",
              padding: "92px 71px 32px 71px",
              gap: "0px",
              borderRadius: "16px",
              position: "absolute",
              background: "#2F2F41B2",
            }}
          >
            <div
              style={{
                width: "189px",
                height: "104px",
                top: "92px",
                left: "80px",
                gap: "0px",
                position: "absolute",
              }}
            >
              <img src="/images/may.png" alt="may" />
            </div>
            <div
              style={{
                width: "168px",
                height: "48px",
                top: "285px",
                left: "71px",
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
                  Tool Upload
                </button>
              </a>
            </div>
          </div>

          <div
            style={{
              width: "350px",
              height: "373px",
              top: "570px",
              left: "870px",
              padding: "92px 71px 32px 71px",
              gap: "0px",
              borderRadius: "16px",
              position: "absolute",
              background: "#2F2F41B2",
            }}
          >
            <div
              style={{
                width: "189px",
                height: "104px",
                top: "77px",
                left: "101px",
                gap: "0px",
                position: "absolute",
              }}
            >
              <img src="/images/so.png" alt="so" />
            </div>
            <div
              style={{
                width: "168px",
                height: "48px",
                top: "285px",
                left: "71px",
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
                  Tải App Window
                </button>
              </a>
            </div>
          </div>

          <div
            style={{
              width: "350px",
              height: "373px",
              top: "570px",
              left: "1331px",
              padding: "92px 71px 32px 71px",
              gap: "0px",
              borderRadius: "16px",
              position: "absolute",
              background: "#2F2F41B2",
            }}
          >
            <div
              style={{
                width: "189px",
                height: "104px",
                top: "64px",
                left: "62px",
                gap: "0px",
                position: "absolute",
              }}
            >
              <img src="/images/xanh.png" alt="xanh" />
            </div>
            <div
              style={{
                width: "168px",
                height: "48px",
                top: "285px",
                left: "71px",
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
                  Tải App Android
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "452.68px",
            height: "416.96px",
            top: "1108.96px",
            left: "2062.68px",
            gap: "0px",
            position: "absolute",
          }}
        >
          <img src="/images/Group75.png" alt="Group75" />
        </div>
      </div>
    </>
  );
};

export default TaiApp;
