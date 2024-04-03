import { useState } from "react";
import "../p3/style.css";
import SideBar from "../BackGround/SideBar";

const DanhSachDoiTacUyQuyen = () => {
  const [ThongBao1, setThongBao1] = useState("Đang kích hoạt");

  const handleCheck1 = () => {
    if (ThongBao1 === "Đang kích hoạt") {
      setThongBao1("Ngừng kích hoạt");
    } else setThongBao1("Đang kích hoạt");
  };

  return (
    <>
      <SideBar value={1} />
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
            Đối tác uỷ quyền
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
            Danh sách đối tác ủy quyền
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
            placeholder="Họ tên, tên đăng nhập, email..."
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
            width: 1611,
            position: "absolute",
            top: 258,
            left: 229,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 1541,
              height: 770,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "78px" }}>STT</th>
                <th style={{ width: "241px" }}>Họ tên</th>
                <th style={{ width: "279px" }}>Tên đăng nhập</th>
                <th style={{ width: "279px" }}>Email</th>
                <th style={{ width: "154px" }}>Ngày hết hạn</th>
                <th style={{ width: "178px" }}>Số điện thoại</th>
                <th style={{ width: "178px" }}>Trạng thái</th>
                <th style={{ width: "178px" }}></th>
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
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      defaultChecked
                      onClick={handleCheck1}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      {ThongBao1}
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>2</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      defaultChecked={false}
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>3</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>4</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>5</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>6</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>7</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>8</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>9</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>10</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>11</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>12</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>13</td>
                <td>Amy Ngọc</td>
                <td>phm_L@gmail.com</td>
                <td>phm_L@gmail.com</td>
                <td>21/04/2021</td>
                <td>021 593 1214</td>
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
                    href="/CapNhatThongTin"
                  >
                    Cập nhật
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
    </>
  );
};

export default DanhSachDoiTacUyQuyen;
