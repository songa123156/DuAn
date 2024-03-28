import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const P8ThemThietBiMoi = () => {
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
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/admin.jpg?alt=media&token=9647fd08-067e-4a3f-a69b-d4c93c10c29f"
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
              Danh sách thiết bị
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi tiết thiết bị
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thêm thiết bị mới
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
              Thêm thiết bị mới
            </p>
          </div>
        </div>
        <div
          style={{
            width: "571px",
            position: "absolute",
            top: "202px",
            left: "80px",
            gap: "4px",
          }}
        >
          {/* Nội dung của phần tử div */}
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              height: 48,
            }}
          >
            Tên thiết bị:<span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              height: 48,
              marginTop: 24,
              marginBottom: 24,
            }}
          >
            SKU/ID: <span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
              height: 48,
            }}
          >
            Địa chỉ Mac:<span style={{ color: "red" }}> *</span>
          </div>

          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 24,
              marginTop: 24,
              height: 48,
            }}
          >
            Thời hạn bảo hành:<span style={{ color: "red" }}> *</span>
          </div>

          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              height: 48,
            }}
          >
            Label:<span style={{ color: "red" }}> *</span>
          </div>

          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 56,
              marginTop: 24,
              height: 48,
            }}
          >
            Thông tin:<span style={{ color: "red" }}> *</span>
          </div>

          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 120,
              height: 48,
            }}
          >
            Ghi chú
          </div>
          <div
            style={{
              width: "270px",

              height: "18px",

              top: "418px",
              left: "80px",
              padding: "0px 2px 0px 2px",
              gap: "4px",
              color: "white",
            }}
          >
            <span style={{ color: "red" }}>*</span>là những trường thông tin bắt
            buộc
            {/* Nội dung của phần tử div */}
          </div>
        </div>
        <div style={{ top: "202px", left: "286px", position: "absolute" }}>
          <div>
            <input
              type="text"
              style={{
                width: "365px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              type="text"
              style={{
                width: "365px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              style={{
                width: "365px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              type="date"
              style={{
                width: "217px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div>
            <select
              style={{
                width: "365px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "white",
                opacity: "50%",
              }}
              name=""
              id=""
            >
              {/* <option value="" selected>
                Chọn vai trò
              </option>
              <option value="super">Super Admin</option>
              <option value="Group Admin">Group Admin</option>
              <option value="Sub - user">Sub - user</option>

              <option value="Content manager">Content manager</option> */}
            </select>
          </div>
          <div style={{ marginTop: 24, marginBottom: 10 }}>
            <select
              style={{
                width: "365px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "white",
                opacity: "50%",
              }}
              name=""
              id=""
            >
              {/* <option value="" selected>
                Chọn vai trò
              </option>
              <option value="super">Super Admin</option>
              <option value="Group Admin">Group Admin</option>
              <option value="Sub - user">Sub - user</option>

              <option value="Content manager">Content manager</option> */}
            </select>
          </div>
          <div
            style={{
              width: "163px",
              height: "24px",
              marginLeft: "234px",
              position: "absolute",
              color: "white",
              // Các thuộc tính CSS khác
            }}
          >
            {/* Nội dung của phần tử */}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/daucong.png?alt=media&token=ccdf883f-83c2-44f1-a0e8-63f3740d26ea"
              alt="daucong"
            />{" "}
            Thêm thông tin
          </div>
          <div>
            <textarea
              style={{
                width: "365px",
                height: "120px",
                marginTop: 48,
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "white",
                opacity: "50%",
              }}
            ></textarea>
          </div>
        </div>

        <div
          style={{
            width: "142px",
            position: "absolute",
            top: "217px",
            left: "1121px",
            gap: "4px",
          }}
        >
          {/* Nội dung của phần tử div */}
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Tên đăng nhập <span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginTop: 49,
              marginBottom: 48,
            }}
          >
            Mật khẩu<span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
            }}
          >
            Nhập lại mật khẩu<span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
            }}
          >
            Vị trí:<span style={{ color: "red" }}> *</span>
          </div>
        </div>

        <div style={{ top: "202px", left: "1313px", position: "absolute" }}>
          <div>
            <input
              type="text"
              style={{
                width: "405px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              type={showPassword ? "text" : "password"}
              style={{
                color: "white",

                width: "405px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
            <div
              style={{
                marginRight: 10,
                cursor: "pointer",
                position: "absolute",
                color: "red",
                display: "inline",
                marginTop: 10,
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
          <div>
            <input
              type={showPassword ? "text" : "password"}
              style={{
                color: "white",

                width: "405px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
            <div
              style={{
                marginRight: 10,
                cursor: "pointer",
                position: "absolute",
                color: "red",
                display: "inline",
                marginTop: 10,
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
          <div style={{ marginTop: 24 }}>
            <input
              type="text"
              style={{
                width: "405px",
                height: "48px",

                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>

        <div>
          <div
            style={{
              width: "367px",
              height: "48px",
              top: "860px",
              left: "772px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <button
              className="butoon"
              style={{
                color: "#FF7506",
                backgroundColor: "transparent",
              }}
              data-bs-dismiss="modal"
            >
              Hủy
            </button>
            <button
              className="butoon"
              style={{
                color: "white",
                background: "#FF7506",
                marginLeft: "16px",
              }}
              data-bs-dismiss="modal"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default P8ThemThietBiMoi;
