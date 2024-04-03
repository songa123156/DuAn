import "../p3/style2.css";
import SideBar from "../BackGround/SideBar";

const ChiTietLichPhat = () => {
  return (
    <>
      <SideBar value={2} />
      <div>
        <div
          style={{
            top: 86,
            left: 78,
            position: "absolute",
          }}
        >
          <a
            className="parent-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Lập lịch phát
          </a>

          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Chi Tiết
          </a>
        </div>
        <div
          style={{
            width: 800,
            height: 48,
            top: 114,
            left: 78,
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
            Lịch phát số 1
          </p>
        </div>

        <div
          style={{
            width: "438px",
            height: "24px",
            top: "186px",
            left: "80px",
            fontFamily: "Montserrat",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFF9F4",
            position: "absolute",
          }}
        >
          Danh sách Playlist
        </div>

        <div
          style={{
            width: 1690,
            height: 806,
            position: "absolute",
            top: 234,
            left: 80,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table style={{ height: "fit-content" }}>
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48 }}>
                <th style={{ width: "110px" }}>STT</th>
                <th style={{ width: "164px" }}>Tên Playlist</th>
                <th style={{ width: "206px" }}>Ngày phát Playlist</th>
                <th style={{ width: "216px" }}>Bắt đầu - Kết thúc</th>
                <th style={{ width: "197px" }}>Chu kỳ phát</th>
                <th style={{ width: "753px" }}>Thiết bị</th>
              </tr>
            </thead>
            <tbody style={{ color: "#FFFFFF" }}>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>1</td>
                <td style={{ width: "158px" }}>Top USUK 2021</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px" }}>
                  06:00:00 - 08:00:00 <br />
                  13:00:00 - 15:00:00
                </td>
                <td style={{ width: "182px" }}>Thứ 3 | Thứ 6</td>
                <td>
                  Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>2</td>
                <td style={{ width: "158px" }}>Love songs</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px" }}>06:00:00 - 08:00:00</td>
                <td style={{ width: "182px" }}>Thứ 5</td>
                <td>
                  Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5
                </td>
              </tr>{" "}
              <tr style={{ height: 47 }}>
                <td style={{ width: "99px" }}>3</td>
                <td style={{ width: "158px" }}>Loving You</td>
                <td style={{ width: "309px" }}>22/05/2021 - 30/05/2021</td>

                <td style={{ width: "182px" }}>14:00:00 - 16:00:00</td>
                <td style={{ width: "182px" }}>Thứ 7</td>
                <td>
                  Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="khung2" style={{ height: 110 }}>
          <div className="khung1">
            <a href="/ChinhSuaLichPhat" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=07d2553b-bef0-4a7d-a19e-ecf50f43bdaa"
                alt="sua"
              />
              <div className="textt">
                Chỉnh sửa <br /> lịch phát
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietLichPhat;
