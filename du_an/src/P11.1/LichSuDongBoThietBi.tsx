import { useLocation } from "react-router-dom";
import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import { useState } from "react";
import NavBarHidden from "../BackGround/NavBarHidden";

const LichSuDongBoThietBi = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
              Doanh thu
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Báo cáo doanh thu
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Báo cáo chi tiết
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Lịch sử đồng bộ thiết bị
            </a>
          </div>
          <div
            style={{
              width: 999,
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
              Hợp đồng HD123 - Kỳ tháng 03/2021
            </p>
          </div>
        </div>

        <div
          style={{
            width: "235px",
            height: "24px",
            top: "186px",
            left: "80px",
            fontSize: 24,
            position: "absolute",
            color: "white",
          }}
        >
          Danh sách bản ghi
        </div>

        <div
          style={{
            width: "501px",
            height: "48px",
            position: "absolute",
            top: "234px",
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
            placeholder="Nhập tên bài hát"
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
            width: 1017,

            position: "absolute",
            top: 354,
            left: 80,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 1017,
              height: 662,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "110px" }}>STT</th>
                <th style={{ width: "245px" }}>Tên thiết bị</th>
                <th style={{ width: "212px" }}>Trạng thái</th>
                <th style={{ width: "223px" }}>Thời gian đồng bộ dữ liệu</th>
                <th style={{ width: "175px" }}>Tống số lượt phát</th>
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
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>2</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>3</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>4</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>5</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>6</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>7</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>8</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>9</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>10</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>11</td>
                <td>Device1223322</td>
                <td>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#18E306",
                      display: "inline-block",
                      marginRight: 5,
                    }}
                  ></div>
                  Đang hoạt động
                </td>
                <td>22/05/2021 22:15:00</td>
                <td>70</td>
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
            width: 645,
            position: "absolute",
            top: 354,
            left: 1121,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 645,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "199px" }}>STT</th>
                <th style={{ width: "199px" }}>Danh sách bài hát</th>
                <th style={{ width: "199px" }}>Số lượt phát</th>
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
              <tr>
                <td>1 </td>
                <td>Dù ngay mai bão giông</td>
                <td>10</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Dù em có yêu ai</td>
                <td>20</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Anh vẫn ở đây</td>
                <td>42</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Em nợ anh</td>
                <td>25</td>
              </tr>

              <tr>
                <td>5</td>
                <td>Lựa chọn con tim</td>
                <td>20</td>
              </tr>

              <tr>
                <td>6</td>
                <td>Nước mắt trong tim</td>
                <td>45</td>
              </tr>

              <tr>
                <td>7 </td>
                <td>Vẫn xin yêu người</td>
                <td>75</td>
              </tr>

              <tr>
                <td>8 </td>
                <td>Có một cái cây trong một cái vườn</td>
                <td>64</td>
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
          className="khung2"
          style={{
            height: 110,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          }}
        >
          <div className="khung1">
            <a href="/ChinhSuaTTNguoiDung" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/xuatdulieu.png?alt=media&token=f03fe258-ca6e-4209-bd84-92041f1e392f"
                alt="xuatdulieu"
              />
              <div className="textt">
                Xuất <br />
                dữ liệu
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LichSuDongBoThietBi;
