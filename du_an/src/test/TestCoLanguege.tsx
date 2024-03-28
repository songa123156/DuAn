import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./css.css";
import Flag from "./Flag";

function TestCoLanguege() {
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
            src="images/logo.png"
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
              src="images/banghi.png"
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
              src="images/Playlist.png"
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
              src="images/calendar.png"
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
              src="images/quanly.png"
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
              src="images/doanhthu.png"
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
              src="images/Setting.png"
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
              src="images/Support.png"
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

        {/* <div
          style={{
            width: "143px",
            height: "40px",
            top: "100px",
            left: "1375px",
            border: "1px solid white",
            position: "absolute",
            justifyItems: "center",
          }}
        >
          <div
            style={{
              width: 73,
              height: "100%",
              color: "white",
              display: "inline",
              position: "absolute",
            }}
          >
            Tiếng việt
          </div>
          <select
            id="country-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              height: "100%",
              width: 143,
              color: "transparent",
              display: "inline",
            }}
          >
            <option value="vn">Tieeg Việt</option>
            <option value="us">Tiếng Anh</option>
            <option value="fr">Tieegns Phpas</option>
          </select>
        </div> */}
        {/* <select
          style={{ position: "absolute", top: 30, left: 1000 }}
          name=""
          id=""
        >
          <option value="">
            tiếng việt <i className="flag flag-vietnam"></i>
          </option>
          <option value="">
            tiếng anh <i className="flag flag-england"></i>
          </option>
        </select> */}

        <div
          style={{
            position: "absolute",
            top: 80,
            left: 1000,
            background: "red",
          }}
        >
          <Flag countryCode="fr" />
        </div>

        <select
          style={{ position: "absolute", top: 30, left: 1000 }}
          name=""
          id=""
        >
          <option value="">
            tiếng việt <Flag countryCode="vn" />
          </option>
          <option value="">
            tiếng anh <Flag countryCode="us" />
          </option>
        </select>
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 300,
            width: 50,
            height: 50,
          }}
        >
          <i className="flag flag-vietnam"></i>
        </div>
      </div>
    </>
  );
}

export default TestCoLanguege;
