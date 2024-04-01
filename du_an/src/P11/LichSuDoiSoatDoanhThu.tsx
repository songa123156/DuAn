import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const LichSuDoiSoatDoanhThu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let user = location.state && location.state.user;

  const handleDangXuat = () => {
    navigate("/");
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <Navbar></Navbar>

        <div>
          <div
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
              Doanh thu
            </a>
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Lịch sử đối soát
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
              Lịch sử đối soát doanh thu
            </p>
          </div>

          <div
            style={{
              height: "48px",
              top: "186px",
              left: "230px",
              color: "white",
              position: "absolute",
            }}
          >
            Thời gian thực hiện:{" "}
            <input
              type="date"
              defaultValue={"Tháng 3/2021"}
              style={{
                color: "white",
                width: "264px",
                height: "48px",
                top: "186px",
                left: "338px",
                padding: "12px 12px 12px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                justifyContent: "space-between",
                background: "#1E1E2E",
              }}
            />
          </div>

          <div
            style={{
              width: "665px",
              height: "48px",
              position: "absolute",
              top: "186px",
              left: "1121px",
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
              placeholder="Nhập tên tài khoản quản trị"
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
              width: "529px",
              height: "24px",
              top: "258px",
              left: "229px",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#E5E5E5",
              position: "absolute",
            }}
          >
            Danh sách hợp đồng khai thác đã đối soát
          </div>

          {/* bảng */}
          <div
            style={{
              width: 1541,
              position: "absolute",
              top: 306,
              left: 229,
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            <table
              style={{
                width: 1541,
                height: 752,
                margin: "16px 24px 104px 24px",
              }}
            >
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                  <th style={{ width: "60px" }}>STT</th>
                  <th style={{ width: "120px" }}>Số hợp đồng</th>
                  <th style={{ width: "227px" }}>Đơn vị khai thác</th>
                  <th style={{ width: "190px" }}>Thời hạn hợp đồng</th>
                  <th style={{ width: "167px" }}>Loại hợp đồng</th>
                  <th style={{ width: "133px" }}>Tổng lượt phát</th>
                  <th style={{ width: "147px" }}>Tổng doanh thu</th>
                  <th style={{ width: "183px" }}>
                    Doanh thu <br />
                    chưa phân phối
                  </th>
                  <th style={{ width: "141px" }}>
                    Ngày chốt <br />
                    đối soát
                  </th>
                  <th style={{ width: "125px" }}></th>
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
                  <td>1</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>2</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>3</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>4</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>5</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>6</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>7</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>8</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>9</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>10</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>11</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>12</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
                  <td>13</td>
                  <td>HĐ123</td>
                  <td>Cty TNHH TM DV ABCEDEF</td>
                  <td>10/07/2020 - 10/07/2021 </td>
                  <td>Trọn gói</td>
                  <td>365</td>
                  <td>365.000.000</td>
                  <td>1.000.000</td>
                  <td>10/07/2021</td>
                  <td>
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
        </div>
        <div className="khung2" style={{ height: 110 }}>
          <div className="khung1">
            <a href="/ThemHopDongMoi" style={{ textDecoration: "none" }}>
              <img
                style={{ height: 52, width: 52, padding: 0 }}
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huy2.png?alt=media&token=d683aa76-b6d8-4f7e-aa42-d037a28ba850"
                alt="cong"
              />
              <div className="textt">Xóa</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LichSuDoiSoatDoanhThu;
