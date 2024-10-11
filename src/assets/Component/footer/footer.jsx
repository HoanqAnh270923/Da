import React from "react";
import "../../SCSS/reset.scss";
import "../footer/footer.scss";
import {
  EnvironmentOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export default function FooterComponent() {
  return (
    <>
      <footer id="global-footer">
        <div id="gf-main" className="container">
          <h1 className="text-xl font-bold">TRƯỜNG ĐẠI HỌC SƯ PHẠM HÀ NỘI</h1>
          <p>Hanoi National University of Education</p>
          <div className="flex justify-start">
            <div className="contact-group text-sm">
              <div className="flex items-center">
                <EnvironmentOutlined className="mr-2" />
                <a href="">136 Xuân Thuỷ - Cầu Giấy - Hà Nội</a>
              </div>
              <div className="flex items-center">
                <HomeOutlined className="mr-2" />
                <a href="">http://www.hnue.edu.vn</a>
              </div>
            </div>
          </div>
          <hr />
          <h1 className="text-center text-sm" id="copyright">
            Nhóm 02_Dự án Khoa học công nghệ
          </h1>
        </div>
      </footer>
    </>
  );
}
