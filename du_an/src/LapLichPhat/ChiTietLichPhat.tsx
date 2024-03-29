import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../p3/style2.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChiTietLichPhat = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const location = useLocation();
  // const navigate = useNavigate();
  let user = location.state && location.state.user;

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
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/admin.jpg?alt=media&token=9647fd08-067e-4a3f-a69b-d4c93c10c29f"
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
              >
                {user}
              </div>
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
              Lịch phát số 1
            </p>
          </div>

          <div
            style={{
              width: "438px",
              height: "24px",
              top: "186px",
              left: "80px",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFF9F4",
              position: "absolute",
              /* Các thuộc tính khác có thể thêm vào ở đây */
            }}
          >
            Danh sách Playlist
          </div>

          <div
            style={{
              width: 1690,
              height: 806,
              position: "absolute",
              top: 234,
              left: 80,
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
                  <th style={{ width: "164px" }}>Tên Playlist</th>
                  <th style={{ width: "206px" }}>Ngày phát Playlist</th>
                  <th style={{ width: "216px" }}>Bắt đầu - Kết thúc</th>
                  <th style={{ width: "197px" }}>Chu kỳ phát</th>
                  <th style={{ width: "753px" }}>Thiết bị</th>
                </tr>
              </thead>
              <tbody style={{ color: "#FFFFFF" }}>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>1</td>
                  <td style={{ width: "158px" }}>Top USUK 2021</td>
                  <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                  <td style={{ width: "182px" }}>
                    06:00:00 - 08:00:00 <br />
                    13:00:00 - 15:00:00
                  </td>
                  <td style={{ width: "182px" }}>Thứ 3 | Thứ 6</td>
                  <td>
                    Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị
                    5
                  </td>
                </tr>
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>2</td>
                  <td style={{ width: "158px" }}>Love songs</td>
                  <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                  <td style={{ width: "182px" }}>06:00:00 - 08:00:00</td>
                  <td style={{ width: "182px" }}>Thứ 5</td>
                  <td>
                    Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị
                    5
                  </td>
                </tr>{" "}
                <tr style={{ height: 47 }}>
                  <td style={{ width: "99px" }}>3</td>
                  <td style={{ width: "158px" }}>Loving You</td>
                  <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                  <td style={{ width: "182px" }}>14:00:00 - 16:00:00</td>
                  <td style={{ width: "182px" }}>Thứ 7</td>
                  <td>
                    Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị
                    5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="khung2" style={{ height: 110 }}>
            <div className="khung1">
              <a href="/ChinhSuaLichPhat" style={{ textDecoration: "none" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=26ad60e6-30e9-4c8d-b4a4-76777c548920"
                  alt="sua"
                  className="icon"
                />
                <div className="textt">
                  Chỉnh sửa <br /> lịch phát
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
                // display: "flex",
                width: "720px",
                height: "432px",
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
                    Hủy hợp đồng uỷ quyền
                  </h5>
                  <textarea
                    placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
                    style={{
                      position: "absolute",
                      top: "96px",
                      left: "40px",
                      width: "640px",
                      height: "208px",
                      padding: "12px 24px 12px 16px",
                      borderRadius: "8px",
                      border: " 1px solid #727288",
                      backgroundColor: "#2B2B3F",
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
                          backgroundColor: "transparent",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Quay lại
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
                        Hủy hợp đồng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* show modol giahan */}
          <div
            className="modal fade"
            id="giahanModal"
            tabIndex={-1}
            aria-labelledby="giahanModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog"
              style={{
                width: "908px",
                height: "623px",
              }}
            >
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#3E3E5B",
                  width: "908px",
                  height: "623px",
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
                    Gia hạn uỷ quyền tác phẩm
                  </h5>
                  <div
                    style={{
                      width: "fit-content",
                      maxWidth: "155px",
                      height: "fit-content",
                      maxHeight: "24px",
                      position: "absolute",
                      top: "96px",
                      left: "40px",
                      gap: "4px",
                      display: "flex",
                      flexDirection: "row",
                      color: "white",
                    }}
                  >
                    Thời gian gia hạn <span style={{ color: "red" }}>*</span>
                  </div>
                  <div
                    style={{
                      width: "157px",
                      height: "24px",
                      position: "absolute",
                      top: "136px",
                      left: "40px",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.002em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "left",
                      justifyContent: "left",
                    }}
                  >
                    Từ ngày: 02/08/2021
                  </div>
                  <div
                    style={{
                      width: "245px",
                      height: "fit-content",
                      position: "absolute",
                      top: "177px",
                      left: "40px",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.002em",
                      textAlign: "center",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "left",
                      justifyContent: "left",
                    }}
                  >
                    <span style={{ marginRight: 8, marginTop: 10 }}>
                      Đến ngày:
                    </span>
                    <input
                      type="date"
                      style={{
                        width: "155px",
                        height: "48px",
                        top: "167px",
                        left: "130px",
                        padding: "11px 16px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        justifyContent: "space-between",
                        background: "#2B2B3F",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "383px",
                      height: "240px",
                      top: "96px",
                      left: "485px",
                      position: "absolute",
                      background: "transparent",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "fit-content",
                        height: "fit-content",
                        gap: "4px",
                        color: "#FFFFFF",
                      }}
                    >
                      Mức nhuận bút <span style={{ color: "red" }}>*</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "fit-content",
                        height: "fit-content",
                        top: "36px",
                        gap: "8px",
                        color: "#FFFFFF",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          marginTop: 10,
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <span style={{ marginTop: 10 }}>Quyền tác giả</span>
                      <input
                        type="number"
                        defaultValue={0}
                        style={{
                          width: "64px",
                          height: "fit-content",
                          padding: "11px 5px 13px 16px",
                          borderRadius: "8px",
                          background: "transparent",
                          color: "white",
                        }}
                      />
                      <span style={{ marginTop: 10 }}> % </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        width: "168px",
                        height: "24px",
                        gap: "8px",
                        color: "#FFFFFF",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <span>Quyền liên quan:</span>
                    </div>

                    <div
                      style={{
                        width: "101px",
                        top: "183px",
                        position: "absolute",
                        left: -24,
                        border: "1px solid #727288",
                        opacity: "0.5",
                        transform: "rotate(-90deg)",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        top: "132px",
                        position: "absolute",
                        left: 40,
                        width: "343px",
                        height: " 48px",
                        gap: "8px",
                        color: "#FFFFFF",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          marginTop: 10,
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <span style={{ marginTop: 10 }}>
                        Quyền của người biểu diễn
                      </span>
                      <input
                        type="number"
                        defaultValue={50}
                        style={{
                          width: "64px",
                          height: "fit-content",
                          padding: "11px 5px 13px 16px",
                          borderRadius: "8px",
                          background: "transparent",
                          color: "white",
                        }}
                      />
                      <span style={{ marginTop: 10 }}> % </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        top: "192px",
                        position: "absolute",
                        left: 40,
                        width: "319px",
                        height: "48px",
                        gap: "8px",
                        color: "#FFFFFF",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                      <span>
                        Quyền của nhà sản xuất <br /> (bản ghi/video)
                      </span>
                      <input
                        type="number"
                        defaultValue={50}
                        style={{
                          width: "64px",
                          height: "fit-content",
                          padding: "11px 5px 13px 16px",
                          borderRadius: "8px",
                          background: "transparent",
                          color: "white",
                        }}
                      />
                      <span style={{ marginTop: 10 }}> % </span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "119px",
                      height: "24px",
                      top: "387px",
                      left: "40px",
                      position: "absolute",
                      color: "white",
                    }}
                  >
                    Đính kèm tệp:
                  </div>
                  <div
                    style={{
                      width: "119px",
                      height: "24px",
                      top: "379px",
                      left: "171px",
                      position: "absolute",
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <input
                        type="file"
                        style={{
                          width: "108px",
                          height: "40px",
                          padding: "8px 16px",
                          borderRadius: "6px",
                          border: "1px solid #FFAC69",
                          gap: "4px",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          opacity: 0,
                          zIndex: 1,
                        }}
                      />
                      <div
                        style={{
                          width: "108px",
                          height: "40px",
                          border: "1px solid #FFAC69",
                          color: " #FFAC69",
                          borderRadius: 6,
                        }}
                      >
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tailen.png?alt=media&token=1b54c9ca-ea7f-4f07-b2ce-9a6467da29d5"
                          alt="tailen"
                          style={{
                            width: "24px",
                            height: "24px",
                            marginTop: 5,
                            marginLeft: 11,
                          }}
                        />
                        <span
                          style={{
                            marginTop: 4,
                            position: "absolute",
                            marginLeft: 3,
                          }}
                        >
                          Tải lên
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "208px",
                      height: "24px",
                      top: "435px",
                      left: "171px",
                      gap: "4px",
                      color: "white",
                      position: "absolute",
                    }}
                  >
                    {/* Nội dung của div */}
                    <i
                      style={{ marginRight: 8 }}
                      className="fa-solid fa-file-word"
                    />
                    hetthuongcannho.doc
                    <br />
                    <i
                      style={{ marginRight: 8, marginTop: 12 }}
                      className="fa-solid fa-file-word"
                    ></i>
                    hetthuongcannho.doc
                  </div>

                  <div>
                    <div
                      style={{
                        width: "368px",
                        height: "48px",
                        top: "535px",
                        left: "270px",
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

export default ChiTietLichPhat;
