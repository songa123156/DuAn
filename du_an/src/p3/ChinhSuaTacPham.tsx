import "../quanly/Navbar.css";
import { useLocation } from "react-router-dom";
import "./style2.css";
import "./ChinhSua.css";
import { useState } from "react";
import NavBarHidden from "../BackGround/NavBarHidden";

const ChinhSuaTacPham = () => {
  const location = useLocation();
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
  const [checkbox9, setCheckbox9] = useState(false);
  const [checkbox10, setCheckbox10] = useState(false);
  const [checkbox11, setCheckbox11] = useState(false);
  const [checkbox12, setCheckbox12] = useState(false);

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
  };
  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <NavBarHidden />
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
              Chi tiết hợp đồng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chỉnh sửa danh sách tác phẩm ủy quyền
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
              Hợp đồng uỷ quyền bài hát - BH123
            </p>
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

          {/* bảng */}
          <div
            style={{
              width: 1683,
              position: "absolute",
              top: 258,
              left: 78,
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
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
                  <th style={{ width: "99px" }}>STT</th>
                  <th style={{ width: "282px" }}>Tên bản ghi</th>
                  <th style={{ width: "205px" }}>Mã ISRC</th>
                  <th style={{ width: "247px" }}>Ca sĩ</th>
                  <th style={{ width: "249px" }}>Tác giả</th>
                  <th style={{ width: "231px" }}>Ngày tải</th>
                  <th style={{ width: "157px" }}>Tình trạng</th>
                  <th style={{ width: "114px" }}></th>
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
                  <td>
                    Gorgeous Wooden Bike <br /> Ballad{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    3:12
                  </td>
                  <td>VNA1423525</td>
                  <td>Vương Anh Tú</td>
                  <td>Vương Phong</td>
                  <td>01/04/2021 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    Small Concrete Fish <br /> Ballad{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    0:15
                  </td>
                  <td>VNA1423525</td>
                  <td>Khác Hưng</td>
                  <td>Đinh Nhân DVM</td>
                  <td>12/03/2021 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    Kings & Queens <br /> Ballad{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    3:12
                  </td>
                  <td>VNA1423637</td>
                  <td>Châu Đăng Khoa</td>
                  <td>Lê Loan</td>
                  <td>14/03/2021 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    Clap <br /> R&B{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    3:12
                  </td>
                  <td>VNA5247472</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>Ms. Trần Hà</td>
                  <td>01/03/2021 15:51:05</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    Peaches <br /> Indie{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    3:17
                  </td>
                  <td>VNA6475884</td>
                  <td>Karik</td>
                  <td>Lý Cường</td>
                  <td>01/02/2021 13:13:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    Leave The Door Open <br /> Ballad{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    4:12
                  </td>
                  <td>VNA2537477</td>
                  <td>Binz</td>
                  <td>Lý Sơn</td>
                  <td>01/01/2021 15:53:13</td>
                  <td style={{ width: "152px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#18E306",
                          marginRight: "5px",
                        }}
                      ></div>
                      Mới
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    Beautiful Girls <br /> R&B{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    3:45
                  </td>
                  <td>VNA6474758</td>
                  <td>JustaTee</td>
                  <td>Đặng Công Minh</td>
                  <td>01/12/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
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
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    Yummy <br /> Pop{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    3:56
                  </td>
                  <td>VNA2575758</td>
                  <td>Đen Vâu</td>
                  <td>Đoàn Lê DVM</td>
                  <td>01/11/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
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
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    Uptown Funk <br /> Pop{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    4:12
                  </td>
                  <td>VNA6536364</td>
                  <td>RPT MCK</td>
                  <td>Vũ Cát Tường</td>
                  <td>16/10/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
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
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    On The Ground
                    <br /> Ballad{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    3:56
                  </td>
                  <td>VNA3759869</td>
                  <td>Chillies</td>
                  <td>Nhã Lê</td>
                  <td>30/09/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
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
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    Say So
                    <br /> Electronic{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    3:12
                  </td>
                  <td>VNA2675859</td>
                  <td>Cá Hồi Hoang</td>
                  <td>Hồ Bùi</td>
                  <td>20/09/2020 15:53:13</td>
                  <td style={{ width: "152px" }}>
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
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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
                  <td>
                    At My Worst <br /> Electronic{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span> Audio{" "}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        opacity: "70%",
                        background: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "absolute",
                        marginTop: 11,
                      }}
                    ></div>
                    <span style={{ marginRight: 5 }}></span>
                    3:12
                  </td>
                  <td>VNA3697084</td>
                  <td>Suboi</td>
                  <td>Lê Phong</td>
                  <td>16/09/2020 17:13:57</td>
                  <td style={{ width: "152px" }}>
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
                      Đã phê duyệt
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/#"
                    >
                      Nghe
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

          <div
            style={{
              position: "absolute",
              top: "1084px",
              left: "776px",
              width: "368px",
              height: "48px",
              gap: "32px",
            }}
          >
            <button
              style={{
                width: "168px",
                height: "48px",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "1px solid #FF7506",
                color: "#FF7506",
                background: "transparent",
                gap: "8px",
              }}
            >
              Hủy
            </button>

            <button
              style={{
                width: "168px",
                height: "48px",
                padding: "12px 24px",
                borderRadius: "8px",
                gap: "8px",
                background: "#FF7506",
                color: "white",
                border: 0,
                marginLeft: 32,
              }}
            >
              Lưu
            </button>
          </div>

          <div
            style={{ height: 130, borderRadius: "16px 0px 0px 16px" }}
            className="khung2"
          >
            <div className="khung1">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huy2.png?alt=media&token=d683aa76-b6d8-4f7e-aa42-d037a28ba850"
                  alt="huy2"
                />
                <div className="textt">
                  Từ chối <br /> bản ghi
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

export default ChinhSuaTacPham;
