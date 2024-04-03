import "../quanly/Navbar.css";
import "../p3/style2.css";
import SideBar from "../BackGround/SideBar";

const ThemBanGhiPlayList = () => {
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
            Playlist
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Thêm playlist mới
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Thêm bản ghi vào playlist
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
            Thêm bản ghi
          </p>
        </div>

        <div
          style={{
            width: "868px",
            height: "722px",
            top: "186px",
            left: "80px",
            padding: "16px 24px 16px 24px",
            gap: "16px",
            borderRadius: "16px ",
            position: "absolute",
            background: "#2F2F41B2",
            color: "white",
          }}
        >
          <div
            style={{
              width: "815px",
              height: "136px",
              gap: "0px",
            }}
          >
            <div
              style={{
                width: "114px",
                height: "24px",
                gap: "0px",
                position: "absolute",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Kho bản ghi
            </div>
            <div
              style={{
                width: "64px",
                height: "24px",
                top: "56px",
                gap: "0px",
                position: "absolute",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#AEAEAE",
              }}
            >
              Thể loại
            </div>
            <select
              style={{
                width: "170px",
                height: "40px",
                top: "50px",
                left: "96px",
                padding: "8px 12px 8px 16px",
                gap: "0px",
                borderRadius: "8px",
                border: "1px solid #FF7506",
                color: "white",
                position: "absolute",
                background: "#1E1E2E",
                opacity: 0.5,
              }}
              name=""
              id=""
            >
              <option selected value="Tất cả">
                Tất cả
              </option>
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
            </select>

            <div
              style={{
                height: "24px",
                top: "56px",
                left: "313px",

                gap: "0px",
                position: "absolute",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#AEAEAE",
              }}
            >
              Playlist mẫu
            </div>
            <select
              style={{
                width: "170px",
                height: "40px",
                top: "50px",
                left: "446px",
                padding: "8px 12px 8px 16px",
                gap: "0px",
                borderRadius: "8px",
                border: "1px solid #FF7506",
                color: "white",
                position: "absolute",
                background: "#1E1E2E",
                opacity: 0.5,
              }}
              name=""
              id=""
            >
              <option selected value="Playlist mẫu">
                Playlist mẫu
              </option>
              <option value="Playlist 1">Playlist 1</option>
              <option value="Playlist 2">Playlist 2</option>
              <option value="Playlist 3">Playlist 3</option>
              <option value="Playlist 4">Playlist 4</option>
            </select>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "653px",
                height: "48px",
                top: "104px",
                padding: "12px 24px",
                gap: "0px",
                borderRadius: "8px",
                position: "absolute",
                background: "#33334D",
                color: "white",
                opacity: 0.5,
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
                placeholder="Tên bản ghi, ca sĩ..."
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
          </div>
          <table style={{ marginTop: 16 }}>
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48 }}>
                <th style={{ width: "72px" }}>STT</th>
                <th style={{ width: "229px" }}>Tên bản ghi</th>
                <th style={{ width: "183px" }}>Ca sĩ</th>
                <th style={{ width: "152px" }}>Tác giả</th>
                <th style={{ width: "107px" }}></th>
                <th style={{ width: "73px" }}></th>
              </tr>
            </thead>
            <tbody style={{ color: "#FFFFFF" }}>
              <tr style={{ height: 47 }}>
                <td>1</td>
                <td>
                  {" "}
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
                </td>
                <td>Tăng Phúc ft Mỹ Lệ</td>
                <td>Origin</td>

                <td style={{ textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Nghe
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                    Thêm
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>2</td>
                <td>
                  {" "}
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
                </td>
                <td>Tăng Phúc ft Mỹ Lệ</td>
                <td>Origin</td>

                <td style={{ textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Nghe
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                    Thêm
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>3</td>
                <td>
                  {" "}
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
                </td>
                <td>Tăng Phúc ft Mỹ Lệ</td>
                <td>Origin</td>

                <td style={{ textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Nghe
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                    Thêm
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>4</td>
                <td>
                  {" "}
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
                </td>
                <td>Tăng Phúc ft Mỹ Lệ</td>
                <td>Origin</td>

                <td style={{ textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Nghe
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                    Thêm
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>5</td>
                <td>
                  {" "}
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
                </td>
                <td>Tăng Phúc ft Mỹ Lệ</td>
                <td>Origin</td>

                <td style={{ textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Nghe
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                    Thêm
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>6</td>
                <td>
                  {" "}
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
                </td>
                <td>Tăng Phúc ft Mỹ Lệ</td>
                <td>Origin</td>

                <td style={{ textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Nghe
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                    Thêm
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>7</td>
                <td>
                  {" "}
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
                </td>
                <td>Tăng Phúc ft Mỹ Lệ</td>
                <td>Origin</td>

                <td style={{ textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Nghe
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                    Thêm
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>8</td>
                <td>
                  {" "}
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
                </td>
                <td>Tăng Phúc ft Mỹ Lệ</td>
                <td>Origin</td>

                <td style={{ textAlign: "center" }}>
                  <a
                    style={{ color: "#FF7506" }}
                    href="/ChiTiepHopDongKhaiThac"
                  >
                    Nghe
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a style={{ color: "#FF7506" }} href="/SaoChepHopDong">
                    Thêm
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              marginTop: 45,
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

        <div
          style={{
            width: "868px",
            height: "722px",
            top: "186px",
            left: "972px",
            padding: "16px 24px 16px 24px",
            gap: "16px",
            borderRadius: "16px ",
            position: "absolute",
            background: "#2F2F41B2",
            color: "white",
          }}
        >
          <div
            style={{
              width: "815px",
              height: "136px",
              gap: "0px",
            }}
          >
            <div
              style={{
                height: "24px",
                gap: "0px",
                position: "absolute",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Danh sách bản ghi được thêm vào Playlist
            </div>
            <div
              style={{
                width: "64px",
                height: "24px",
                top: "56px",
                gap: "0px",
                position: "absolute",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "white",
              }}
            >
              Tổng số:
            </div>
            <div
              style={{
                width: "170px",
                height: "40px",
                top: "50px",
                left: "96px",
                padding: "8px 12px 8px 16px",
                gap: "0px",
                color: "white",
                position: "absolute",
              }}
            >
              0 bản ghi
            </div>

            <div
              style={{
                height: "24px",
                top: "56px",
                left: "313px",

                gap: "0px",
                position: "absolute",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "white",
              }}
            >
              Tổng thời lượng:
            </div>
            <div
              style={{
                width: "170px",
                height: "40px",
                top: "50px",
                left: "446px",
                padding: "8px 12px 8px 16px",
                gap: "0px",
                color: "white",
                position: "absolute",
              }}
            >
              --:--:--
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                width: "653px",
                height: "48px",
                top: "104px",
                padding: "12px 24px",
                gap: "0px",
                borderRadius: "8px",
                position: "absolute",
                background: "#33334D",
                color: "white",
                opacity: 0.5,
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
                placeholder="Tên bản ghi, ca sĩ..."
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
          </div>
          <table style={{ marginTop: 16 }}>
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48 }}>
                <th style={{ width: "66px" }}>STT</th>
                <th style={{ width: "198px" }}>Tên bản ghi</th>
                <th style={{ width: "209px" }}>Ca sĩ</th>
                <th style={{ width: "146px" }}>Tác giả</th>
                <th style={{ width: "107px" }}></th>
                <th style={{ width: "73px" }}></th>
              </tr>
            </thead>
          </table>
          <div
            style={{
              width: "820px",
              height: "60px",
              top: "216px",
              padding: "12px 0px 0px 0px",
              gap: "24px",
              opacity: "0.8",
              position: "absolute",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "fit-content",
                gap: "4px",
                color: "white",
                textAlign: "center",
              }}
            >
              Vui lòng chọn bản ghi để thêm vào Playlist{" "}
              <span style={{ color: "red" }}> *</span>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              width: "352px",
              height: "48px",
              top: "976px",
              left: "772px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <button
              className="butoon"
              style={{
                color: "#FF7506",
                backgroundColor: "transparent",
              }}
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
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemBanGhiPlayList;
