import "../p3/style2.css";
import "../p3/ChinhSuaThongTin.css";
import SideBar from "../BackGround/SideBar";

const DoanhThuHopDongKhaiThac = () => {
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
            Doanh thu
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Báo cáo doanh thu
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Báo cáo chi tiết
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
            Doanh thu theo hợp đồng khai thác
          </p>
        </div>
      </div>

      <div
        style={{
          width: "433px",
          height: "48px",
          position: "absolute",
          top: "186px",
          left: "1337px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#2B2B3F",
        }}
      >
        <input
          type="text"
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            border: "none",
            color: "#FFFFFF",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "600",
            letterSpacing: "-0.002em",
            outline: "none",
            paddingLeft: 24,
            paddingRight: 67,
          }}
          placeholder="Nhập tên người dùng"
        />
        <div
          style={{
            marginLeft: "12px",
            width: "24px",
            height: "24px",
            marginTop: 11,
            marginRight: 10,
          }}
        >
          <a href="/anhson">
            <i
              style={{ color: "white" }}
              className="fa-solid fa-magnifying-glass"
            ></i>
          </a>
        </div>
      </div>

      <div
        style={{
          height: "48px",
          top: "186px",
          left: "80px",
          borderRadius: "8px",
          position: "absolute",
          color: "white",
        }}
      >
        Theo tháng:
        <select
          style={{
            width: "264px",
            height: "48px",
            marginLeft: 16,
            marginRight: 32,
            padding: "12px 12px 12px 16px",
            borderRadius: "8px",
            border: "1px solid #727288",
            justifyContent: "space-between",
            background: "#1E1E2E",
            color: "white",
          }}
          name=""
          id=""
        >
          <option value="Theo tháng" selected>
            Theo tháng
          </option>
          <option value="Theo quý">Theo quý</option>
        </select>
        <select
          style={{
            width: "264px",
            height: "48px",
            marginLeft: 16,
            marginRight: 32,
            padding: "12px 12px 12px 16px",
            borderRadius: "8px",
            border: "1px solid #727288",
            justifyContent: "space-between",
            background: "#1E1E2E",
            color: "white",
          }}
          name=""
          id=""
        >
          <option value=" Tháng 6/2021" selected>
            Tháng 6/2021
          </option>
          <option value="Tháng 7/2021">Tháng 7/2021</option>
        </select>
      </div>

      <div
        style={{
          width: 1690,
          position: "absolute",
          top: 258,
          left: 80,
          borderRadius: 16,
          gap: 56,
          backgroundColor: "#2F2F41B2",
        }}
      >
        <table
          style={{
            width: 1690,
            height: 724,
            margin: "16px 24px 104px 24px",
          }}
        >
          <thead style={{ color: "#FFAC69" }}>
            <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
              <th style={{ width: "80px" }}>STT</th>
              <th style={{ width: "168px" }}>Số hợp đồng</th>
              <th style={{ width: "192px" }}>Đơn vị khai thác</th>
              <th style={{ width: "201px" }}>Thời hạn hợp đồng</th>
              <th style={{ width: "146px" }}>Loại hợp đồng</th>
              <th style={{ width: "187px" }}>Số thiết bị đã đồng bộ</th>
              <th style={{ width: "146px" }}>Tổng số lượt phát</th>
              <th style={{ width: "160px" }}>Ngày chốt đối soát</th>
              <th style={{ width: "132px" }}></th>
              <th style={{ width: "256px" }}></th>
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
            <tr style={{ height: 47 }}>
              <td>1</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>2</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>3</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>4</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>5</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>6</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>7</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>8</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>9</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>10</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>11</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>12</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>13</td>
              <td>HĐ123</td>
              <td>Cty TNHH TM DV ABCEDEF</td>
              <td>10/07/2020 - 10/07/2021 </td>
              <td>Trọn gói</td>
              <td>8/8</td>
              <td>321.000</td>
              <td>22/04/2021</td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/BaoCaoChiTiet"
                >
                  Chi tiết doanh thu
                </a>
              </td>
              <td>
                <a
                  style={{
                    display: "block",
                    color: "#FF7506",
                    textAlign: "center",
                  }}
                  href="/LichSuDongBoThietBi"
                >
                  Lịch sử đồng bộ trên thiết bị
                </a>
              </td>
            </tr>
          </tbody>
        </table>

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
                13
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
      </div>

      <div
        className="khung2"
        style={{
          height: 240,
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        }}
      >
        <div
          className="khung1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/chotdoanhthu.png?alt=media&token=67408d14-83ab-4323-a1bf-58ae409f2871"
            alt="chotdoanhthu"
          />
          <div className="textt">
            Chốt doanh <br /> thu
          </div>
        </div>
        <div className="khung1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/xuatdulieu.png?alt=media&token=f03fe258-ca6e-4209-bd84-92041f1e392f"
            alt="xuatdulieu"
          />
          <div className="textt">Xuất dữ liệu</div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{
              backgroundColor: "#3E3E5B",
              width: "629px",
              height: "338px",
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
                Chốt doanh thu
              </h5>

              <div
                style={{
                  width: "549px",
                  height: "120px",
                  top: "82px",
                  left: "40px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  position: "absolute",
                }}
              >
                <p style={{ margin: "0 0 24px" }}>
                  Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021
                  trên <br /> tất cả các hợp đồng sử dụng.
                </p>

                <p style={{ margin: "0" }}>
                  Nhấn <strong>Tiếp tục</strong> để chốt doanh thu. <br /> Nhấn{" "}
                  <strong>Hủy</strong> để hủy bỏ và không chốt doanh thu.
                </p>
              </div>

              <div>
                <div
                  style={{
                    width: "368px",
                    height: "48px",
                    top: "250px",
                    left: "130px",
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
                    Tiếp tục
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

export default DoanhThuHopDongKhaiThac;
