import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageAndLogoImage from "../BackGround/Phan1/LanguageAndLogoImage";
import "./css/Foget.css";

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
      <LanguageAndLogoImage />
      <form action="" onSubmit={validateForm}>
        <div className="textTitle">Khôi phục mật khẩu</div>
        <div className="BoxThongBao">
          <div className="ThongBao">
            Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
          </div>
          <div className="textMotCot">
            <div className="TextEmail">Email</div>
            <div className="BoxInput">
              <input name="username" type="text" className="InputEmail" />
            </div>
            <div className="textError" id="error-message">
              {errorMessage}
            </div>
          </div>
        </div>
        <div className="BoxBtnDangNhap">
          <button className="ButtonDangNhap" type="submit">
            Đăng nhập
          </button>
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

export default Forget;
