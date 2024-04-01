import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/khobangi.css";

interface DSNhac {
  id: number;
  hinh: string;
  title: string;
  casi: string;
  sangtac: string;
  sohopdong: string;
  isChecked: boolean;
}
const PheDuyetBG: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm
    console.log("Search term:", searchTerm);
  };
  const [danhsachs, setdanhsachs] = useState<DSNhac[]>([
    {
      id: 1,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa.png?alt=media&token=93a11fd5-06ab-47b2-ba99-4ec74f1877f8",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 2,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa1.png?alt=media&token=0274095c-873a-436f-b179-f4ae77153150",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 3,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa2.png?alt=media&token=9b63b01a-a9d5-4314-a59c-ca0887910211",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 4,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa3.png?alt=media&token=cb15324d-9d32-4be7-b620-05592e6fbdf3",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 5,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa4.png?alt=media&token=fe22ce03-f4fb-4880-8d2c-d6e8c665294a",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 6,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa5.png?alt=media&token=87b32890-5ab2-4259-b137-4a4d7c2a2cc8",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 7,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa6.png?alt=media&token=d83fb0b4-221a-48aa-84df-3197104c8bdc",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 8,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa7.png?alt=media&token=eac95274-1b2c-4413-9d0a-ffefa69ab958",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
  ]);
  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const updatedDanhsach = danhsachs.map((danhsach) => ({
      ...danhsach,
      isChecked: checked,
    }));
    setdanhsachs(updatedDanhsach);
  };
  const handleCheckSingle = (id: number) => {
    const updatedDanhsach = danhsachs.map((danhsach) => {
      if (danhsach.id === id) {
        return {
          ...danhsach,
          isChecked: !danhsach.isChecked,
        };
      }
      return danhsach;
    });
    setdanhsachs(updatedDanhsach);
  };

  return (
    <>
      <div className="thedau">
        <Navbar />
        <div className="ttcb4">Kho bản ghi</div>
        <form onSubmit={handleFormSubmit} className="timkiem4">
          <input
            type="text"
            placeholder="Tên bản ghi, ca sĩ,..."
            value={searchTerm}
            onChange={handleInputChange}
            className="input4"
          />
          <a href="/#" type="submit" style={{ background: "#2B2B3F" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Search.png?alt=media&token=fa67623b-8b52-48ae-8e06-11debd3f5d01"
              alt=""
            />
          </a>
        </form>
        {/* danh sach dropdown */}
        <div
          className="textt4"
          style={{
            width: "68px",
            top: "238px",
            left: "229px",
          }}
        >
          Thể loại:
        </div>
        <select
          className="select4"
          style={{
            width: "131px",
            top: "230px",
            left: "313px",
          }}
        >
          <option value="all">Tất cả</option>
          <option value="performer">Pop</option>
          <option value="manufacturer">EDM</option>
          <option value="manufacturer">Ballad</option>
        </select>
        <div
          className="textt4"
          style={{
            width: "91px",
            top: "238px",
            left: "508px",
          }}
        >
          Định dạng:
        </div>
        <select
          className="select4"
          style={{
            width: "131px",
            top: "230px",
            left: "615px",
          }}
        >
          <option value="all">Tất cả</option>
          <option value="performer">Âm thanh</option>
          <option value="manufacturer">Video</option>
        </select>
        <div
          style={{
            width: "139px",
            height: "24px",
            top: "240px",
            left: "770px",
            gap: "4px",
            position: "absolute",
            color: "white",
          }}
        >
          <div
            style={{
              border: "1px solid #347AFF",
              width: 24,
              height: 24,
            }}
          >
            <input
              type="checkbox"
              onChange={handleCheckAll}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <span
              style={{ marginBottom: 4, position: "absolute", marginLeft: 2 }}
            >
              Chọn tất cả
            </span>
          </div>
        </div>
        {/* danh sach dropdown */}

        {/* icon menu */}
        <div
          className="textt4"
          style={{
            top: "238px",
            left: "1690px",
          }}
        >
          <a href="/pheduyetbg1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/List.png?alt=media&token=e4bfde7d-d6a7-4b37-b1c9-002c643fdc4d"
              className="icon4"
              alt=""
            />
          </a>
        </div>

        <div
          className="textt4"
          style={{
            top: "238px",
            left: "1738px",
          }}
        >
          <a href="/pheduyetbg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tab.png?alt=media&token=19348d31-a86d-43ca-9283-965e581eee9f"
              className="icon4"
              alt=""
            />
          </a>
        </div>
        {/* icon menu */}

        <div className="khungt" style={{ height: 224 }}>
          <div className="khugne">
            <a href="/suatt" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/ok.png?alt=media&token=a9394f4f-75c0-457d-a833-2bc357596b74"
                alt="sua"
                className="icon1"
              />
              <div className="texttt">Phê duyệt</div>
            </a>
          </div>
          <div className="khugne">
            <a
              href="/#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huy2.png?alt=media&token=d683aa76-b6d8-4f7e-aa42-d037a28ba850"
                alt="sua"
                className="icon1"
              />
              <div className="texttt">Từ chối</div>
            </a>
          </div>
        </div>
        <div
          style={{
            width: 1540,
            height: "fit-content",
            position: "absolute",
            top: 294,
            left: 229,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <div
            className="row"
            style={{
              justifyContent: "space-between",
            }}
          >
            {danhsachs.map((danhsach) => (
              <div className="formtong4 col" key={danhsach.id}>
                <img src={danhsach.hinh} alt="" className="hinhanh4" />
                <div style={{ width: 342, height: 156 }}>
                  <div className="text4">
                    <div className="tieude4">{danhsach.title}</div>
                    <div className="noidung4">{danhsach.casi}</div>
                    <div className="noidung4">{danhsach.sangtac}</div>
                    <div className="noidung4">{danhsach.sohopdong}</div>
                    <div className="khungngoai4">
                      <div className="khungtrong4">
                        <div className="theloai4">Thể loại</div>
                        <div className="loai4">Pop</div>
                      </div>
                      <div className="khungtrong4" style={{ width: 68 }}>
                        <div className="theloai4" style={{ width: 45 }}>
                          Định dạng
                        </div>
                        <div className="loai4">Audio</div>
                      </div>
                      <div className="khungtrong4" style={{ width: 68 }}>
                        <div className="theloai4" style={{ width: 45 }}>
                          Thời lượng
                        </div>
                        <div className="loai4">03:00</div>
                      </div>
                    </div>
                    <div
                      className="sua4"
                      style={{
                        width: "24px",
                        height: "24px",
                        border: "1px solid #347AFF",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={danhsach.isChecked}
                        onChange={() => handleCheckSingle(danhsach.id)}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="khungPT4">
              <div className="ht4">
                Hiển thị
                <div style={{ display: "inline-flex" }}>
                  <div className="khungso4">12</div>
                </div>
                hàng trong mỗi trang
              </div>

              <div
                style={{
                  width: "203px",
                  height: "26px",
                  position: "absolute",
                  right: 50,
                  color: "#F5F5FF",
                }}
                className="mao"
              >
                <a href="/#" className="sott4">
                  &lt;
                </a>
                <a href="/#" className="sott4">
                  1
                </a>
                <a href="/#" className="sott44">
                  2
                </a>
                <a href="/#" className="sott4">
                  3
                </a>
                <a href="/#" className="sott4">
                  ...
                </a>
                <a href="/#" className="sott4">
                  100
                </a>
                <a href="/#" className="sott4">
                  &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* showModal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              width: "720px",
              height: "432px",
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "#3E3E5B",
                width: "720px",
                height: "432px",
                borderRadius: "16px",
              }}
            >
              <div className="modal-body">
                <h5
                  className="modal-title m-0"
                  id="exampleModalLabel"
                  style={{
                    width: "100%",
                    height: "24px",
                    top: "32px",
                    left: "159px",
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    letterSpacing: "-0.002em",
                    textAlign: "center",
                    color: "#F5F5FF",
                  }}
                >
                  Lý do từ chối phê duyệt
                </h5>

                <textarea
                  placeholder="Cho chúng tôi biết lý do bạn muốn từ chối phê duyệt bản ghi này..."
                  style={{
                    position: "absolute",
                    top: "96px",
                    left: "40px",
                    width: "640px",
                    height: "208px",
                    padding: "12px 24px 12px 16px",
                    borderRadius: "8px",
                    border: " 1px solid #727288",
                    backgroundColor: "#2B2B3F",
                    color: "white",
                  }}
                />

                <div>
                  <div
                    style={{
                      width: "368px",
                      height: "48px",
                      top: "344px",
                      left: "176px",
                      gap: "32px",
                      position: "absolute",
                    }}
                  >
                    <button
                      className="butoon"
                      style={{
                        color: "#FF7506",
                        backgroundColor: "transparent",
                      }}
                      data-bs-dismiss="modal"
                    >
                      Hủy
                    </button>
                    <button
                      className="butoon"
                      style={{
                        color: "white",
                        background: "#FF7506",
                        marginLeft: "32px",
                      }}
                      data-bs-dismiss="modal"
                    >
                      Từ chối
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PheDuyetBG;
