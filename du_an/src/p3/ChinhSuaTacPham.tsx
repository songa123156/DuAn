import "./css/ChinhSuaTacPham.css";
import { useState } from "react";
import SideBar from "../BackGround/SideBar";
import PagePaginist from "../BackGround/PagePaginist";
import HuyLuuBtn from "../BackGround/HuyLuuBtn";
import TuChoiBanGhi from "./Modal/TuChoiBanGhi";

const ChinhSuaTacPham = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);
  const [checkbox9, setCheckbox9] = useState(false);
  const [checkbox10, setCheckbox10] = useState(false);
  const [checkbox11, setCheckbox11] = useState(false);
  const [checkbox12, setCheckbox12] = useState(false);

  const handleSelectAllChange = (event: any) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setCheckbox1(checked);
    setCheckbox2(checked);
    setCheckbox3(checked);
    setCheckbox4(checked);
    setCheckbox5(checked);
    setCheckbox6(checked);
    setCheckbox7(checked);
    setCheckbox8(checked);
    setCheckbox9(checked);
    setCheckbox10(checked);
    setCheckbox11(checked);
    setCheckbox12(checked);
  };
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
            Chi tiết hợp đồng
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Chỉnh sửa danh sách tác phẩm ủy quyền
          </a>
        </div>

        <div className="ChinhSua1">
          <p className="ChinhSua2">Hợp đồng uỷ quyền bài hát - BH123</p>
        </div>

        <div className="ChinhSua3">
          <input
            type="text"
            className="ChinhSua4"
            placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
          />
          <div className="ChinhSua5">
            <a href="/anhson">
              <i
                style={{ color: "white" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </a>
          </div>
        </div>

        {/* bảng */}
        <div className="ChinhSUa6">
          <table className="ChinhSua7">
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48 }}>
                <th style={{ width: "51px" }}>
                  {" "}
                  <input
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </th>
                <th style={{ width: "99px" }}>STT</th>
                <th style={{ width: "282px" }}>Tên bản ghi</th>
                <th style={{ width: "205px" }}>Mã ISRC</th>
                <th style={{ width: "247px" }}>Ca sĩ</th>
                <th style={{ width: "249px" }}>Tác giả</th>
                <th style={{ width: "231px" }}>Ngày tải</th>
                <th style={{ width: "157px" }}>Tình trạng</th>
                <th style={{ width: "114px" }}></th>
              </tr>
            </thead>
            <tbody className="ChinhSua8">
              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox1}
                    onChange={(event) => setCheckbox1(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>1</td>
                <td>
                  Gorgeous Wooden Bike <br /> Ballad{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  3:12
                </td>
                <td>VNA1423525</td>
                <td>Vương Anh Tú</td>
                <td>Vương Phong</td>
                <td>01/04/2021 15:53:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSUa10"></div>
                    Mới
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox2}
                    onChange={(event) => setCheckbox2(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>2</td>
                <td>
                  Small Concrete Fish <br /> Ballad{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  0:15
                </td>
                <td>VNA1423525</td>
                <td>Khác Hưng</td>
                <td>Đinh Nhân DVM</td>
                <td>12/03/2021 15:53:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSUa10"></div>
                    Mới
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox3}
                    onChange={(event) => setCheckbox3(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>3</td>
                <td>
                  Kings & Queens <br /> Ballad <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  3:12
                </td>
                <td>VNA1423637</td>
                <td>Châu Đăng Khoa</td>
                <td>Lê Loan</td>
                <td>14/03/2021 15:53:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSUa10"></div>
                    Mới
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox4}
                    onChange={(event) => setCheckbox4(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>4</td>
                <td>
                  Clap <br /> R&B <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  3:12
                </td>
                <td>VNA5247472</td>
                <td>Phan Mạnh Quỳnh</td>
                <td>Ms. Trần Hà</td>
                <td>01/03/2021 15:51:05</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSUa10"></div>
                    Mới
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox5}
                    onChange={(event) => setCheckbox5(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>5</td>
                <td>
                  Peaches <br /> Indie <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  3:17
                </td>
                <td>VNA6475884</td>
                <td>Karik</td>
                <td>Lý Cường</td>
                <td>01/02/2021 13:13:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSUa10"></div>
                    Mới
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox6}
                    onChange={(event) => setCheckbox6(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>6</td>
                <td>
                  Leave The Door Open <br /> Ballad{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  4:12
                </td>
                <td>VNA2537477</td>
                <td>Binz</td>
                <td>Lý Sơn</td>
                <td>01/01/2021 15:53:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSUa10"></div>
                    Mới
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox7}
                    onChange={(event) => setCheckbox7(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>7</td>
                <td>
                  Beautiful Girls <br /> R&B <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  3:45
                </td>
                <td>VNA6474758</td>
                <td>JustaTee</td>
                <td>Đặng Công Minh</td>
                <td>01/12/2020 15:53:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSua11"></div>
                    Đã phê duyệt
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox8}
                    onChange={(event) => setCheckbox8(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>8</td>
                <td>
                  Yummy <br /> Pop <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  3:56
                </td>
                <td>VNA2575758</td>
                <td>Đen Vâu</td>
                <td>Đoàn Lê DVM</td>
                <td>01/11/2020 15:53:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSua11"></div>
                    Đã phê duyệt
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox9}
                    onChange={(event) => setCheckbox9(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>9</td>
                <td>
                  Uptown Funk <br /> Pop <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  4:12
                </td>
                <td>VNA6536364</td>
                <td>RPT MCK</td>
                <td>Vũ Cát Tường</td>
                <td>16/10/2020 15:53:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSua11"></div>
                    Đã phê duyệt
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox10}
                    onChange={(event) => setCheckbox10(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>10</td>
                <td>
                  On The Ground
                  <br /> Ballad <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  3:56
                </td>
                <td>VNA3759869</td>
                <td>Chillies</td>
                <td>Nhã Lê</td>
                <td>30/09/2020 15:53:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSua11"></div>
                    Đã phê duyệt
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox11}
                    onChange={(event) => setCheckbox11(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>11</td>
                <td>
                  Say So
                  <br /> Electronic <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  3:12
                </td>
                <td>VNA2675859</td>
                <td>Cá Hồi Hoang</td>
                <td>Hồ Bùi</td>
                <td>20/09/2020 15:53:13</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSua11"></div>
                    Đã phê duyệt
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>
              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox12}
                    onChange={(event) => setCheckbox12(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>12</td>
                <td>
                  At My Worst <br /> Electronic{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span> Audio{" "}
                  <div className="ChinhSua9"></div>
                  <span style={{ marginRight: 5 }}></span>
                  3:12
                </td>
                <td>VNA3697084</td>
                <td>Suboi</td>
                <td>Lê Phong</td>
                <td>16/09/2020 17:13:57</td>
                <td style={{ width: "152px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="ChinhSua11"></div>
                    Đã phê duyệt
                  </div>
                </td>
                <td style={{ width: "182px" }}>
                  <a
                    style={{
                      display: "block",
                      color: "#FF7506",
                      textAlign: "center",
                    }}
                    href="/#"
                  >
                    Nghe
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <PagePaginist />
        </div>

        <HuyLuuBtn />

        <div
          style={{ height: 130, borderRadius: "16px 0px 0px 16px" }}
          className="khung2"
        >
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huy2.png?alt=media&token=d683aa76-b6d8-4f7e-aa42-d037a28ba850"
                alt="huy2"
              />
              <div className="textt">
                Từ chối <br /> bản ghi
              </div>
            </div>
          </div>
        </div>
        <TuChoiBanGhi />
      </div>
    </>
  );
};

export default ChinhSuaTacPham;
