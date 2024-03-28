import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const DanhSachHopDongKhaiThac = () => {
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
              Quản lý hợp đồng
            </a>
          </div>

          <div
            style={{
              width: 392,
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
              Danh sách hợp đồng
            </p>
          </div>

          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              position: "absolute",
              top: 186,
              marginTop: 10,
              left: 229,
              borderRadius: 24,
              border: "1px solid #B65100",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 211,
                height: 40,
                borderRadius: 24,
                gap: 10,
                // backgroundColor: "#B65100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  marginTop: 12,
                }}
              >
                Hợp đồng ủy quyền
              </p>
            </div>
            <div
              style={{
                width: 207,
                height: 40,
                borderRadius: 24,
                gap: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#B65100",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  marginTop: 12,
                }}
              >
                Hợp đồng khai thác
              </p>
            </div>
          </div>

          <div
            style={{
              width: "418px",
              height: "48px",
              position: "absolute",
              top: "250px",
              left: "229px",
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
              placeholder="Tên hợp đồng, tác giả,..."
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
              width: 1533,
              height: "fit-content",
              position: "absolute",
              top: 322,
              left: 229,
              padding: "16px 24px",
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            {/* Nội dung thẻ div */}
            <table style={{ height: "fit-content" }}>
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48 }}>
                  <th style={{ width: "80px" }}>STT</th>
                  <th style={{ width: "158px" }}>Số hợp đồng</th>
                  <th style={{ width: "264px" }}>Khách hàng</th>
                  <th style={{ width: "158px" }}>Ngày tạo</th>
                  <th style={{ width: "158px" }}>Ngày hiệu lực</th>
                  <th style={{ width: "158px" }}>Ngày hết hạn</th>
                  <th style={{ width: "158px" }}>Hiệu lực hợp đồng</th>
                  <th style={{ width: "193px" }}></th>
                  <th style={{ width: "158px" }}></th>
                </tr>
              </thead>
              <tbody style={{ color: "#FFFFFF" }}>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>1</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>2</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>3</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                      Còn thời hạn
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>4</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                      Còn thời hạn
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>5</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                      Còn thời hạn
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>6</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                      Còn thời hạn
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>7</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                      Còn thời hạn
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>8</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                      Còn thời hạn
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>9</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                      Còn thời hạn
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>10</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
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
                      Còn thời hạn
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>11</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#FF4747",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã hủy
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>13</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng kinh doanh 1</td>
                  <td style={{ width: "219px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "207px" }}>02/12/2021</td>
                  <td style={{ width: "152px" }}>02/12/2022</td>

                  <td style={{ width: "159px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#FF4747",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã hủy
                    </div>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "182px", textAlign: "center" }}>
                    <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                      Sao chép hợp đồng
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                width: "fit-content",
                maxWidth: "1485px",
                height: "fit-content",
                minHeight: "32px",
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
                marginTop: 62,
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

          <div className="khung2" style={{ height: 130 }}>
            <div className="khung1">
              <a href="/ThemHopDongMoi" style={{ textDecoration: "none" }}>
                <img
                  style={{ height: 52, width: 52, padding: 0 }}
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/cong.png?alt=media&token=24f52e64-0a63-4ba4-83d6-3ef79985125c"
                  alt="cong"
                  className="icon"
                />
                <div className="textt">
                  Thêm <br /> hợp đồng
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DanhSachHopDongKhaiThac;
