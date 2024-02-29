import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "./style2.css";
import "./ChinhSua.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChinhSuaTacPham = () => {
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
              Chi tiết hợp đồng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chỉnh sửa danh sách tác phẩm ủy quyền
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

          <div
            style={{
              width: "665px",
              height: "48px",
              position: "absolute",
              top: "186px",
              left: "80px",
              // padding: "12px 24px 12px 24px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#2B2B3F",
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
              placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
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

          {/* bảng */}
          <div
            style={{
              width: 1683,
              //   height: "fit-content",
              position: "absolute",
              top: 258,
              left: 78,
              //   padding: "16px 24px",
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            {/* Nội dung thẻ div */}
            <table
              style={{
                width: 1635,
                height: 606,
                margin: "16px 24px 104px 24px",
              }}
            >
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                  <th style={{ width: "51px" }}>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </th>
                  <th style={{ width: "99px" }}>STT</th>
                  <th style={{ width: "282px" }}>Tên bản ghi</th>
                  <th style={{ width: "205px" }}>Mã ISRC</th>
                  <th style={{ width: "247px" }}>Ca sĩ</th>
                  <th style={{ width: "249px" }}>Tác giả</th>
                  <th style={{ width: "231px" }}>Ngày tải</th>
                  <th style={{ width: "157px" }}>Tình trạng</th>
                  <th style={{ width: "114px" }}></th>
                </tr>
              </thead>
              <tbody
                style={{
                  color: "#FFFFFF",
                  //   height: 45,
                  //   styleName: "14 regular",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>1</td>
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
                  <td>VNA1423525</td>
                  <td>Vương Anh Tú</td>
                  <td>Vương Phong</td>
                  <td>01/04/2021 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>2</td>
                  <td>
                    Small Concrete Fish <br /> Ballad{" "}
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
                    0:15
                  </td>
                  <td>VNA1423525</td>
                  <td>Khác Hưng</td>
                  <td>Đinh Nhân DVM</td>
                  <td>12/03/2021 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>3</td>
                  <td>
                    Kings & Queens <br /> Ballad{" "}
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
                  <td>VNA1423637</td>
                  <td>Châu Đăng Khoa</td>
                  <td>Lê Loan</td>
                  <td>14/03/2021 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>4</td>
                  <td>
                    Clap <br /> R&B{" "}
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
                  <td>VNA5247472</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>Ms. Trần Hà</td>
                  <td>01/03/2021 15:51:05</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>5</td>
                  <td>
                    Peaches <br /> Indie{" "}
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
                    3:17
                  </td>
                  <td>VNA6475884</td>
                  <td>Karik</td>
                  <td>Lý Cường</td>
                  <td>01/02/2021 13:13:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>6</td>
                  <td>
                    Leave The Door Open <br /> Ballad{" "}
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
                    4:12
                  </td>
                  <td>VNA2537477</td>
                  <td>Binz</td>
                  <td>Lý Sơn</td>
                  <td>01/01/2021 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>7</td>
                  <td>
                    Beautiful Girls <br /> R&B{" "}
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
                    3:45
                  </td>
                  <td>VNA6474758</td>
                  <td>JustaTee</td>
                  <td>Đặng Công Minh</td>
                  <td>01/12/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>8</td>
                  <td>
                    Yummy <br /> Pop{" "}
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
                    3:56
                  </td>
                  <td>VNA2575758</td>
                  <td>Đen Vâu</td>
                  <td>Đoàn Lê DVM</td>
                  <td>01/11/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>9</td>
                  <td>
                    Uptown Funk <br /> Pop{" "}
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
                    4:12
                  </td>
                  <td>VNA6536364</td>
                  <td>RPT MCK</td>
                  <td>Vũ Cát Tường</td>
                  <td>16/10/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>10</td>
                  <td>
                    On The Ground
                    <br /> Ballad{" "}
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
                    3:56
                  </td>
                  <td>VNA3759869</td>
                  <td>Chillies</td>
                  <td>Nhã Lê</td>
                  <td>30/09/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>11</td>
                  <td>
                    Say So
                    <br /> Electronic{" "}
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
                  <td>VNA2675859</td>
                  <td>Cá Hồi Hoang</td>
                  <td>Hồ Bùi</td>
                  <td>20/09/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>12</td>
                  <td>
                    At My Worst <br /> Electronic{" "}
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
                  <td>VNA3697084</td>
                  <td>Suboi</td>
                  <td>Lê Phong</td>
                  <td>16/09/2020 17:13:57</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr>
                {/* <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>13</td>
                  <td>
                    Anh của ngày hôm qua
                    <br /> Electronic{" "}
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
                  <td>VNA2547569</td>
                  <td>Mai Deadline</td>
                  <td>Đét Lai</td>
                  <td>01/02/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
                    </a>
                  </td>
                </tr> */}
              </tbody>
            </table>

            <div
              style={{
                width: "fit-content",
                maxWidth: "1485px",
                display: "flex",
                gap: "8px",

                marginLeft: 24,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  width: "max-content",
                  maxWidth: "279.82px",
                  minHeight: "32px",
                  color: "#F5F5FF",
                }}
              >
                Hiển thị
                <div style={{ display: "inline-flex", position: "relative" }}>
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
                    13
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
              position: "absolute",
              top: "1084px",
              left: "776px",
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

          <div
            style={{ height: 130, borderRadius: "16px 0px 0px 16px" }}
            className="khung2"
          >
            <div className="khung1">
              <a href="/suathongtin" style={{ textDecoration: "none" }}>
                <img
                  src="images/huy2.png"
                  style={{ height: 52, width: 52, padding: 0 }}
                  alt="sua"
                  className="icon"
                />
                <div className="textt">
                  Từ chối <br /> bản ghi
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChinhSuaTacPham;
