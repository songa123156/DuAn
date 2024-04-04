import "./style2.css";
import SideBar from "../BackGround/SideBar";
import PagePaginist from "../BackGround/PagePaginist";
import GiaHanHopDong from "./Modal/GiaHanHopDong";
import HuyHopDong from "./Modal/HuyHopDong";

const TacPhamUyQuyen = () => {
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
            Hợp đồng uỷ quyền bài hát - BH123
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
              backgroundColor: "#B65100",
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
        <div
          style={{
            width: "174px",
            height: "24px",
            position: "absolute",
            top: "266px",
            left: "78px",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Tình trạng phê duyệt
        </div>
        <select
          style={{
            width: "160px",
            height: "40px",
            position: "absolute",
            top: "258px",
            left: "268px",
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
          <option value="all">Tất cả</option>
          <option value="1">Mới</option>
          <option value="2">Đã phê duyệt</option>
          <option value="3">Bị từ chối</option>
        </select>

        <div
          style={{
            width: "501px",
            height: "48px",
            position: "absolute",
            top: "250px",
            left: "1269px",
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
            height: "fit-content",
            position: "absolute",
            top: 322,
            left: 78,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 40,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table style={{ height: "fit-content" }}>
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48 }}>
                <th style={{ width: "99px" }}>STT</th>
                <th style={{ width: "308px" }}>Tên bản ghi</th>
                <th style={{ width: "205px" }}>Mã ISRC</th>
                <th style={{ width: "247px" }}>Ca sĩ</th>
                <th style={{ width: "274px" }}>Tác giả</th>
                <th style={{ width: "231px" }}>Ngày tải</th>
                <th style={{ width: "157px" }}>Tình trạng</th>
                <th style={{ width: "114px" }}></th>
              </tr>
            </thead>
            <tbody style={{ color: "#FFFFFF" }}>
              <tr style={{ height: 47 }}>
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
              <tr style={{ height: 47 }}>
                <td>13</td>
                <td>
                  Anh của ngày hôm qua
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
                <td>VNA2547569</td>
                <td>Mai Deadline</td>
                <td>Đét Lai</td>
                <td>01/02/2020 15:53:13</td>
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

          <PagePaginist />
        </div>
        <div style={{ height: 520 }} className="khung2">
          <div className="khung1">
            <a href="/ChinhSuaTacPham" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=07d2553b-bef0-4a7d-a19e-ecf50f43bdaa"
                alt="sua"
              />
              <div className="textt">
                Chỉnh sửa <br /> tác phẩm
              </div>
            </a>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#giahanModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/giahan.png?alt=media&token=0d90e55e-1beb-45b6-87fb-3241a58a4adc"
                alt="doimk"
              />
              <div className="textt">
                Gia hạn <br /> hợp đồng
              </div>
            </div>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huy.png?alt=media&token=a92736ee-b5f7-48ee-8a9d-bfa9977ea71c"
                alt="doimk"
              />
              <div className="textt">
                Hủy hợp <br /> đồng
              </div>
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "112px",
              padding: "16px",
              gap: "10px",
            }}
          >
            <a href="/">
              {" "}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/cong.png?alt=media&token=30da3562-77bc-4dab-850b-d87505acdc9f"
                alt="dangxuat"
                style={{ marginLeft: "15px" }}
              />
              <div className="dangxuat">
                Thêm bản <br />
                ghi
              </div>
            </a>
          </div>
        </div>

        <GiaHanHopDong />

        <HuyHopDong />
      </div>
    </>
  );
};

export default TacPhamUyQuyen;
