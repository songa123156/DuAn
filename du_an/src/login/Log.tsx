import styled from "styled-components";

const Square = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 122px;
  border: 1px solid black;
  overflow: "hidden";
`;

const Log = () => {
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
      {/* <div
        style={{
          position: "absolute",
          width: 143,
          height: 40,
          top: 24,
          left: 1697,
          padding: "8px 4px 8px 8px",
          borderRadius: 4,
          border: "1px solid",
          gap: 8,
        }}
      >
        <select
          style={{ width: 73, height: 20, backgroundColor: "transparent" }}
        >
          <option value="vi">🇻🇳 Tiếng Việt</option>
          <option value="en">🇺🇸 English</option>
          <option value="ja">🇯🇵 日本語</option>
          <option value="ko">🇰🇷 한국어</option>
        </select>
      </div> */}

      <Square>
        <img
          src="/img/logo.png"
          alt="Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Đảm bảo hình ảnh điền đầy khung mà không bị biến dạng
          }}
        />
      </Square>
      <form action="">
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
                // lineHeight: 24,
                letterSpacing: "-0.002em",
                // textAlign: "left",
              }}
            >
              Tên đăng nhập 1
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
                type="text"
                style={{
                  backgroundColor: "#2B2B3F",
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: 8,
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
              }}
            >
              <input
                type="password"
                style={{
                  backgroundColor: "#2B2B3F",
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: 8,
                }}
              />
            </div>

            {/* <div
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
              <input type="checkbox" name="GhiNhoMatKhau" id="GhiNhoMKID" />
              Ghi nhớ mật khẩu
            </div> */}

            <div
              style={{
                textAlign: "left",
                marginLeft: 18,
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 400,
                // lineHeight: 24,
                letterSpacing: "-0.002em",
              }}
            >
              <input type="checkbox" name="GhiNhoMatKhau" id="GhiNhoMKID" />
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 400,
                  // lineHeight: 24,
                  letterSpacing: "-0.002em",
                }}
              >
                Ghi nhớ mật khẩu
              </span>
            </div>
            {/* <div
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 400,
                // lineHeight: 24,
                letterSpacing: "-0.002em",
              }}
            >
              <button style={{ backgroundColor: "#FF7506" }} type="submit">
                Đăng nhập
              </button>
            </div> */}

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
        <a
          href="/#"
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
        </a>
      </div>
    </>
  );
};

export default Log;
