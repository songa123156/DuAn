import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChiTietThieBiP8 = () => {
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
              Thông tin thiết bị - Device12233444
            </p>
          </div>
        </div>
        <div
          style={{
            width: "1682px",
            height: "480.29px",
            top: "202px",
            left: "80px",
            position: "absolute",
            borderRadius: "8px",
            background: "#2B2B3F",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "340px",
              height: "364px",
              top: "24px",
              left: "125px",
            }}
          >
            <div
              style={{
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FF7506",
                top: 24,
                position: "absolute",
              }}
            >
              Thông tin thiết bị
            </div>
            <div
              style={{
                width: "340px",
                height: "160px",
                position: "absolute",
                top: "80px",
                // left: "125px",
                borderRadius: "16px",
                // Các thuộc tính CSS khác
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hinh1.png?alt=media&token=c1d81e82-3fe4-4a14-9ddd-8fdd713856a1"
                alt="hinh1"
              />
            </div>
            <div style={{ position: "absolute", top: 272, color: "white" }}>
              <div
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: "50%",
                  background: "#18E306",
                  display: "inline-block",
                  marginRight: 3,
                  marginBottom: 1,
                }}
              ></div>
              Hoạt động
            </div>
            <div style={{ position: "absolute", top: 316, color: "white" }}>
              Ghi chú:
            </div>
            <div
              style={{
                position: "absolute",
                top: 316,
                color: "white",
                left: 108,
              }}
            >
              Văn bản này không những <br /> đã tồn tại năm thế kỉ, mà khi{" "}
              <br /> được áp dụng vào tin học
            </div>
          </div>

          <div
            style={{
              width: "210px",
              height: "24px",
              top: "24px",
              left: "674px",
              position: "absolute",
              color: "#FF7506",
              fontSize: 24,
              // Các thuộc tính CSS khác
            }}
          >
            DEVICE12233444
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "80px",
              left: "674px",
              position: "absolute",
              color: "white",
            }}
          >
            SKU/ID:
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "128px",
              left: "674px",
              position: "absolute",
              color: "white",
            }}
          >
            Địa chỉ Mac:
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "176px",
              left: "674px",
              position: "absolute",
              color: "white",
            }}
          >
            Tên đăng nhập:
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "224px",
              left: "674px",
              position: "absolute",
              color: "white",
            }}
          >
            Định dạng:
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "272px",
              left: "674px",
              position: "absolute",
              color: "white",
            }}
          >
            Vị trí:
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "320px",
              left: "674px",
              position: "absolute",
              color: "white",
            }}
          >
            Thời hạn bảo hành:
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "368px",
              left: "674px",
              position: "absolute",
              color: "white",
            }}
          >
            Trạng thái thiết bị:
          </div>

          <div
            style={{
              width: "210px",
              height: "24px",
              top: "80px",
              left: "867px",
              position: "absolute",
              color: "white",
              opacity: "50%",
            }}
          >
            A23434455556
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "128px",
              left: "867px",
              position: "absolute",
              color: "white",
              opacity: "50%",
            }}
          >
            113.56.79.01
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "176px",
              left: "867px",
              position: "absolute",
              color: "white",
              opacity: "50%",
            }}
          >
            User322334
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "224px",
              left: "867px",
              position: "absolute",
              color: "white",
              opacity: "50%",
            }}
          >
            Displayable
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "272px",
              left: "867px",
              position: "absolute",
              color: "white",
              opacity: "50%",
            }}
          >
            Ho Chi Minh
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "320px",
              left: "867px",
              position: "absolute",
              color: "white",
              opacity: "50%",
            }}
          >
            22/06/2021
          </div>
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "368px",
              left: "867px",
              position: "absolute",
              color: "white",
              opacity: "50%",
            }}
          >
            Activated
          </div>
          <div
            style={{
              width: "337px",
              height: "128px",
              top: "24px",
              left: "1192px",
              position: "absolute",
            }}
          >
            <div
              style={{
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FF7506",
                top: 24,
                position: "absolute",
              }}
            >
              Thông tin thiết bị
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "80px",
                position: "absolute",
                color: "white",
              }}
            >
              Phiên bản cũ nhất:
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "80px",
                left: "206px",
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              12.3 (20/02/2020)
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "128px",
                left: "206px",
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              12.3 (20/02/2020)
            </div>
          </div>
          <div
            style={{
              width: "255px",
              height: "128px",
              top: "264px",
              left: "1192px",
              position: "absolute",
            }}
          >
            <div
              style={{
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FF7506",
                top: 24,
                position: "absolute",
              }}
            >
              Dung lượng bộ nhớ
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                marginTop: "68px",

                position: "absolute",
                color: "white",
              }}
            >
              Dung lượng
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                marginTop: "104px",
                position: "absolute",
                color: "white",
              }}
            >
              Còn trống
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                marginTop: "68px",
                left: 206,
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              512GB
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                marginTop: "104px",
                position: "absolute",
                color: "white",
                opacity: "50%",

                left: 206,
              }}
            >
              123GB
            </div>
          </div>
        </div>

        <div className="khung2">
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=26ad60e6-30e9-4c8d-b4a4-76777c548920"
                alt="sua"
                className="icon"
              />
              <div className="textt">Chỉnh sửa</div>
            </div>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/doimk.png?alt=media&token=533ea983-0039-43a9-a007-265d1fb8417f"
                alt="doimk"
                className="icon"
              />
              <div className="textt">
                Khôi phục <br /> mật khẩu
              </div>
            </div>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/quay.png?alt=media&token=2a317aca-041a-49dc-bf4c-1a1a52239a56"
                alt="quay"
                className="icon"
              />
              <div className="textt">
                Khôi phục <br /> bộ nhớ
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              width: "623px",
              height: "740px",
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "#3E3E5B",
                width: "623px",
                height: "740px",
                borderRadius: "16px",
              }}
            >
              <div className="modal-body">
                <h5
                  className="modal-title m-0"
                  id="exampleModalLabel"
                  style={{
                    width: "100%",
                    height: "24px",
                    top: "32px",
                    left: "159px",
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    letterSpacing: "-0.002em",
                    textAlign: "center",
                    color: "#F5F5FF",
                  }}
                >
                  Chỉnh sửa thông tin thiết bị
                </h5>
                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "96px",
                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>
                    Tên thiết bị: <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"Device12233444"}
                      style={{
                        width: "543px",
                        color: "white",
                        height: "48px",
                        // top: "36px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "196px",
                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>
                    SKU/ID: <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"123345456789"}
                      style={{
                        width: "543px",
                        height: "48px",
                        color: "white",

                        // top: "36px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "296px",

                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>
                    Địa chỉ Mac: <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"113.56.79.01"}
                      style={{
                        color: "white",

                        width: "543px",
                        height: "48px",
                        // top: "36px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "396px",
                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>
                    Tên đăng nhập: <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"User322334"}
                      style={{
                        color: "white",

                        width: "543px",
                        height: "48px",
                        // top: "36px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "496px",
                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>Vị trí:</div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"Ho Chi Minh"}
                      style={{
                        color: "white",

                        width: "543px",
                        height: "48px",
                        // top: "36px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "543px",
                    height: "24px",
                    top: "596px",
                    left: "40px",
                    position: "absolute",
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  <div>
                    Trạng thái thiết bị: <span style={{ color: "red" }}>*</span>
                    <div
                      style={{
                        display: "inline-block",
                        marginLeft: 27,
                        marginRight: 50,
                      }}
                      className="form-check"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Đã kích hoạt
                      </label>
                    </div>
                    <div
                      style={{ display: "inline-block" }}
                      className="form-check"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Ngưng kích hoạt
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      width: "368px",
                      height: "48px",
                      top: "652px",
                      left: "127px",
                      gap: "32px",
                      position: "absolute",
                    }}
                  >
                    <button
                      className="butoon"
                      style={{
                        color: "#FF7506",
                        background: "transparent",
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
                        marginLeft: "32px",
                      }}
                      data-bs-dismiss="modal"
                    >
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietThieBiP8;
