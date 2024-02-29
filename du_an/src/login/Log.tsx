import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Square = styled.div`
  width: 240px;
  height: 240px;
  position: absolute;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);
  overflow: "hidden";
`;

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCsUfykyE1L-VyuIFX_89jYEEPG1MYFLi4",
  authDomain: "duan-ede31.firebaseapp.com",
};
firebase.initializeApp(config);

const Log = () => {
  // const history = useHistory();
  // const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const history = createBrowserHistory();
  const dangnhap = async (event: any) => {
    setErrorMessage("");
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const email = emailInput.value;
    const password = passwordInput.value;
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = await userCredential.user;

        console.log("thành công", user.providerData[0].email);
        // history.push("/navbar", { user: user }); // Chuyển hướng và truyền thông tin user
        // navigate("/navbar", { state: { user: user } });

        await history.push("/navbar", { user: user.providerData[0].email });
        window.location.reload();
      })
      .catch((error) => {
        // const errorCode = error.code;
        setErrorMessage("Sai tên tài khoản hoặc mật khẩu.");
        console.log("thất bại");
      });
  };

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
            paddingTop: -100,
            position: "absolute",
            borderRadius: "122px",
            border: "1px solid black",
            left: 0,
            height: "100%",
            objectFit: "cover", // Đảm bảo hình ảnh điền đầy khung mà không bị biến dạng
          }}
        />
      </Square>
      <form action="" onSubmit={validateForm}>
        <div
          style={{
            position: "absolute",
            width: "210px",
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
          Đăng Nhập
        </div>
        <div
          style={{
            position: "absolute",
            width: 471,
            height: 80,
            top: 472,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
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
              Tên đăng nhập
            </div>
            <div
              style={{
                width: 471,
                height: 48,
                padding: "11px 24px 13px 16px",
                display: "flex",
              }}
            >
              <input
                name="username"
                id="email"
                type="text"
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
                  color: "#FFFFFF",
                }}
              />
            </div>
          </div>
        </div>

        {/* password */}

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
                  id="password"
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
                    color: "#FFFFFF",
                  }}
                />
                <div
                  style={{
                    marginRight: 20,
                    cursor: "pointer",
                    position: "absolute",
                    // top: "50%",
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
            <div
              style={{
                textAlign: "left",
                marginLeft: 18,
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: "-0.002em",
              }}
            >
              <input type="checkbox" name="GhiNhoMatKhau" id="GhiNhoMKID" />
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 400,
                  letterSpacing: "-0.002em",
                }}
              >
                Ghi nhớ mật khẩu
              </span>
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
                onClick={(event) => dangnhap(event)}
                type="submit"
              >
                Đăng nhập
              </button>
            </div>
          </div>
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

export default Log;
