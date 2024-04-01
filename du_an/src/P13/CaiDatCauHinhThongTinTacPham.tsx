import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const CaiDatCauHinhThongTinTacPham = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let user = location.state && location.state.user;

  const [ThongBao1, setThongBao1] = useState("Đang kích hoạt");

  const handleCheck1 = () => {
    if (ThongBao1 === "Đang kích hoạt") {
      setThongBao1("Ngừng kích hoạt");
    } else setThongBao1("Đang kích hoạt");
  };

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
              Cài đặt
            </a>
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Cài đặt hệ thống
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
              Thông tin tác phẩm
            </p>
          </div>
          <div
            style={{
              width: "224px",
              height: "24px",
              top: "186px",
              left: "229px",
              gap: "0",
              position: "absolute",
              fontWeight: "700",
              fontFamily: "Montserrat",
              fontSize: "24px",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#E5E5E5",
            }}
          >
            Thể loại tác phẩm
          </div>

          <div
            style={{
              width: 1541,
              position: "absolute",
              top: 258,
              left: 229,
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            <table
              style={{
                width: 1493,
                margin: "16px 24px 104px 24px",
              }}
            >
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                  <th style={{ width: "99px" }}>STT</th>
                  <th style={{ width: "329px" }}>Tên thể loại</th>
                  <th style={{ width: "1065px" }}>Mô tả</th>
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
                  <td>Pop</td>
                  <td>
                    Nhạc pop là một thể loại của nhạc đương đại và rất phổ biến
                    trong làng nhạc đại chúng.
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>2</td>
                  <td>Bolero</td>
                  <td>
                    Quay về với một thời hoa bướm đầy mơ mộng khi nghe các tuyệt
                    phẩm nhạc bolero trữ tình này.
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>3</td>
                  <td>Ballad</td>
                  <td>
                    Ballad là dòng nhạc nhẹ nhàng, trữ tình bắt nguồn từ dòng
                    nhạc country và folk vì giai điệu chậm, thong thả.{" "}
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>4</td>
                  <td>Lofi</td>
                  <td>
                    Lo-fi là một thể loại nhạc trong đó có chứa các yếu tố không
                    hoàn hảo trong quá trình ghi âm và trình diễn.
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>5</td>
                  <td>Blues</td>
                  <td>
                    Nhạc Blues có nguồn gốc từ những điệu hát của miền tây Phi
                    Châu được các nô lệ da đen mang sang Bắc Mỹ.
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>6</td>
                  <td>Country</td>
                  <td>
                    'Nhạc đồng quê' là một thể loại nhạc pha trộn truyền thống
                    được tìm thấy phổ biến ở Mỹ và Canada.
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>7</td>
                  <td>Jazz</td>
                  <td>
                    Jazz là một thể loại âm nhạc bắt nguồn từ cộng đồng người
                    châu Phi ở Hoa Kỳ vào cuối thế kỷ 19 và đầu thế kỷ 20.
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>8</td>
                  <td>Rock</td>
                  <td>
                    Rock là một thể loại âm nhạc quần chúng được bắt nguồn từ
                    cách gọi ngắn gọn của cụm từ "rock and roll" vào những năm
                    1950 ở Mỹ.
                  </td>
                </tr>

                <tr style={{ height: 47 }}>
                  <td>9</td>
                  <td>Ballad</td>
                  <td>
                    Ballad là dòng nhạc nhẹ nhàng, trữ tình bắt nguồn từ dòng
                    nhạc country và folk vì giai điệu chậm, thong thả.{" "}
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
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=07d2553b-bef0-4a7d-a19e-ecf50f43bdaa"
                  alt="chinhsua"
                />
                <div className="textt">Chỉnh sửa</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaiDatCauHinhThongTinTacPham;
