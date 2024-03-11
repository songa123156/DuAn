import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import "../p3/style2.css";
import "../p3/ChinhSua.css";
import { useState } from "react";

const ApLichChoThietBi = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const location = useLocation();
  // const navigate = useNavigate();
  let user = location.state && location.state.user;
  const [selectAll, setSelectAll] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);

  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);

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

    // Update other checkboxes as needed
  };
  // const handleDangXuat = () => {
  //   navigate("/");
  // };

  //   useEffect(() => {
  //     if (user === null) navigate("/");
  //   }, []);

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            width: 1749,
            height: 80,
            left: 171,
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 9999,
          }}
        >
          <div>
            <select
              id="language"
              style={{
                width: 143,
                height: 40,
                top: 24,
                left: 1375,
                padding: "8px 4px 8px 8px",
                borderRadius: 4,
                border: "1px solid rgb(200, 200, 219)",
                gap: 8,
                color: "rgb(200, 200, 219)",
                background: "rgb(30, 30, 46)",
                position: "relative",
              }}
            >
              <option value="vi" style={{ background: "rgb(30, 30, 46)" }}>
                Tiếng Việt
              </option>
              <option value="en" style={{ background: "rgb(30, 30, 46)" }}>
                English
              </option>
              <option value="fr" style={{ background: "rgb(30, 30, 46)" }}>
                French
              </option>
            </select>
          </div>
          <div
            style={{
              width: 132,
              height: 40,
              top: 24,
              left: 1542,
              gap: 8,
              marginRight: 24,
              position: "absolute",
            }}
          >
            <a href="/trang1" style={{ textDecoration: "none" }}>
              <img
                src="images/admin.jpg"
                alt="mdo"
                style={{
                  width: 40,
                  height: "40.58px",
                  borderRadius: 200,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 74,
                  height: 24,
                  left: 5,
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  color: "rgb(245, 245, 255)",
                  marginLeft: 35,
                  position: "relative",
                  textDecoration: "none",
                }}
              />
              <div
                style={{
                  width: 49,
                  height: 17,
                  left: 6,
                  fontFamily: "Montserrat",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  color: "rgb(182, 81, 0)",
                  marginLeft: 35,
                  position: "relative",
                  textDecoration: "none",
                }}
              >
                Admin
              </div>
            </a>
          </div>
        </div>

        <div
          className="sidebar"
          style={{ width: 40, borderRadius: "0px 24px 24px 0px" }}
        >
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
              Lập lịch phát
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
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chỉnh sửa lịch phát
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Áp lịch cho thiết bị
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
              Chọn thiết bị
            </p>
          </div>

          {/* bảng */}
          <div
            style={{
              width: 1688,
              height: 864,
              position: "absolute",
              top: 186,
              left: 80,
              //   padding: "16px 24px",
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            {/* Nội dung thẻ div */}
            <table
              style={{
                width: 1635,
                height: 606,
                margin: "16px 24px 104px 24px",
              }}
            >
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                  <th style={{ width: "51px" }}>
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
                  <th style={{ width: "110px" }}>STT</th>
                  <th style={{ width: "163px" }}>Tên thiết bị</th>
                  <th style={{ width: "162px" }}>MAC Address</th>
                  <th style={{ width: "196px" }}>SKU/ID</th>
                  <th style={{ width: "228px" }}>Đơn vị sử dụng</th>
                  <th style={{ width: "195px" }}>Tên đăng nhập</th>
                  <th style={{ width: "726px" }}>Địa điểm hoạt động</th>
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
                  <td>Device A12321</td>
                  <td>192.168.1.8</td>
                  <td>232124264</td>
                  <td>Cửa hàng 1</td>
                  <td>User 2</td>
                  <td>
                    194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh
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
                  <td>Device A12154</td>
                  <td>192.168.0.18</td>
                  <td>235369314</td>
                  <td>Cửa hàng 2</td>
                  <td>User 32</td>
                  <td>
                    194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh
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
                  <td>Device A12454</td>
                  <td>192.168.12.2</td>
                  <td>258694369</td>
                  <td>Cửa hàng 3</td>
                  <td>User 34</td>
                  <td>
                    194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh
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
                  <td>Device A12834</td>
                  <td>192.168.35.35</td>
                  <td>369258147</td>
                  <td>Cửa hàng 4</td>
                  <td>User 434</td>
                  <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
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
                  <td>Device A12121</td>
                  <td>192.168.0.15</td>
                  <td>123654789</td>
                  <td>Cửa hàng 5</td>
                  <td>User 43</td>
                  <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
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
                  <td>Device A12325</td>
                  <td>192.168.1.1</td>
                  <td>357159258</td>
                  <td>Cửa hàng 6</td>
                  <td>User 32</td>
                  <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
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
                  <td>Device A12247</td>
                  <td>192.168.3.21</td>
                  <td>225669447</td>
                  <td>Cửa hàng 7</td>
                  <td>User 421</td>
                  <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
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
                  <td>Device A12445</td>
                  <td>192.168.36.3</td>
                  <td>2684357159</td>
                  <td>Cửa hàng 8</td>
                  <td>User 21</td>
                  <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{ height: 240, borderRadius: "16px 0px 0px 16px" }}
            className="khung2"
          >
            <div className="khung1">
              <a href="/suathongtin" style={{ textDecoration: "none" }}>
                <img
                  src="images/checkcam.png"
                  style={{ height: 52, width: 52, padding: 0 }}
                  alt="sua"
                  className="icon"
                />
                <div className="textt">Chọn</div>
              </a>
            </div>

            <div className="khung1">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img
                  style={{ height: 52, width: 52, padding: 0 }}
                  src="images/huycam.png"
                  alt="huy2"
                  className="icon"
                />
                <div className="textt">Hủy</div>
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
                  width: "720px",
                  height: "432px",
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
                    Từ chối bản ghi
                  </h5>
                  <textarea
                    placeholder="Cho chúng tôi biết lý do bạn muốn từ chối bản ghi này..."
                    style={{
                      width: "639px",
                      height: "208px",
                      marginTop: 40,
                      padding: "12px 24px 12px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                      color: "#FFFFFF",
                    }}
                  />

                  <div>
                    <div
                      style={{
                        width: "368px",
                        height: "48px",
                        top: "344px",
                        left: "176px",
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
      </div>
    </>
  );
};

export default ApLichChoThietBi;
