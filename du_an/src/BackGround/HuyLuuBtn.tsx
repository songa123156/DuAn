const HuyLuuBtn = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "1084px",
          left: "776px",
          width: "368px",
          height: "48px",
          gap: "32px",
        }}
      >
        <button
          style={{
            width: "168px",
            height: "48px",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "1px solid #FF7506",
            color: "#FF7506",
            background: "transparent",
            gap: "8px",
          }}
        >
          Hủy
        </button>

        <button
          style={{
            width: "168px",
            height: "48px",
            padding: "12px 24px",
            borderRadius: "8px",
            gap: "8px",
            background: "#FF7506",
            color: "white",
            border: 0,
            marginLeft: 32,
          }}
        >
          Lưu
        </button>
      </div>
    </>
  );
};

export default HuyLuuBtn;
