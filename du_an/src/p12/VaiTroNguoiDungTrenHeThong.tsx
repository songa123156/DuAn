import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const VaiTroNguoiDungTrenHeThong = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let user = location.state && location.state.user;

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
              Phân quyền người dùng
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
              Vai trò người dùng trên hệ thống
            </p>
          </div>

          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              position: "absolute",
              top: 186,
              marginTop: 10,
              left: 229,
              borderRadius: 24,
              border: "1px solid #B65100",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 211,
                height: 40,
                // padding: "8px 24px",
                borderRadius: 24,
                gap: 10,
                backgroundColor: "#B65100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  marginTop: 12,
                }}
              >
                Hợp đồng ủy quyền
              </p>
            </div>
            <div
              style={{
                width: 207,
                height: 40,
                // padding: "8px 24px",
                borderRadius: 24,
                gap: 10,
                // backgroundColor: "#B65100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  marginTop: 12,
                }}
              >
                Hợp đồng khai thác
              </p>
            </div>
          </div>

          <div
            style={{
              width: "433px",
              height: "48px",
              position: "absolute",
              top: "186px",
              left: "1337px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#2B2B3F",
            }}
          >
            <input
              type="text"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "-0.002em",
                outline: "none",
                paddingLeft: 24,
                paddingRight: 67,
              }}
              placeholder="Nhập tên người dùng"
            />
            <div
              style={{
                marginLeft: "12px",
                width: "24px",
                height: "24px",
                marginTop: 11,
                marginRight: 10,
              }}
            >
              <a href="/anhson">
                <i
                  style={{ color: "white" }}
                  className="fa-solid fa-magnifying-glass"
                ></i>
              </a>
            </div>
          </div>

          {/* bảng */}
          <div
            style={{
              width: 1541,
              position: "absolute",
              top: 258,
              left: 229,
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            {/* Nội dung thẻ div */}
            <table
              style={{
                width: 1541,
                height: 766,
                margin: "16px 24px 104px 24px",
              }}
            >
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                  <th style={{ width: "99px" }}>STT</th>
                  <th style={{ width: "236px" }}>Tên nhóm người dùng</th>
                  <th style={{ width: "209px" }}>Số lượng người dùng</th>
                  <th style={{ width: "173px" }}>Vai trò</th>
                  <th style={{ width: "534px" }}>Mô tả</th>
                  <th style={{ width: "116px" }}></th>
                  <th style={{ width: "126px" }}></th>
                </tr>
              </thead>
              <tbody
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                <tr style={{ height: 47 }}>
                  <td>1</td>
                  <td>Super Admin</td>
                  <td>1</td>
                  <td>System Admin</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br /> incididunt ut labore et dolore
                    magna aliqua
                  </td>

                  <td>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Cập nhật
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>2</td>
                  <td>Group Admin</td>
                  <td>8</td>
                  <td>System Admin</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br /> incididunt ut labore et dolore
                    magna aliqua
                  </td>

                  <td>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Cập nhật
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>3</td>
                  <td>Sub - user</td>
                  <td>30</td>
                  <td>System Admin</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br /> incididunt ut labore et dolore
                    magna aliqua
                  </td>

                  <td>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Cập nhật
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>4</td>
                  <td>Content manager</td>
                  <td>5</td>
                  <td>Lisences</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br /> incididunt ut labore et dolore
                    magna aliqua
                  </td>

                  <td>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Cập nhật
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>5</td>
                  <td>QC</td>
                  <td>5</td>
                  <td>Lisences</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br /> incididunt ut labore et dolore
                    magna aliqua
                  </td>

                  <td>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Cập nhật
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>6</td>
                  <td>Kế toán</td>
                  <td>1</td>
                  <td>Lisences</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br /> incididunt ut labore et dolore
                    magna aliqua
                  </td>

                  <td>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Cập nhật
                    </a>
                  </td>
                  <td>
                    <a
                      style={{
                        display: "block",
                        color: "#FF4747",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Xóa
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="khung2" style={{ height: 110 }}>
            <div className="khung1">
              <a href="/ThemHopDongMoi" style={{ textDecoration: "none" }}>
                <img
                  style={{ height: 52, width: 52, padding: 0 }}
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/haiconnguoi.png?alt=media&token=cf5e5f18-8d02-4c8a-8ef4-d3495aaab319"
                  alt="haiconnguoi"
                />
                <div className="textt">Thêm vai trò</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaiTroNguoiDungTrenHeThong;
