import "./style2.css";
import { useState } from "react";
import SideBar from "../BackGround/SideBar";
import "./css/ChinhSuaThongTin.css";
import HuyLuuBtn from "../BackGround/HuyLuuBtn";

const ChinhSuaThongTin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <SideBar value={2} />
      <div>
        <div className="thongtin1">
          <a
            className="parent-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Quản lý
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Quản lý hợp đồng
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
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Chỉnh sửa thông tin
          </a>
        </div>
        <div className="thongtin2">
          <p className="thongtin3">Hợp đồng uỷ quyền bài hát - BH123</p>
        </div>
      </div>

      <div className="thongtin4">
        <div className="textCT">Số hợp đồng:</div>
        <div className="textCT"> Tên hợp đồng:</div>
        <div className="textCT"> Ngày hiệu lực:</div>
        <div className="textCT"> Ngày hết hạn:</div>
        <div className="textCT"> Tình trạng:</div>
      </div>

      <div className="thongtin5">
        <input className="inputtext thongtin6" defaultValue={1421566747} />
        <input
          className="inputtext thongtin6"
          defaultValue="Hợp đồng uỷ quyền tác phẩm âm nhạc"
        />
        <input
          className="inputtext thongtin6"
          type="date"
          defaultValue="01/05/2021"
          style={{
            width: "155px",
          }}
        />
        <br />
        <input
          className="inputtext thongtin6"
          type="date"
          defaultValue="01/12/2021"
          style={{
            width: "155px",
          }}
        />
        <select
          className="inputtext thongtin6"
          style={{
            color: "#878890",
          }}
          name=""
          id=""
        >
          <option value="1">Đang hiệu lực</option>
        </select>
      </div>

      <div className="thongtin7">Đính kèm tệp:</div>

      <div className="thongtin8">
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: 16,
          }}
        >
          <input type="file" className="thongtin9" />
          <div className="thongtin10">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tailen.png?alt=media&token=a56f0719-52ef-40a4-ab89-20eeaa2489a6"
              alt="tailen"
              className="thongtin11"
            />
            <span style={{ marginTop: 4, position: "absolute", marginLeft: 3 }}>
              Tải lên
            </span>
          </div>
        </div>
        <br />
        <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
        hetthuongcannho.doc
        <br />
        <i
          style={{ marginRight: 8, marginTop: 12 }}
          className="fa-solid fa-file-word"
        ></i>
        hetthuongcannho.doc
      </div>

      <div className="thongtin12">
        <span style={{ color: "#FFAC69" }}>
          <i style={{ marginRight: 8 }} className="fa-solid fa-circle-info"></i>
          Mức nhuận bút
        </span>
        <br />
        Quyền tác giả:
        <span style={{ left: 240, position: "absolute" }}>0%</span>
        <br />
        Quyền liên quan: <br />
        Quyền của người biểu diễn:
        <span style={{ left: 240, position: "absolute" }}>50%</span>
        <br />
        Quyền của nhà sản xuất:
        <span style={{ left: 240, position: "absolute" }}>50%</span>
        <br />
        (Bản ghi/video)
      </div>

      <hr className="thongtin13" />

      <div className="thongtin14">Thông tin pháp nhân uỷ quyền</div>

      <div className="thongtin15">
        <div style={{ marginBottom: 36 }}>Pháp nhân ủy quyền:</div>
        <div style={{ marginBottom: 40 }}>
          Tên người uỷ quyền:
          <span className="thongtin16">*</span>
        </div>
        <div style={{ marginBottom: 36 }}>
          Ngày sinh:
          <span className="thongtin16">*</span>
        </div>
        <div style={{ marginBottom: 36 }}>
          Giới tính:
          <span className="thongtin16">*</span>
        </div>
        <div style={{ marginBottom: 40 }}>
          Quốc tịch:
          <span className="thongtin16">*</span>
        </div>
        <div style={{ marginBottom: 36 }}>
          Số điện thoại: <span className="thongtin16">*</span>
        </div>
        <div className="thongtin17">
          <span className="thongtin16">*</span>
          là những trường thông tin bắt buộc
        </div>
      </div>

      <div className="thongtin18">
        <div style={{ marginBottom: 24 }}>
          <div className="thongtin19">
            {" "}
            <input type="radio" name="uyquyen" /> Cá nhân
          </div>
          <div className="thongtin20">
            <input type="radio" name="uyquyen" /> Tổ chức
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            type="text"
            defaultValue="Nguyễn Văn A"
            className="thongtin6"
            style={{
              width: "325px",

              color: "#FFFFFF",
            }}
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <input
            type="date"
            className="thongtin6"
            style={{
              width: "155px",

              color: "#FFFFFF",
              justifyContent: "space-between",
              paddingRight: "24px",
            }}
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <div className="thongtin21">
            {" "}
            <input type="radio" name="gioitinh" /> Nam
          </div>
          <div
            className="thongtin21"
            style={{
              left: "147px",
              position: "absolute",
            }}
          >
            <input type="radio" name="gioitinh" /> Nữ
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <select
            className="thongtin6"
            style={{
              width: "240px",
              color: "#FFFFFF",
              justifyContent: "space-between",
              paddingRight: "24px",
            }}
          >
            <option value="option1" selected>
              Việt Nam
            </option>
            <option value="option2">Hàn Quốc</option>
            <option value="option3">Nhật Bản</option>
          </select>
        </div>
        <div>
          <input
            type="tel"
            defaultValue="(+84) 345 678 901"
            className="thongtin6"
            style={{
              width: "240px",
              color: "#FFFFFF",
            }}
          />
        </div>
      </div>

      <div className="thongtin22">
        <div style={{ marginBottom: 40 }}>
          CMND/ CCCD: <span className="thongtin16">*</span>
        </div>
        <div style={{ marginBottom: 40 }}>
          Ngày cấp:
          <span className="thongtin16">*</span>
        </div>
        <div style={{ marginBottom: 39 }}>
          Nơi cấp:
          <span className="thongtin16">*</span>
        </div>
        <div style={{ marginBottom: 29 }}>Mã số thuế:</div>
        <div>Nơi cư trú:</div>
      </div>

      <div className="thongtin23">
        <div style={{ marginBottom: 16 }}>
          <input
            defaultValue={"123456789012"}
            className="thongtin6"
            style={{
              width: "154px",
              color: "#FFFFFF",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            type="date"
            defaultValue={"10/01/2011"}
            className="thongtin6"
            style={{
              width: "155px",
              color: "#FFFFFF",
              justifyContent: "space-between",
              paddingRight: "24px",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            defaultValue="Tp.HCM, Việt Nam"
            className="thongtin6"
            style={{
              width: "311px",
              color: "#FFFFFF",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            defaultValue={"92387489"}
            className="thongtin6"
            style={{
              width: "311px",
              color: "#FFFFFF",
            }}
          />
        </div>
        <div>
          <textarea
            defaultValue={
              "69/53, Nguyễn Gia Trí, phường 25, quận Bình Thạnh, thành phố Hồ Chí Minh"
            }
            className="thongtin6"
            style={{
              width: "311px",
              height: 96,
              color: "#FFFFFF",
            }}
          />
        </div>
      </div>

      <div className="thongtin24">
        <div style={{ marginBottom: 40 }}>Email:</div>
        <div style={{ marginBottom: 40 }}>Tên đăng nhập:</div>
        <div style={{ marginBottom: 39 }}>
          Mật khẩu:
          <span className="thongtin16">*</span>
        </div>
        <div style={{ marginBottom: 41 }}>Số tài khoản:</div>
        <div>Ngân hàng:</div>
      </div>

      <div className="thongtin25">
        <div style={{ marginBottom: 16 }}>
          <input
            defaultValue={"nguyenvana@gmail.com"}
            className="thongtin6"
            style={{
              width: "325px",
              color: "#FFFFFF",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            defaultValue={"nguyenvana@gmail.com"}
            className="thongtin6"
            style={{
              width: "325px",
              color: "#FFFFFF",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            type={showPassword ? "text" : "password"}
            defaultValue={"00000000"}
            className="thongtin6"
            style={{
              width: "325px",
              color: "#FFFFFF",
            }}
          />
          <div className="thongtin26" onClick={handleTogglePassword}>
            {showPassword ? (
              <i className="far fa-eye-slash"></i>
            ) : (
              <i className="far fa-eye"></i>
            )}
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            defaultValue={"1231123312211223"}
            className="thongtin6"
            style={{
              width: "325px",
              color: "#FFFFFF",
            }}
          />
        </div>
        <div>
          <input
            defaultValue={"ACB - Ngân hàng Á Châu"}
            className="thongtin6"
            style={{
              width: "325px",
              color: "#FFFFFF",
            }}
          />
        </div>
      </div>

      <HuyLuuBtn />
    </>
  );
};

export default ChinhSuaThongTin;
