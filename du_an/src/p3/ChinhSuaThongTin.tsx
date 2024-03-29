import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "./style2.css";
import "./ChinhSuaThongTin.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChinhSuaThongTin = () => {
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
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chỉnh sửa thông tin
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
              Hợp đồng uỷ quyền bài hát - BH123
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
          <div className="textCT">Số hợp đồng:</div>
          <div className="textCT"> Tên hợp đồng:</div>
          <div className="textCT"> Ngày hiệu lực:</div>
          <div className="textCT"> Ngày hết hạn:</div>
          <div className="textCT"> Tình trạng:</div>
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
            defaultValue={1421566747}
            style={{
              //   position: "absolute",
              //   top: "202px",
              //   left: "237px",
              width: "374px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <input
            className="inputtext"
            defaultValue="Hợp đồng uỷ quyền tác phẩm âm nhạc"
            style={{
              //   position: "absolute",
              //   top: "202px",
              //   left: "237px",
              width: "374px",
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
            defaultValue="01/05/2021"
            style={{
              //   position: "absolute",
              //   top: "202px",
              //   left: "237px",
              width: "155px",
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
            defaultValue="01/12/2021"
            style={{
              //   position: "absolute",
              //   top: "202px",
              //   left: "237px",

              width: "155px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <select
            className="inputtext"
            style={{
              //   position: "absolute",
              //   top: "202px",
              //   left: "237px",
              width: "374px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
              color: "#878890",
            }}
            name=""
            id=""
          >
            <option value="1">Đang hiệu lực</option>
          </select>
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
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tailen.png?alt=media&token=1b54c9ca-ea7f-4f07-b2ce-9a6467da29d5"
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
            position: "absolute",
            color: "white",
            width: 273,
            height: 184,
            top: 186,
            left: 1355,
          }}
        >
          <span style={{ color: "#FFAC69" }}>
            <i
              style={{ marginRight: 8 }}
              className="fa-solid fa-circle-info"
            ></i>
            Mức nhuận bút
          </span>
          <br />
          Quyền tác giả:
          <span style={{ left: 240, position: "absolute" }}>0%</span>
          <br />
          Quyền liên quan: <br />
          Quyền của người biểu diễn:
          <span style={{ left: 240, position: "absolute" }}>50%</span>
          <br />
          Quyền của nhà sản xuất:
          <span style={{ left: 240, position: "absolute" }}>50%</span>
          <br />
          (Bản ghi/video)
        </div>

        <hr
          style={{
            border: "1px solid #727288",
            width: "1799px",
            position: "absolute",
            top: "538px",
            left: "80px",
            opacity: 0.5,
            transform: "rotate(-0deg)",
          }}
        />

        <div
          style={{
            width: "290px",
            height: "24px",
            position: "absolute",
            top: "570px",
            left: "80px",
            font: "bold 18px Montserrat",
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFAC69",
          }}
        >
          Thông tin pháp nhân uỷ quyền
        </div>

        <div
          style={{
            width: "234px",
            height: "24px",
            position: "absolute",
            top: "630px",
            left: "80px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 36 }}>Pháp nhân ủy quyền:</div>
          <div style={{ marginBottom: 40 }}>
            Tên người uỷ quyền:
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
          <div style={{ marginBottom: 36 }}>
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
          <div style={{ marginBottom: 36 }}>
            Giới tính:
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
          <div style={{ marginBottom: 36 }}>
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
            top: "630px",
            left: "286px",
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
              <input type="radio" name="uyquyen" /> Cá nhân
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
              <input type="radio" name="uyquyen" /> Tổ chức
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              defaultValue="Nguyễn Văn A"
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
          <div style={{ marginBottom: 24 }}>
            <input
              type="date"
              style={{
                width: "155px",
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
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                width: "72px",
                height: "24px",

                marginRight: "8px",
                display: "inline-block",
              }}
            >
              {" "}
              <input type="radio" name="gioitinh" /> Nam
            </div>
            <div
              style={{
                width: "72px",
                height: "24px",
                left: "147px",
                position: "absolute",
                marginRight: "8px",
                display: "inline-block",
              }}
            >
              <input type="radio" name="gioitinh" /> Nữ
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <select
              style={{
                width: "240px",
                height: "48px",

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
          <div>
            <input
              type="tel"
              defaultValue="(+84) 345 678 901"
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
        </div>

        <div
          style={{
            width: "126px",
            position: "absolute",
            top: "630px",
            left: "750px",
            color: "white",
          }}
        >
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
            top: "618px",
            left: "900px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <input
              defaultValue={"123456789012"}
              style={{
                width: "154px",
                height: "48px",
                // position: "absolute",
                // top: "618px",
                // left: "900px",
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
              defaultValue={"10/01/2011"}
              style={{
                width: "155px",
                height: "48px",
                // position: "absolute",
                // top: "682px",
                // left: "900px",
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
              defaultValue="Tp.HCM, Việt Nam"
              style={{
                width: "311px",
                height: "48px",
                // position: "absolute",
                // top: "746px",
                // left: "900px",
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
              defaultValue={"92387489"}
              style={{
                width: "311px",
                height: "48px",
                // position: "absolute",
                // top: "810px",
                // left: "900px",
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
              defaultValue={
                "69/53, Nguyễn Gia Trí, phường 25, quận Bình Thạnh, thành phố Hồ Chí Minh"
              }
              style={{
                width: "311px",
                height: "96px",
                // position: "absolute",
                // top: "874px",
                // left: "900px",
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
            top: "630px",
            left: "1351px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 40 }}>Email:</div>
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
            top: "618px",
            left: "1515px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <input
              defaultValue={"nguyenvana@gmail.com"}
              style={{
                width: "325px",
                height: "48px",
                // position: "absolute",
                // top: "618px",
                // left: "1515px",
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
              defaultValue={"nguyenvana@gmail.com"}
              style={{
                width: "325px",
                height: "48px",
                // position: "absolute",
                // top: "618px",
                // left: "1515px",
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
              defaultValue={"00000000"}
              style={{
                width: "325px",
                height: "48px",
                // position: "absolute",
                // top: "618px",
                // left: "1515px",
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
              defaultValue={"1231123312211223"}
              style={{
                width: "325px",
                height: "48px",
                // position: "absolute",
                // top: "618px",
                // left: "1515px",
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
              defaultValue={"ACB - Ngân hàng Á Châu"}
              style={{
                width: "325px",
                height: "48px",
                // position: "absolute",
                // top: "618px",
                // left: "1515px",
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

export default ChinhSuaThongTin;
