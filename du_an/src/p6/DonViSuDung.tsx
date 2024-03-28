import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const DonViSuDung = () => {
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
        {/* <div className="sidebar">
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
        </div> */}
        <Navbar></Navbar>

        <div>
          {/* <nav
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
          </nav> */}

          <div
            // className="container"
            style={{
              top: 86,
              marginTop: "10px",
              left: 229,
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
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Đơn vị sử dụng
            </a>
          </div>

          <div
            style={{
              width: 489,
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
              Danh sách đơn vị sử dụng
            </p>
          </div>

          <div
            style={{
              width: "665px",
              height: "48px",
              position: "absolute",
              top: "186px",
              left: "229px",
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
              placeholder="Tên khoản giá trị, số hợp đồng,..."
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
              width: 1541,
              //   height: "fit-content",
              position: "absolute",
              top: 258,
              left: 229,
              //   padding: "16px 24px",
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            {/* Nội dung thẻ div */}
            <table
              style={{
                width: 1541,
                height: 770,
                margin: "16px 24px 104px 24px",
              }}
            >
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                  <th style={{ width: "63px" }}>
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
                    <img
                      style={{
                        position: "absolute",
                        marginTop: 6,
                        marginLeft: 5,
                      }}
                      src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/donwn.png?alt=media&token=5dc6bd53-daf5-4567-8b30-b2db9d89106d"
                      alt="donwn"
                    />
                  </th>
                  <th style={{ width: "99px" }}>STT</th>
                  <th style={{ width: "260px" }}>Tên tài khoản quản trị</th>
                  <th style={{ width: "158px" }}>Số hợp đồng</th>
                  <th style={{ width: "120px" }}>Admin</th>
                  <th style={{ width: "126px" }}>Người dùng</th>
                  <th style={{ width: "204px" }}>Thiết bị được chỉ định</th>
                  <th style={{ width: "143px" }}>Ngày hết hạn</th>
                  <th style={{ width: "171px" }}>Trạng thái</th>
                  <th style={{ width: "149px" }}></th>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Ngừng kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Ngừng kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>HD123</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
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

          <div className="khung2" style={{ height: 110 }}>
            <div className="khung1">
              <a href="/ThemHopDongMoi" style={{ textDecoration: "none" }}>
                <img
                  style={{ height: 52, width: 52, padding: 0 }}
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huy2.png?alt=media&token=74120a7e-d421-4bd0-9587-0b93be7acb4e"
                  alt="cong"
                  className="icon"
                />
                <div className="textt">Xóa</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonViSuDung;
