import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const PhanQuyenNguoiDung = () => {
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
              Danh sách người dùng
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
                Danh sách người dùng
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
                Vai trò người dùng
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
                height: 724,
                margin: "16px 24px 104px 24px",
              }}
            >
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                  <th style={{ width: "82px" }}>STT</th>
                  <th style={{ width: "175px" }}>Họ tên</th>
                  <th style={{ width: "173px" }}>Tên đăng nhập</th>
                  <th style={{ width: "177px" }}>Vai trò</th>
                  <th style={{ width: "205px" }}>Trạng thái</th>
                  <th style={{ width: "201px" }}>Email</th>
                  <th style={{ width: "209px" }}>Số điện thoại</th>
                  <th style={{ width: "126px" }}>Ngày hết hạn</th>
                  <th style={{ width: "121px" }}></th>
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
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>2</td>
                  <td>Amy Ngọc</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>3</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>4</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>5</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>6</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>7</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>8</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>9</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>10</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>11</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>12</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>13</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>PMQ_01</td>
                  <td>Group Admin</td>

                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                        onClick={handleCheck1}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {ThongBao1}
                      </label>
                    </div>
                  </td>
                  <td>pmq@gmail.com</td>
                  <td>029 8131 6743</td>
                  <td>02/12/2022</td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/CapNhatThongTin"
                    >
                      Chỉnh sửa
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              style={{
                width: "fit-content",
                maxWidth: "1485px",
                display: "flex",
                gap: "8px",

                marginLeft: 24,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  width: "max-content",
                  maxWidth: "279.82px",
                  minHeight: "32px",
                  color: "#F5F5FF",
                }}
              >
                Hiển thị
                <div style={{ display: "inline-flex", position: "relative" }}>
                  <div
                    style={{
                      width: "48.37px",
                      height: "32px",
                      borderRadius: "4px",
                      margin: "0px 8px 0px 8px",
                      border: "1px solid #FF7506",
                      background: "#2B2B3F",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "600",
                      letterSpacing: "-0.002em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    13
                  </div>
                </div>
                hàng trong mỗi trang
              </div>

              <div
                style={{
                  width: "203px",
                  height: "26px",
                  position: "absolute",
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
        </div>
        <div
          className="khung2"
          style={{
            height: 110,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          }}
        >
          <div className="khung1">
            <a href="/ChinhSuaTTNguoiDung" style={{ textDecoration: "none" }}>
              <img src="images/themnguoidung.png" alt="themnguoidung" />
              <div className="textt">
                Thêm người
                <br /> dùng
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhanQuyenNguoiDung;
