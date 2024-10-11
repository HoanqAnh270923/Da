import React, { useState } from "react";
import "./slider.scss";
import "../../SCSS/reset.scss";

export default function SliderComponent() {
  return (
    <>
      <div id="global-slider" className="gs-section">
        <div className="gs-section-background"></div>
        <div className="gs-container">
          <div className="gs-element">
            <h1 className="gs-element-paddingtop display__text--white">
              Học lập trình HTML, JavaScript
            </h1>
          </div>

          <div className="gs-element">
            <h5 className="slogan--yellow">
            Chào mừng bạn đến với nền tảng học lập trình về HTML và JavaScript.
            <br />
            Nơi bắt đầu hành trình học lập trình HTML và JavaScript một cách dễ dàng.
            <br />
            Cho dù bạn là người mới hoàn toàn, chúng tôi có các công cụ được thiết kế
            <br /> giúp bạn nhanh chóng nắm vững những kỹ năng quan trọng
            </h5>
          </div>

          <div className="gs-button">
            <button
              type="submit"
              id="btn-register"
              className="btn__register--red"
            >
              Tìm hiểu ngay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
