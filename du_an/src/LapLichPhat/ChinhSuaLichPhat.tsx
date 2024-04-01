import "../quanly/Navbar.css";
import { useLocation } from "react-router-dom";
import "../p3/style2.css";
import "./LichPhat.css";
import NavBarHidden from "../BackGround/NavBarHidden";

const ChinhSuaLichPhat = () => {
  const location = useLocation();
  let user = location.state && location.state.user;
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
              width: "273px",
              height: "304px",
              top: "186px",
              left: "80px",
              padding: "16px",
              borderRadius: "16px",
              gap: "12px",
              background: "#2F2F41B2",
              position: "absolute",
            }}
          >
            <div
              style={{
                width: "179px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFF9F4",
              }}
            >
              Thông tin lịch phát
            </div>
            <div
              style={{
                width: "241px",
                height: "76px",
                borderRadius: "8px",
                color: "#727288",
                marginTop: 12,
              }}
            >
              <label htmlFor="">Tên lịch phát:</label>
              <input
                defaultValue={"Lịch phát số 1"}
                style={{
                  width: "241px",
                  color: "#727288",
                  height: "48px",
                  top: "80px",
                  left: "16px",
                  padding: "11px 24px 13px 16px",
                  borderRadius: "8px",
                  border: "1px solid #727288",
                  background: "#2B2B3F",
                }}
              />
            </div>
            <div
              style={{
                width: "241px",
                height: "68px",
                borderRadius: "8px",
                color: "#727288",
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              <label htmlFor="">Từ ngày</label>
              <input
                type="date"
                defaultValue={"22/05/2021"}
                style={{
                  width: "241px",
                  color: "#727288",
                  height: "40px",
                  top: "80px",
                  left: "16px",
                  padding: "11px 24px 13px 16px",
                  borderRadius: "8px",
                  border: "1px solid #FF7506",
                  background: "#1E1E2E",
                }}
              />
            </div>
            <div
              style={{
                width: "241px",
                height: "68px",
                borderRadius: "8px",
                color: "#727288",
              }}
            >
              <label htmlFor="">Đến ngày</label>
              <input
                type="date"
                defaultValue={"30/06/2021"}
                style={{
                  width: "241px",
                  color: "#727288",
                  height: "40px",
                  top: "80px",
                  left: "16px",
                  padding: "11px 24px 13px 16px",
                  borderRadius: "8px",
                  border: "1px solid #FF7506",
                  background: "#1E1E2E",
                }}
              />
            </div>
          </div>

          <div
            style={{
              maxHeight: "468px",
              overflowY: "auto",
              overflowX: "hidden",
              width: "273px",
              height: "468px",
              top: "514px",
              left: "80px",
              padding: "16px",
              borderRadius: "16px",
              gap: "12px",
              background: "#2F2F41B2",
              position: "absolute",
            }}
          >
            <div
              style={{
                width: "173px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFF9F4",
                marginBottom: 12,
              }}
            >
              Danh sách Playlist
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
              }}
            >
              <div
                style={{
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                }}
              >
                Top USUK
              </div>
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                  }}
                >
                  02:00:00
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                }}
              >
                Love Songs
              </div>
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                  }}
                >
                  02:08:00
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
              }}
            >
              <div
                style={{
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                }}
              >
                Loving You
              </div>
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                  }}
                >
                  02:15:03
                </span>
              </div>
            </div>
            <hr
              style={{
                width: "241px",
                border: "1px solid #C8C8DB",
              }}
            />

            <div
              style={{
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFF9F4",
                marginBottom: 12,
              }}
            >
              Playlist mới
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
              }}
            >
              <div
                style={{
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                }}
              >
                Summer Party
              </div>
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                  }}
                >
                  02:10:11
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                }}
              >
                Top USUK 2021
              </div>
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                  }}
                >
                  02:08:00
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
              }}
            >
              <div
                style={{
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                }}
              >
                Lofi music
              </div>
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                  }}
                >
                  02:15:03
                </span>
              </div>
            </div>
            <hr
              style={{
                width: "241px",
                border: "1px solid #C8C8DB",
              }}
            />

            <div
              style={{
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFF9F4",
                marginBottom: 12,
              }}
            >
              Playlist đề xuất
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
              }}
            >
              <div
                style={{
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                }}
              >
                Summer Party
              </div>
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                  }}
                >
                  02:10:11
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                }}
              >
                Top USUK 2021
              </div>
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                  }}
                >
                  02:08:00
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 16px",
                borderRadius: "8px",
                gap: "8px",
                background: "#33334D",
              }}
            >
              <div
                style={{
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFAC69",
                }}
              >
                Lofi music
              </div>
              <div style={{ width: 208, height: 20 }}>
                <span
                  style={{
                    width: "82px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    marginRight: 80,
                  }}
                >
                  Thời lượng
                </span>
                <span
                  style={{
                    width: "62px",
                    height: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.015em",
                    textAlign: "right",
                    color: "#AEAEAE",
                  }}
                >
                  02:15:03
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 1393,
              maxHeight: 796,
              overflowY: "auto",
              height: 870,
              position: "absolute",
              top: 186,
              left: 377,
              padding: "16px 24px",
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            <table style={{ height: "fit-content" }}>
              <colgroup>
                <col />
                <col />
                <col
                  style={{
                    borderTop: "1px solid #347AFF",
                    borderLeft: "1px solid #347AFF",
                    borderRight: "1px solid #347AFF",
                    background: "#33334D",
                  }}
                />
                <col />
                <col
                  style={{
                    borderTop: "1px solid #347AFF",
                    borderLeft: "1px solid #347AFF",
                    borderRight: "1px solid #347AFF",
                    background: "#33334D",
                  }}
                />
                <col
                  style={{
                    borderTop: "1px solid #347AFF",
                    borderLeft: "1px solid #347AFF",
                    borderRight: "1px solid #347AFF",
                    background: "#33334D",
                  }}
                />
                <col
                  style={{
                    borderTop: "1px solid #347AFF",
                    borderLeft: "1px solid #347AFF",
                    borderRight: "1px solid #347AFF",
                    background: "#33334D",
                  }}
                />
                <col />
              </colgroup>
              <thead style={{ color: "#FFAC69" }}>
                <tr
                  style={{ textAlign: "center", height: 48, color: "#FFAC69" }}
                >
                  <th className="dautien" style={{ width: "85px" }}></th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ hai
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ ba
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ tư
                  </th>
                  <th
                    className="thu"
                    style={{ width: "180px", color: "#7879F1" }}
                  >
                    Thứ năm
                    <br />{" "}
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#18E306",
                        display: "inline-block",
                      }}
                    ></div>{" "}
                    <span style={{ color: "#FFFFFF" }}>Hôm nay</span>
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ sáu
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Thứ bảy
                  </th>
                  <th className="thu" style={{ width: "180px" }}>
                    Chủ nhật
                  </th>
                </tr>
              </thead>
              <tbody style={{ color: "#FFFFFF" }}>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: "85px",
                      position: "absolute",
                      top: 100,
                      paddingRight: 20,
                    }}
                  >
                    01:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    02:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    03:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    04:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    05:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    06:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    07:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td
                    className="thanh"
                    rowSpan={2}
                    style={{
                      width: "180px",
                      border: "1px solid #aeaeae",
                      cursor: "pointer",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#laplichphatModal"
                  >
                    <div
                      style={{
                        position: "relative",
                        top: -10,
                        left: 0,
                        marginRight: 5,
                      }}
                    >
                      <img
                        onPointerMove={(event) => {
                          const imgElement = event.currentTarget;
                          if (imgElement) {
                            imgElement.style.cursor = "pointer";
                          }
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/exit.png?alt=media&token=00b5f646-395a-4f83-8675-fb39f294b945"
                        alt="exit"
                      />
                    </div>
                    <div
                      style={{
                        width: "108px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "20px",
                        letterSpacing: "-0.002em",
                        color: "#FFAC69",
                        marginLeft: 9,
                        textAlign: "left",
                      }}
                    >
                      Top USUK 2021
                    </div>
                    <div
                      style={{
                        width: "139px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        letterSpacing: "0.015em",
                        textAlign: "left",
                        color: "#AEAEAE",
                        marginLeft: 9,
                      }}
                    >
                      06:00:00 - 08:00:00
                    </div>
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td
                    className="thanh"
                    rowSpan={2}
                    style={{
                      width: "180px",
                      border: "1px solid #aeaeae",
                      cursor: "pointer",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#laplichphatModal"
                  >
                    <div
                      style={{
                        position: "relative",
                        top: -10,
                        left: 0,
                        marginRight: 5,
                      }}
                    >
                      <img
                        onPointerMove={(event) => {
                          const imgElement = event.currentTarget;
                          if (imgElement) {
                            imgElement.style.cursor = "pointer";
                          }
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/exit.png?alt=media&token=00b5f646-395a-4f83-8675-fb39f294b945"
                        alt="exit"
                      />
                    </div>
                    <div
                      style={{
                        width: "108px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "20px",
                        letterSpacing: "-0.002em",
                        color: "#FFAC69",
                        marginLeft: 9,
                        textAlign: "left",
                      }}
                    >
                      Love songs
                    </div>
                    <div
                      style={{
                        width: "139px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        letterSpacing: "0.015em",
                        textAlign: "left",
                        color: "#AEAEAE",
                        marginLeft: 9,
                      }}
                    >
                      06:00:00 - 08:00:00
                    </div>
                  </td>
                  <td
                    className="thanh"
                    rowSpan={2}
                    style={{
                      width: "180px",
                      border: "1px solid #aeaeae",
                      cursor: "pointer",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#laplichphatModal"
                  >
                    <div
                      style={{
                        position: "relative",
                        top: -10,
                        left: 0,
                        marginRight: 5,
                      }}
                    >
                      <img
                        onPointerMove={(event) => {
                          const imgElement = event.currentTarget;
                          if (imgElement) {
                            imgElement.style.cursor = "pointer";
                          }
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/exit.png?alt=media&token=00b5f646-395a-4f83-8675-fb39f294b945"
                        alt="exit"
                      />
                    </div>
                    <div
                      style={{
                        width: "108px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "20px",
                        letterSpacing: "-0.002em",
                        color: "#FFAC69",
                        marginLeft: 9,
                        textAlign: "left",
                      }}
                    >
                      Top USUK 2021
                    </div>
                    <div
                      style={{
                        width: "139px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        letterSpacing: "0.015em",
                        textAlign: "left",
                        color: "#AEAEAE",
                        marginLeft: 9,
                      }}
                    >
                      06:00:00 - 08:00:00
                    </div>
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      paddingRight: 20,
                      marginTop: 33,
                    }}
                  >
                    08:00
                  </td>

                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    09:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    10:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    11:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    12:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    13:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    14:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td
                    className="thanh"
                    rowSpan={2}
                    style={{
                      width: "180px",
                      border: "1px solid #aeaeae",
                      cursor: "pointer",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#laplichphatModal"
                  >
                    <div
                      style={{
                        position: "relative",
                        top: -10,
                        left: 0,
                        marginRight: 5,
                      }}
                    >
                      <img
                        onPointerMove={(event) => {
                          const imgElement = event.currentTarget;
                          if (imgElement) {
                            imgElement.style.cursor = "pointer";
                          }
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/exit.png?alt=media&token=00b5f646-395a-4f83-8675-fb39f294b945"
                        alt="exit"
                      />
                    </div>
                    <div
                      style={{
                        width: "108px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "20px",
                        letterSpacing: "-0.002em",
                        color: "#FFAC69",
                        marginLeft: 9,
                        textAlign: "left",
                      }}
                    >
                      Top USUK 2021
                    </div>
                    <div
                      style={{
                        width: "139px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        letterSpacing: "0.015em",
                        textAlign: "left",
                        color: "#AEAEAE",
                        marginLeft: 9,
                      }}
                    >
                      11:00:00 - 13:00:00
                    </div>
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td
                    className="thanh"
                    rowSpan={2}
                    style={{
                      width: "180px",
                      border: "1px solid #aeaeae",
                      cursor: "pointer",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#laplichphatModal"
                  >
                    <div
                      style={{
                        position: "relative",
                        top: -10,
                        left: 0,
                        marginRight: 5,
                      }}
                    >
                      <img
                        onPointerMove={(event) => {
                          const imgElement = event.currentTarget;
                          if (imgElement) {
                            imgElement.style.cursor = "pointer";
                          }
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/exit.png?alt=media&token=00b5f646-395a-4f83-8675-fb39f294b945"
                        alt="exit"
                      />
                    </div>
                    <div
                      style={{
                        width: "108px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "20px",
                        letterSpacing: "-0.002em",
                        color: "#FFAC69",
                        marginLeft: 9,
                        textAlign: "left",
                      }}
                    >
                      Top USUK 2021
                    </div>
                    <div
                      style={{
                        width: "139px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        letterSpacing: "0.015em",
                        textAlign: "left",
                        color: "#AEAEAE",
                        marginLeft: 9,
                      }}
                    >
                      11:00:00 - 13:00:00
                    </div>
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    15:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td
                    className="thanh"
                    rowSpan={2}
                    style={{
                      width: "180px",
                      border: "1px solid #aeaeae",
                      cursor: "pointer",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#laplichphatModal"
                  >
                    <div
                      style={{
                        position: "relative",
                        top: -10,
                        left: 0,
                        marginRight: 5,
                      }}
                    >
                      <img
                        onPointerMove={(event) => {
                          const imgElement = event.currentTarget;
                          if (imgElement) {
                            imgElement.style.cursor = "pointer";
                          }
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/exit.png?alt=media&token=00b5f646-395a-4f83-8675-fb39f294b945"
                        alt="exit"
                      />
                    </div>
                    <div
                      style={{
                        width: "108px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "20px",
                        letterSpacing: "-0.002em",
                        color: "#FFAC69",
                        marginLeft: 9,
                        textAlign: "left",
                      }}
                    >
                      Loving you
                    </div>
                    <div
                      style={{
                        width: "139px",
                        height: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        letterSpacing: "0.015em",
                        textAlign: "left",
                        color: "#AEAEAE",
                        marginLeft: 9,
                      }}
                    >
                      14:00:00 - 16:00:00
                    </div>
                  </td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td
                    style={{
                      width: 85,
                      position: "absolute",
                      marginTop: 33,
                      paddingRight: 20,
                    }}
                  >
                    16:00
                  </td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                  <td className="thanh" style={{ width: "180px" }}></td>
                </tr>
                <tr style={{ height: 47, textAlign: "right" }}>
                  <td></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                  <td style={{ width: "180px" }}></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="khung2" style={{ height: 110 }}>
            <div className="khung1">
              <a href="/ApLichChoThietBi" style={{ textDecoration: "none" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/thietbi2.png?alt=media&token=00f2bfe6-f3e8-4a77-b1be-49f50b35e2f8"
                  alt="thietbi2"
                  className="icon"
                />
                <div className="textt">
                  Áp lịch
                  <br /> cho thiết bị
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
                width: "416px",
                height: "305px",
              }}
            >
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#3E3E5B",
                  width: "416px",
                  height: "305px",
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
                    Xóa lịch phát
                  </h5>

                  <div
                    style={{
                      width: "225px",
                      height: "17px",
                      top: "80px",
                      left: "110px",
                      fontFamily: "Montserrat",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "17px",
                      letterSpacing: "0.015em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      position: "absolute",
                    }}
                  >
                    Xóa tất cả lịch phát trong ngày
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "24px",
                      top: "121px",
                      left: "32px",
                      gap: "8px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <span
                      style={{
                        marginBottom: 10,
                        color: "white",
                        marginLeft: 8,
                        position: "absolute",
                      }}
                    >
                      Thứ ba
                    </span>
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "24px",
                      top: "161px",
                      left: "32px",
                      gap: "8px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <span
                      style={{
                        marginBottom: 10,
                        color: "white",
                        marginLeft: 8,
                        position: "absolute",
                      }}
                    >
                      Thứ sáu
                    </span>
                  </div>

                  <div>
                    <div
                      style={{
                        width: "352px",
                        height: "48px",
                        top: "225px",
                        left: "32px",
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

          {/* Lập lịch Phát Modal */}
          <div
            className="modal fade"
            id="laplichphatModal"
            tabIndex={-1}
            aria-labelledby="laplichphatModalLabel"
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
                  width: "600px",
                  height: "420px",
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
                      left: "32px",
                      position: "absolute",
                      fontFamily: "Montserrat",
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "24px",
                      letterSpacing: "-0.002em",
                      color: "#F5F5FF",
                    }}
                  >
                    Top USUK 2021
                  </h5>

                  <div
                    style={{
                      width: "130px",
                      height: "17px",
                      top: "80px",
                      left: "32px",
                      fontFamily: "Montserrat",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "17px",
                      letterSpacing: "0.015em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      position: "absolute",
                    }}
                  >
                    Lặp lại trong tuần
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "24px",
                      top: "121px",
                      left: "32px",
                      gap: "8px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <span
                      style={{
                        marginBottom: 10,
                        color: "white",
                        marginLeft: 8,
                        position: "absolute",
                      }}
                    >
                      Thứ hai
                    </span>
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "24px",
                      top: "121px",
                      left: "156px",
                      gap: "8px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <span
                      style={{
                        marginBottom: 10,
                        color: "white",
                        marginLeft: 8,
                        position: "absolute",
                      }}
                    >
                      Thứ ba
                    </span>
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "24px",
                      top: "121px",
                      left: "276px",
                      gap: "8px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <span
                      style={{
                        marginBottom: 10,
                        color: "white",
                        marginLeft: 8,
                        position: "absolute",
                      }}
                    >
                      Thứ tư
                    </span>
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "24px",
                      top: "121px",
                      left: "393px",
                      gap: "8px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <span
                      style={{
                        marginBottom: 10,
                        color: "white",
                        marginLeft: 8,
                        whiteSpace: "nowrap",
                        position: "absolute",
                      }}
                    >
                      Thứ năm
                    </span>
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "24px",
                      top: "161px",
                      left: "32px",
                      gap: "8px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <span
                      style={{
                        marginBottom: 10,
                        color: "white",
                        marginLeft: 8,
                        position: "absolute",
                      }}
                    >
                      Thứ sáu
                    </span>
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "24px",
                      top: "161px",
                      left: "156px",
                      gap: "8px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <span
                      style={{
                        marginBottom: 10,
                        color: "white",
                        marginLeft: 8,
                        whiteSpace: "nowrap",
                        position: "absolute",
                      }}
                    >
                      Thứ bảy
                    </span>
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "24px",
                      top: "161px",
                      left: "276px",
                      gap: "8px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <span
                      style={{
                        marginBottom: 10,
                        color: "white",
                        marginLeft: 8,
                        whiteSpace: "nowrap",
                        position: "absolute",
                      }}
                    >
                      Chủ nhật
                    </span>
                  </div>

                  <hr
                    style={{
                      width: "474px",
                      top: "208px",
                      left: "32px",
                      border: "1px solid #C8C8DB",
                      position: "absolute",
                    }}
                  />

                  <div
                    style={{
                      width: "400px",
                      height: "68px",
                      top: "247px",
                      left: "32px",
                      position: "absolute",
                      color: "white",
                    }}
                  >
                    <div style={{ marginBottom: 6 }}>Thứ hai</div>
                    <div
                      style={{
                        width: "48px",
                        height: "40px",
                        top: "28px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        textAlign: "center",
                        verticalAlign: "center",
                        display: "inline-block",
                        paddingTop: 7,
                      }}
                    >
                      06
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    >
                      :
                    </div>
                    <div
                      style={{
                        width: "48px",
                        height: "40px",
                        top: "28px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        textAlign: "center",
                        verticalAlign: "center",
                        display: "inline-block",
                        paddingTop: 7,
                      }}
                    >
                      00
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    >
                      :
                    </div>
                    <div
                      style={{
                        width: "48px",
                        height: "40px",
                        top: "28px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        textAlign: "center",
                        verticalAlign: "center",
                        display: "inline-block",
                        paddingTop: 7,
                      }}
                    >
                      00
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        marginLeft: 12,
                        marginRight: 12,
                      }}
                    >
                      -
                    </div>

                    <div
                      style={{
                        width: "48px",
                        height: "40px",
                        top: "28px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        textAlign: "center",
                        verticalAlign: "center",
                        display: "inline-block",
                        paddingTop: 7,
                      }}
                    >
                      08
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    >
                      :
                    </div>
                    <div
                      style={{
                        width: "48px",
                        height: "40px",
                        top: "28px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        textAlign: "center",
                        verticalAlign: "center",
                        display: "inline-block",
                        paddingTop: 7,
                      }}
                    >
                      00
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    >
                      :
                    </div>
                    <div
                      style={{
                        width: "48px",
                        height: "40px",
                        top: "28px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        textAlign: "center",
                        verticalAlign: "center",
                        display: "inline-block",
                        paddingTop: 7,
                      }}
                    >
                      00
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        width: "368px",
                        height: "48px",
                        top: "340px",
                        left: "60px",
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

          <div
            style={{
              position: "absolute",
              top: "1022px",
              left: "784px",
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
        </div>
      </div>
    </>
  );
};

export default ChinhSuaLichPhat;
