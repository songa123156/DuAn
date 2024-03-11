import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/Trang1.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DanhSachLichPhat: React.FC = () => {
  // const [showModal, setShowModal] = useState(false);
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
          {/* Nội dung thẻ div */}
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
                <td style={{ width: "99px" }}>1</td>
                <td style={{ width: "158px" }}>Lịch phát số 1</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "182px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>2</td>
                <td style={{ width: "158px" }}>Lịch phát số 2</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "182px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>3</td>
                <td style={{ width: "158px" }}>Lịch phát số 3</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "182px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>4</td>
                <td style={{ width: "158px" }}>Lịch phát số 4</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "182px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>5</td>
                <td style={{ width: "158px" }}>Lịch phát số 5</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "182px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>6</td>
                <td style={{ width: "158px" }}>Lịch phát số 6</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "182px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>7</td>
                <td style={{ width: "158px" }}>Lịch phát số 7</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "182px", textAlign: "center" }}>
                  <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                    Xóa
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>8</td>
                <td style={{ width: "158px" }}>Lịch phát số 8</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px", textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Xem chi tiết
                  </a>
                </td>
                <td style={{ width: "182px", textAlign: "center" }}>
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
            <a href="/suathongtin" style={{ textDecoration: "none" }}>
              <img
                src="images/ThemLichPhat.png"
                alt="ThemLichPhat"
                className="icon"
              />
              <div className="textt">
                Thêm lịch <br /> phát
              </div>
            </a>
          </div>
        </div>
        {/* showModal     */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              display: "flex",
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "#3E3E5B",
                width: "552px",
                height: "512px",
                borderRadius: "16px",
              }}
            >
              <div className="modal-body">
                <h5
                  className="modal-title m-0"
                  id="exampleModalLabel"
                  style={{
                    width: "100%",
                    height: "24px",
                    top: "32px",
                    left: "159px",
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    letterSpacing: "-0.002em",
                    textAlign: "center",
                    color: "#F5F5FF",
                  }}
                >
                  Thay đổi mật khẩu
                </h5>
                <div>
                  <div className="matkhau">Mật khẩu hiện tại:</div>
                  <div
                    className="password-input-wrapper"
                    style={{ position: "relative" }}
                  >
                    <input
                      className="inputmk"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <FontAwesomeIcon
                      className="faEyee"
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={toggleShowPassword}
                    />
                  </div>
                </div>

                <div>
                  <div className="matkhau">Mật khẩu mới:</div>
                  <div
                    className="password-input-wrapper"
                    style={{ position: "relative" }}
                  >
                    <input
                      className="inputmk"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <FontAwesomeIcon
                      className="faEyee"
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={toggleShowPassword}
                    />
                  </div>
                </div>
                <div>
                  <div className="matkhau">Nhập lại mật khẩu mới:</div>
                  <div
                    className="password-input-wrapper"
                    style={{ position: "relative" }}
                  >
                    <input
                      className="inputmk"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <FontAwesomeIcon
                      className="faEyee"
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={toggleShowPassword}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      width: "368px",
                      height: "48px",
                      top: "424px",
                      left: "92px",
                      gap: "32px",
                      position: "absolute",
                    }}
                  >
                    <button
                      className="butoon"
                      style={{
                        color: "#FF7506",
                      }}
                      data-bs-dismiss="modal"
                    >
                      Hủy
                    </button>
                    <button
                      className="butoon"
                      style={{
                        color: "white",
                        background: "#FF7506",
                        marginLeft: "32px",
                      }}
                      data-bs-dismiss="modal"
                    >
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DanhSachLichPhat;
