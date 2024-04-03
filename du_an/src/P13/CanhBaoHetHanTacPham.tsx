import "../p3/style.css";
import SideBar from "../BackGround/SideBar";

const CanhBaoHetHanTacPham = () => {
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
            Cài đặt
          </a>
          <span style={{ color: "#F5F5FF" }} className="separator">
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Quản lý loại hợp đồng
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
            Loại hợp đồng
          </p>
        </div>

        <div
          style={{
            width: 868,
            height: 168,
            position: "absolute",
            top: 186,
            left: 229,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 820,
              height: 136,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "99px" }}>STT</th>
                <th style={{ width: "360px" }}>Loại hợp đồng</th>
                <th style={{ width: "360px" }}>
                  Doanh thu VCPCM/hợp đồng (Đơn vị: %){" "}
                </th>
              </tr>
            </thead>
            <tbody
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.015em",
                textAlign: "left",
              }}
            >
              <tr style={{ height: 47 }}>
                <td>1</td>
                <td>Trọn gói</td>
                <td>20%</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>2</td>
                <td>Giá trị bài hát/ lượt phát</td>
                <td>20%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            width: "649px",
            height: "168px",
            top: "186px",
            left: "1121px",
            gap: "0",
            borderRadius: "16px",
            position: "absolute",
            background: "#2F2F41B2",
          }}
        >
          <div
            style={{
              width: "473px",
              height: "24px",
              top: "24px",
              left: "24px",
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
            Cảnh báo hết hạn khai thác tác phẩm
          </div>
          <div
            style={{
              width: "417px",
              height: "24px",
              top: "88px",
              left: "24px",
              gap: "0",
              position: "absolute",
              fontWeight: "700",
              fontFamily: "Montserrat",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Hợp đồng được cảnh báo trước thời gian hết hạn:
          </div>

          <div
            style={{
              width: "417px",
              height: "24px",
              top: "88px",
              left: "457px",
              gap: "0",
              position: "absolute",
              fontWeight: "700",
              fontFamily: "Montserrat",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            365 ngày
          </div>
        </div>
        <div
          className="khung2"
          style={{
            height: 260,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            left: "1810px",
          }}
        >
          <div className="khung1">
            <a href="/ChinhSuaTTNguoiDung" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/chinhsualoaihopdong.png?alt=media&token=2d72ee98-7b43-4a9f-b931-6ada87d69e7b"
                alt="chinhsualoaihopdong"
              />
              <div className="textt">
                Chỉnh sửa <br /> loại hợp <br /> đồng
              </div>
            </a>
          </div>

          <div className="khung1">
            <a href="/ChinhSuaTTNguoiDung" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/chinhsuacanhbaohethan.png?alt=media&token=03bc7d15-5643-4203-84bf-88a117b6235d"
                alt="chinhsuacanhbaohethan"
              />
              <div className="textt">
                Chỉnh sửa <br /> cảnh báo <br /> hết hạn
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CanhBaoHetHanTacPham;
