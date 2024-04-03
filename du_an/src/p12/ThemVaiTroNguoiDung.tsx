import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import SideBar from "../BackGround/SideBar";

const ThemVaiTroNguoiDung = () => {
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
            Cài đặt
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Phân quyền người dùng
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Cập nhật
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
            Cập nhật vai trò người dùng
          </p>
        </div>
      </div>

      <div
        style={{
          width: "557px",
          height: "80px",
          top: "214px",
          left: "80px",
          gap: "8px",
          position: "absolute",
          color: "white",
        }}
      >
        <div>Tên vai trò:</div>
        <input
          style={{
            color: "white",
            width: "100%",
            height: "48px",
            padding: "11px 24px 13px 16px",
            gap: "0",
            borderRadius: "8px",
            border: "1px solid #727288",
            background: "#2B2B3F",
          }}
        />
      </div>

      <div
        style={{
          width: "557px",
          height: "152px",
          top: "326px",
          left: "80px",
          gap: "8px",
          position: "absolute",
          color: "white",
        }}
      >
        <div>Mô tả:</div>
        <textarea
          style={{
            color: "white",
            width: "100%",
            height: "120px",
            padding: "11px 24px 13px 16px",
            gap: "0",
            borderRadius: "8px",
            border: "1px solid #727288",
            background: "#2B2B3F",
          }}
        />
      </div>

      <div
        style={{
          width: "198px",
          height: "24px",
          top: "208px",
          left: "817px",
          position: "absolute",
          gap: "0",
          fontWeight: "700",
          fontFamily: "Montserrat",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "-0.002em",
          textAlign: "left",
          color: "#FFFFFF",
        }}
      >
        Phân quyền chức năng
      </div>

      <div
        style={{
          width: "1063px",
          height: "600px",
          top: "246px",
          left: "817px",
          position: "absolute",
          padding: "16px 24px",
          gap: "16px",
          borderRadius: "16px 0 0 0",
          background: "#2F2F41B2",
        }}
      >
        <table
          style={{
            width: 1015,
            height: 558,
            margin: "16px 24px 104px 24px",
          }}
        >
          <thead style={{ color: "#FFAC69" }}>
            <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
              <th style={{ width: "225px" }}>Tên nhóm chức năng</th>
              <th style={{ width: "63px" }}>
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </th>
              <th style={{ width: "310px" }}>Chức năng</th>
              <th style={{ width: "417px" }}>Mã chức năng</th>
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
            <tr style={{ height: "43px" }}>
              <td rowSpan={5}>Quản lý người dùng</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Phân quyền người dùng</td>
              <td>nguoidung_phanquyen</td>
            </tr>

            <tr style={{ height: "43px" }}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Tạo người dùng</td>
              <td>nguoidung_tao</td>
            </tr>

            <tr style={{ height: 43 }}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Cập nhật thông tin người dùng</td>
              <td>nguoidung_capnhat</td>
            </tr>

            <tr style={{ height: 43 }}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Xóa người dùng</td>
              <td>nguoidung_xoa</td>
            </tr>

            <tr style={{ height: 43 }}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Xem thông tin chi tiết</td>
              <td>nguoidung_xemchitiet</td>
            </tr>

            <tr style={{ height: 43 }}>
              <td rowSpan={5}>Quản lý thư viện</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Danh sách Media</td>
              <td>nguoidung_xemdanhsach</td>
            </tr>

            <tr style={{ height: 43 }}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Tải lên Media</td>
              <td>nguoidung_tailentep</td>
            </tr>

            <tr style={{ height: 43 }}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Chỉnh sửa thông tin Media</td>
              <td>nguoidung_chinhsua</td>
            </tr>

            <tr style={{ height: 43 }}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Xóa Media</td>
              <td>nguoidung_xoa</td>
            </tr>

            <tr style={{ height: 43 }}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </td>
              <td>Phê duyệt Media</td>
              <td>nguoidung_pheduyet</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          width: "352px",
          height: "48px",
          top: "976px",
          left: "780px",
          gap: "32px",
          position: "absolute",
        }}
      >
        <button
          className="butoon"
          style={{
            color: "#FF7506",
            background: "transparent",
          }}
        >
          Hủy
        </button>
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
      </div>
    </>
  );
};

export default ThemVaiTroNguoiDung;
