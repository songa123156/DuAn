import { useState } from "react";
import { Square } from "./Log";
import { Link } from "react-router-dom";

const Forget = () => {
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
      setErrorMessage("Vui lòng nhập tên đăng nhập và mật khẩu.");
    } else {
      // Nếu đã nhập đầy đủ, tiến hành submit form
      form.submit();
    }
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
          src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/logo.png?alt=media&token=e0a3187d-50ee-4e26-840f-b32c4ddf0cb4"
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
            width: "383px",
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
          Khôi phục mật khẩu
        </div>
        <div
          style={{
            position: "absolute",
            width: 598,
            height: 80,
            top: 472,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              textAlign: "left",
              marginLeft: 18,
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "-0.002em",
              marginBottom: 32,
            }}
          >
            Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
              Email
            </div>
            <div
              style={{
                width: 598,
                height: 48,
                padding: "11px 24px 13px 16px",
                display: "flex",
              }}
            >
              <input
                name="username"
                type="text"
                // style={{
                //   backgroundColor: "#2B2B3F",
                //   flex: 1,
                //   width: "100%",
                //   height: "100%",
                //   borderRadius: 8,
                // }}
                style={{
                  width: "598px",
                  height: "48px",
                  padding: "11px 24px 13px 16px",
                  borderRadius: "8px",
                  border: "1px solid #727288",
                  backgroundColor: "#2B2B3F",
                  color: "#FFFFFF",
                }}
              />
            </div>
            <div
              style={{
                color: "#FF0000",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 400,
                marginLeft: 18,
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
              id="error-message"
            >
              {errorMessage}
            </div>
          </div>
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontFamily: "Montserrat",
            fontSize: 16,
            fontWeight: 400,
            position: "absolute",
            top: 648,
            left: "50%",
            transform: "translateX(-50%)",
            letterSpacing: "-0.002em",
            textAlign: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#FF7506",
              width: 208,
              height: 56,
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
            Đăng nhập
          </button>
        </div>
      </form>
      <div
        style={{
          position: "absolute",
          width: 139,
          height: 24,
          top: 1005,
          left: "50%",
          textAlign: "center",
          transform: "translateX(-50%)",
        }}
      >
        <Link
          to="/Foget"
          style={{
            fontFamily: "Montserrat",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0em",
            textAlign: "center",
            textDecoration: "underline",
            color: "#FF7506",
          }}
        >
          Quên mật khẩu
        </Link>
      </div>
    </>
  );
};

export default Forget;
