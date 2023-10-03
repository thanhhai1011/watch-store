import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <section id="footer">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-name">
            <img src="https://res.cloudinary.com/dkedyoxb8/image/upload/v1695724467/dol1hbnht5414po4shdx.png" />
          </div>
          <div className="footer-top-about">
            <h2>VỀ WATCHSTORE</h2>
            <ul>
              <li>
                <a>Về Chúng Tôi</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Cơ Hội Nghề Nghiệp</a>
              </li>
              <li>
                <a>Cửa Hàng</a>
              </li>
              <li>
                <a>
                  <img src="https://theme.hstatic.net/1000075078/1000610097/14/gov.png?v=664" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top-sp">
            <h2>Tổng đài hỗ trợ</h2>
            <p>Khiếu nại: 1800.1062 (8:00 - 21:30)</p>
            <p>Bảo hành: 1800.1064 (8:00 - 21:00)</p>
          </div>
          <div className="footer-top-delivery">
            <h2>Thông tin và chính sách</h2>
            <ul>
              <li>
                <a>Mua hàng và thanh toán Online</a>
              </li>
              <li>
                <a>Thông tin hoá đơn mua hàng</a>
              </li>
              <li>
                <a>Chính sách giao hàng</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <p>Copyright © 2020 Cellphones. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
