import React, { useState } from "react";
import "../cssne/khobangi.css";
import "../cssne/playlist.css";
import SideBar from "../BackGround/SideBar";

interface DSNhac {
  id: number;
  hinh: string;
  title: string;
}

const DSPlayList1: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm
    console.log("Search term:", searchTerm);
  };
  const [danhsachs] = useState<DSNhac[]>([
    {
      id: 1,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa.png?alt=media&token=93a11fd5-06ab-47b2-ba99-4ec74f1877f8",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 2,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa1.png?alt=media&token=0274095c-873a-436f-b179-f4ae77153150",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 3,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa2.png?alt=media&token=9b63b01a-a9d5-4314-a59c-ca0887910211",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 4,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa3.png?alt=media&token=cb15324d-9d32-4be7-b620-05592e6fbdf3",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 5,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa4.png?alt=media&token=fe22ce03-f4fb-4880-8d2c-d6e8c665294a",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 6,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa5.png?alt=media&token=87b32890-5ab2-4259-b137-4a4d7c2a2cc8",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 7,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa6.png?alt=media&token=d83fb0b4-221a-48aa-84df-3197104c8bdc",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 8,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa7.png?alt=media&token=eac95274-1b2c-4413-9d0a-ffefa69ab958",
      title: "Handcrafted Fresh Bacon Multy",
    },
  ]);

  return (
    <>
      <SideBar value={1} />
      <div className="ttcb4">Playlist</div>
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

      {/* icon menu */}
      <div
        className="textt4"
        style={{
          top: "174px",
          left: "1690px",
        }}
      >
        <a href="/dsplaylist">
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
          top: "174px",
          left: "1738px",
        }}
      >
        <a href="/dsplaylist1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tab.png?alt=media&token=19348d31-a86d-43ca-9283-965e581eee9f"
            className="icon4"
            alt=""
          />
        </a>
      </div>
      {/* icon menu */}

      <div className="khungt">
        <div className="khugne">
          <a href="/suatt" style={{ textDecoration: "none" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/ThemLichPhat.png?alt=media&token=e30480c7-b6c1-47bd-b462-e944d5f1e023"
              alt="sua"
              className="icon1"
            />
            <div className="texttt">
              Thêm <br /> Playlist
            </div>
          </a>
        </div>
      </div>

      <div
        style={{
          width: 1540,
          height: "fit-content",
          position: "absolute",
          top: 230,
          left: 229,
          padding: "16px 24px",
          borderRadius: 16,
          gap: 56,
        }}
      >
        <div
          className="row"
          style={{
            justifyContent: "space-between",
          }}
        >
          {danhsachs.map((item) => (
            <div className="formtong4 col" key={item.id}>
              <img src={item.hinh} alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4" style={{ marginBottom: 8 }}>
                    {item.title}{" "}
                  </div>
                  <div
                    style={{
                      width: 277,
                      gap: 4,
                      height: 26,
                      display: "flex",
                      fontSize: "12px",
                    }}
                  >
                    <div
                      style={{
                        padding: "4px 8px 4px 8px",
                        border: "1px solid #727288",
                        opacity: "70%",
                        font: "Montserrat",
                        width: "92px",
                        marginRight: 8,
                        fontWeight: 400,
                      }}
                    >
                      Chủ đề ví dụ
                    </div>
                    <div
                      style={{
                        padding: "4px 8px 4px 8px",
                        marginRight: 8,
                        border: "1px solid #727288",
                        opacity: "70%",
                        width: 41,
                      }}
                    >
                      Pop
                    </div>
                    <div
                      style={{
                        padding: "4px 8px 4px 8px",
                        marginRight: 8,
                        border: "1px solid #727288",
                        opacity: "70%",
                        width: 71,
                      }}
                    >
                      Trending
                    </div>
                    <div
                      style={{
                        padding: "4px 8px 4px 8px",
                        border: "1px solid #727288",
                        opacity: "70%",
                        width: 49,
                      }}
                    >
                      Good
                    </div>
                  </div>
                  <div>
                    Người tạo: <span style={{ opacity: "70%" }}>Admin</span>
                    <br />
                    ngày tạo: <span style={{ opacity: "70%" }}>12/12/2020</span>
                  </div>
                  <div className="khungngoai4">
                    <div className="khungtrong4" style={{ width: 69 }}>
                      <div
                        style={{
                          fontSize: 8,
                          opacity: "70%",
                          textAlign: "center",
                        }}
                      >
                        Số bản ghi
                      </div>
                      <div style={{ textAlign: "center" }}>20</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 69 }}>
                      <div
                        style={{
                          fontSize: 8,
                          opacity: "70%",
                          textAlign: "center",
                        }}
                      >
                        Thời lượng
                      </div>
                      <div style={{ textAlign: "center" }}>1:03:00</div>
                    </div>
                  </div>

                  <div className="sua4">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/info.png?alt=media&token=20b06152-868f-4243-b4f5-ec50f4816d29"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
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
                <div className="khungso4">8</div>
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
    </>
  );
};
export default DSPlayList1;
