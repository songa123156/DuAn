import { useState } from "react";
import "../p3/style.css";
import "./DropDown.css";
import SideBar from "../BackGround/SideBar";

const DanhSachThietBi = () => {
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

  const [isCheckListVisible, setCheckListVisible] = useState(false);

  const toggleCheckList = () => {
    setCheckListVisible(!isCheckListVisible);
  };

  return (
    <>
      <SideBar value={1} />
      <div>
        <div
          style={{
            width: 345,
            height: 48,
            top: 86,
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
            Danh sách thiết bị
          </p>
        </div>

        <select
          style={{
            width: "274px",
            height: "40px",
            position: "absolute",
            top: "158px",
            left: "229px",
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
          <option value="" selected>
            Chọn nhóm tài khoản
          </option>
          <option value="all">Tất cả</option>
          <option value="Công ty TMCP Bách Hóa Xanh">
            Công ty TMCP Bách Hóa Xanh
          </option>
          <option value="Công ty TNHH XYZ">Công ty TNHH XYZ</option>
          <option value="Công ty TMCP Adora">Công ty TMCP Adora</option>
        </select>

        <div
          style={{
            width: "274px",
            height: "40px",
            position: "absolute",
            top: "158px",
            left: 527,
          }}
        >
          <div
            style={{
              width: "274px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              justifyContent: "space-between",
              background: "#3E3E5B",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "-0.002em",
            }}
            id="list1"
            className={`dropdown-check-list ${
              isCheckListVisible ? "visible" : ""
            }`}
            tabIndex={100}
          >
            <span
              style={{
                background: "#1E1E2E",
                borderRadius: "8px",
              }}
              className="anchor"
              onClick={toggleCheckList}
            >
              <div style={{ margin: "8px 12px 8px 16px" }}>Ẩn hiện cột</div>
            </span>
            <ul className="items">
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    MAC Address
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Memory
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    SKU/ID
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Hạn bảo hành
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Tên đăng nhập
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Trạng thái
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Địa điểm
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Hạn hợp đồng
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            width: "665px",
            height: "48px",
            position: "absolute",
            top: "158px",
            left: "1105px",
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
            placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
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
            position: "absolute",
            top: 230,
            left: 229,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 1541,
              height: 779,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "71px" }}>
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
                <th style={{ width: "85px" }}>STT</th>
                <th style={{ width: "151px" }}>Tên thiết bị</th>
                <th style={{ width: "311px" }}>Trạng thái</th>
                <th style={{ width: "391px" }}>Địa điểm</th>
                <th style={{ width: "157px" }}>Hạn hợp đồng</th>
                <th style={{ width: "146px" }}>MAC Addresss</th>
                <th style={{ width: "181px" }}>Memory</th>
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
                <td>Device A12231</td>
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
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Ngừng kích hoạt{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang bị khoá{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang bị khoá{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Ngừng kích hoạt{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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
                <td>Device A12231</td>
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
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
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

        <div className="khung2" style={{ height: 520 }}>
          <div className="khung1">
            <a href="/suathongtin" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/cong.png?alt=media&token=30da3562-77bc-4dab-850b-d87505acdc9f"
                alt="cong"
              />
              <div className="textt">
                Thêm <br /> thiết bị
              </div>
            </a>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/kichhoat.png?alt=media&token=95a625a1-ee48-47c6-b552-3f6b14eb2025"
                alt="kichhoat"
              />
              <div className="textt">
                Kích hoạt
                <br /> thiết bị
              </div>
            </div>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/khoa.png?alt=media&token=150753e6-5ca9-4340-aafb-a7c2c6699e65"
                alt="khoa"
              />
              <div className="textt">
                Khóa <br /> thiết bị
              </div>
            </div>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/rac.png?alt=media&token=9472a6a0-9eb5-4dad-b4e8-3e76c1c9f735"
                alt="rac"
              />
              <div className="textt">
                Xóa
                <br /> thiết bị
              </div>
            </div>
          </div>
        </div>

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
                width: "418px",
                height: "258px",
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
                  Xóa thiết bị
                </h5>
                <div
                  style={{
                    width: "352px",
                    height: "34px",
                    position: "absolute",
                    top: "80px",
                    left: "33px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17px",
                    letterSpacing: "0.015em",
                    textAlign: "left",
                    color: "#FFFFFF",
                  }}
                >
                  Bạn có chắc chắn muốn xoá các thiết bị này? <br /> Hành động
                  này không thể hoàn tác.
                </div>
                <div>
                  <div
                    style={{
                      width: "352px",
                      height: "48px",
                      top: "154px",
                      left: "33px",
                      gap: "32px",
                      position: "absolute",
                    }}
                  >
                    <button
                      className="butoon"
                      style={{
                        color: "#FF7506",
                        background: "transparent",
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
                        marginLeft: "16px",
                      }}
                      data-bs-dismiss="modal"
                    >
                      Xóa
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

export default DanhSachThietBi;
