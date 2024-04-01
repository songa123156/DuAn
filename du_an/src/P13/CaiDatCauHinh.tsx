import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const CaiDatCauHinh = () => {
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
              Cài đặt cấu hình
            </p>
          </div>

          <div
            style={{
              width: "571px",
              height: "320px",
              top: "186px",
              position: "absolute",
              left: "229px",
              gap: "0",
              borderRadius: "16px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hinhduocchon.png?alt=media&token=9ba80154-930f-4cfe-95ad-7d50531dccad"
              alt="hinhduocchon"
            />
          </div>

          <div
            style={{
              width: "950px",
              height: "160px",
              top: "266px",
              left: "873px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            <div style={{ display: "inline-block", marginRight: 53 }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Group.png?alt=media&token=dbd91d47-b3b4-49ae-a6df-f75c00d7b78e"
                alt="Group"
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Rectangle7.png?alt=media&token=098b7f03-2377-4a72-9122-77f70e93f49a"
                alt="Rectangle 7"
              />
            </div>
            <div
              style={{
                display: "inline-block",
                marginLeft: 23,
                marginRight: 24,
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Rectangle8.png?alt=media&token=e647af68-e2e2-4e8b-b528-b713518dfa0b"
                alt="Rectangle 8"
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Rectangle9.png?alt=media&token=88eb3ec2-cc0a-4745-83e3-fb9be8b52d6c"
                alt="Rectangle 9"
              />
            </div>
            <div style={{ display: "inline-block", marginLeft: 51 }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/ChevronRight.png?alt=media&token=976fa099-a872-4c1d-9e50-f4be775dca08"
                alt="Chevron Right"
              />
            </div>
          </div>
          <div
            style={{
              width: "80px",
              height: "24px",
              top: "442px",
              left: "1029px",
              gap: "0",
              position: "absolute",
              fontWeight: "500",
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0.005em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Theme 2
          </div>
          <div
            style={{
              width: "80px",
              height: "24px",
              top: "442px",
              left: "1291px",
              gap: "0",
              position: "absolute",
              fontWeight: "500",
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0.005em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Theme 3
          </div>
          <div
            style={{
              width: "80px",
              height: "24px",
              top: "442px",
              left: "1555px",
              gap: "0",
              position: "absolute",
              fontWeight: "500",
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0.005em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Theme 4
          </div>

          <div
            style={{
              width: "153px",
              height: "24px",
              top: "602px",
              left: "229px",
              position: "absolute",
              gap: "0",
              fontWeight: "700",
              fontFamily: "Montserrat",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Ngôn ngữ hiển thị
          </div>

          <select
            style={{
              width: "246px",
              height: "48px",
              position: "absolute",
              top: "594px",
              left: "402px",
              padding: "12px 12px 12px 16px",
              gap: "0",
              borderRadius: "8px",
              border: "1px solid #727288",
              justifyContent: "space-between",
              background: "#2B2B3F",
              color: "white",
            }}
            name=""
            id=""
          >
            <option value="tiếng việt">Tiếng Việt</option>
            <option value="tiếng anh">Tiếng Anh</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CaiDatCauHinh;
