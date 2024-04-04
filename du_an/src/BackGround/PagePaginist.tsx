interface TypeProps {
  anhto?: number;
}
const PagePaginist = (props: TypeProps) => {
  return (
    <>
      <div style={{ height: 30 }}></div>
      <div
        style={{
          width: "fit-content",
          maxWidth: "1485px",
          display: "flex",
          gap: "8px",
          marginLeft: 24,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            width: "max-content",
            maxWidth: "279.82px",
            minHeight: "32px",
            color: "#F5F5FF",
          }}
        >
          Hiển thị
          <div style={{ display: "inline-flex", position: "relative" }}>
            <div
              style={{
                width: "48.37px",
                height: "32px",
                borderRadius: "4px",
                margin: "0px 8px 0px 8px",
                border: "1px solid #FF7506",
                background: "#2B2B3F",
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "-0.002em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {props.anhto == null ? 13 : 8}
            </div>
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
            marginBottom: 10,
          }}
          className="pagination"
        >
          <a href="/#" className="page-link1">
            &lt;
          </a>
          <a href="/#" className="page-link1 ">
            1
          </a>
          <a href="/#" className="page-link1 active">
            2
          </a>
          <a href="/#" className="page-link1">
            3
          </a>
          <a href="/#" className="page-link1">
            ...
          </a>
          <a href="/#" className="page-link1">
            100
          </a>
          <a href="/#" className="page-link1">
            &gt;
          </a>
        </div>
      </div>
    </>
  );
};

export default PagePaginist;
