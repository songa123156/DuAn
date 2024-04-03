import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import { useState } from "react";
import SideBar from "../BackGround/SideBar";

const PhanQuyenCapNhatTTNguoiDung = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
            Cài đặt
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Phân quyền người dùng
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Chỉnh sửa
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
            Chỉnh sửa thông tin người dùng
          </p>
        </div>
      </div>
      <div
        style={{
          width: "142px",
          position: "absolute",
          top: "213px",
          left: "80px",
          gap: "4px",
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Tên người dùng <span style={{ color: "red" }}> *</span>
          <div>
            <input
              type="text"
              defaultValue={"Phan Mạnh Quỳnh"}
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>

        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
            marginTop: 41,
            marginBottom: 41,
          }}
        >
          Số điện thoại
          <div style={{ marginBottom: 15 }}>
            <input
              type="tel"
              defaultValue={"029 8131 6743"}
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Ngày hết hạn:
          <div>
            <input
              type="date"
              defaultValue={"02/12/2022"}
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
            marginTop: 39,
            marginBottom: 36,
          }}
        >
          Vai trò <span style={{ color: "red" }}> *</span>
          <div>
            <select
              style={{
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "white",
                opacity: "50%",
              }}
              name=""
              id=""
            >
              <option value="">QA</option>
              <option value="super">Super Admin</option>
              <option selected value="Group Admin">
                Group Admin
              </option>
              <option value="Sub - user">Sub - user</option>

              <option value="Content manager">Content manager</option>
            </select>
          </div>
        </div>
        <div
          style={{
            width: "270px",
            height: "18px",
            top: "418px",
            left: "80px",
            padding: "0px 2px 0px 2px",
            gap: "4px",
            color: "white",
          }}
        >
          <span style={{ color: "red" }}>*</span>là những trường thông tin bắt
          buộc
        </div>
      </div>

      <div
        style={{
          width: "142px",
          position: "absolute",
          top: "213px",
          left: "566px",
          gap: "4px",
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Email
          <div>
            <input
              type="email"
              defaultValue={"tuyetnguyenngoc@alta.com.vn"}
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>

        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
            marginTop: 41,
            marginBottom: 41,
          }}
        >
          Tên đăng nhập <span style={{ color: "red" }}> *</span>
          <div>
            <input
              type="text"
              defaultValue={"PMQ_01"}
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
            display: "inline-block",
          }}
        >
          Mật khẩu:<span style={{ color: "red" }}> *</span>
          <div>
            <input
              defaultValue={"12345678"}
              type={showPassword ? "text" : "password"}
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
            <div
              style={{
                marginLeft: 10,
                cursor: "pointer",
                position: "absolute",
                left: 359,
                color: "red",
                display: "inline-block",
                marginTop: 10,
                right: 0,
              }}
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <i className="far fa-eye-slash"></i>
              ) : (
                <i className="far fa-eye"></i>
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
            marginTop: 41,
          }}
        >
          Trạng thái:<span style={{ color: "red" }}> *</span>
          <div style={{ marginTop: 8, display: "flex" }}>
            <div
              style={{
                color: "white",
              }}
              className="form-check"
            >
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled"
              />
              <label
                style={{ width: "180px" }}
                className="form-check-label"
                htmlFor="flexRadioDisabled"
              >
                Đang hoạt động
              </label>
            </div>
            <div
              style={{
                color: "white",
              }}
              className="form-check"
            >
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled"
              />
              <label
                style={{ width: "180px" }}
                className="form-check-label"
                htmlFor="flexRadioDisabled"
              >
                Ngưng kích hoạt
              </label>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "367px",
          height: "48px",
          top: "976px",
          left: "780px",
          gap: "32px",
          position: "absolute",
        }}
      >
        <a href="/DanhSachDoiTacUyQuyen">
          <button
            className="butoon"
            style={{
              color: "#FF7506",
              backgroundColor: "transparent",
            }}
          >
            Hủy
          </button>
        </a>
        <a href="/DanhSachDoiTacUyQuyen">
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
        </a>
      </div>
      <div
        className="khung2"
        style={{
          height: 240,
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        }}
      >
        <div
          className="khung1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/xoanguoidung.png?alt=media&token=b75ebff7-df8c-4951-8f24-e537c3d26bac"
            alt="xoanguoidung"
          />
          <div className="textt">
            Xóa người
            <br /> dùng
          </div>
        </div>
        <div className="khung1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/khoiphucnguoidung.png?alt=media&token=d1bbdea6-dd28-4991-9fbe-f750c22465c1"
            alt="khoiphucnguoidung"
          />
          <div className="textt">
            khôi phục <br /> người dùng
          </div>
        </div>
      </div>
    </>
  );
};

export default PhanQuyenCapNhatTTNguoiDung;
