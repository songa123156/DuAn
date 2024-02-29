import { useState } from "react";
import { Square } from "./Log";

const DaMK = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ngăn chặn form submit tự động

    const form = event.currentTarget as HTMLFormElement; // Ép kiểu currentTarget thành HTMLFormElement

    // Ép kiểu các phần tử thành các phần tử đầu vào cụ thể
    const usernameInput = form.elements.namedItem(
      "username"
    ) as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    // Lấy giá trị của các trường đầu vào
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Kiểm tra xem tên đăng nhập và mật khẩu đã được nhập hay chưa
    if (username === "" || password === "") {
      setErrorMessage("Hãy nhập tài khoản và mật khẩu.");
    } else {
      // Nếu đã nhập đầy đủ, tiến hành submit form
      form.submit();
    }
  };
  // Show password
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPasswordcomfirm, setShowPasswordcomfirm] = useState(false);

  const handleTogglePasswordcomfirm = () => {
    setShowPasswordcomfirm(!showPasswordcomfirm);
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: 143,
          height: 40,
          top: 24,
          left: 1697,
          padding: "8px 4px 8px 8px",
          borderRadius: 4,
          border: "1px solid white",
          gap: 8,
        }}
      >
        <select
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            border: 0,
            color: "white",
          }}
        >
          <option value="vi" data-icon="VN">
            Tiếng Việt
          </option>
          <option value="en" data-icon="🇺🇸">
            English
          </option>
          <option value="ja" data-icon="🇯🇵">
            日本語
          </option>
          <option value="ko" data-icon="🇰🇷">
            한국어
          </option>
        </select>
      </div>
      <Square>
        <img
          src="/img/logo.png"
          alt="Logo"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "122px",
            border: "1px solid black",
            objectFit: "cover", // Đảm bảo hình ảnh điền đầy khung mà không bị biến dạng
          }}
        />
      </Square>
      <form action="" onSubmit={validateForm}>
        <div
          style={{
            position: "absolute",
            width: "313px",
            height: "48px",
            top: "396px",
            fontFamily: "Montserrat",
            fontSize: "36px",
            fontWeight: "700",
            lineHeight: "48px",
            letterSpacing: "-0.002em",
            textAlign: "center",
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Đặt lại mật khẩu
        </div>
        <div
          style={{
            position: "absolute",
            width: 471,
            height: 80,
            top: 492,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div>
              <div
                style={{
                  textAlign: "left",
                  marginLeft: 18,
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "-0.002em",
                }}
              >
                Password
              </div>
              <div
                style={{
                  width: 471,
                  height: 48,
                  padding: "11px 24px 13px 16px",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  // style={{
                  //   backgroundColor: "#2B2B3F",
                  //   flex: 1,
                  //   width: "100%",
                  //   height: "100%",
                  //   borderRadius: 8,
                  // }}
                  style={{
                    width: "471px",
                    height: "48px",
                    padding: "11px 24px 13px 16px",
                    borderRadius: "8px",
                    background: "#2B2B3F",
                    fontFamily: "Arial",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letterSpacing: "normal",
                    textAlign: "left",
                    color: "#F5F5FF",
                  }}
                />
                <div
                  style={{
                    marginRight: 20,
                    cursor: "pointer",
                    position: "absolute",
                    right: 10,
                  }}
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <i
                      style={{ color: "#FF7506" }}
                      className="far fa-eye-slash"
                    ></i>
                  ) : (
                    <i style={{ color: "#FF7506" }} className="far fa-eye"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* comfirm password */}

        <div
          style={{
            position: "absolute",
            width: 471,
            height: 80,
            top: 572,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div>
              <div
                style={{
                  textAlign: "left",
                  marginLeft: 18,
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "-0.002em",
                }}
              >
                Password
              </div>
              <div
                style={{
                  width: 471,
                  height: 48,
                  padding: "11px 24px 13px 16px",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <input
                  type={showPasswordcomfirm ? "text" : "password"}
                  name="password"
                  // style={{
                  //   backgroundColor: "#2B2B3F",
                  //   flex: 1,
                  //   width: "100%",
                  //   height: "100%",
                  //   borderRadius: 8,
                  // }}
                  style={{
                    width: "471px",
                    height: "48px",
                    padding: "11px 24px 13px 16px",
                    borderRadius: "8px",
                    background: "#2B2B3F",
                    fontFamily: "Arial",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letterSpacing: "normal",
                    textAlign: "left",
                    color: "#F5F5FF",
                  }}
                />
                <div
                  style={{
                    marginRight: 20,
                    cursor: "pointer",
                    position: "absolute",
                    right: 10,
                  }}
                  onClick={handleTogglePasswordcomfirm}
                >
                  {showPasswordcomfirm ? (
                    <i
                      style={{ color: "#FF7506" }}
                      className="far fa-eye-slash"
                    ></i>
                  ) : (
                    <i style={{ color: "#FF7506" }} className="far fa-eye"></i>
                  )}
                </div>
              </div>
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: "-0.002em",
                textAlign: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "#FF7506",
                  width: 208,
                  height: 56,
                  top: 744,
                  left: 856,
                  padding: "16px 24px",
                  borderRadius: 8,
                  gap: 8,
                  fontFamily: "Montserrat",
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: "-0.002em",
                  color: "#FFFFFF",
                }}
                type="submit"
              >
                Lưu mật khẩu
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DaMK;
