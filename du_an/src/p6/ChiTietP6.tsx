import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import { useState } from "react";
import SideBar from "../BackGround/SideBar";

const ChiTietP6 = () => {
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
  };

  return (
    <>
      <SideBar value={2} />
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
          position: "absolute",
          top: 258,
          left: 84,
          borderRadius: 16,
          gap: 56,
          backgroundColor: "#2F2F41B2",
        }}
      >
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
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/cong.png?alt=media&token=30da3562-77bc-4dab-850b-d87505acdc9f"
              alt="cong"
            />
            <div className="textt">
              Thêm <br /> người dùng
            </div>
          </a>
        </div>
        <div className="khung1">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/rac.png?alt=media&token=9472a6a0-9eb5-4dad-b4e8-3e76c1c9f735"
              alt="rac"
            />
            <div className="textt"> Xóa</div>
          </div>
        </div>
        <div className="khung1">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tro.png?alt=media&token=2b9d907a-2046-45c6-8c29-7b5e3281f661"
              alt="tro"
            />
            <div className="textt"> Vai trò</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietP6;
