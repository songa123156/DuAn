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
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/logo.png?alt=media&token=b5b2e74f-9265-4a15-9815-393dbc233dce"
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
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/banghi.png?alt=media&token=3c4420c8-020b-4807-ad8d-6e1d164db3cf"
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
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Playlist.png?alt=media&token=cd6fdb13-4e44-4946-adc1-cf26835da028"
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
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/calendar.png?alt=media&token=60a3d98d-5c82-448f-aa3d-1d93175aab65"
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
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/quanly.png?alt=media&token=d5fd162c-c140-4b08-ab2f-8ebc98f424e6"
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
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/doanhthu.png?alt=media&token=70f09536-701d-45d2-924c-bf9f8ebb6a69"
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
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Setting.png?alt=media&token=bc2dd248-b2f0-48df-bf57-e76ea136f527"
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
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Support.png?alt=media&token=a5c4355d-fb76-4090-84de-263698aaa1c4"
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
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "0",
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
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/admin.jpg?alt=media&token=9a625f88-689d-48e4-82fb-d19827df0ae2"
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
