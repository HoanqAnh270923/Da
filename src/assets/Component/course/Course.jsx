import React from "react";
import "../../SCSS/reset.scss";
import "./course.scss";
import html from "../../img/course_html.jpg";
import js from "../../img/course_js.jpg";


export default function CourseComponent() {
  return (
    <>
      <div id="global-course" className="">
        <h2 className="text-4xl font-bold about-course">
          <span className="red-color">Khóa học </span>
          trên trang web
        </h2>

        <div className="course-introdution flex rounded-md">
          <div className="course-img flex-1">
            <img
              className="w-full course-img__cover rounded-md"
              src={html}
              alt=""
            />
          </div>
          <div id="HTML" className="description flex-2 course-introduction__background rounded-md">
            <h2 className="text-white text-base font-bold m-3">
              HTML
            </h2>
            <hr />
            <div className="description-content m-3">
              <i className="text-white text-xs">
                <span>
                HTML (HyperText Markup Language) là ngôn ngữ đánh dấu được sử dụng để tạo cấu trúc và nội dung cho các trang web. 
                Nó là một trong những công nghệ cốt lõi của World Wide Web, cùng với CSS (Cascading Style Sheets) và JavaScript. 
                HTML không phải là ngôn ngữ lập trình mà là ngôn ngữ đánh dấu dùng để mô tả các phần tử của trang web thông qua các thẻ (tags).
                </span>
              </i>
              <br className="mt-8" />
              <a id="btn-viewall-course" href="" >Xem chi tiết</a>
            </div>
          </div>
        </div>

        <div id="CS" className="course-introdution flex rounded-md">
          <div className="course-img flex-1">
            <img
              className="w-full course-img__cover rounded-md"
              src={js}
              alt=""
            />
          </div>
          <div className="description flex-2 course-introduction__background rounded-md">
            <h2 className="text-white text-base font-bold m-3">
              JavaScript 
            </h2>
            <hr />
            <div className="description-content m-3">
              <i className="text-white text-xs">
                <span className="">
                JavaScript là một ngôn ngữ lập trình động và đa năng, 
                chủ yếu được sử dụng trong phát triển web để tạo ra các ứng dụng tương tác và trang web động. 
                Được tích hợp dễ dàng với HTML và CSS, JavaScript cho phép lập trình viên thêm các tính năng 
                như cập nhật nội dung mà không cần tải lại trang, xử lý sự kiện và tạo hiệu ứng hoạt hình. 
                Bên cạnh khả năng chạy trên trình duyệt, 
                JavaScript đã trở thành một trong những ngôn ngữ lập trình phổ biến nhất trong 
                cộng đồng lập trình viên
                </span>
              </i>
              <br className="mt-4" />
              <a id="btn-viewall-course" href="" >Xem chi tiết</a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
