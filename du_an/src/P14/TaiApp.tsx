import "../p3/style.css";
import SideBar from "../BackGround/SideBar";

const TaiApp = () => {
  return (
    <>
      <SideBar value={1} />
      <div>
        <div
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
            Tải App
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
            Tải App
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            left: 464.02,
          }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Vector.png?alt=media&token=9168052e-4239-4e98-b1f2-e0c177e48816"
            alt="Vector"
          />
        </div>

        <div
          style={{
            width: "639px",
            height: "114px",
            top: "263px",
            left: "726px",
            gap: "0",
            position: "absolute",
          }}
        >
          <div
            style={{
              width: "639px",
              height: "78px",
              fontFamily: "Montserrat",
              fontSize: "64px",
              fontWeight: "600",
              lineHeight: "78.02px",
              textAlign: "center",
              color: "white",
            }}
          >
            Ứng dụng <span style={{ color: "#FF7506" }}>VCPMC</span>
          </div>
        </div>

        <div
          style={{
            width: "480px",
            height: "0px",
            top: "377px",
            left: "805px",
            gap: "0",
            borderTop: "2px dashed #FF7506",
            position: "absolute",
          }}
        />

        <div
          style={{
            width: "544px",
            height: "86px",
            top: "411px",
            left: "773px",
            gap: "0",
            position: "absolute",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "32px",
              fontWeight: "400",
              lineHeight: "39.01px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Bạn vui lòng chọn <br />{" "}
            <span
              style={{
                fontFamily: "Montserrat",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "39.01px",
                textAlign: "center",
              }}
            >
              nền tảng
            </span>{" "}
            phù hợp để trải nghiệm
          </div>
        </div>

        <div
          style={{
            width: "350px",
            height: "373px",
            top: "570px",
            left: "409px",
            padding: "92px 71px 32px 71px",
            gap: "0px",
            borderRadius: "16px",
            position: "absolute",
            background: "#2F2F41B2",
          }}
        >
          <div
            style={{
              width: "189px",
              height: "104px",
              top: "92px",
              left: "80px",
              gap: "0px",
              position: "absolute",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/may.png?alt=media&token=953e7557-6102-4643-b7e3-e84b4727e371"
              alt="may"
            />
          </div>
          <div
            style={{
              width: "168px",
              height: "48px",
              top: "285px",
              left: "71px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <a href="/DanhSachDoiTacUyQuyen">
              <button
                className="butoon"
                style={{
                  color: "white",
                  background: "#FF7506",
                  marginLeft: "16px",
                }}
              >
                Tool Upload
              </button>
            </a>
          </div>
        </div>

        <div
          style={{
            width: "350px",
            height: "373px",
            top: "570px",
            left: "870px",
            padding: "92px 71px 32px 71px",
            gap: "0px",
            borderRadius: "16px",
            position: "absolute",
            background: "#2F2F41B2",
          }}
        >
          <div
            style={{
              width: "189px",
              height: "104px",
              top: "77px",
              left: "101px",
              gap: "0px",
              position: "absolute",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/so.png?alt=media&token=f3ca43f5-0fa9-4ca1-9e0e-9ed10f6cd59b"
              alt="so"
            />
          </div>
          <div
            style={{
              width: "168px",
              height: "48px",
              top: "285px",
              left: "71px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <a href="/DanhSachDoiTacUyQuyen">
              <button
                className="butoon"
                style={{
                  color: "white",
                  background: "#FF7506",
                  marginLeft: "16px",
                }}
              >
                Tải App Window
              </button>
            </a>
          </div>
        </div>

        <div
          style={{
            width: "350px",
            height: "373px",
            top: "570px",
            left: "1331px",
            padding: "92px 71px 32px 71px",
            gap: "0px",
            borderRadius: "16px",
            position: "absolute",
            background: "#2F2F41B2",
          }}
        >
          <div
            style={{
              width: "189px",
              height: "104px",
              top: "64px",
              left: "62px",
              gap: "0px",
              position: "absolute",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/xanh.png?alt=media&token=30b905e8-3002-4c13-80ac-f67a76fa980c"
              alt="xanh"
            />
          </div>
          <div
            style={{
              width: "168px",
              height: "48px",
              top: "285px",
              left: "71px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <a href="/DanhSachDoiTacUyQuyen">
              <button
                className="butoon"
                style={{
                  color: "white",
                  background: "#FF7506",
                  marginLeft: "16px",
                }}
              >
                Tải App Android
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "452.68px",
          height: "416.96px",
          top: "1108.96px",
          left: "2062.68px",
          gap: "0px",
          position: "absolute",
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Group75.png?alt=media&token=10db7200-c68c-4e5d-af2a-61a0d4530897"
          alt="Group75"
        />
      </div>
    </>
  );
};

export default TaiApp;
