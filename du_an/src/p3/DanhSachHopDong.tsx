import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const DanhSachHopDong = () => {
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
        <div className="sidebar">
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
        </div>

        <div>
          <nav
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
          </nav>

          <div
            className="container"
            style={{ marginTop: "10px", left: 229, position: "absolute" }}
          >
            <a className="parent-link" href="/#">
              Quản lý
            </a>
            <span className="separator">&gt;</span>
            <br />
            <a className="child-link" href="/#">
              Quản lý hợp đồng
            </a>
          </div>

          <div
            style={{
              width: 392,
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
              Danh sách hợp đồng
            </p>
          </div>

          {/* <div
            style={{
              width: 211,
              height: 40,
              padding: "8px 24px",
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
                // lineHeight: 24,
                letterSpacing: "-0.002em",
                textAlign: "center",
              }}
            >
              Hợp đồng ủy quyền
            </p>
          </div> */}

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
                }}
              >
                Hợp đồng khai thác
              </p>
            </div>
          </div>

          <div
            style={{
              position: "fixed",
              top: 188,
              right: 0,
              height: 372,
              width: 110,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 130,
                marginBottom: 10,
                backgroundColor: "white",
                position: "relative",
              }}
            >
              <i
                className="far fa-eye-slash"
                style={{
                  width: "100%",
                  textAlign: "center",
                  position: "absolute",
                  top: 15,
                  left: 0,
                  height: "50%",
                }}
              ></i>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "50%",
                }}
              >
                Sửa thông tin
              </div>
            </div>

            {/* <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 130,
                marginBottom: 10,
                backgroundColor: "white",
                position: "relative",
              }}
            >
              <i
                className="icon-class-name"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "50%",
                  transform: "translateY(-50%)",
                }}
              ></i>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "50%",
                }}
              >
                Sửa thông tin
              </div>
            </div> */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                justifyContent: "center",
                width: "100%",
                height: 130,
                marginBottom: 10,
              }}
            >
              <Link to="/navbar/DoiMK">Đổi mật khẩu</Link>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                justifyContent: "center",
                width: "100%",
                height: 130,
                marginBottom: 10,
              }}
              onClick={handleDangXuat}
            >
              Đăng xuất
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//bỏ cài đặt bootstrap
export default DanhSachHopDong;
