import LanguageAndLogoImage from "../BackGround/Phan1/LanguageAndLogoImage";
import "./css/KhoiPhucMK.css";
const KhoiPhucMK: React.FC = () => {
  return (
    <>
      <LanguageAndLogoImage />
      <div className="textTitle" style={{ left: 769 }}>
        Khôi phục mật khẩu
      </div>
      <div className="textKhoiPhuc">
        Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra
        mail.
      </div>
      <div className="textKhoiPhuc2">
        Click vào đường link được đính kèm trong mail để chuyển đến trang đặt
        lại mật khẩu.
      </div>

      <a
        href="/login"
        className="BoxQuenMK TextQuenMK"
        style={{ color: "#FF7506" }}
      >
        Quay lại đăng nhập
      </a>
    </>
  );
};

export default KhoiPhucMK;
