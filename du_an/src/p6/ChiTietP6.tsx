import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChiTietP6 = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const [selectAll, setSelectAll] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);

  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);
  const [checkbox9, setCheckbox9] = useState(false);
  const [checkbox10, setCheckbox10] = useState(false);
  const [checkbox11, setCheckbox11] = useState(false);
  const [checkbox12, setCheckbox12] = useState(false);
  const [checkbox13, setCheckbox13] = useState(false);

  const handleSelectAllChange = (event: any) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setCheckbox1(checked);
    setCheckbox2(checked);
    setCheckbox3(checked);
    setCheckbox4(checked);
    setCheckbox5(checked);
    setCheckbox6(checked);
    setCheckbox7(checked);
    setCheckbox8(checked);
    setCheckbox9(checked);
    setCheckbox10(checked);
    setCheckbox11(checked);
    setCheckbox12(checked);
    setCheckbox13(checked);

    // Update other checkboxes as needed
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
              Đơn vị sử dụng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi tiết
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
              Đơn vị sử dụng - ABCD
            </p>
          </div>
        </div>

        <div
          style={{
            width: "665px",
            height: "48px",
            position: "absolute",
            top: "186px",
            left: "80px",
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

        <div
          style={{
            width: 1686,
            //   height: "fit-content",
            position: "absolute",
            top: 258,
            left: 84,
            //   padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          {/* Nội dung thẻ div */}
          <table
            style={{
              width: 1686,
              height: 770,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "99px" }}>
                  {" "}
                  <input
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </th>
                <th style={{ width: "97px" }}>STT</th>
                <th style={{ width: "189px" }}>Tên tài khoản quản trị</th>
                <th style={{ width: "192px" }}>Số hợp đồng</th>
                <th style={{ width: "261px" }}>Admin</th>
                <th style={{ width: "202px" }}>Người dùng</th>
                <th style={{ width: "185px" }}>Thiết bị được chỉ định</th>
                <th style={{ width: "151px" }}>Ngày hết hạn</th>
                <th style={{ width: "262px" }}>Trạng thái</th>
              </tr>
            </thead>
            <tbody
              style={{
                color: "#FFFFFF",
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
                    checked={checkbox1}
                    onChange={(event) => setCheckbox1(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox2}
                    onChange={(event) => setCheckbox2(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>2</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox3}
                    onChange={(event) => setCheckbox3(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>3</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#FF4747",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Ngưng hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox4}
                    onChange={(event) => setCheckbox4(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>4</td>
                <td>Nguyen Van A</td>
                <td>Content Manager</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox5}
                    onChange={(event) => setCheckbox5(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>5</td>
                <td>Nguyen Van A</td>
                <td>Content Manager</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox6}
                    onChange={(event) => setCheckbox6(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>6</td>
                <td>Nguyen Van A</td>
                <td>Content Manager</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox7}
                    onChange={(event) => setCheckbox7(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>7</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox8}
                    onChange={(event) => setCheckbox8(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>8</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox9}
                    onChange={(event) => setCheckbox9(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>9</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox10}
                    onChange={(event) => setCheckbox10(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>10</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox11}
                    onChange={(event) => setCheckbox11(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>11</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox12}
                    onChange={(event) => setCheckbox12(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>12</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox13}
                    onChange={(event) => setCheckbox13(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>13</td>
                <td>Nguyen Van A</td>
                <td>QC</td>
                <td>nguyenvanb@gmail.com</td>
                <td>nguyenvanb</td>
                <td>21/04/2021</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/ThongTinNguoiDung"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>
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

        <div className="khung2">
          <div className="khung1">
            <a href="/ThemNguoiDung" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/cong.png?alt=media&token=24f52e64-0a63-4ba4-83d6-3ef79985125c"
                alt="cong"
                className="icon"
              />
              <div className="textt">
                Thêm <br /> người dùng
              </div>
            </a>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/rac.png?alt=media&token=d2d84743-3bc9-4186-8a75-871d5365cf06"
                alt="rac"
                className="icon"
              />
              <div className="textt"> Xóa</div>
            </div>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tro.png?alt=media&token=cf660026-712d-48d8-b5ec-cea677248220"
                alt="tro"
                className="icon"
              />
              <div className="textt"> Vai trò</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietP6;
