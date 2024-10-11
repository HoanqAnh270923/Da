import React, { useEffect, useState } from "react";
import logo from "../../img/hnue-logo.png";
import "../../SCSS/reset.scss";
import "./header.scss";
import { HomeOutlined, CaretDownOutlined } from "@ant-design/icons";
// import "../JS/scroll.js";

export default function HeaderComponent() {
  const [scrollFlags, setScrollFlag] = useState(false);
  // Chọn phần tử cần thêm class khi cuộn
  const elementToChange = document.getElementById("global-header");
  // elementToChange.classList.remove("scroll");

  // Sự kiện cuộn
  window.addEventListener("scroll", () => {
    // Kiểm tra điều kiện để xác định khi nào thêm class
    if (window.scrollY > 10) {
      setScrollFlag(true);
    } else {
      setScrollFlag(false);
    }
  });

  return (
    <>
      <header
        id="global-header "
        className={scrollFlags ? "site-header scroll" : "site-header"}
        role="banner"
      >
        <div id="gh-main" className="flex items-center relative container">
          <a id="gh-branding" className="flex items-center " href="/">
            <img src={logo} width={60} alt="logo HNUE" className="gh-logo" />
            <div className="gh-branding-name pl-4">
              <span className="text-base">TRƯỜNG ĐẠI HỌC SƯ PHẠM HÀ NỘI</span>
              <br />
              <span className="">Hanoi National University of Education</span>
            </div>
          </a>
          <div className="flex  items-center">
            <HomeOutlined className="mr-2 home-icon" />
          </div>

          <div className="gh-desktop gh-menu-and-language">
            <ul className="nav flex items-center space-x-8">
              {" "}
              {/* Thêm khoảng cách giữa các mục */}
              <li className="nav-item relative">
                {" "}
                {/* Đặt vị trí tương đối cho mục cha */}
                <a href="#global-course" className="flex items-center">
                  Khoá học
                  <CaretDownOutlined className="ml-2" />
                </a>
                <ul className="subnav absolute bg-white mt-2 p-4 shadow-lg">
                  {" "}
                  {/* Định dạng menu con */}
                  <div className="subnav--name text-sm text-gray-500 mb-2">
                    Khoá học dành cho sinh viên
                  </div>
                  <hr />
                  <li className="subnav--item">
                    <a href="#HTML">HTML</a>
                  </li>
                  <li className="subnav--item">
                    <a href="#JS">JS</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#global-about">Chúng tôi</a>
              </li>
              <li className="nav-item">
                <a href="#global-partner">Thành viên nhóm</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
