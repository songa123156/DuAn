import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/Trang1.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DanhSachLichPhat: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="thedau">
        <Navbar />
        <div className="ttcb">Danh sách lịch phát</div>
        <div
          style={{
            width: 1541,
            height: 882,
            position: "absolute",
            top: 158,
            left: 229,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table style={{ height: "fit-content" }}>
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48 }}>
                <th style={{ width: "110px" }}>STT</th>
                <th style={{ width: "610px" }}>Tên lịch</th>
                <th style={{ width: "517px" }}>Thời gian phát</th>
                <th style={{ width: "130px" }}></th>
                <th style={{ width: "126px" }}></th>
              </tr>
            </thead>
            <tbody style={{ color: "#FFFFFF" }}>
              <tr style={{ height: 47 }}>
                <td>1</td>
                <td>Lịch phát số 1</td>
                <td>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "130px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "126px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td>2</td>
                <td>Lịch phát số 2</td>
                <td>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "130px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "126px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td>3</td>
                <td>Lịch phát số 3</td>
                <td>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "130px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "126px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td>4</td>
                <td>Lịch phát số 4</td>
                <td>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "130px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "126px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td>5</td>
                <td>Lịch phát số 5</td>
                <td>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "130px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "126px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td>6</td>
                <td>Lịch phát số 6</td>
                <td>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "130px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "126px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td>7</td>
                <td>Lịch phát số 7</td>
                <td>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "130px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "126px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td>8</td>
                <td>Lịch phát số 8</td>
                <td>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "130px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "126px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              marginTop: 371,
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
        <div className="khung2" style={{ height: 110 }}>
          <div className="khung1">
            <a href="/ThemLichPhatMoi" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/ThemLichPhat.png?alt=media&token=e30480c7-b6c1-47bd-b462-e944d5f1e023"
                alt="ThemLichPhat"
              />
              <div className="textt">
                Thêm lịch <br /> phát
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DanhSachLichPhat;
