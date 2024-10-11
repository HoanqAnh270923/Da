import React from "react";
import robot from "../../img/robot.png";
import "../aboutUs/about.scss";
import "../../SCSS/reset.scss";
export default function AboutComponent() {
  return (
    <>
      <div id="global-about" className="flex">
        <div className="ga-box flex-1">
          <div className="ga-box-text">
            <div className="flex font-bold text-3xl">
              <h1 className="pr-2"> About us</h1>
            </div>
            <hr className="tag-line-component" />
            <br />

            <h5 className="text-xl font-bold">Chúng tôi là một nền tảng học trực tuyến tập trung vào việc cung cấp các công cụ chất lượng về HTML và JavaScript. Với mục tiêu giúp mọi người tiếp cận lập trình dễ dàng, chúng tôi mang đến những tài liệu chi tiết và sự hỗ trợ tận tâm.</h5>
          </div>
        </div>
        <img src={robot} alt="robot" id="robot" className="flex-1" />
      </div>
    </>
  );
}
