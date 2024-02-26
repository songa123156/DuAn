import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "./style2.css";

const ChiTietHopDong = () => {
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
        <div className="sidebar" style={{ width: 40 }}>
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
          {/* <nav
            className="navbar"
            style={{
              width: "100%",
              justifyContent: "flex-end",
              marginRight: "75px",
              marginBottom: "16px",
              marginTop: "24px",

              height: "80px",
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
            style={{
              top: 86,
              // marginTop: "10px",
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
              Chi tiết hợp đồng uỷ quyền bài hát - BH123
            </p>
          </div>
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              position: "absolute",
              top: 186,
              marginTop: 10,
              left: 78,
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
                  marginTop: 13,
                }}
              >
                Thông tin hợp đồng
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
                  marginTop: 13,
                }}
              >
                Tác phẩm ủy quyền
              </p>
            </div>
          </div>

          {/* bảng */}
          <div
            style={{
              width: 1533,
              height: "fit-content",
              position: "absolute",
              top: 250,
              left: 81,
            }}
          >
            {/* Nội dung thẻ div */}
            <table style={{ height: "fit-content", width: "100%" }}>
              <thead style={{ color: "#FFFFFF" }}>
                <tr style={{ height: 48 }}>
                  <th style={{ width: "30%", textAlign: "left" }}>
                    Số hợp đồng:&nbsp;&nbsp;BH123
                  </th>
                  <th style={{ width: "50%" }}>
                    <td style={{ width: "50%" }}> Đính kèm tệp:</td>
                    <td style={{ width: "50%" }}>
                      {" "}
                      <span
                        style={{
                          opacity: 0.5,
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "24px",
                          letterSpacing: "-0.002em",
                          textAlign: "left",
                        }}
                      >
                        <i
                          style={{ marginRight: 8 }}
                          className="fa-solid fa-file-word"
                        ></i>
                        hetthuongcannho.doc
                      </span>
                    </td>
                  </th>
                  <th
                    style={{
                      width: "20%",
                      color: "#FFAC69",
                      textAlign: "left",
                    }}
                  >
                    {/* <i
                      style={{ marginRight: 8 }}
                      className="fa-solid fa-circle-info"
                    ></i>
                    Mức nhuận bút */}
                  </th>
                </tr>
              </thead>
              <tbody style={{ color: "#FFFFFF" }}>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "30%", textAlign: "left" }}>
                    Tên hợp đồng:&nbsp;&nbsp;Hợp đồng uỷ quyền tác phẩm âm nhạc
                  </td>
                  <td style={{ width: "50%" }}>
                    <td style={{ width: "50%" }}></td>
                    <td style={{ width: "50%" }}>
                      <span
                        style={{
                          opacity: 0.5,
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "24px",
                          letterSpacing: "-0.002em",
                          textAlign: "left",
                        }}
                      >
                        <i
                          style={{ marginRight: 8 }}
                          className="fa-solid fa-file-word"
                        ></i>
                        hetthuongcannho.doc
                      </span>
                    </td>
                  </td>
                  <td style={{ textAlign: "left", width: "20%" }}></td>
                </tr>
                <tr style={{ textAlign: "center", height: 47 }}>
                  <td style={{ width: "33.33%", textAlign: "left" }}>
                    Ngày hiệu lực:&nbsp;&nbsp;01/05/2021
                  </td>
                  <td style={{ width: "33.33%" }}></td>
                  <td style={{ width: "33.33%" }}></td>
                </tr>
                <tr style={{ textAlign: "center", height: 47 }}>
                  <td style={{ width: "30%", textAlign: "left" }}>
                    Ngày hết hạn:&nbsp;&nbsp;01/12/2021
                  </td>
                  <td style={{ width: "45%" }}></td>
                  <td style={{ width: "25%" }}></td>
                </tr>
                <tr style={{ textAlign: "center", height: 47 }}>
                  <td style={{ width: "33.33%", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      Tình trạng:&nbsp;&nbsp;
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
                  <td style={{ width: "33.33%" }}></td>
                  <td style={{ width: "33.33%" }}></td>
                </tr>

                {/* <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>4</td>
                  <td style={{ width: "158px" }}>TH2156355</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>5</td>
                  <td style={{ width: "158px" }}>DG639148</td>
                  <td style={{ width: "309px" }}>Hợp đồng ủy quyền bài hát</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          <div
            style={{
              width: "290px",
              height: "24px",
              position: "absolute",
              top: 521,
              left: "78px",
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 700,
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
              position: "fixed",
              top: 188,
              right: 0,
              height: 372,
              width: 110,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 130,
                marginBottom: 10,
                backgroundColor: "white",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "50%",
                }}
              >
                Thêm hợp đồng
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//bỏ cài đặt bootstrap
export default ChiTietHopDong;
