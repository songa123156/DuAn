import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ThemHopDongMoi = () => {
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
              Quản lý
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Quản lý hợp đồng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thêm hợp đồng mới
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
              Thêm hợp đồng khai thác mới
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "213px",
            left: "80px",
            width: "120px",
            height: "24px",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          <div className="textCT">
            Tên hợp đồng: <span style={{ color: "#FF4747" }}>*</span>
          </div>
          <div className="textCT"> Số hợp đồng:</div>
          <div className="textCT"> Ngày hiệu lực:</div>
          <div className="textCT"> Ngày hết hạn:</div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "202px",
            left: "237px",
            width: "374px",
            height: "24px",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          <input
            className="inputtext"
            style={{
              width: "414px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <input
            className="inputtext"
            style={{
              width: "414px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <input
            className="inputtext"
            type="date"
            style={{
              width: "265px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <br />
          <input
            className="inputtext"
            type="date"
            style={{
              width: "265px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "213px",
            left: "750px",
            width: "119px",
            height: "24px",
            color: "white",
          }}
        >
          Đính kèm tệp:
        </div>
        <div
          style={{
            position: "absolute",
            top: "205px",
            left: "881px",
            width: "208px",
            height: "24px",
            color: "white",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: 16,
            }}
          >
            <input
              type="file"
              style={{
                width: "108px",
                height: "40px",
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #FFAC69",
                gap: "4px",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                zIndex: 1,
              }}
            />
            <div
              style={{
                width: "108px",
                height: "40px",
                border: "1px solid #FFAC69",
                color: " #FFAC69",
              }}
            >
              <img
                src="./images/tailen.png"
                alt="tailen"
                style={{
                  width: "24px",
                  height: "24px",
                  marginTop: 5,
                  marginLeft: 11,
                }}
              />
              <span
                style={{ marginTop: 4, position: "absolute", marginLeft: 3 }}
              >
                Tải lên
              </span>
            </div>
          </div>
          <br />
          <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
          hetthuongcannho.doc
          <br />
          <i
            style={{ marginRight: 8, marginTop: 12 }}
            className="fa-solid fa-file-word"
          ></i>
          hetthuongcannho.doc
        </div>
        <div
          style={{
            width: "125px",
            height: "24px",
            top: "213px",
            left: "1375px",
            gap: "4px",
            position: "absolute",
            color: "white",
          }}
        >
          Loại hợp đồng:
        </div>

        <div
          style={{
            width: "98px",
            height: "24px",
            top: "255px",
            left: "1375px",
            gap: "8px",
            position: "absolute",
            color: "white",
          }}
        >
          <input
            type="radio"
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              padding: "5px",
              borderRadius: "20px",
              border: "2px solid #0B80EC",
              background: "#FFFFFF",
            }}
          />
          <span
            style={{ marginBottom: 15, marginLeft: 10, position: "absolute" }}
          >
            Trọn gói
          </span>
        </div>

        <div
          style={{
            width: "117px",
            top: "257px",
            left: "1515px",
            border: "1px solid #727288",
            transform: "rotate(90deg)",
            transformOrigin: "top left",
            position: "absolute",
          }}
        />

        <div
          style={{
            width: "130px",
            height: "48px",
            top: "255px",
            left: "1528px",
            position: "absolute",
            color: "white",
          }}
        >
          Giá trị hợp đồng <br />
          (VNĐ)
        </div>
        <input
          defaultValue={"214.500.000"}
          style={{
            color: "white",
            width: "169px",
            height: "48px",
            top: "255px",
            left: "1670px",
            padding: "11px 24px 13px 16px",
            borderRadius: "8px",
            position: "absolute",
            background: "#2B2B3F",
            border: "1px solid #727288",
            /* Các thuộc tính khác có thể thêm vào ở đây */
          }}
        />

        <div
          style={{
            width: "130px",
            height: "48px",
            top: "319px",
            left: "1528px",
            position: "absolute",
            color: "white",
          }}
        >
          Giá trị phân phối <br />
          (VNĐ)/ngày
        </div>
        <input
          defaultValue={"1.500.000"}
          style={{
            color: "white",
            width: "169px",
            height: "48px",
            top: "319px",
            left: "1670px",
            padding: "11px 24px 13px 16px",
            borderRadius: "8px",
            position: "absolute",
            background: "#2B2B3F",
            border: "1px solid #727288",
          }}
        />

        <div
          style={{
            width: "130px",
            height: "48px",
            top: "391px",
            left: "1528px",
            position: "absolute",
            color: "white",
          }}
        >
          Giá trị lượt phát <br />
          (VNĐ)/ngày
        </div>
        <input
          style={{
            width: "169px",
            height: "48px",
            top: "391px",
            left: "1670px",
            padding: "11px 24px 13px 16px",
            borderRadius: "8px",
            position: "absolute",
            background: "#2B2B3F",
            border: "1px solid #727288",
            color: "white",
          }}
        />

        <div
          style={{
            width: "110px",
            height: "24px",
            top: "391px",
            left: "1375px",
            gap: "8px",
            position: "absolute",
            color: "white",
          }}
        >
          <input
            type="radio"
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              padding: "5px",
              borderRadius: "20px",
              border: "2px solid #0B80EC",
              background: "#FFFFFF",
            }}
          />
          <span
            style={{ marginBottom: 15, marginLeft: 10, position: "absolute" }}
          >
            Lượt phát
          </span>
        </div>

        <div
          style={{
            width: "234px",
            height: "24px",
            position: "absolute",
            top: "553px",
            left: "80px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 40 }}>
            Tên đơn vị sử dụng:{" "}
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 40 }}>
            Người đại diện:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 40 }}>Chức vụ:</div>
          <div style={{ marginBottom: 40 }}>
            Ngày sinh:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 42 }}>
            Quốc tịch:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 41 }}>
            Số điện thoại:{" "}
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>

          <div style={{ marginBottom: 33 }}>
            Email:{" "}
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>

          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "18px",
              letterSpacing: "0.005em",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginRight: 3,
              }}
            >
              *
            </span>
            là những trường thông tin bắt buộc
          </div>
        </div>
        <div
          style={{
            width: "325px",
            position: "absolute",
            top: "541px",
            left: "286px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              style={{
                width: "365px",
                height: "48px",

                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              style={{
                width: "365px",
                height: "48px",

                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              style={{
                width: "237px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="date"
              style={{
                width: "237px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <select
              style={{
                width: "237px",
                height: "48px",
                opacity: "50%",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
                justifyContent: "space-between",
                paddingRight: "24px",
              }}
            >
              <option value="option1" selected>
                Việt Nam
              </option>
              <option value="option2">Hàn Quốc</option>
              <option value="option3">Nhật Bản</option>
            </select>
          </div>

          <div style={{ marginBottom: 16 }}>
            <input
              type="tel"
              style={{
                width: "240px",
                height: "48px",

                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              style={{
                width: "365px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "126px",
            position: "absolute",
            top: "554px",
            left: "750px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 40 }}>
            Giới tính:{" "}
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 40 }}>
            CMND/ CCCD:{" "}
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 40 }}>
            Ngày cấp:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 39 }}>
            Nơi cấp:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 29 }}>Mã số thuế:</div>
          <div>Nơi cư trú:</div>
        </div>
        <div
          style={{
            width: "311px",
            position: "absolute",
            top: "542px",
            left: "900px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                width: "99px",
                height: "24px",
                marginRight: "8px",
                display: "inline-block",
              }}
            >
              {" "}
              <input type="radio" name="uyquyen" /> Nam
            </div>
            <div
              style={{
                width: "99px",
                height: "24px",
                left: "147px",
                position: "absolute",
                marginRight: "8px",
                display: "inline-block",
              }}
            >
              <input type="radio" name="uyquyen" /> Nữ
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              style={{
                width: "311px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="date"
              style={{
                opacity: "50%",
                width: "208px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
                justifyContent: "space-between",
                paddingRight: "24px",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "311px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "311px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div>
            <textarea
              style={{
                width: "311px",
                height: "96px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: "140px",
            position: "absolute",
            top: "556px",
            left: "1375px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 40 }}>Tên đăng nhập:</div>
          <div style={{ marginBottom: 39 }}>
            Mật khẩu:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 41 }}>Số tài khoản:</div>
          <div>Ngân hàng:</div>
        </div>
        <div
          style={{
            width: "325px",
            position: "absolute",
            top: "541px",
            left: "1529px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type={showPassword ? "text" : "password"}
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
            <div
              style={{
                marginRight: 10,
                cursor: "pointer",
                display: "inline-block",
                position: "absolute",
                marginTop: 10,
                color: "#FF7506",
                // top: "50%",
                right: 10,
              }}
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <i className="far fa-eye-slash"></i>
              ) : (
                <i className="far fa-eye"></i>
              )}
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div>
            <input
              style={{
                width: "325px",
                height: "48px",

                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "1045px",
            left: "772px",
            width: "376px",
            height: "48px",
            gap: "40px",
          }}
        >
          <button
            style={{
              width: "168px",
              height: "48px",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              color: "#FF7506",
              background: "transparent",
              gap: "8px",
            }}
          >
            Hủy
          </button>

          <button
            style={{
              width: "168px",
              height: "48px",
              padding: "12px 24px",
              borderRadius: "8px",
              gap: "8px",
              background: "#FF7506",
              color: "white",
              border: 0,
              marginLeft: 32,
            }}
          >
            Lưu
          </button>
        </div>
      </div>
    </>
  );
};

export default ThemHopDongMoi;
