import { useState } from "react";

// const DoiMK = () => {
//   return <></>;
// };

import "./Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const DoiMK = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let user = location.state && location.state.user;

  const handleDangXuat = () => {
    navigate("/");
  };

  //   useEffect(() => {
  //     if (user === null) navigate("/");
  //   }, []);

  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ngăn chặn form submit tự động

    const form = event.currentTarget as HTMLFormElement; // Ép kiểu currentTarget thành HTMLFormElement

    // Ép kiểu các phần tử thành các phần tử đầu vào cụ thể
    const usernameInput = form.elements.namedItem(
      "username"
    ) as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    // Lấy giá trị của các trường đầu vào
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Kiểm tra xem tên đăng nhập và mật khẩu đã được nhập hay chưa
    if (username === "" || password === "") {
      setErrorMessage("Hãy nhập tài khoản và mật khẩu.");
    } else {
      // Nếu đã nhập đầy đủ, tiến hành submit form
      form.submit();
    }
  };
  // Show password
  const [showPasswordnew, setShowPasswordnew] = useState(false);

  const handleToggleNewPassword = () => {
    setShowPasswordnew(!showPasswordnew);
  };
  const [showPasswordcomfirm, setShowPasswordcomfirm] = useState(false);

  const handleTogglePasswordcomfirm = () => {
    setShowPasswordcomfirm(!showPasswordcomfirm);
  };

  const [showPasswordOldComfirm, setShowPasswordOldComfirm] = useState(false);

  const handleTogglePasswordOldComfirm = () => {
    setShowPasswordOldComfirm(!showPasswordOldComfirm);
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <div className="sidebar">
          <div className="logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/logo.png?alt=media&token=e0a3187d-50ee-4e26-840f-b32c4ddf0cb4"
              alt="Logo navbar"
            />
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
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/logo.png?alt=media&token=e0a3187d-50ee-4e26-840f-b32c4ddf0cb4"
                alt="Icon"
                style={{ marginTop: "300%" }}
              />
            </div>
            <div className="login" style={{ color: "white" }}>
              {/* <span>Welcome, {user}</span> */}
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

          {/* <div
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
          </div> */}
          <form action="" onSubmit={validateForm}>
            <div
              style={{
                position: "absolute",
                width: "313px",
                height: "48px",
                top: "200px",
                fontFamily: "Montserrat",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "48px",
                letterSpacing: "-0.002em",
                textAlign: "center",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Thay đổi mật khẩu
            </div>
            <div
              style={{
                position: "absolute",
                width: 471,
                height: 80,
                top: 270,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      marginLeft: 18,
                      color: "#FFFFFF",
                      fontFamily: "Montserrat",
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: "-0.002em",
                    }}
                  >
                    Mật khẩu hiện tại:
                  </div>
                  <div
                    style={{
                      width: 471,
                      height: 48,
                      padding: "11px 24px 13px 16px",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <input
                      type={showPasswordOldComfirm ? "text" : "password"}
                      name="password"
                      style={{
                        backgroundColor: "#2B2B3F",
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        borderRadius: 8,
                      }}
                    />
                    <div
                      style={{
                        marginRight: 20,
                        cursor: "pointer",
                        position: "absolute",
                        right: 10,
                      }}
                      onClick={handleTogglePasswordOldComfirm}
                    >
                      {showPasswordOldComfirm ? (
                        <i className="far fa-eye-slash"></i>
                      ) : (
                        <i className="far fa-eye"></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MK moi */}

            <div
              style={{
                position: "absolute",
                width: 471,
                height: 80,
                top: 366,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      marginLeft: 18,
                      color: "#FFFFFF",
                      fontFamily: "Montserrat",
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: "-0.002em",
                    }}
                  >
                    Mật khẩu mới:
                  </div>
                  <div
                    style={{
                      width: 471,
                      height: 48,
                      padding: "11px 24px 13px 16px",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <input
                      type={showPasswordnew ? "text" : "password"}
                      name="password"
                      style={{
                        backgroundColor: "#2B2B3F",
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        borderRadius: 8,
                      }}
                    />
                    <div
                      style={{
                        marginRight: 20,
                        cursor: "pointer",
                        position: "absolute",
                        right: 10,
                      }}
                      onClick={handleToggleNewPassword}
                    >
                      {showPasswordnew ? (
                        <i className="far fa-eye-slash"></i>
                      ) : (
                        <i className="far fa-eye"></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* comfirm password */}

            <div
              style={{
                position: "absolute",
                width: 471,
                height: 80,
                top: 466,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      marginLeft: 18,
                      color: "#FFFFFF",
                      fontFamily: "Montserrat",
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: "-0.002em",
                    }}
                  >
                    Nhập lại mật khẩu mới:
                  </div>
                  <div
                    style={{
                      width: 471,
                      height: 48,
                      padding: "11px 24px 13px 16px",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <input
                      type={showPasswordcomfirm ? "text" : "password"}
                      name="password"
                      style={{
                        backgroundColor: "#2B2B3F",
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        borderRadius: 8,
                      }}
                    />
                    <div
                      style={{
                        marginRight: 20,
                        cursor: "pointer",
                        position: "absolute",
                        right: 10,
                      }}
                      onClick={handleTogglePasswordcomfirm}
                    >
                      {showPasswordcomfirm ? (
                        <i className="far fa-eye-slash"></i>
                      ) : (
                        <i className="far fa-eye"></i>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Montserrat",
                    fontSize: 16,
                    fontWeight: 400,
                    letterSpacing: "-0.002em",
                    textAlign: "center",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "transparent",
                      width: 168,
                      height: 56,
                      top: 744,
                      left: 856,
                      marginRight: 50,
                      padding: "16px 24px",
                      borderRadius: 8,
                      gap: 8,
                      fontFamily: "Montserrat",
                      fontSize: 18,
                      fontWeight: 500,
                      letterSpacing: "-0.002em",
                      color: "#FFFFFF",
                    }}
                    type="submit"
                  >
                    <Link to="/navbar">Hủy</Link>
                  </button>
                  <button
                    style={{
                      backgroundColor: "#FF7506",
                      width: 168,
                      height: 56,
                      top: 744,
                      left: 856,
                      padding: "16px 24px",
                      borderRadius: 8,
                      gap: 8,
                      fontFamily: "Montserrat",
                      fontSize: 18,
                      fontWeight: 500,
                      letterSpacing: "-0.002em",
                      color: "#FFFFFF",
                    }}
                    type="submit"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div
            style={{
              position: "fixed",
              top: 188,
              right: 0,
              height: 372,
              width: 110,
            }}
          >
            {/* <div
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
              Sửa thông tin
            </div> */}

            {/* <div
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="far fa-eye-slash" style={{ marginBottom: 8 }}></i>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 18,
                    letterSpacing: "0.005em",
                    textAlign: "center",
                  }}
                >
                  Sửa thông tin
                </div>
              </div>
            </div> */}

            {/* <div
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="far fa-eye-slash"
                  style={{ position: "absolute", top: 10 }}
                ></i>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 18,
                    letterSpacing: "0.005em",
                    textAlign: "center",
                  }}
                >
                  Sửa thông tin
                </div>
              </div>
            </div> */}

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
              <Link to="/DoiMK">Đổi mật khẩu</Link>
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
export default DoiMK;
