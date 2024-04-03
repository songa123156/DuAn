import "../p3/style2.css";
import "./LichPhat.css";
import SideBar from "../BackGround/SideBar";

const ThemLichPhatMoi = () => {
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
            Thêm lịch phát mới
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
            Lập lịch phát
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
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "center", height: 48, color: "#FFAC69" }}>
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
                    paddingRight: 20,
                    marginTop: 33,
                  }}
                >
                  08:00
                </td>
                <td className="thanh" style={{ width: "180px" }}></td>{" "}
                <td className="thanh" style={{ width: "180px" }}></td>{" "}
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
                  15:00
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
                  16:00
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
              />
              <div className="textt">
                Áp lịch
                <br /> cho thiết bị
              </div>
            </a>
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
    </>
  );
};

export default ThemLichPhatMoi;
