import "../p3/style.css";
import SideBar from "../BackGround/SideBar";

const VaiTroNguoiDungTrenHeThong = () => {
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
            Phân quyền người dùng
          </a>
        </div>

        <div
          style={{
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
            Vai trò người dùng trên hệ thống
          </p>
        </div>

        <div
          style={{
            width: "fit-content",
            height: "fit-content",
            position: "absolute",
            top: 186,
            marginTop: 10,
            left: 229,
            borderRadius: 24,
            border: "1px solid #B65100",
            display: "flex",
          }}
        >
          <div
            style={{
              width: 211,
              height: 40,
              borderRadius: 24,
              gap: 10,
              backgroundColor: "#B65100",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "-0.002em",
                textAlign: "center",
                marginTop: 12,
              }}
            >
              Hợp đồng ủy quyền
            </p>
          </div>
          <div
            style={{
              width: 207,
              height: 40,
              borderRadius: 24,
              gap: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "-0.002em",
                textAlign: "center",
                marginTop: 12,
              }}
            >
              Hợp đồng khai thác
            </p>
          </div>
        </div>

        <div
          style={{
            width: "433px",
            height: "48px",
            position: "absolute",
            top: "186px",
            left: "1337px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#2B2B3F",
          }}
        >
          <input
            type="text"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              border: "none",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "-0.002em",
              outline: "none",
              paddingLeft: 24,
              paddingRight: 67,
            }}
            placeholder="Nhập tên người dùng"
          />
          <div
            style={{
              marginLeft: "12px",
              width: "24px",
              height: "24px",
              marginTop: 11,
              marginRight: 10,
            }}
          >
            <a href="/anhson">
              <i
                style={{ color: "white" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </a>
          </div>
        </div>

        {/* bảng */}
        <div
          style={{
            width: 1541,
            position: "absolute",
            top: 258,
            left: 229,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 1541,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "99px" }}>STT</th>
                <th style={{ width: "236px" }}>Tên nhóm người dùng</th>
                <th style={{ width: "209px" }}>Số lượng người dùng</th>
                <th style={{ width: "173px" }}>Vai trò</th>
                <th style={{ width: "534px" }}>Mô tả</th>
                <th style={{ width: "116px" }}></th>
                <th style={{ width: "126px" }}></th>
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
                <td>Super Admin</td>
                <td>1</td>
                <td>System Admin</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <br /> incididunt ut labore et dolore magna
                  aliqua
                </td>

                <td>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>2</td>
                <td>Group Admin</td>
                <td>8</td>
                <td>System Admin</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <br /> incididunt ut labore et dolore magna
                  aliqua
                </td>

                <td>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>3</td>
                <td>Sub - user</td>
                <td>30</td>
                <td>System Admin</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <br /> incididunt ut labore et dolore magna
                  aliqua
                </td>

                <td>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>4</td>
                <td>Content manager</td>
                <td>5</td>
                <td>Lisences</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <br /> incididunt ut labore et dolore magna
                  aliqua
                </td>

                <td>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>5</td>
                <td>QC</td>
                <td>5</td>
                <td>Lisences</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <br /> incididunt ut labore et dolore magna
                  aliqua
                </td>

                <td>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Cập nhật
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>6</td>
                <td>Kế toán</td>
                <td>1</td>
                <td>Lisences</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <br /> incididunt ut labore et dolore magna
                  aliqua
                </td>

                <td>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Cập nhật
                  </a>
                </td>
                <td>
                  <a
                    style={{
                      display: "block",
                      color: "#FF4747",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Xóa
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="khung2" style={{ height: 110 }}>
          <div className="khung1">
            <a href="/ThemHopDongMoi" style={{ textDecoration: "none" }}>
              <img
                style={{ height: 52, width: 52, padding: 0 }}
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/haiconnguoi.png?alt=media&token=dcae2c2e-0645-416f-8331-56b897050d0c"
                alt="haiconnguoi"
              />
              <div className="textt">Thêm vai trò</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaiTroNguoiDungTrenHeThong;
