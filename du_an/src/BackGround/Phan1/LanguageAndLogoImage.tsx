import "../../login/css/Log.css";
const LanguageAndLogoImage = () => {
  return (
    <>
      <div className="language">
        <select className="languageSelect">
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
      <div className="BoxLogoImage">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/logo.png?alt=media&token=86eb9fbc-d239-46f4-963e-092d0a26fd33"
          alt="Logo"
          className="LogoImage"
        />
      </div>
    </>
  );
};

export default LanguageAndLogoImage;
