import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./css/Log.css";
import LanguageAndLogoImage from "../BackGround/Phan1/LanguageAndLogoImage";

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

        await history.push("/ChiTietHopDong", {
          user: user.providerData[0].email,
        });
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
      <LanguageAndLogoImage />

      <form action="" onSubmit={validateForm}>
        <div className="textTitle">Đăng Nhập</div>

        <div className="textDangNhap">
          <div className="textMotCot">
            <div className="textTaiKhoanMK">Tên đăng nhập</div>
            <div className="BoxInputTaiKhoanMK">
              <input
                name="username"
                id="email"
                type="text"
                className="InputTaiKhoanMK"
              />
            </div>
          </div>
        </div>

        {/* password */}

        <div className="textDangNhap textPassword">
          <div className="textMotCot">
            <div>
              <div className="textTaiKhoanMK">Password</div>
              <div className="BoxInputTaiKhoanMK">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="InputTaiKhoanMK"
                />
                <div className="BoxEyePassword" onClick={handleTogglePassword}>
                  {showPassword ? (
                    <i className="far fa-eye-slash"></i>
                  ) : (
                    <i className="far fa-eye"></i>
                  )}
                </div>
              </div>
            </div>
            <div className="textError" id="error-message">
              {errorMessage}
            </div>
            <div className="BoxCheckBox">
              <input type="checkbox" name="GhiNhoMatKhau" id="GhiNhoMKID" />
              <span className="TextCheckBox">Ghi nhớ mật khẩu</span>
            </div>
            <div className="BoxBtnDangNhap">
              <button
                className="Button-DangNhap"
                onClick={(event) => dangnhap(event)}
                type="submit"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="BoxQuenMK">
        <Link to="/Foget" className="QuenMK">
          Quên mật khẩu
        </Link>
      </div>
    </>
  );
};

export default Log;
