import React, { useState } from "react";

interface TypeProps {
  value: number;
}

const SideBar = (props: TypeProps) => {
  const [checkNavbar, setcheckNavbar] = useState(false);

  const handleNavbar = () => {
    setcheckNavbar(!checkNavbar);
  };

  return (
    <>
      <div
        style={{
          width: 1749,
          height: 80,
          left: 171,
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 0,
        }}
      >
        <div>
          <select
            id="language"
            style={{
              width: 143,
              height: 40,
              top: 24,
              left: 1375,
              padding: "8px 4px 8px 8px",
              borderRadius: 4,
              border: "1px solid rgb(200, 200, 219)",
              gap: 8,
              color: "rgb(200, 200, 219)",
              background: "rgb(30, 30, 46)",
              position: "relative",
            }}
          >
            <option value="vi" style={{ background: "rgb(30, 30, 46)" }}>
              Tiếng Việt
            </option>
            <option value="en" style={{ background: "rgb(30, 30, 46)" }}>
              English
            </option>
            <option value="fr" style={{ background: "rgb(30, 30, 46)" }}>
              French
            </option>
          </select>
        </div>
        <div
          style={{
            width: 132,
            height: 40,
            top: 24,
            left: 1542,
            gap: 8,
            marginRight: 24,
            position: "absolute",
          }}
        >
          <a href="/trang1" style={{ textDecoration: "none" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/admin.jpg?alt=media&token=9a625f88-689d-48e4-82fb-d19827df0ae2"
              alt="mdo"
              style={{
                width: 40,
                height: "40.58px",
                borderRadius: 200,
                position: "absolute",
              }}
            />
            <div
              style={{
                width: 74,
                height: 24,
                left: 5,
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-0.002em",
                textAlign: "center",
                color: "rgb(245, 245, 255)",
                marginLeft: 35,
                position: "relative",
                textDecoration: "none",
              }}
            />
            <div
              style={{
                width: 49,
                height: 17,
                left: 6,
                fontFamily: "Montserrat",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.015em",
                textAlign: "center",
                color: "rgb(182, 81, 0)",
                marginLeft: 35,
                position: "relative",
                textDecoration: "none",
              }}
            >
              Admin
            </div>
          </a>
        </div>
      </div>

      {props.value === 1 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "170px",
            height: "1080px",
            background: "#020220",
            color: "white",
            zIndex: "1",
            position: "fixed",
            opacity: "0.8",
          }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/logo.png?alt=media&token=86eb9fbc-d239-46f4-963e-092d0a26fd33"
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
      ) : (
        <div>
          <div
            className="sidebar"
            style={{
              width: 40,
              borderRadius: "0px 24px 24px 0px",
              display: !checkNavbar ? "flex" : "none",
              background: "#020220",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "1080px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 24,
              }}
            >
              <button
                onClick={handleNavbar}
                style={{
                  background: "transparent",
                  border: 0,
                  color: "#B65100",
                }}
              >
                &gt;
              </button>
            </div>
          </div>
          <div style={{ display: checkNavbar ? "flex" : "none" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "170px",
                height: "1080px",
                background: "#020220",
                color: "white",
                zIndex: "1",
                position: "fixed",
                opacity: "0.8",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/logo.png?alt=media&token=86eb9fbc-d239-46f4-963e-092d0a26fd33"
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
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "1080px",
                background: "transparent",
                color: "white",
                zIndex: 9999,
                marginLeft: 170,
                position: "fixed",
              }}
              onClick={handleNavbar}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};
export default SideBar;
