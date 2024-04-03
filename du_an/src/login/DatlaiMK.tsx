import { useState } from "react";
import "./css/Log.css";
import LanguageAndLogoImage from "../BackGround/Phan1/LanguageAndLogoImage";

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
      <LanguageAndLogoImage />
      <form action="" onSubmit={validateForm}>
        <div className="textTitle">Đặt lại mật khẩu</div>
        <div className="textDangNhap">
          <div className="textMotCot">
            <div>
              <div className="textTaiKhoanMK">Password</div>
              <div className="BoxInputTaiKhoanMK">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="InputTaiKhoanMK"
                />
                <div className="BoxEyePassword" onClick={handleTogglePassword}>
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

        <div className="textDangNhap textPassword">
          <div className="textMotCot">
            <div>
              <div className="textTaiKhoanMK">Password</div>
              <div className="BoxInputTaiKhoanMK">
                <input
                  id="password"
                  type={showPasswordcomfirm ? "text" : "password"}
                  name="password"
                  className="InputTaiKhoanMK"
                />
                <div
                  className="BoxEyePassword"
                  onClick={handleTogglePasswordcomfirm}
                >
                  {showPasswordcomfirm ? (
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

            <div className="BoxBtnDangNhap mt-5">
              <button className="Button-DangNhap" type="submit">
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
