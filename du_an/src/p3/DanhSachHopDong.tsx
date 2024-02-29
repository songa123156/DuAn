import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "./style.css";
import Navbar from "../BackGround/navbar";

const DanhSachHopDong = () => {
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
                // padding: "8px 24px",
                borderRadius: 24,
                gap: 10,
                backgroundColor: "#B65100",
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
                // padding: "8px 24px",
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
                Hợp đồng khai thác
              </p>
            </div>
          </div>

          <div
            style={{
              width: "118px",
              height: "24px",
              position: "absolute",
              top: "266px",
              left: "229px",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Quyền sở hữu:
          </div>
          <select
            style={{
              width: "160px",
              height: "40px",
              position: "absolute",
              top: "258px",
              left: "363px",
              padding: "8px 12px 8px 16px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              justifyContent: "space-between",
              background: "#1E1E2E",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "-0.002em",
            }}
          >
            <option value="all">Tất cả</option>
            <option value="performer">Người biểu diễn</option>
            <option value="manufacturer">Nhà sản xuất</option>
          </select>

          <div
            style={{
              width: "156px",
              height: "24px",
              position: "absolute",
              top: "266px",
              left: 650,
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Hiệu lực hợp đồng:
          </div>
          <select
            style={{
              width: "135px",
              height: "40px",
              position: "absolute",
              top: "258px",
              left: 800,
              padding: "8px 12px 8px 16px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              display: "flex",
              justifyContent: "space-between",
              background: "#1E1E2E",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "-0.002em",
            }}
          >
            <option value="all">Tất cả</option>
            <option value="1">Mới</option>
            <option value="2">Còn thời hạn</option>
            <option value="3">Hết hạn</option>
            <option value="4">Hủy</option>
          </select>

          <div
            style={{
              width: "501px",
              height: "48px",
              position: "absolute",
              top: "250px",
              left: "1261px",
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
              placeholder="Tên hợp đồng, số hợp đồng, người uỷ quyền..."
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
                  <th style={{ width: "99px" }}>STT</th>
                  <th style={{ width: "158px" }}>Số hợp đồng</th>
                  <th style={{ width: "309px" }}>Tên hợp đồng</th>
                  <th style={{ width: "219px" }}>Người ủy quyền</th>
                  <th style={{ width: "207px" }}>Quyền sở hữu</th>
                  <th style={{ width: "159px" }}>Hiệu lực hợp đồng</th>
                  <th style={{ width: "152px" }}>Ngày tạo</th>
                  <th style={{ width: "182px" }}></th>
                </tr>
              </thead>
              <tbody style={{ color: "#FFFFFF" }}>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>1</td>
                  <td style={{ width: "158px" }}>HD123</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Vương Anh Tú</td>
                  <td style={{ width: "207px" }}>Người biểu diễn</td>
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
                    </div>
                  </td>
                  <td style={{ width: "152px" }}>01/04/2021 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>2</td>
                  <td style={{ width: "158px" }}>VQ14145145</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Khắc Hưng</td>
                  <td style={{ width: "207px" }}>Người biểu diễn</td>
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
                  <td style={{ width: "152px" }}>12/03/2021 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>3</td>
                  <td style={{ width: "158px" }}>UH1563167</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Châu Đăng Khoa</td>
                  <td style={{ width: "207px" }}>Người biểu diễn</td>
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
                  <td style={{ width: "152px" }}>14/03/2021 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>4</td>
                  <td style={{ width: "158px" }}>TH2156355</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Phan Mạnh Quỳnh</td>
                  <td style={{ width: "207px" }}>Nhà Sản Xuất</td>
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
                  <td style={{ width: "152px" }}>01/03/2021 15:51:05</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>5</td>
                  <td style={{ width: "158px" }}>DG639148</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Karik</td>
                  <td style={{ width: "207px" }}>Người biểu diễn</td>
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
                  <td style={{ width: "152px" }}>01/02/2021 13:13:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>6</td>
                  <td style={{ width: "158px" }}>FG638149</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Binz</td>
                  <td style={{ width: "207px" }}>Người biểu diễn</td>
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
                  <td style={{ width: "152px" }}>01/01/2021 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>7</td>
                  <td style={{ width: "158px" }}>HJ256203</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>JustaTee</td>
                  <td style={{ width: "207px" }}>Người biểu diễn</td>
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
                  <td style={{ width: "152px" }}>01/12/2020 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>8</td>
                  <td style={{ width: "158px" }}>DG253321</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Đen Vâu</td>
                  <td style={{ width: "207px" }}>Nhà sản xuất</td>
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
                  <td style={{ width: "152px" }}>01/11/2020 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>9</td>
                  <td style={{ width: "158px" }}>HH141654</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>RPT MCK</td>
                  <td style={{ width: "207px" }}>
                    Người biểu diễn <br />
                    Nhà sản xuất
                  </td>
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
                  <td style={{ width: "152px" }}>16/10/2020 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>10</td>
                  <td style={{ width: "158px" }}>JD1466521</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Chillies</td>
                  <td style={{ width: "207px" }}>Người biểu diễn</td>
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
                  <td style={{ width: "152px" }}>30/09/2020 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <div>
                      <a style={{ color: "#FF7506" }} href="/#">
                        Xem chi tiết
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a style={{ color: "#FF7506" }} href="/#">
                        Lý do hủy
                      </a>
                    </div>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>11</td>
                  <td style={{ width: "158px" }}>JH1567587</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Cá Hồi Hoang</td>
                  <td style={{ width: "207px" }}>Người biểu diễn</td>
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
                  <td style={{ width: "152px" }}>20/09/2020 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a style={{ color: "#FF7506" }} href="/#">
                      Lý do hủy
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>13</td>
                  <td style={{ width: "158px" }}>SG1562100</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Mai Deadline</td>
                  <td style={{ width: "207px" }}>Người biểu diễn</td>
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
                  <td style={{ width: "152px" }}>01/02/2020 15:53:13</td>
                  <td style={{ width: "182px" }}>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a style={{ color: "#FF7506" }} href="/#">
                      Lý do hủy
                    </a>
                  </td>
                </tr>
                {/* <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>13</td>
                  <td style={{ width: "158px" }}>Số hợp đồng 3</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                  <td style={{ width: "219px" }}>Người ủy quyền 3</td>
                  <td style={{ width: "207px" }}>Quyền sở hữu 3</td>
                  <td style={{ width: "159px" }}>Hiệu lực hợp đồng 3</td>
                  <td style={{ width: "152px" }}>Ngày tạo 3</td>
                  <td style={{ width: "182px" }}>
                    <a href="/#">Xem chi tiết</a>
                  </td>
                </tr> */}
              </tbody>
            </table>

            {/* <div
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
                {/* 13  
                <div
                  style={{
                    width: "48.37px",
                    height: "32px",
                    // padding: "6px 16.19px 5px 16.19px",
                    borderRadius: "4px",
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
                hàng trong mỗi trang
              </div>

              <div
                style={{
                  width: "203px",
                  height: "26px",
                  position: "absolute",
                  right: 50,
                  color: "#F5F5FF",
                }}
                className="pagination"
              >
                <a href="/#" className="page-link">
                  &lt;
                </a>
                <a href="/#" className="page-link ">
                  1
                </a>
                <a href="/#" className="page-link active">
                  2
                </a>
                <a href="/#" className="page-link">
                  3
                </a>
                <a href="/#" className="page-link">
                  ...
                </a>
                <a href="/#" className="page-link">
                  100
                </a>
                <a href="/#" className="page-link">
                  &gt;
                </a>
              </div>
            </div> */}
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
              <a href="/suathongtin" style={{ textDecoration: "none" }}>
                <img
                  style={{ height: 52, width: 52, padding: 0 }}
                  src="images/cong.png"
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

export default DanhSachHopDong;
