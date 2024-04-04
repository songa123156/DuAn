const HuyHopDong = () => {
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
                Hủy hợp đồng uỷ quyền
              </h5>
              <textarea
                placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
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
                    Quay lại
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
                    Hủy hợp đồng
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

export default HuyHopDong;
