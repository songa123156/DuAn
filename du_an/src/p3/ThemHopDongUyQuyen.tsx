import "../quanly/Navbar.css";
import { useLocation } from "react-router-dom";
import "./style2.css";
import "./ChinhSuaThongTin.css";
import { useState } from "react";
import NavBarHidden from "../BackGround/NavBarHidden";
const ThemHopDongUyQuyen = () => {
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
              Quản lý
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Quản lý hợp đồng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thêm hợp đồng
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
              Thêm hợp đồng ủy quyền mới
            </p>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "213px",
            left: "80px",
            width: "120px",
            height: "24px",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          <div className="textCT">
            Số hợp đồng: <span style={{ color: "#FF4747" }}>*</span>
          </div>
          <div className="textCT"> Tên hợp đồng:</div>
          <div className="textCT"> Ngày hiệu lực:</div>
          <div className="textCT"> Ngày hết hạn:</div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "202px",
            left: "237px",
            width: "374px",
            height: "24px",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          <input
            className="inputtext"
            style={{
              width: "374px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <input
            className="inputtext"
            style={{
              width: "374px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <input
            className="inputtext"
            type="date"
            style={{
              width: "374px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <br />
          <input
            className="inputtext"
            type="date"
            style={{
              width: "374px",
              height: "48px",
              padding: "11px 24px 13px 16px",
              borderRadius: "8px",
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "213px",
            left: "750px",
            width: "119px",
            height: "24px",
            color: "white",
          }}
        >
          Đính kèm tệp:
        </div>

        <div
          style={{
            position: "absolute",
            top: "205px",
            left: "881px",
            width: "208px",
            height: "24px",
            color: "white",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: 16,
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
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tailen.png?alt=media&token=a56f0719-52ef-40a4-ab89-20eeaa2489a6"
                alt="tailen"
                style={{
                  width: "24px",
                  height: "24px",
                  marginTop: 5,
                  marginLeft: 11,
                }}
              />
              <span
                style={{ marginTop: 4, position: "absolute", marginLeft: 3 }}
              >
                Tải lên
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            color: "white",
            width: 273,
            height: 184,
            top: 186,
            left: 1355,
          }}
        >
          <span style={{ color: "#FFAC69" }}>
            <i
              style={{ marginRight: 8 }}
              className="fa-solid fa-circle-info"
            ></i>
            Mức nhuận bút
          </span>
          <br />
          Quyền tác giả:
          <span style={{ left: 240, position: "absolute" }}>0%</span>
          <br />
          Quyền liên quan: <br />
          Quyền của người biểu diễn:
          <span style={{ left: 240, position: "absolute" }}>50%</span>
          <br />
          Quyền của nhà sản xuất:
          <span style={{ left: 240, position: "absolute" }}>50%</span>
          <br />
          (Bản ghi/video)
        </div>

        <hr
          style={{
            border: "1px solid #727288",
            width: "1799px",
            position: "absolute",
            top: "462px",
            left: "81px",
            opacity: 0.5,
            transform: "rotate(-0deg)",
          }}
        />

        <div
          style={{
            width: "290px",
            height: "24px",
            position: "absolute",
            top: "494px",
            left: "80px",
            font: "bold 18px Montserrat",
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFAC69",
          }}
        >
          Thông tin pháp nhân uỷ quyền
        </div>

        <div
          style={{
            width: "234px",
            height: "24px",
            position: "absolute",
            top: "554px",
            left: "80px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 36 }}>Pháp nhân ủy quyền:</div>
          <div style={{ marginBottom: 40 }}>
            Tên người uỷ quyền:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 36 }}>
            Ngày sinh:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 36 }}>
            Giới tính:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 40 }}>
            Quốc tịch:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 36 }}>
            Số điện thoại:{" "}
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "18px",
              letterSpacing: "0.005em",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginRight: 3,
              }}
            >
              *
            </span>
            là những trường thông tin bắt buộc
          </div>
        </div>

        <div
          style={{
            width: "325px",
            position: "absolute",
            top: "554px",
            left: "286px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                width: "99px",
                height: "24px",
                marginRight: "8px",
                display: "inline-block",
              }}
            >
              {" "}
              <input type="radio" name="uyquyen" /> Cá nhân
            </div>
            <div
              style={{
                width: "99px",
                height: "24px",
                left: "147px",
                position: "absolute",
                marginRight: "8px",
                display: "inline-block",
              }}
            >
              <input type="radio" name="uyquyen" /> Tổ chức
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <input
              type="date"
              style={{
                width: "325px",
                height: "48px",
                opacity: "50%",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
                justifyContent: "space-between",
                paddingRight: "24px",
              }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                width: "72px",
                height: "24px",
                marginRight: "8px",
                display: "inline-block",
              }}
            >
              {" "}
              <input type="radio" name="gioitinh" /> Nam
            </div>
            <div
              style={{
                width: "72px",
                height: "24px",
                left: "147px",
                position: "absolute",
                marginRight: "8px",
                display: "inline-block",
              }}
            >
              <input type="radio" name="gioitinh" /> Nữ
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <select
              style={{
                width: "325px",
                height: "48px",
                opacity: "50%",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
                justifyContent: "space-between",
                paddingRight: "24px",
              }}
            >
              <option value="option1" selected>
                Việt Nam
              </option>
              <option value="option2">Hàn Quốc</option>
              <option value="option3">Nhật Bản</option>
            </select>
          </div>
          <div>
            <input
              type="tel"
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "126px",
            position: "absolute",
            top: "554px",
            left: "750px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 40 }}>
            CMND/ CCCD:{" "}
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 40 }}>
            Ngày cấp:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 39 }}>
            Nơi cấp:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 29 }}>Mã số thuế:</div>
          <div>Nơi cư trú:</div>
        </div>

        <div
          style={{
            width: "311px",
            position: "absolute",
            top: "542px",
            left: "900px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "311px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="date"
              style={{
                opacity: "50%",
                width: "311px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
                justifyContent: "space-between",
                paddingRight: "24px",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "311px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "311px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div>
            <textarea
              style={{
                width: "311px",
                height: "96px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "140px",
            position: "absolute",
            top: "554px",
            left: "1351px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 40 }}>Email:</div>
          <div style={{ marginBottom: 40 }}>Tên đăng nhập:</div>
          <div style={{ marginBottom: 39 }}>
            Mật khẩu:
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginLeft: 3,
                position: "absolute",
              }}
            >
              *
            </span>
          </div>
          <div style={{ marginBottom: 41 }}>Số tài khoản:</div>
          <div>Ngân hàng:</div>
        </div>

        <div
          style={{
            width: "325px",
            position: "absolute",
            top: "542px",
            left: "1515px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type={showPassword ? "text" : "password"}
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
            <div
              style={{
                marginRight: 10,
                cursor: "pointer",
                display: "inline-block",
                position: "absolute",
                marginTop: 10,
                color: "#FF7506",
                right: 10,
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
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div>
            <input
              style={{
                width: "325px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "#FFFFFF",
              }}
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "972px",
            left: "772px",
            width: "376px",
            height: "48px",
            gap: "40px",
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

export default ThemHopDongUyQuyen;
