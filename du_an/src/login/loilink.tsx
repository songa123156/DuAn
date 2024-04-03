import LanguageAndLogoImage from "../BackGround/Phan1/LanguageAndLogoImage";
import "./css/LoiLink.css";

const LoiLink: React.FC = () => {
  return (
    <>
      <LanguageAndLogoImage />
      <div className="textLoiLink1">Không thể kết nối !!</div>
      <div className="textLoiLink2">
        Dường như đã có chút trục trặc hoặc link này đã hết hạn. Vui lòng thử
        lại <br /> hoặc yêu cầu gửi lại link để đặt lại mật khẩu của bạn.
      </div>
      <button className="textLoiLink3">Yêu cầu gửi lại link</button>

      <a
        className="BoxQuenMK QuenMK"
        href="/login"
        style={{
          color: "#FF7506",
        }}
      >
        Quay lại đăng nhập
      </a>
    </>
  );
};

export default LoiLink;
