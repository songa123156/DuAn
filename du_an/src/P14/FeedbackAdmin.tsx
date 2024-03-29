import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const FeedbackAdmin = () => {
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
              width: "571px",
              height: "834px",
              top: "186px",
              left: "231px",
              padding: "8px 0px 0px 0px",
              gap: "0px",
              borderRadius: "16px",
              position: "absolute",
              background: "#2B2B3F",
            }}
          >
            <div
              style={{
                width: "555px",
                height: "80px",
                gap: "0px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  top: "12px",
                  left: "12px",
                  gap: "0px",
                  position: "absolute",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/depgai.png?alt=media&token=5f4913f0-e1d2-4aca-8b9a-001292db2761"
                  alt="depgai"
                />
              </div>
              <div
                style={{
                  width: "85px",
                  height: "24px",
                  top: "15px",
                  left: "86px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Thy Phạm
              </div>
              <div
                style={{
                  width: "98px",
                  height: "24px",
                  top: "43px",
                  left: "86px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Chủ đề: Khác
              </div>

              <div
                style={{
                  width: "112px",
                  height: "17px",
                  top: "22px",
                  left: "427px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  letterSpacing: "0.015em",
                  textAlign: "right",
                  color: "#F5F5FF",
                }}
              >
                23:15 26/09/2012
              </div>

              <div
                style={{
                  width: "311px",
                  height: "20px",
                  top: "43px",
                  left: "202px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur...
              </div>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  top: "50px",
                  left: "531px",
                  gap: "0px",
                  position: "absolute",
                  background: "#FF7506",
                  borderRadius: "50%",
                }}
              ></div>
            </div>

            <div
              style={{
                width: "555px",
                height: "80px",
                gap: "0px",
                position: "absolute",
                marginTop: 88,
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  top: "12px",
                  left: "12px",
                  gap: "0px",
                  position: "absolute",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/depgai.png?alt=media&token=5f4913f0-e1d2-4aca-8b9a-001292db2761"
                  alt="depgai"
                />
              </div>
              <div
                style={{
                  width: "85px",
                  height: "24px",
                  top: "15px",
                  left: "86px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Thy Phạm
              </div>
              <div
                style={{
                  width: "194px",
                  height: "24px",
                  top: "43px",
                  left: "86px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Chủ đề: Quản lý doanh thu
              </div>

              <div
                style={{
                  width: "112px",
                  height: "17px",
                  top: "22px",
                  left: "427px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  letterSpacing: "0.015em",
                  textAlign: "right",
                  color: "#F5F5FF",
                }}
              >
                23:15 26/09/2012
              </div>

              <div
                style={{
                  width: "199px",
                  height: "20px",
                  top: "43px",
                  left: "298px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Lorem ipsum, consectetur...
              </div>
            </div>

            <div
              style={{
                width: "555px",
                height: "80px",
                gap: "0px",
                position: "absolute",
                marginTop: 176,
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  top: "12px",
                  left: "12px",
                  gap: "0px",
                  position: "absolute",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/depgai.png?alt=media&token=5f4913f0-e1d2-4aca-8b9a-001292db2761"
                  alt="depgai"
                />
              </div>
              <div
                style={{
                  width: "85px",
                  height: "24px",
                  top: "15px",
                  left: "86px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Thy Phạm
              </div>
              <div
                style={{
                  width: "194px",
                  height: "24px",
                  top: "43px",
                  left: "86px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Chủ đề: Quản lý doanh thu
              </div>

              <div
                style={{
                  width: "112px",
                  height: "17px",
                  top: "22px",
                  left: "427px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  letterSpacing: "0.015em",
                  textAlign: "right",
                  color: "#F5F5FF",
                }}
              >
                23:15 26/09/2012
              </div>

              <div
                style={{
                  width: "199px",
                  height: "20px",
                  top: "43px",
                  left: "298px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Lorem ipsum, consectetur...
              </div>
            </div>

            <div
              style={{
                width: "555px",
                height: "80px",
                gap: "0px",
                position: "absolute",
                marginTop: 264,
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  top: "12px",
                  left: "12px",
                  gap: "0px",
                  position: "absolute",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/depgai.png?alt=media&token=5f4913f0-e1d2-4aca-8b9a-001292db2761"
                  alt="depgai"
                />
              </div>
              <div
                style={{
                  width: "85px",
                  height: "24px",
                  top: "15px",
                  left: "86px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Thy Phạm
              </div>
              <div
                style={{
                  width: "194px",
                  height: "24px",
                  top: "43px",
                  left: "86px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Chủ đề: Quản lý doanh thu
              </div>

              <div
                style={{
                  width: "112px",
                  height: "17px",
                  top: "22px",
                  left: "427px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  letterSpacing: "0.015em",
                  textAlign: "right",
                  color: "#F5F5FF",
                }}
              >
                23:15 26/09/2012
              </div>

              <div
                style={{
                  width: "199px",
                  height: "20px",
                  top: "43px",
                  left: "298px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Lorem ipsum, consectetur...
              </div>
            </div>

            <div
              style={{
                width: "555px",
                height: "80px",
                gap: "0px",
                position: "absolute",
                marginTop: 352,
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  top: "12px",
                  left: "12px",
                  gap: "0px",
                  position: "absolute",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/depgai.png?alt=media&token=5f4913f0-e1d2-4aca-8b9a-001292db2761"
                  alt="depgai"
                />
              </div>
              <div
                style={{
                  width: "85px",
                  height: "24px",
                  top: "15px",
                  left: "86px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Thy Phạm
              </div>
              <div
                style={{
                  width: "194px",
                  height: "24px",
                  top: "43px",
                  left: "86px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Chủ đề: Quản lý doanh thu
              </div>

              <div
                style={{
                  width: "112px",
                  height: "17px",
                  top: "22px",
                  left: "427px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  letterSpacing: "0.015em",
                  textAlign: "right",
                  color: "#F5F5FF",
                }}
              >
                23:15 26/09/2012
              </div>

              <div
                style={{
                  width: "199px",
                  height: "20px",
                  top: "43px",
                  left: "298px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Lorem ipsum, consectetur...
              </div>
            </div>

            <div
              style={{
                width: "555px",
                height: "80px",
                gap: "0px",
                position: "absolute",
                marginTop: 440,
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  top: "12px",
                  left: "12px",
                  gap: "0px",
                  position: "absolute",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/depgai.png?alt=media&token=5f4913f0-e1d2-4aca-8b9a-001292db2761"
                  alt="depgai"
                />
              </div>
              <div
                style={{
                  width: "85px",
                  height: "24px",
                  top: "15px",
                  left: "86px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Thy Phạm
              </div>
              <div
                style={{
                  width: "194px",
                  height: "24px",
                  top: "43px",
                  left: "86px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Chủ đề: Quản lý doanh thu
              </div>

              <div
                style={{
                  width: "112px",
                  height: "17px",
                  top: "22px",
                  left: "427px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  letterSpacing: "0.015em",
                  textAlign: "right",
                  color: "#F5F5FF",
                }}
              >
                23:15 26/09/2012
              </div>

              <div
                style={{
                  width: "199px",
                  height: "20px",
                  top: "43px",
                  left: "298px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Lorem ipsum, consectetur...
              </div>
            </div>

            <div
              style={{
                width: "555px",
                height: "80px",
                gap: "0px",
                position: "absolute",
                marginTop: 528,
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  top: "12px",
                  left: "12px",
                  gap: "0px",
                  position: "absolute",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/depgai.png?alt=media&token=5f4913f0-e1d2-4aca-8b9a-001292db2761"
                  alt="depgai"
                />
              </div>
              <div
                style={{
                  width: "85px",
                  height: "24px",
                  top: "15px",
                  left: "86px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Thy Phạm
              </div>
              <div
                style={{
                  width: "194px",
                  height: "24px",
                  top: "43px",
                  left: "86px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Chủ đề: Quản lý doanh thu
              </div>

              <div
                style={{
                  width: "112px",
                  height: "17px",
                  top: "22px",
                  left: "427px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  letterSpacing: "0.015em",
                  textAlign: "right",
                  color: "#F5F5FF",
                }}
              >
                23:15 26/09/2012
              </div>

              <div
                style={{
                  width: "199px",
                  height: "20px",
                  top: "43px",
                  left: "298px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Lorem ipsum, consectetur...
              </div>
            </div>

            <div
              style={{
                width: "555px",
                height: "80px",
                gap: "0px",
                position: "absolute",
                marginTop: 616,
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  top: "12px",
                  left: "12px",
                  gap: "0px",
                  position: "absolute",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/depgai.png?alt=media&token=5f4913f0-e1d2-4aca-8b9a-001292db2761"
                  alt="depgai"
                />
              </div>
              <div
                style={{
                  width: "85px",
                  height: "24px",
                  top: "15px",
                  left: "86px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Thy Phạm
              </div>
              <div
                style={{
                  width: "194px",
                  height: "24px",
                  top: "43px",
                  left: "86px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Chủ đề: Quản lý doanh thu
              </div>

              <div
                style={{
                  width: "112px",
                  height: "17px",
                  top: "22px",
                  left: "427px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  letterSpacing: "0.015em",
                  textAlign: "right",
                  color: "#F5F5FF",
                }}
              >
                23:15 26/09/2012
              </div>

              <div
                style={{
                  width: "199px",
                  height: "20px",
                  top: "43px",
                  left: "298px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Lorem ipsum, consectetur...
              </div>
            </div>

            <div
              style={{
                width: "555px",
                height: "80px",
                gap: "0px",
                position: "absolute",
                marginTop: 704,
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  top: "12px",
                  left: "12px",
                  gap: "0px",
                  position: "absolute",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/depgai.png?alt=media&token=5f4913f0-e1d2-4aca-8b9a-001292db2761"
                  alt="depgai"
                />
              </div>
              <div
                style={{
                  width: "85px",
                  height: "24px",
                  top: "15px",
                  left: "86px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Thy Phạm
              </div>
              <div
                style={{
                  width: "194px",
                  height: "24px",
                  top: "43px",
                  left: "86px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Chủ đề: Quản lý doanh thu
              </div>

              <div
                style={{
                  width: "112px",
                  height: "17px",
                  top: "22px",
                  left: "427px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  letterSpacing: "0.015em",
                  textAlign: "right",
                  color: "#F5F5FF",
                }}
              >
                23:15 26/09/2012
              </div>

              <div
                style={{
                  width: "199px",
                  height: "20px",
                  top: "43px",
                  left: "298px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  letterSpacing: "0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 0.8,
                }}
              >
                Lorem ipsum, consectetur...
              </div>
            </div>

            <div
              style={{
                width: "203px",
                height: 26,
                top: 800,
                left: 184,
                position: "absolute",
                display: "flex",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "203px",
                  height: "26px",
                  //   position: "absolute",
                  right: 50,
                  color: "#F5F5FF",
                  marginBottom: 10,
                }}
                className="pagination"
              >
                <a href="/#" className="page-link1">
                  &lt;
                </a>
                <a href="/#" className="page-link1 ">
                  1
                </a>
                <a href="/#" className="page-link1 active">
                  2
                </a>
                <a href="/#" className="page-link1">
                  3
                </a>
                <a href="/#" className="page-link1">
                  ...
                </a>
                <a href="/#" className="page-link1">
                  100
                </a>
                <a href="/#" className="page-link1">
                  &gt;
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1014px",
              height: "834px",
              top: "186px",
              left: "826px",
              gap: "0px",
              borderRadius: "16px",
              position: "absolute",
              background: "#2F2F41B2",
            }}
          >
            <div
              style={{
                width: "750px",
                height: "500px",
                top: "167px",
                left: "132px",
                gap: "0px",
                position: "absolute",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tamthu.png?alt=media&token=9341a962-a80f-48fb-835e-2c32b6781f1f"
                alt="tamthu"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackAdmin;
