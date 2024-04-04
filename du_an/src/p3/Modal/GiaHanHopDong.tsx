const GiaHanHopDong = () => {
  return (
    <>
      <div
        className="modal fade"
        id="giahanModal"
        tabIndex={-1}
        aria-labelledby="giahanModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{
            width: "908px",
            height: "623px",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#3E3E5B",
              width: "908px",
              height: "623px",
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
                Gia hạn uỷ quyền tác phẩm
              </h5>
              <div
                style={{
                  width: "fit-content",
                  maxWidth: "155px",
                  height: "fit-content",
                  maxHeight: "24px",
                  position: "absolute",
                  top: "96px",
                  left: "40px",
                  gap: "4px",
                  display: "flex",
                  flexDirection: "row",
                  color: "white",
                }}
              >
                Thời gian gia hạn <span style={{ color: "red" }}>*</span>
              </div>
              <div
                style={{
                  width: "157px",
                  height: "24px",
                  position: "absolute",
                  top: "136px",
                  left: "40px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "left",
                }}
              >
                Từ ngày: 02/08/2021
              </div>
              <div
                style={{
                  width: "245px",
                  height: "fit-content",
                  position: "absolute",
                  top: "177px",
                  left: "40px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "left",
                }}
              >
                <span style={{ marginRight: 8, marginTop: 10 }}>Đến ngày:</span>
                <input
                  type="date"
                  style={{
                    width: "155px",
                    height: "48px",
                    top: "167px",
                    left: "130px",
                    padding: "11px 16px 13px 16px",
                    borderRadius: "8px",
                    border: "1px solid #727288",
                    justifyContent: "space-between",
                    background: "#2B2B3F",
                    color: "#FFFFFF",
                  }}
                />
              </div>
              <div
                style={{
                  width: "383px",
                  height: "240px",
                  top: "96px",
                  left: "485px",
                  position: "absolute",
                  background: "transparent",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    gap: "4px",
                    color: "#FFFFFF",
                  }}
                >
                  Mức nhuận bút <span style={{ color: "red" }}>*</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    top: "36px",
                    gap: "8px",
                    color: "#FFFFFF",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      marginTop: 10,
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <span style={{ marginTop: 10 }}>Quyền tác giả</span>
                  <input
                    type="number"
                    defaultValue={0}
                    style={{
                      width: "64px",
                      height: "fit-content",
                      padding: "11px 5px 13px 16px",
                      borderRadius: "8px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                  <span style={{ marginTop: 10 }}> % </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    width: "168px",
                    height: "24px",
                    gap: "8px",
                    color: "#FFFFFF",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <span>Quyền liên quan:</span>
                </div>

                <div
                  style={{
                    width: "101px",
                    top: "183px",
                    position: "absolute",
                    left: -24,
                    border: "1px solid #727288",
                    opacity: "0.5",
                    transform: "rotate(-90deg)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    top: "132px",
                    position: "absolute",
                    left: 40,
                    width: "343px",
                    height: " 48px",
                    gap: "8px",
                    color: "#FFFFFF",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      marginTop: 10,
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <span style={{ marginTop: 10 }}>
                    Quyền của người biểu diễn
                  </span>
                  <input
                    type="number"
                    defaultValue={50}
                    style={{
                      width: "64px",
                      height: "fit-content",
                      padding: "11px 5px 13px 16px",
                      borderRadius: "8px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                  <span style={{ marginTop: 10 }}> % </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    top: "192px",
                    position: "absolute",
                    left: 40,
                    width: "319px",
                    height: "48px",
                    gap: "8px",
                    color: "#FFFFFF",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                  <span>
                    Quyền của nhà sản xuất <br /> (bản ghi/video)
                  </span>
                  <input
                    type="number"
                    defaultValue={50}
                    style={{
                      width: "64px",
                      height: "fit-content",
                      padding: "11px 5px 13px 16px",
                      borderRadius: "8px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                  <span style={{ marginTop: 10 }}> % </span>
                </div>
              </div>
              <div
                style={{
                  width: "119px",
                  height: "24px",
                  top: "387px",
                  left: "40px",
                  position: "absolute",
                  color: "white",
                }}
              >
                Đính kèm tệp:
              </div>
              <div
                style={{
                  width: "119px",
                  height: "24px",
                  top: "379px",
                  left: "171px",
                  position: "absolute",
                  color: "white",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
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
                      left: 0,
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
                      borderRadius: 6,
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
                  width: "208px",
                  height: "24px",
                  top: "435px",
                  left: "171px",
                  gap: "4px",
                  color: "white",
                  position: "absolute",
                }}
              >
                <i
                  style={{ marginRight: 8 }}
                  className="fa-solid fa-file-word"
                />
                hetthuongcannho.doc
                <br />
                <i
                  style={{ marginRight: 8, marginTop: 12 }}
                  className="fa-solid fa-file-word"
                ></i>
                hetthuongcannho.doc
              </div>
              <div>
                <div
                  style={{
                    width: "368px",
                    height: "48px",
                    top: "535px",
                    left: "270px",
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

export default GiaHanHopDong;
