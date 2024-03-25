import "../quanly/Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../p3/style.css";
import Navbar from "../BackGround/navbar";

const HuongDanSuDung = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let user = location.state && location.state.user;

  const [ThongBao1, setThongBao1] = useState("Đang kích hoạt");

  const handleCheck1 = () => {
    if (ThongBao1 === "Đang kích hoạt") {
      setThongBao1("Ngừng kích hoạt");
    } else setThongBao1("Đang kích hoạt");
  };

  const handleDangXuat = () => {
    navigate("/");
  };

  //   useEffect(() => {
  //     if (user === null) navigate("/");
  //   }, []);

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        {/* <div className="sidebar">
          <div className="logo">
            <img src="/img/logo.png" alt="Logo navbar" />
          </div>
          <ul>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Kho bản ghi
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Playlist
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Lập lịch phát
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Quản lý doanh thu
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Cài đặt
              </a>
            </li>
            <li>
              <a
                href="/#"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                Hỗ trợ
              </a>
            </li>
          </ul>
        </div> */}
        <Navbar></Navbar>

        <div>
          {/* <nav
            className="navbar"
            style={{
              width: "100%",
              justifyContent: "flex-end",
              marginRight: "75px",
              marginBottom: "16px",
              marginTop: "24px",

              height: "80px",
              // backgroundColor: "#1e1e2e",
              display: "inline-flex",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            <select
              style={{
                backgroundColor: "transparent",
                border: 0,
                color: "white",
                marginRight: 24,
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
            <div className="logo">
              <img
                src="/img/logo.png"
                alt="Icon"
                style={{ marginTop: "300%" }}
              />
            </div>
            <div className="login" style={{ color: "white" }}>
              <span>Welcome, {user}</span>
            </div>
          </nav> */}

          <div
            // className="container"
            style={{
              top: 86,
              marginTop: "10px",
              left: 229,
              position: "absolute",
            }}
          >
            <a
              className="parent-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Hỗ trợ
            </a>
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Hướng dãn sử dụng
            </a>
          </div>

          <div
            style={{
              width: 489,
              height: 48,
              top: 114,
              left: 229,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
            >
              Hướng dẫn sử dụng
            </p>
          </div>

          <div
            style={{
              width: "400px",
              height: "834px",
              top: "186px",
              left: "229px",
              padding: "8px 0px 0px 0px",
              gap: "0px",
              borderRadius: "16px",
              position: "absolute",
              background: "#2F2F41B2",
            }}
          >
            <div
              style={{
                width: "400px",
                height: "76px",
                padding: "24px 102px 24px 24px",
                gap: "0px",
                position: "absolute",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",

                top: 0,
                background: "#39394D",
              }}
            >
              <div
                style={{
                  width: "274px",
                  height: "28px",
                  top: "24px",
                  left: "24px",
                  gap: "0px",
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Danh mục hướng dẫn
              </div>
            </div>

            <div
              style={{
                width: "400px",
                height: "44px",
                top: "100px",
                padding: "2px 0px 2px 24px",
                gap: "10px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "277px",
                  height: "24px",
                  gap: "0px",

                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FF7506",
                }}
              >
                1. Lorem ipsum dolor sit amet
              </div>
            </div>

            <div
              style={{
                width: "400px",
                height: "44px",
                top: "164px",
                padding: "2px 24px 2px 24px",
                gap: "10px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "341px",
                  height: "24px",
                  gap: "0px",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                2. Consectetur adipiscing elit sed do
              </div>
            </div>

            <div
              style={{
                width: "400px",
                height: "44px",
                top: "228px",
                padding: "2px 24px 2px 24px",
                gap: "10px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "341px",
                  height: "24px",
                  gap: "0px",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                3. Iusmod tempor incididunt ut labo
              </div>
            </div>

            <div
              style={{
                width: "400px",
                height: "44px",
                top: "292px",
                padding: "2px 24px 2px 24px",
                gap: "10px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "341px",
                  height: "24px",
                  gap: "0px",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                4. Ut enim ad minim veniam
              </div>
            </div>

            <div
              style={{
                width: "400px",
                height: "44px",
                top: "356px",
                padding: "2px 24px 2px 24px",
                gap: "10px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "341px",
                  height: "24px",
                  gap: "0px",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                5. Quis nostrud exercitation ullamco
              </div>
            </div>

            <div
              style={{
                width: "400px",
                height: "44px",
                top: "420px",
                padding: "2px 24px 2px 24px",
                gap: "10px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "341px",
                  height: "24px",
                  gap: "0px",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                6. Excepteur sint occaecat cupidatats
              </div>
            </div>

            <div
              style={{
                width: "400px",
                height: "44px",
                top: "484px",
                padding: "2px 24px 2px 24px",
                gap: "10px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "341px",
                  height: "24px",
                  gap: "0px",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                7. Sunt in culpa qui officiat
              </div>
            </div>

            <div
              style={{
                width: "400px",
                height: "44px",
                top: "548px",
                padding: "2px 24px 2px 24px",
                gap: "10px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "341px",
                  height: "24px",
                  gap: "0px",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                8. Sed ut perspiciatis unde omnis iste
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1211px",
              height: "834px",
              top: "186px",
              left: "669px",
              gap: "0px",
              borderRadius: "16px",
              position: "absolute",
              background: "#2F2F41B2",
            }}
          >
            <div
              style={{
                width: "347px",
                height: "24px",
                top: "24px",
                left: "412px",
                gap: "0px",
                position: "absolute",
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FF7506",
              }}
            >
              Lorem ipsum dolor sit amet
            </div>

            <div
              style={{
                width: "1157px",
                height: "706px",
                top: "88px",
                left: "24px",
                gap: "0px",
                position: "absolute",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "0.015em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas:
              </p>
              <p>
                {" "}
                <div
                  style={{
                    display: "inline-block",
                    borderRadius: "50%",
                    height: 4,
                    width: 4,
                    background: "white",
                    marginRight: 8,
                    marginLeft: 8,
                    marginBottom: 3,
                  }}
                ></div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </p>
              <p>
                {" "}
                <div
                  style={{
                    display: "inline-block",
                    borderRadius: "50%",
                    height: 4,
                    width: 4,
                    background: "white",
                    marginRight: 8,
                    marginLeft: 8,
                    marginBottom: 3,
                  }}
                ></div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </p>
              <p>
                {" "}
                <div
                  style={{
                    display: "inline-block",
                    borderRadius: "50%",
                    height: 4,
                    width: 4,
                    background: "white",
                    marginRight: 8,
                    marginLeft: 8,
                    marginBottom: 3,
                  }}
                ></div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                {" "}
                <div
                  style={{
                    display: "inline-block",
                    borderRadius: "50%",
                    height: 4,
                    width: 4,
                    background: "white",
                    marginRight: 8,
                    marginLeft: 8,
                    marginBottom: 3,
                  }}
                ></div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </p>
              <p>
                {" "}
                <div
                  style={{
                    display: "inline-block",
                    borderRadius: "50%",
                    height: 4,
                    width: 4,
                    background: "white",
                    marginRight: 8,
                    marginLeft: 8,
                    marginBottom: 3,
                  }}
                ></div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HuongDanSuDung;
