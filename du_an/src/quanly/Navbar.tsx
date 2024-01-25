import "./Navbar.css"; // Import file CSS cho navbar
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const user = location.state && location.state.user;
  return (
    <>
      {/* <div className="navbar">
        <img src="/img/logo.png" alt="HInh logo" />
        <ul>
          <li>
            <a href="/#">Kho bản ghi</a>
          </li>
          <li>
            <a href="/#">Playlist</a>
          </li>
          <li>
            <a href="/#">Lập lịch phát</a>
          </li>
          <li>
            <a href="/#">Quản lý doanh thu</a>
          </li>
          <li>
            <a href="/#">Cài đặt</a>
          </li>
          <li>
            <a href="/#">Hỗ trợ</a>
          </li>
        </ul>
      </div>

      <nav className="navbar1">
        <div className="logo">
          <img src="icon.png" alt="Icon" />
        </div>
        <div className="login">
          <span>Welcome, John Doe</span>
        </div>
      </nav> */}

      <div style={{ width: "100%", display: "flex" }}>
        <div className="sidebar">
          <div className="logo">
            <img src="/img/logo.png" alt="Logo abc" />
          </div>
          <ul>
            <li>
              {/* <a href="/#">Kho bản ghi</a> */}
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
        </div>

        {/* <div
          style={{
            position: "relative",
            width: 143,
            height: 40,
            top: 24,
            left: 1697,
            padding: "8px 4px 8px 8px",
            borderRadius: 4,
            border: "1px solid white",
            gap: 8,
          }}
        ></div> */}
        <nav
          className="navbar"
          style={{
            width: "100%",
            justifyContent: "flex-end",
            marginRight: "75px",
            marginBottom: "16px",
            marginTop: "24px",
          }}
        >
          <select
            style={{
              //   width: "100%",
              //   height: "100%",
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
            <img src="/img/logo.png" alt="Icon" style={{ marginTop: "300%" }} />
          </div>
          <div className="login">
            <span>Welcome, {user && user.displayName}</span>
          </div>
        </nav>
        {/* <nav
          className="navbar"
          style={{ width: "100%", justifyContent: "flex-end" }}
        >
          <div className="logo">
            <img src="/img/logo.png" alt="Icon" style={{ marginTop: "300%" }} />
          </div>
          <div className="login">
            <span>Welcome, John Doe</span>
          </div>
        </nav> */}
      </div>
    </>
  );
};

export default Navbar;
