import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [language, setLanguage] = useState("vi");
  const location = useLocation();
  let user = location.state && location.state.user;
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "170px",
            height: "1080px",
            background: "#020220",
            color: "white",
            top: "-8251px",
            left: "-3190px",
          }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/logo.png?alt=media&token=e0a3187d-50ee-4e26-840f-b32c4ddf0cb4"
            alt=""
            style={{
              width: "96px",
              height: "96px",
              margin: "39px 21px 0px 34px",
            }}
          />
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "110px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/banghi.png?alt=media&token=c8cc11e3-853c-4d19-bac3-456f43ebd116"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Kho bài hát
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Playlist.png?alt=media&token=51ffa887-e936-45ec-bab8-1edfb4d0a673"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Playlist
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/calendar.png?alt=media&token=5a999305-7a02-466e-b327-b70e9a4828e1"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Lập lịch phát
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/quanly.png?alt=media&token=ab2cf916-75e8-43ea-a350-a1da16a2dfef"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Quản lý
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/doanhthu.png?alt=media&token=bced9cb1-2c04-4ba4-b4ce-1f7a7cf478c8"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Doanh thu
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Setting.png?alt=media&token=5db85ee8-3aa0-4b5d-adaf-9d2c7f112c8a"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Cài đặt
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Support.png?alt=media&token=79f5fada-37ac-41c8-9be3-8621b82113d0"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Hỗ trợ
            </p>
          </div>
        </div>
        <div
          style={{
            width: "1749px",
            height: "80px",
            left: "171px",
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: "9999",
          }}
        >
          <div>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                width: "143px",
                height: "40px",
                top: "24px",
                left: "1375px",
                padding: "8px 4px 8px 8px",
                borderRadius: "4px",
                border: "1px solid #C8C8DB",
                gap: "8px",
                color: "#C8C8DB",
                backgroundColor: "transparent",
                position: "relative",
                background: "#1E1E2E",
              }}
            >
              <option
                style={{
                  // backgroundImage: "url(images/Frame.png)",
                  // backgroundRepeat: "no-repeat",
                  // backgroundPosition: "left center",
                  // paddingLeft: "30px",
                  background: "#1E1E2E",
                }}
                value="vi"
              >
                Tiếng Việt
              </option>
              <option
                style={{
                  // backgroundImage: "url('images/ENG.svg')",
                  // backgroundRepeat: "no-repeat",
                  // backgroundPosition: "left center",
                  // paddingLeft: "30px",
                  background: "#1E1E2E",
                }}
                value="en"
              >
                English
              </option>
              <option style={{ background: "#1E1E2E" }} value="fr">
                French
              </option>
            </select>
          </div>
          <div
            style={{
              width: "132px",
              height: "40px",
              top: "24px",
              left: "1542px",
              gap: "8px",
              marginRight: "24px",
              position: "absolute",
            }}
          >
            <a href="/trang1" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/admin.jpg?alt=media&token=9647fd08-067e-4a3f-a69b-d4c93c10c29f"
                alt="mdo"
                style={{
                  width: "40px",
                  height: "40.58px",
                  borderRadius: "200px",
                  position: "absolute",
                  margin: "0px !important;",
                }}
              />
              <div
                style={{
                  width: "74px",
                  height: "24px",
                  left: "5px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  color: "#F5F5FF",
                  marginLeft: "35px",
                  position: "relative",
                  textDecoration: "none",
                }}
              >
                {user}
              </div>
              <div
                style={{
                  width: "49px",
                  height: "17px",
                  left: "6px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  color: "#B65100",
                  marginLeft: "35px",
                  position: "relative",
                  textDecoration: "none",
                }}
              >
                Admin
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
