import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../p3/style2.css";
import "./LichPhat.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ThemLichPhatMoi = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

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
              Lập lịch phát
            </a>

            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thêm lịch phát mới
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
              Lập lịch phát
            </p>
          </div>

          <div
            style={{
              width: "273px",
              height: "304px",
              top: "186px",
              left: "80px",
              padding: "16px",
              borderRadius: "16px",
              gap: "12px",
              background: "#2F2F41B2",
              position: "absolute",
            }}
          >
            {/* Nội dung của div */}
            <div
              style={{
                width: "179px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFF9F4",
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              Thông tin lịch phát
            </div>
            <div
              style={{
                width: "241px",
                height: "76px",
                borderRadius: "8px",
                // border: "1px solid #727288",
                color: "#727288",
                marginTop: 12,
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <label htmlFor="">Tên lịch phát:</label>
              <input
                style={{
                  width: "241px",
                  color: "#727288",
                  height: "48px",
                  top: "80px",
                  left: "16px",
                  padding: "11px 24px 13px 16px",
                  borderRadius: "8px",
                  border: "1px solid #727288",
                  background: "#2B2B3F",
                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              />
            </div>
            <div
              style={{
                width: "241px",
                height: "68px",
                borderRadius: "8px",
                color: "#727288",
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              <label htmlFor="">Từ ngày</label>
              <input
                type="date"
                defaultValue={"22/05/2021"}
                style={{
                  width: "241px",
                  color: "#727288",
                  height: "40px",
                  top: "80px",
                  left: "16px",
                  padding: "11px 24px 13px 16px",
                  borderRadius: "8px",
                  border: "1px solid #FF7506",
                  background: "#1E1E2E",
                }}
              />
            </div>
            <div
              style={{
                width: "241px",
                height: "68px",
                borderRadius: "8px",
                color: "#727288",
              }}
            >
              <label htmlFor="">Đến ngày</label>
              <input
                type="date"
                defaultValue={"30/06/2021"}
                style={{
                  width: "241px",
                  color: "#727288",
                  height: "40px",
                  top: "80px",
                  left: "16px",
                  padding: "11px 24px 13px 16px",
                  borderRadius: "8px",
                  border: "1px solid #FF7506",
                  background: "#1E1E2E",
                }}
              />
            </div>
          </div>

          <div
            style={{
              maxHeight: "468px",
              overflowY: "auto",
              overflowX: "hidden",
              width: "273px",
              height: "468px",
              top: "514px",
              left: "80px",
              padding: "16px",
              borderRadius: "16px",
              gap: "12px",
              background: "#2F2F41B2",
              position: "absolute",
            }}
          >
            {/* Nội dung của div */}
            <div
              style={{
                width: "173px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFF9F4",
                marginBottom: 12,
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              Danh sách Playlist
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <div
                style={{
                  width: "82px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              >
                Top USUK
              </div>
              {/* Nội dung của div */}
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  02:00:00
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                marginTop: 12,
                marginBottom: 12,
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <div
                style={{
                  width: "82px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",

                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              >
                Love Songs
              </div>
              {/* Nội dung của div */}
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  02:08:00
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <div
                style={{
                  width: "82px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              >
                Loving You
              </div>
              {/* Nội dung của div */}
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  02:15:03
                </span>
              </div>
            </div>
            <hr
              style={{
                width: "241px",
                border: "1px solid #C8C8DB",
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            />

            <div
              style={{
                width: "173px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFF9F4",
                marginBottom: 12,
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              Playlist mới
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              >
                Summer Party
              </div>
              {/* Nội dung của div */}
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  02:10:11
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                marginTop: 12,
                marginBottom: 12,
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <div
                style={{
                  width: "82px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",

                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              >
                Top USUK 2021
              </div>
              {/* Nội dung của div */}
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  02:08:00
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <div
                style={{
                  width: "82px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              >
                Lofi music
              </div>
              {/* Nội dung của div */}
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  02:15:03
                </span>
              </div>
            </div>
            <hr
              style={{
                width: "241px",
                border: "1px solid #C8C8DB",
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            />

            <div
              style={{
                width: "173px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFF9F4",
                marginBottom: 12,
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              Playlist đề xuất
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <div
                style={{
                  width: "82px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              >
                Summer Party
              </div>
              {/* Nội dung của div */}
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  02:10:11
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                marginTop: 12,
                marginBottom: 12,
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <div
                style={{
                  width: "82px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",

                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              >
                Top USUK 2021
              </div>
              {/* Nội dung của div */}
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  02:08:00
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                /* Các thuộc tính khác có thể thêm vào ở đây */
              }}
            >
              <div
                style={{
                  width: "82px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                  /* Các thuộc tính khác có thể thêm vào ở đây */
                }}
              >
                Lofi music
              </div>
              {/* Nội dung của div */}
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                    /* Các thuộc tính khác có thể thêm vào ở đây */
                  }}
                >
                  02:15:03
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 1393,
              maxHeight: 796,
              overflowY: "auto",
              height: 870,
              position: "absolute",
              top: 186,
              left: 377,
              padding: "16px 24px",
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            {/* Nội dung thẻ div */}
            <table style={{ height: "fit-content" }}>
              <thead style={{ color: "#FFAC69" }}>
                <tr
                  style={{ textAlign: "center", height: 48, color: "#FFAC69" }}
                >
                  <th className="dautien" style={{ width: "85px" }}></th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ hai
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ ba
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ tư
                  </th>
                  <th
                    className="thu"
                    style={{ width: "180px", color: "#7879F1" }}
                  >
                    Thứ năm
                    <br />{" "}
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#18E306",
                        display: "inline-block",
                      }}
                    ></div>{" "}
                    <span style={{ color: "#FFFFFF" }}>Hôm nay</span>
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ sáu
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ bảy
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Chủ nhật
                  </th>
                </tr>
              </thead>
              <tbody style={{ color: "#FFFFFF" }}>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: "85px",
                      position: "absolute",
                      top: 100,
                      paddingRight: 20,
                    }}
                  >
                    01:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    02:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    03:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    04:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    05:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    06:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",

                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    07:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      paddingRight: 20,
                      marginTop: 33,
                    }}
                  >
                    08:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>{" "}
                  <td className="thanh" style={{ width: "180px" }}></td>{" "}
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    09:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    10:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    11:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    12:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    13:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    14:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    15:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    16:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="khung2" style={{ height: 110 }}>
            <div className="khung1">
              <a href="/ApLichChoThietBi" style={{ textDecoration: "none" }}>
                <img
                  src="images/thietbi2.png"
                  alt="thietbi2"
                  className="icon"
                />
                <div className="textt">
                  Áp lịch
                  <br /> cho thiết bị
                </div>
              </a>
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
                // display: "flex",
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
                    placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
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
                          color: "#FF7506",
                          backgroundColor: "transparent",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Quay lại
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
                        Hủy hợp đồng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "1022px",
              left: "784px",
              width: "368px",
              height: "48px",
              gap: "32px",
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
      </div>
    </>
  );
};

export default ThemLichPhatMoi;
