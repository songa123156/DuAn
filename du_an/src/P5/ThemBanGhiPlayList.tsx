import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../p3/style2.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ThemBanGhiPlayList = () => {
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
              Playlist
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thêm playlist mới
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thêm bản ghi vào playlist
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
              Thêm bản ghi
            </p>
          </div>

          <div
            style={{
              width: "868px",
              height: "722px",
              top: "186px",
              left: "80px",
              padding: "16px 24px 16px 24px",
              gap: "16px",
              borderRadius: "16px ",
              position: "absolute",
              background: "#2F2F41B2",
              color: "white",
            }}
          >
            <div
              style={{
                width: "815px",
                height: "136px",
                gap: "0px",
              }}
            >
              <div
                style={{
                  width: "114px",
                  height: "24px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Kho bản ghi
              </div>
              <div
                style={{
                  width: "64px",
                  height: "24px",
                  top: "56px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#AEAEAE",
                }}
              >
                Thể loại
              </div>
              <select
                style={{
                  width: "170px",
                  height: "40px",
                  top: "50px",
                  left: "96px",
                  padding: "8px 12px 8px 16px",
                  gap: "0px",
                  borderRadius: "8px",
                  border: "1px solid #FF7506",
                  color: "white",
                  position: "absolute",
                  background: "#1E1E2E",
                  opacity: 0.5,
                }}
                name=""
                id=""
              >
                <option selected value="Tất cả">
                  Tất cả
                </option>
                <option value="Video">Video</option>
                <option value="Audio">Audio</option>
              </select>

              <div
                style={{
                  height: "24px",
                  top: "56px",
                  left: "313px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#AEAEAE",
                }}
              >
                Playlist mẫu
              </div>
              <select
                style={{
                  width: "170px",
                  height: "40px",
                  top: "50px",
                  left: "446px",
                  padding: "8px 12px 8px 16px",
                  gap: "0px",
                  borderRadius: "8px",
                  border: "1px solid #FF7506",
                  color: "white",
                  position: "absolute",
                  background: "#1E1E2E",
                  opacity: 0.5,
                }}
                name=""
                id=""
              >
                <option selected value="Playlist mẫu">
                  Playlist mẫu
                </option>
                <option value="Playlist 1">Playlist 1</option>
                <option value="Playlist 2">Playlist 2</option>
                <option value="Playlist 3">Playlist 3</option>
                <option value="Playlist 4">Playlist 4</option>
              </select>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  width: "653px",
                  height: "48px",
                  top: "104px",
                  padding: "12px 24px",
                  gap: "0px",
                  borderRadius: "8px",
                  position: "absolute",
                  background: "#33334D",
                  color: "white",
                  opacity: 0.5,
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
                  placeholder="Tên bản ghi, ca sĩ..."
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
            </div>
            <table style={{ marginTop: 16 }}>
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48 }}>
                  <th style={{ width: "72px" }}>STT</th>
                  <th style={{ width: "229px" }}>Tên bản ghi</th>
                  <th style={{ width: "183px" }}>Ca sĩ</th>
                  <th style={{ width: "152px" }}>Tác giả</th>
                  <th style={{ width: "107px" }}></th>
                  <th style={{ width: "73px" }}></th>
                </tr>
              </thead>
              <tbody style={{ color: "#FFFFFF" }}>
                <tr style={{ height: 47 }}>
                  <td>1</td>
                  <td>
                    {" "}
                    <td>
                      Gorgeous Wooden Bike <br /> Ballad{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span> Audio{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span>
                      3:12
                    </td>
                  </td>
                  <td>Tăng Phúc ft Mỹ Lệ</td>
                  <td>Origin</td>

                  <td style={{ textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Nghe
                    </a>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Thêm
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>2</td>
                  <td>
                    {" "}
                    <td>
                      Gorgeous Wooden Bike <br /> Ballad{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span> Audio{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span>
                      3:12
                    </td>
                  </td>
                  <td>Tăng Phúc ft Mỹ Lệ</td>
                  <td>Origin</td>

                  <td style={{ textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Nghe
                    </a>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Thêm
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>3</td>
                  <td>
                    {" "}
                    <td>
                      Gorgeous Wooden Bike <br /> Ballad{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span> Audio{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span>
                      3:12
                    </td>
                  </td>
                  <td>Tăng Phúc ft Mỹ Lệ</td>
                  <td>Origin</td>

                  <td style={{ textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Nghe
                    </a>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Thêm
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>4</td>
                  <td>
                    {" "}
                    <td>
                      Gorgeous Wooden Bike <br /> Ballad{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span> Audio{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span>
                      3:12
                    </td>
                  </td>
                  <td>Tăng Phúc ft Mỹ Lệ</td>
                  <td>Origin</td>

                  <td style={{ textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Nghe
                    </a>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Thêm
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>5</td>
                  <td>
                    {" "}
                    <td>
                      Gorgeous Wooden Bike <br /> Ballad{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span> Audio{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span>
                      3:12
                    </td>
                  </td>
                  <td>Tăng Phúc ft Mỹ Lệ</td>
                  <td>Origin</td>

                  <td style={{ textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Nghe
                    </a>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Thêm
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>6</td>
                  <td>
                    {" "}
                    <td>
                      Gorgeous Wooden Bike <br /> Ballad{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span> Audio{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span>
                      3:12
                    </td>
                  </td>
                  <td>Tăng Phúc ft Mỹ Lệ</td>
                  <td>Origin</td>

                  <td style={{ textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Nghe
                    </a>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Thêm
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>7</td>
                  <td>
                    {" "}
                    <td>
                      Gorgeous Wooden Bike <br /> Ballad{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span> Audio{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span>
                      3:12
                    </td>
                  </td>
                  <td>Tăng Phúc ft Mỹ Lệ</td>
                  <td>Origin</td>

                  <td style={{ textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Nghe
                    </a>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Thêm
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>8</td>
                  <td>
                    {" "}
                    <td>
                      Gorgeous Wooden Bike <br /> Ballad{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span> Audio{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span>
                      3:12
                    </td>
                  </td>
                  <td>Tăng Phúc ft Mỹ Lệ</td>
                  <td>Origin</td>

                  <td style={{ textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Nghe
                    </a>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Thêm
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                marginTop: 45,
                width: "fit-content",
                maxWidth: "1485px",
                height: "fit-content",
                minHeight: "32px",
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "max-content",
                  maxWidth: "279.82px",
                  height: "fit-content",
                  minHeight: "32px",
                  color: "#F5F5FF",
                }}
              >
                Hiển thị
                <div style={{ display: "inline-flex" }}>
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
                    8
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
              width: "868px",
              height: "722px",
              top: "186px",
              left: "972px",
              padding: "16px 24px 16px 24px",
              gap: "16px",
              borderRadius: "16px ",
              position: "absolute",
              background: "#2F2F41B2",
              color: "white",
            }}
          >
            <div
              style={{
                width: "815px",
                height: "136px",
                gap: "0px",
              }}
            >
              <div
                style={{
                  height: "24px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Danh sách bản ghi được thêm vào Playlist
              </div>
              <div
                style={{
                  width: "64px",
                  height: "24px",
                  top: "56px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "white",
                }}
              >
                Tổng số:
              </div>
              <div
                style={{
                  width: "170px",
                  height: "40px",
                  top: "50px",
                  left: "96px",
                  padding: "8px 12px 8px 16px",
                  gap: "0px",
                  color: "white",
                  position: "absolute",
                }}
              >
                0 bản ghi
              </div>

              <div
                style={{
                  height: "24px",
                  top: "56px",
                  left: "313px",

                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "white",
                }}
              >
                Tổng thời lượng:
              </div>
              <div
                style={{
                  width: "170px",
                  height: "40px",
                  top: "50px",
                  left: "446px",
                  padding: "8px 12px 8px 16px",
                  gap: "0px",
                  color: "white",
                  position: "absolute",
                }}
              >
                --:--:--
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  width: "653px",
                  height: "48px",
                  top: "104px",
                  padding: "12px 24px",
                  gap: "0px",
                  borderRadius: "8px",
                  position: "absolute",
                  background: "#33334D",
                  color: "white",
                  opacity: 0.5,
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
                  placeholder="Tên bản ghi, ca sĩ..."
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
            </div>
            <table style={{ marginTop: 16 }}>
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48 }}>
                  <th style={{ width: "66px" }}>STT</th>
                  <th style={{ width: "198px" }}>Tên bản ghi</th>
                  <th style={{ width: "209px" }}>Ca sĩ</th>
                  <th style={{ width: "146px" }}>Tác giả</th>
                  <th style={{ width: "107px" }}></th>
                  <th style={{ width: "73px" }}></th>
                </tr>
              </thead>
            </table>
            <div
              style={{
                width: "820px",
                height: "60px",
                top: "216px",
                padding: "12px 0px 0px 0px",
                gap: "24px",
                opacity: "0.8",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "fit-content",
                  gap: "4px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Vui lòng chọn bản ghi để thêm vào Playlist{" "}
                <span style={{ color: "red" }}> *</span>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                width: "352px",
                height: "48px",
                top: "976px",
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
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemBanGhiPlayList;
