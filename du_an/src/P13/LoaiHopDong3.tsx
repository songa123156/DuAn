import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const LoaiHopDong3 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let user = location.state && location.state.user;

  const [ThongBao1, setThongBao1] = useState("Đang kích hoạt");

  const handleCheck1 = () => {
    if (ThongBao1 === "Đang kích hoạt") {
      setThongBao1("Ngừng kích hoạt");
    } else setThongBao1("Đang kích hoạt");
  };

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
              Cài đặt
            </a>
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Quản lý loại hợp đồng
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
              Loại hợp đồng
            </p>
          </div>

          <div
            style={{
              width: 1105,
              height: 444,
              position: "absolute",
              top: 186,
              left: 229,
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            <table
              style={{
                width: 1057,
                margin: "16px 24px 104px 24px",
              }}
            >
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                  <th style={{ width: "99px" }}>STT</th>
                  <th style={{ width: "320px" }}>Loại hợp đồng</th>
                  <th style={{ width: "320px" }}>
                    Doanh thu VCPCM/hợp đồng (Đơn vị: %){" "}
                  </th>
                  <th style={{ width: "320px" }}>Ngày áp dụng</th>
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
                  <td>
                    <input
                      type="text"
                      defaultValue={"Trọn gói"}
                      style={{
                        color: "white",
                        width: "216px",
                        height: "36px",
                        gap: "0",
                        borderRadius: "4px",
                        border: "1px solid #727288",
                        background: "#33334D",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      defaultValue={"20%"}
                      style={{
                        color: "white",
                        width: "70px",
                        height: "36px",
                        gap: "0",
                        borderRadius: "4px",
                        border: "1px solid #727288",
                        background: "#33334D",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      defaultValue={"21/07/2021 13:00:00"}
                      style={{
                        color: "white",
                        width: "160px",
                        height: "36px",
                        gap: "0",
                        borderRadius: "4px",
                        border: "1px solid #727288",
                        background: "#33334D",
                      }}
                    />
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>2</td>

                  <td>
                    <input
                      type="text"
                      defaultValue={"Giá trị bài hát/ lượt phát"}
                      style={{
                        color: "white",
                        width: "216px",
                        height: "36px",
                        gap: "0",
                        borderRadius: "4px",
                        border: "1px solid #727288",
                        background: "#33334D",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      defaultValue={"20%"}
                      style={{
                        color: "white",
                        width: "70px",
                        height: "36px",
                        gap: "0",
                        borderRadius: "4px",
                        border: "1px solid #727288",
                        background: "#33334D",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      defaultValue={"21/07/2021 13:00:00"}
                      style={{
                        color: "white",
                        width: "160px",
                        height: "36px",
                        gap: "0",
                        borderRadius: "4px",
                        border: "1px solid #727288",
                        background: "#33334D",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="khung2"
            style={{
              height: 260,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
              left: "1810px",
            }}
          >
            <div className="khung1">
              <a href="/ChinhSuaTTNguoiDung" style={{ textDecoration: "none" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/cong.png?alt=media&token=30da3562-77bc-4dab-850b-d87505acdc9f"
                  alt="cong"
                />
                <div className="textt">
                  Thêm lịch <br /> áp dụng
                </div>
              </a>
            </div>

            <div className="khung1">
              <a href="/ChinhSuaTTNguoiDung" style={{ textDecoration: "none" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/rac.png?alt=media&token=9472a6a0-9eb5-4dad-b4e8-3e76c1c9f735"
                  alt="rac"
                />
                <div className="textt">Xóa</div>
              </a>
            </div>
          </div>
          <div
            style={{
              width: "367px",
              height: "48px",
              top: "976px",
              left: "772px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <a href="/DanhSachDoiTacUyQuyen">
              <button
                className="butoon"
                style={{
                  color: "#FF7506",
                  backgroundColor: "transparent",
                }}
              >
                Hủy
              </button>
            </a>
            <a href="/DanhSachDoiTacUyQuyen">
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoaiHopDong3;
