import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../p3/style2.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChiTiepHopDongKhaiThac = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };
  const [checkNavbar, setcheckNavbar] = useState(false);

  const handleNavbar = () => {
    setcheckNavbar(!checkNavbar);
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
              >
                {user}
              </div>
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
          style={{
            width: 40,
            borderRadius: "0px 24px 24px 0px",
            display: !checkNavbar ? "flex" : "none",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1080px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              fontSize: 24,
            }}
          >
            <button
              onClick={handleNavbar}
              style={{ background: "transparent", border: 0, color: "#B65100" }}
            >
              &gt;
            </button>
          </div>
        </div>
        <div style={{ display: checkNavbar ? "flex" : "none" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "170px",
              height: "1080px",
              background: "#020220",
              color: "white",
              zIndex: "1",
              position: "fixed",
              opacity: "0.8",
            }}
          >
            <img
              src="images/logo.png"
              alt=""
              style={{
                width: "96px",
                height: "96px",
                margin: "39px 21px 0px 34px",
              }}
            />
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "110px",
              }}
            >
              <img
                src="images/banghi.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Kho bài hát
              </p>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
              }}
            >
              <img
                src="images/Playlist.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Playlist
              </p>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
              }}
            >
              <img
                src="images/calendar.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Lập lịch phát
              </p>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
              }}
            >
              <img
                src="images/quanly.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Quản lý
              </p>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
              }}
            >
              <img
                src="images/doanhthu.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Doanh thu
              </p>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
              }}
            >
              <img
                src="images/Setting.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Cài đặt
              </p>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
              }}
            >
              <img
                src="images/Support.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Hỗ trợ
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "1080px",
              background: "transparent",
              color: "white",
              zIndex: 9999,
              marginLeft: 170,
              position: "fixed",
            }}
            onClick={handleNavbar}
          ></div>
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
              Chi Tiết
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
              Hợp đồng khai thác - HD123
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "81px",
              width: "120px",
              height: "24px",
              color: "white",
            }}
          >
            Tên hợp đồng:
            <br />
            Số hợp đồng:
            <br />
            Ngày hiệu lực:
            <br />
            Ngày hết hạn:
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "220px",
              width: "315px",
              height: "24px",
              opacity: 0.7,
              color: "white",
            }}
          >
            Hợp đồng kinh doanh
            <br />
            123
            <br />
            02/06/2021
            <br />
            02/06/2021
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "721px",
              width: "119px",
              height: "24px",
              color: "white",
            }}
          >
            Đính kèm tệp:
          </div>

          <div
            style={{
              width: 208,
              height: 24,
              top: 202,
              left: 868,
              position: "absolute",
              color: "white",
            }}
          >
            <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
            hetthuongcannho.doc
            <br />
            <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
            hetthuongcannho.doc
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "1269px",
              width: "315px",
              height: "24px",
              opacity: 0.7,
              color: "white",
            }}
          >
            Loại hợp đồng:
            <br />
            Giá trị hợp đồng (VNĐ):
            <br />
            Giá trị phân phối (VNĐ/ngày):
            <br />
            Tình trạng:
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "1529px",
              width: "315px",
              height: "24px",
              opacity: 0.7,
              color: "white",
            }}
          >
            Trọn gói
            <br />
            365.000.000
            <br />
            1.000.000
            <br />
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#347AFF",
                marginRight: "5px",
                display: "inline-block",
                marginBottom: "1.5px",
              }}
            ></div>
            Đang hiệu lực
          </div>

          <div
            style={{
              height: 24,
              top: 522,
              left: 80,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            Tên đơn vị sử dụng:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Công ty TNHH MTV Âu Lạc
            </span>
            <br />
            Người đại diện:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Nguyễn văn A
            </span>
            <br />
            Chức vụ:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Giám đốc
            </span>
            <br />
            Ngày sinh:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              01/05/1984
            </span>
            <br />
            Quốc tịch:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Việt Nam
            </span>
            <br />
            Số điện thoại:
            <span style={{ left: 267, position: "absolute", width: 137 }}>
              123456789012
            </span>
            <br />
            Email:
            <span style={{ left: 267, position: "absolute", width: 137 }}>
              nguyenvana@gmail.com
            </span>
          </div>
          <div
            style={{
              height: 24,
              top: 522,
              left: 750,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            Giới tính:
            <br />
            CMND/ CCCD:
            <br />
            Ngày cấp:
            <br />
            Nơi cấp:
            <br />
            Mã số thuế:
            <br />
            Nơi cư trú:
          </div>
          <div
            style={{
              height: 24,
              top: 522,
              color: "#FFFFFF",
              left: 870,
              position: "absolute",
              width: 293,
            }}
          >
            Nam
            <br />
            123456789012
            <br />
            02/06/2005
            <br />
            Tp.HCM, Việt Nam
            <br />
            123456789012
            <br />
            69/53, Nguyễn Gia Trí, Phường 25,
            <br />
            Quận Bình Thạnh, Thành phố Hồ
            <br />
            Chí Minh
          </div>
          <div
            style={{
              height: 24,
              top: 522,
              color: "#FFFFFF",
              left: 1269,
              position: "absolute",
              width: 181,
            }}
          >
            Tên đăng nhập:
            <br />
            Mật khẩu:
            <br />
            Số tài khoản:
            <br />
            Ngân hàng:
          </div>
          <div
            style={{
              height: 24,
              top: 522,
              color: "#FFFFFF",
              left: 1511,
              position: "absolute",
              width: 181,
            }}
          >
            vuonganhtu123
            <br />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <br />
            123456789012
            <br />
            ACB - Ngân hàng Á Châu
          </div>

          <div
            className="khung2"
            style={{
              height: 242,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
            }}
          >
            <div className="khung1">
              <a href="/ChinhSuaHopDong" style={{ textDecoration: "none" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=26ad60e6-30e9-4c8d-b4a4-76777c548920"
                  alt="sua"
                  className="icon"
                />
                <div className="textt">
                  Chỉnh sửa <br /> hợp đồng
                </div>
              </a>
            </div>
            <div className="khung1">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huy2.png?alt=media&token=74120a7e-d421-4bd0-9587-0b93be7acb4e"
                  alt="doimk"
                  className="icon"
                />
                <div className="textt">
                  Hủy hợp <br />
                  đồng
                </div>
              </div>
            </div>
          </div>
          {/* showModal     */}
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
                width: "720px",
                height: "432px",
              }}
            >
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#3E3E5B",
                  width: "720px",
                  height: "432px",
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
                    Hủy hợp đồng uỷ quyền
                  </h5>
                  <textarea
                    placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng khai thác này..."
                    style={{
                      position: "absolute",
                      top: "96px",
                      left: "40px",
                      width: "640px",
                      height: "208px",
                      padding: "12px 24px 12px 16px",
                      borderRadius: "8px",
                      border: " 1px solid #727288",
                      backgroundColor: "#2B2B3F",
                    }}
                  />

                  <div>
                    <div
                      style={{
                        width: "368px",
                        height: "48px",
                        top: "344px",
                        left: "176px",
                        gap: "32px",
                        position: "absolute",
                      }}
                    >
                      <button
                        className="butoon"
                        style={{
                          color: "white",
                          background: "#FF7506",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Hủy hợp đồng
                      </button>

                      <button
                        className="butoon"
                        style={{
                          color: "#FF7506",
                          backgroundColor: "transparent",
                          marginLeft: "32px",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Quay lại
                      </button>
                    </div>
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

export default ChiTiepHopDongKhaiThac;
