const ThemBanGhiTrucTiep = () => {
  return (
    <>
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
            display: "flex",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#3E3E5B",
              width: "800px",
              height: "824px",
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
                Thêm bản ghi mới
              </h5>
              <div
                style={{
                  width: "720px",
                  height: "fit-content",
                  gap: "8px",
                  color: "white",
                  marginTop: 40,
                }}
              >
                Tên bản ghi: <span style={{ color: "red" }}>*</span>
                <div style={{ marginTop: 8 }}>
                  <input
                    style={{
                      width: "720px",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                      color: "#FFFFFF",
                    }}
                  />{" "}
                </div>
              </div>
              <div
                style={{
                  width: "720px",
                  height: "fit-content",
                  gap: "8px",
                  color: "white",
                  marginTop: 32,
                }}
              >
                Mã ISRC:
                <div style={{ marginTop: 8 }}>
                  <input
                    style={{
                      width: "720px",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                      color: "#FFFFFF",
                    }}
                  />{" "}
                </div>
              </div>
              <div
                style={{
                  width: "720px",
                  height: "fit-content",
                  gap: "8px",
                  color: "white",
                  marginTop: 32,
                }}
              >
                Tác giả: <span style={{ color: "red" }}>*</span>
                <div style={{ marginTop: 8 }}>
                  <input
                    style={{
                      width: "720px",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                      color: "#FFFFFF",
                    }}
                  />{" "}
                </div>
              </div>
              <div
                style={{
                  width: "720px",
                  height: "fit-content",
                  gap: "8px",
                  color: "white",
                  marginTop: 32,
                }}
              >
                Ca sĩ/Nhóm nhạc: <span style={{ color: "red" }}>*</span>
                <div style={{ marginTop: 8 }}>
                  <input
                    style={{
                      width: "720px",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                      color: "#FFFFFF",
                    }}
                  />{" "}
                </div>
              </div>
              <div
                style={{
                  width: "347px",
                  height: "80px",
                  gap: "8px",
                  display: "inline-block",
                  color: "white",
                  marginTop: 32,
                }}
              >
                Thể loại: <span style={{ color: "red" }}>*</span>
                <div style={{ marginTop: 8 }}>
                  <select
                    style={{
                      opacity: 0.5,
                      width: "347px",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                      color: "#FFFFFF",
                    }}
                    name=""
                    id=""
                  >
                    <option value="" selected>
                      Chọn một thể loại
                    </option>
                    <option value="">Rap</option>
                    <option value="">Ballad</option>
                    <option value="">Rock n Roll</option>
                    <option value="">R&B</option>
                  </select>
                </div>
              </div>
              <div
                style={{
                  width: "347px",
                  height: "80px",
                  gap: "8px",
                  display: "inline-block",
                  color: "white",
                  marginLeft: 26,
                  marginTop: 32,
                }}
              >
                Nhà sản xuất: <span style={{ color: "red" }}>*</span>
                <div style={{ marginTop: 8 }}>
                  <input
                    style={{
                      width: "347px",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                      color: "#FFFFFF",
                    }}
                  />{" "}
                </div>
              </div>
              <div
                style={{
                  width: "681px",
                  height: "40px",
                  gap: "8px",
                  color: "white",
                  marginTop: 40,
                }}
              >
                <div
                  style={{
                    display: "inline",
                    width: "296px",
                    height: "40px",
                    marginRight: 80,
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "absolute",
                      marginTop: 9,
                    }}
                  >
                    Đính kèm bản ghi: <span style={{ color: "red" }}>*</span>
                  </div>
                  <div style={{ marginLeft: 150 }}>
                    {" "}
                    <input
                      type="file"
                      style={{
                        width: "108px",
                        height: "40px",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: "1px solid #FFAC69",
                        gap: "4px",
                        position: "absolute",
                        top: 650,
                        left: 167,
                        opacity: 0,
                        zIndex: 1,
                      }}
                    />
                    <div
                      style={{
                        width: "108px",
                        height: "40px",
                        border: "1px solid #FFAC69",
                        color: " #FFAC69",
                      }}
                    >
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tailen.png?alt=media&token=a56f0719-52ef-40a4-ab89-20eeaa2489a6"
                        alt="tailen"
                        style={{
                          width: "24px",
                          height: "24px",
                          marginTop: 5,
                          marginLeft: 11,
                        }}
                      />
                      <span
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          marginLeft: 3,
                        }}
                      >
                        Tải lên
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: 650,
                    left: 416,
                    width: "296px",
                    height: "40px",
                    marginRight: 80,
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "absolute",
                      marginTop: 9,
                    }}
                  >
                    Đính kèm lời bài hát:{" "}
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div style={{ marginLeft: 165 }}>
                    {" "}
                    <input
                      type="file"
                      style={{
                        width: "108px",
                        height: "40px",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: "1px solid #FFAC69",
                        gap: "4px",
                        position: "absolute",
                        top: 0,
                        left: 165,
                        opacity: 0,
                        zIndex: 1,
                      }}
                    />
                    <div
                      style={{
                        width: "108px",
                        height: "40px",
                        border: "1px solid #FFAC69",
                        color: " #FFAC69",
                      }}
                    >
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tailen.png?alt=media&token=a56f0719-52ef-40a4-ab89-20eeaa2489a6"
                        alt="tailen"
                        style={{
                          width: "24px",
                          height: "24px",
                          marginTop: 5,
                          marginLeft: 11,
                        }}
                      />
                      <span
                        style={{
                          marginTop: 4,
                          position: "absolute",
                          marginLeft: 3,
                        }}
                      >
                        Tải lên
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    width: "368px",
                    height: "48px",
                    top: "736px",
                    left: "220px",
                    gap: "32px",
                    position: "absolute",
                  }}
                >
                  <button
                    className="butoon"
                    style={{
                      color: "#FF7506",
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
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemBanGhiTrucTiep;
