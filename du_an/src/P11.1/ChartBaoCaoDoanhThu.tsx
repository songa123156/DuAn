import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const ChartBaoCaoDoanhThu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let user = location.state && location.state.user;

  const handleDangXuat = () => {
    navigate("/");
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <Navbar></Navbar>

        <div>
          <div
            style={{
              top: 86,
              marginTop: "10px",
              left: 229,
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
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Báo cáo doanh thu
            </a>
          </div>

          <div
            style={{
              width: 489,
              height: 48,
              top: 114,
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
              Báo cáo doanh thu
            </p>
          </div>

          <div
            style={{
              height: "48px",
              top: "186px",
              left: "229px",
              borderRadius: "8px",
              position: "absolute",
              color: "white",
            }}
          >
            Theo tháng:
            <select
              style={{
                width: "264px",
                height: "48px",
                marginLeft: 16,
                marginRight: 32,
                padding: "12px 12px 12px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                justifyContent: "space-between",
                background: "#1E1E2E",
                color: "white",
              }}
              name=""
              id=""
            >
              <option value="Theo tháng" selected>
                Theo tháng
              </option>
              <option value="Theo quý">Theo quý</option>
            </select>
            <select
              style={{
                width: "264px",
                height: "48px",
                marginLeft: 16,
                marginRight: 32,
                padding: "12px 12px 12px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                justifyContent: "space-between",
                background: "#1E1E2E",
                color: "white",
              }}
              name=""
              id=""
            >
              <option value=" Tháng 6/2021" selected>
                Tháng 6/2021
              </option>
              <option value="Tháng 7/2021">Tháng 7/2021</option>
            </select>
          </div>

          <div
            style={{
              width: "1540px",
              height: "96px",
              top: "258px",
              left: "230px",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              color: "white",
              background: "#2F2F41B2",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                flexBasis: "20%",
                borderRight: "1px solid white",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  opacity: 0.7,
                }}
              >
                Tổng số bài hát
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  color: "#FFAC69",
                }}
              >
                100
              </div>
            </div>
            <div
              style={{
                flexBasis: "20%",
                borderRight: "1px solid white",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  opacity: 0.7,
                }}
              >
                Tổng số lượt phát
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  color: "#FFAC69",
                }}
              >
                32.000.000
              </div>
            </div>
            <div
              style={{
                flexBasis: "20%",
                borderRight: "1px solid white",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  opacity: 0.7,
                }}
              >
                Doanh thu trên lượt phát
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  color: "#FFAC69",
                }}
              >
                1.564.745.000đ
              </div>
            </div>
            <div
              style={{
                flexBasis: "20%",
                borderRight: "1px solid white",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  opacity: 0.7,
                }}
              >
                Doanh thu chưa phân phối
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  color: "#FFAC69",
                }}
              >
                164.745.000đ
              </div>
            </div>
            <div
              style={{
                flexBasis: "20%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  opacity: 0.7,
                }}
              >
                Hành chính phí
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  color: "#FFAC69",
                }}
              >
                3.253.000đ
              </div>
            </div>
          </div>

          <div
            style={{
              width: "529px",
              height: "24px",
              top: "402px",
              left: "229px",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#E5E5E5",
              position: "absolute",
            }}
          >
            Biểu đồ theo dõi lượt phát - 29/06/2021
          </div>

          {/* bảng */}

          <div
            style={{
              width: "1541px",
              height: "371px",
              top: "450px",
              left: "229px",
              gap: "18px",
              borderRadius: "16px",
              position: "absolute",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/chartdoanhthu.png?alt=media&token=2e32fa86-dadc-4989-9820-3ec22d49f44d"
              alt="chartdoanhthu"
            />
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
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/baocaochitiet.png?alt=media&token=fcb2f502-039f-4678-9133-dca97cb28aee"
                alt="baocaochitiet"
              />
              <div className="textt">
                Báo cáo <br /> chi tiết
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartBaoCaoDoanhThu;
