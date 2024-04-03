import "../p3/style.css";
import SideBar from "../BackGround/SideBar";

const DoiSoatTheoThang = () => {
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
            Trang chủ
          </a>
          <span style={{ color: "#F5F5FF" }} className="separator">
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Cài đặt hệ thống
          </a>
          <span style={{ color: "#F5F5FF" }} className="separator">
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Thông tin tác phẩm
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
            Cài đặt hệ thống
          </p>
        </div>

        <div
          style={{
            width: "1611px",
            height: "750px",
            top: "186px",
            left: "229px",
            gap: "0",
            borderRadius: "16px ",
            position: "absolute",
            background: "#2F2F41B2",
          }}
        >
          <div
            style={{
              width: "278px",
              height: "24px",
              top: "40px",
              left: "40px",
              gap: "0",
              position: "absolute",
              fontWeight: "700",
              fontFamily: "Montserrat",
              fontSize: "24px",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#E5E5E5",
            }}
          >
            Cài đặt chu kỳ đối soát
          </div>

          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              top: "118px",
              left: "40px",
              gap: "8px",
              position: "absolute",
              color: "white",
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Đối soát theo quý
              </label>
            </div>
          </div>

          <div
            style={{
              width: "48px",
              height: "24px",
              top: "162px",
              left: "72px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            Quý 1:
          </div>

          <div
            style={{
              width: "48px",
              height: "24px",
              top: "202px",
              left: "72px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            Quý 2:
          </div>

          <div
            style={{
              width: "48px",
              height: "24px",
              top: "242px",
              left: "72px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            Quý 3:
          </div>

          <div
            style={{
              width: "48px",
              height: "24px",
              top: "282px",
              left: "72px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            Quý 4:
          </div>

          <div
            style={{
              width: "101px",
              height: "24px",
              top: "162px",
              left: "149px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            01/06 - 30/07
          </div>

          <div
            style={{
              width: "101px",
              height: "24px",
              top: "202px",
              left: "149px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            01/08 - 30/09
          </div>

          <div
            style={{
              width: "101px",
              height: "24px",
              top: "242px",
              left: "149px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            01/10 - 30/11
          </div>

          <div
            style={{
              width: "101px",
              height: "24px",
              top: "282px",
              left: "149px",
              gap: "0",
              position: "absolute",
              color: "white",
            }}
          >
            01/12 - 31/12
          </div>

          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              top: "338px",
              left: "40px",
              gap: "8px",
              position: "absolute",
              color: "white",
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Đối soát theo tháng
              </label>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "168px",
            height: "48px",
            top: "976px",
            left: "876px",
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
              Lưu
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default DoiSoatTheoThang;
