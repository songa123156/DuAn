import React from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/Trang1.css";
import { useNavigate } from "react-router-dom";

const SuaThongTin: React.FC = () => {
  const navigate = useNavigate();
  const handleHuy = () => {
    navigate("/navbar");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "absolute",
          width: "100%",

          height: "100%",
          top: "10px",
          right: "10px",
          zIndex: "9999",
        }}
      >
        <Navbar />
        <div className="ttcb">Thông tin cơ bản</div>
        <div className="khung">
          <div
            style={{
              width: "280px",
              height: "351px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/admin.jpg?alt=media&token=9647fd08-067e-4a3f-a69b-d4c93c10c29f"
              alt=""
              style={{
                width: "273px",
                height: "280px",
                left: "2px",
                borderRadius: "200px",
              }}
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/camera.png?alt=media&token=983655b9-2630-4561-a9c5-d72be90cefb3"
              alt=""
              className="avt"
            />
            <p className="ten">Tuyết Nguyễn</p>
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "0PX",
              position: "absolute",
            }}
          >
            <div className="lablee">Họ:</div>
            <input type="text" defaultValue="Nguyễn" className="inputt" />
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "745px",
              gap: "8px",
              top: "0PX",

              position: "absolute",
            }}
          >
            <div className="lablee">Tên:</div>
            <input type="text" defaultValue="Tuyết" className="inputt" />
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "112px",
              position: "absolute",
            }}
          >
            <div className="lablee">Ngày sinh:</div>
            <input type="date" defaultValue="1998-02-02" className="inputt" />
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "745px",
              gap: "8px",
              top: "112px",
              position: "absolute",
            }}
          >
            <div className="lablee">Số điện thoại:</div>
            <input
              type="tel"
              defaultValue="+84 250 123 151"
              className="inputt"
            />
          </div>
          <div
            style={{
              width: "571px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "224px",
              position: "absolute",
            }}
          >
            <div className="lablee">Email:</div>
            <input
              type="text"
              placeholder="tuyetnguyenngoc@alta.com.vn"
              className="input1"
              readOnly
            />
          </div>
          <div
            style={{
              width: "571px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "336px",
              position: "absolute",
            }}
          >
            <div className="lablee">Tên đăng nhập:</div>
            <input
              type="text"
              placeholder="tuyetnguyenngoc@alta.com.vn"
              className="input1"
              readOnly
            />
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "448px",
              position: "absolute",
            }}
          >
            <div className="lablee">Phân quyền:</div>
            <input
              type="text"
              placeholder="admin"
              className="inputt"
              readOnly
            />
          </div>
        </div>
        <div>
          <div
            style={{
              width: "368px",
              height: "48px",
              top: "828px",
              left: "776px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <button
              style={{
                width: "168px",
                height: "48px",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "1px solid #FF7506",
                gap: "32px",
                color: "#FF7506",
              }}
              onClick={handleHuy}
            >
              Hủy
            </button>
            <button
              style={{
                width: "168px",
                height: "48px",
                padding: "12px 24px 12px 24px",
                borderRadius: "8px",
                border: "1px solid #FF7506",
                gap: "32px",
                color: "white",
                background: "#FF7506",
                marginLeft: "32px",
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

export default SuaThongTin;
