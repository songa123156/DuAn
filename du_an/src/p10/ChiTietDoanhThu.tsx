import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChiTietDoanhThu = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const location = useLocation();
  // const navigate = useNavigate();
  let user = location.state && location.state.user;

  // const handleDangXuat = () => {
  //   navigate("/");
  // };

  //   useEffect(() => {
  //     if (user === null) navigate("/");
  //   }, []);

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            width: 1749,
            height: 80,
            left: 171,
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 9999,
          }}
        >
          <div>
            <select
              id="language"
              style={{
                width: 143,
                height: 40,
                top: 24,
                left: 1375,
                padding: "8px 4px 8px 8px",
                borderRadius: 4,
                border: "1px solid rgb(200, 200, 219)",
                gap: 8,
                color: "rgb(200, 200, 219)",
                background: "rgb(30, 30, 46)",
                position: "relative",
              }}
            >
              <option value="vi" style={{ background: "rgb(30, 30, 46)" }}>
                Tiếng Việt
              </option>
              <option value="en" style={{ background: "rgb(30, 30, 46)" }}>
                English
              </option>
              <option value="fr" style={{ background: "rgb(30, 30, 46)" }}>
                French
              </option>
            </select>
          </div>
          <div
            style={{
              width: 132,
              height: 40,
              top: 24,
              left: 1542,
              gap: 8,
              marginRight: 24,
              position: "absolute",
            }}
          >
            <a href="/trang1" style={{ textDecoration: "none" }}>
              <img
                src="images/admin.jpg"
                alt="mdo"
                style={{
                  width: 40,
                  height: "40.58px",
                  borderRadius: 200,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 74,
                  height: 24,
                  left: 5,
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  color: "rgb(245, 245, 255)",
                  marginLeft: 35,
                  position: "relative",
                  textDecoration: "none",
                }}
              />
              <div
                style={{
                  width: 49,
                  height: 17,
                  left: 6,
                  fontFamily: "Montserrat",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  color: "rgb(182, 81, 0)",
                  marginLeft: 35,
                  position: "relative",
                  textDecoration: "none",
                }}
              >
                Admin
              </div>
            </a>
          </div>
        </div>
        <div
          className="sidebar"
          style={{ width: 40, borderRadius: "0px 24px 24px 0px" }}
        >
          {/* <div className="logo">
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
          <div className="toggle-arrow">&gt;</div> */}
          <div
            style={{
              width: "40px",
              height: "1080px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#B65100",
              fontSize: 24,
            }}
          >
            &gt;
          </div>
        </div>
        <div>
          <div
            style={{
              top: 86,

              left: 78,
              position: "absolute",
            }}
          >
            <a
              className="parent-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Doanh thu
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Phân phối doanh thu
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi tiết doanh thu
            </a>
          </div>
          <div
            style={{
              width: 800,
              height: 48,

              top: 114,
              left: 78,
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
              Hợp đồng Ủy quyền UQ123 - Quý 1
            </p>
          </div>
        </div>

        <div
          style={{
            width: "235px",
            height: "24px",
            top: "186px",
            left: "80px",
            fontSize: 24,
            position: "absolute",
            color: "white",
          }}
        >
          Danh sách bản ghi
        </div>

        <div
          style={{
            width: "665px",
            height: "48px",
            position: "absolute",
            top: "229px",
            left: "80px",
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
            placeholder="Nhập tên bài hát"
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

        <div
          style={{
            width: "235px",
            height: "24px",
            top: "186px",
            left: "1121px",
            fontSize: 24,
            position: "absolute",
            color: "white",
          }}
        >
          Doanh thu bản ghi
        </div>
        <div
          style={{
            width: "235px",
            height: "24px",
            top: "215px",
            fontSize: 28,
            left: "1121px",
            position: "absolute",
            color: "#FFAC69",
          }}
        >
          Cuộc gọi nhỡ
        </div>

        <div
          style={{
            width: 1017,

            position: "absolute",
            top: 296,
            left: 80,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 1017,
              height: 723,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "87px" }}>STT</th>
                <th style={{ width: "234px" }}>Bài hát</th>
                <th style={{ width: "146px" }}>Số lượt phát</th>
                <th style={{ width: "147px" }}>Doanh thu (VNĐ)</th>
                <th style={{ width: "186px" }}>Hành chính phí (VNĐ)</th>
                <th style={{ width: "169px" }}>Nhuận bút (VNĐ)</th>
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
                <td>Tổng </td>
                <td>13</td>
                <td>17,527</td>
                <td>1.045.000,000</td>
                <td>209.001.505</td>
                <td>835.998.495</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>1</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>2</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>3</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>4</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>5</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>6</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>7</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>8</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>9</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>10</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>11</td>
                <td>Hết thương cạn nhớ </td>
                <td>1200</td>
                <td>12.000.000</td>
                <td>2.500.000</td>
                <td>2.500.000</td>
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

        <div
          style={{
            width: 645,

            position: "absolute",
            top: 296,
            left: 1121,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 645,
              height: 763,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "199px" }}>Đơn vị khai thác</th>
                <th style={{ width: "199px" }}>Số lượt phát</th>
                <th style={{ width: "199px" }}>Doanh thu (VNĐ)</th>
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
                <td>Tổng </td>
                <td>100</td>
                <td>835.998.495</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>CTy TNHH A </td>
                <td>200</td>
                <td>2.500.000</td>
              </tr>
            </tbody>
          </table>
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
              <img
                src="images/xuatdulieu.png"
                alt="xuatdulieu"
                className="icon"
              />
              <div className="textt">
                Xuất <br />
                dữ liệu
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietDoanhThu;
