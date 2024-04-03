import "../p3/style.css";
import SideBar from "../BackGround/SideBar";

const Feedback = () => {
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
            Feedback
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
            Feedback
          </p>
        </div>

        <div
          style={{
            width: "764px",
            height: "750px",
            top: "185px",
            left: "651px",
            gap: "0px",
            borderRadius: "16px",
            position: "absolute",
            background: "#2F2F41B2",
          }}
        >
          <div
            style={{
              width: "154px",
              height: "24px",
              top: "40px",
              left: "32px",
              gap: "0px",
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
            >
              Tên người dùng
            </span>
          </div>
          <input
            defaultValue={"Ng.Tuyết"}
            style={{
              width: "700px",
              height: "48px",
              top: "72px",
              left: "32px",
              padding: "11px 24px 13px 16px",
              gap: "0px",
              borderRadius: "8px ",
              position: "absolute",
              background: "#2B2B3F",
              color: "white",
            }}
          />

          <div
            style={{
              height: "24px",
              top: "144px",
              left: "32px",
              gap: "0px",
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
            >
              Bạn muốn được hỗ trợ vấn đề gì?
            </span>
          </div>
          <select
            style={{
              width: "700px",
              height: "48px",
              top: "176px",
              left: "32px",
              padding: "11px 24px 13px 16px",
              gap: "0px",
              borderRadius: "8px ",
              position: "absolute",
              background: "#2B2B3F",
              color: "white",
            }}
            name=""
            id=""
          >
            <option selected value="Chọn vấn đề bạn cần được hỗ trợ">
              Chọn vấn đề bạn cần được hỗ trợ
            </option>
            <option value="Tài khoản">Tài khoản</option>
            <option value="Quản lý doanh thu">Quản lý doanh thu</option>
            <option value="Vấn đề bản quyền">Vấn đề bản quyền</option>
            <option value="Khác">Khác</option>
          </select>

          <div
            style={{
              width: "154px",
              height: "24px",
              top: "248px",
              left: "32px",
              gap: "0px",
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
            >
              Nội dung
            </span>
          </div>
          <textarea
            defaultValue={"Nhập nội dung"}
            style={{
              width: "700px",
              height: "300px",
              top: "280px",
              left: "32px",
              padding: "11px 24px 13px 16px",
              gap: "0px",
              borderRadius: "8px ",
              position: "absolute",
              background: "#2B2B3F",
              color: "white",
            }}
          />
        </div>
        <div
          style={{
            width: "168px",
            height: "48px",
            top: "976px",
            left: "950px",
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
              Gửi
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Feedback;
