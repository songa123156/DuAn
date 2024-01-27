import "./Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state && location.state.user;

  useEffect(() => {
    if (user === null) navigate("/");
  }, []);

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
            style={{
              display: "flex",
              fontFamily: "Montserrat",
              fontSize: 36,
              fontWeight: 700,
              width: 319,
              height: 54,
              letterSpacing: "-0.002em",
              marginLeft: 38,
              color: "white",
            }}
          >
            Thông tin cơ bản
          </div>
          <div
            className="form-container"
            style={{
              width: "1018px",
              height: "528px",
              top: "188px",
              left: "229px",
              marginLeft: "59px",
            }}
          >
            <div
              className="form-image"
              style={{
                width: 280,
                height: 351,
                marginRight: 167,
              }}
            >
              <img
                style={{ width: 273, height: 280 }}
                src="/img/logo.png"
                alt=""
              />
            </div>
            <div className="form-fields">
              <form>
                <div className="form-row">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        textAlign: "left",
                        marginLeft: 18,
                        color: "#FFFFFF",
                        fontFamily: "Montserrat",
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "24px",
                        letterSpacing: "-0.002em",
                      }}
                    >
                      Họ
                    </div>
                    <div style={{ padding: "11px 24px 13px 16px" }}>
                      <input
                        type="text"
                        id="ho"
                        name="ho"
                        required
                        defaultValue="Nguyễn"
                        style={{
                          color: "white",
                          backgroundColor: "#2B2B3F",
                          width: "274px",
                          padding: 0,
                          border: 0,
                          height: 48,
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        textAlign: "left",
                        marginLeft: 18,
                        color: "#FFFFFF",
                        fontFamily: "Montserrat",
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "24px",
                        letterSpacing: "-0.002em",
                      }}
                    >
                      Tên:
                    </div>
                    <div style={{ padding: "11px 24px 13px 16px" }}>
                      <input
                        type="text"
                        id="ten"
                        name="ten"
                        defaultValue="Tuyết"
                        required
                        style={{
                          color: "white",
                          backgroundColor: "#2B2B3F",

                          width: "274px",
                          padding: 0,
                          border: 0,
                          height: 48,
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        textAlign: "left",
                        marginLeft: 18,
                        color: "#FFFFFF",
                        fontFamily: "Montserrat",
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "24px",
                        letterSpacing: "-0.002em",
                      }}
                    >
                      Ngày sinh:
                    </div>
                    <div style={{ padding: "11px 24px 13px 16px" }}>
                      <input
                        type="date"
                        id="ngaySinh"
                        name="ngaySinh"
                        defaultValue="1998-02-02"
                        required
                        style={{
                          color: "white",
                          backgroundColor: "#2B2B3F",
                          width: "274px",
                          padding: 0,
                          border: 0,
                          height: 48,
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        textAlign: "left",
                        marginLeft: 18,
                        color: "#FFFFFF",
                        fontFamily: "Montserrat",
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "24px",
                        letterSpacing: "-0.002em",
                      }}
                    >
                      Số điện thoại:
                    </div>
                    <div style={{ padding: "11px 24px 13px 16px" }}>
                      <input
                        type="tel"
                        id="soDienThoai"
                        name="soDienThoai"
                        defaultValue="+84 250 123 151"
                        required
                        style={{
                          color: "white",
                          backgroundColor: "#2B2B3F",
                          width: "274px",
                          padding: 0,
                          border: 0,
                          height: 48,
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        textAlign: "left",
                        marginLeft: 18,
                        color: "#FFFFFF",
                        fontFamily: "Montserrat",
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "24px",
                        letterSpacing: "-0.002em",
                      }}
                    >
                      Email:
                    </div>
                    <div style={{ padding: "11px 24px 13px 16px" }}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value="tuyetnguyenngoc@alta.com.vn"
                        disabled
                        required
                        style={{
                          backgroundColor: "#2B2B3F",
                          width: "571px",
                          padding: 0,
                          border: 0,
                          height: 48,
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        textAlign: "left",
                        marginLeft: 18,
                        color: "#FFFFFF",
                        fontFamily: "Montserrat",
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "24px",
                        letterSpacing: "-0.002em",
                      }}
                    >
                      Tên đăng nhập:
                    </div>
                    <div style={{ padding: "11px 24px 13px 16px" }}>
                      <input
                        type="text"
                        id="tenDangNhap"
                        name="tenDangNhap"
                        value="tuyetnguyenngoc@alta.com.vn"
                        disabled
                        required
                        style={{
                          backgroundColor: "#2B2B3F",
                          width: "571px",
                          padding: 0,
                          border: 0,
                          height: 48,
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        textAlign: "left",
                        marginLeft: 18,
                        color: "#FFFFFF",
                        fontFamily: "Montserrat",
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "24px",
                        letterSpacing: "-0.002em",
                      }}
                    >
                      Phân quyền:
                    </div>
                    <div style={{ padding: "11px 24px 13px 16px" }}>
                      {/* <select
                        disabled
                        style={{
                          color: "white",
                          backgroundColor: "#2B2B3F",
                          width: "274px",
                          padding: 0,
                          border: 0,
                          height: 48,
                          borderRadius: "8px",
                        }}
                        id="phanQuyen"
                        name="phanQuyen"
                        value="admin"
                        aria-readonly
                        required
                      >
                        <option>Chọn phân quyền</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="guest">Guest</option>
                      </select>*/}
                      <input
                        disabled
                        type="text"
                        id="phanQuyen"
                        name="phanQuyen"
                        required
                        defaultValue="admin"
                        style={{
                          backgroundColor: "#2B2B3F",
                          width: "274px",
                          padding: 0,
                          border: 0,
                          height: 48,
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>

                  <label htmlFor="phanQuyen"></label>
                </div>
                <input type="submit" defaultValue="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//bỏ cài đặt bootstrap
export default Navbar;
