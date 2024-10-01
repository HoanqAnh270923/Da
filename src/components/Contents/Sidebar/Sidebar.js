// import React, { useContext } from "react";
// import { ViewContext } from "../../../context/viewContext";
// import "./Sidebar.scss";

// const Sidebar = () => {
//   // const [currentView, setCurrentView] = useState("main"); // State để điều hướng giữa các phần
//   const { view, setView } = useContext(ViewContext);

//   // Object quản lý các thẻ và ID
//   const tags = {
//     1: {
//       name: "Thẻ định dạng",
//       children: [
//         { id: "1-1", name: "mark" },
//         { id: "1-2", name: "del" },
//         { id: "1-3", name: "address" },
//         { id: "1-4", name: "code" },
//         { id: "1-5", name: "kbd" },
//         { id: "1-6", name: "pre" },
//         { id: "1-7", name: "var" },
//         { id: "1-8", name: "q" },
//       ],
//     },
//     2: {
//       name: "Thẻ tạo bảng",
//       children: [
//         { id: "2-1", name: "table" },
//         { id: "2-2", name: "tr" },
//         { id: "2-3", name: "th" },
//         { id: "2-4", name: "td" },
//       ],
//     },
//     3: {
//       name: "Thẻ nhúng",
//       children: [
//         { id: "3-1", name: "audio" },
//         { id: "3-2", name: "img" },
//         { id: "3-3", name: "iframe" },
//         { id: "3-4", name: "a" },
//         { id: "3-5", name: "embed" },
//         { id: "3-6", name: "video" },
//       ],
//     },
//   };

//   // Xử lý chuyển đổi giữa các view
//   const goToHtml = () =>
//     setView((prev) => ({ ...prev, category: "htmlOptions" }));
//   const goToTag = (id) => {
//     setView({
//       category: "tags",
//       tagId: id,
//     });
//   };

//   // Quay lại danh sách 3 thẻ từ danh sách các thẻ con

//   const goBackToHtmlOptions = () =>
//     setView((prev) => ({ ...prev, category: "htmlOptions" }));
//   // Quay lại chữ "HTML" ban đầu từ danh sách 3 thẻ

//   const goBackToMain = () => setView((prev) => ({ ...prev, category: "main" }));

//   return (
//     <div className="sidebar">
//       {/* Hiển thị chữ HTML ban đầu */}
//       {view.category === "main" && (
//         <div className="category" onClick={goToHtml}>
//           HTML
//         </div>
//       )}

//       {/* Hiển thị danh sách 3 thẻ: Thẻ định dạng, Thẻ tạo bảng, Thẻ nhúng */}
//       {view.category === "htmlOptions" && (
//         <div className="sub-category">
//           <div onClick={() => goToTag(1)}>Thẻ định dạng</div>
//           <div onClick={() => goToTag(2)}>Thẻ tạo bảng</div>
//           <div onClick={() => goToTag(3)}>Thẻ nhúng</div>
//         </div>
//       )}

//       {/* Hiển thị danh sách các thẻ con theo ID được chọn */}
//       {view.category === "tags" && view.tagId && (
//         <ul className="tag-list">
//           {tags[view.tagId].children.map((tag) => (
//             <li
//               key={tag.id}
//               style={{ background: tag.id === view.itemId && "#D8BFD8" }}
//             >
//               {tag.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Nút "Quay lại" cho việc quay về danh sách 3 thẻ */}
//       {view.category === "tags" && (
//         <div className="back-button" onClick={goBackToHtmlOptions}>
//           Quay lại danh sách thẻ
//         </div>
//       )}

//       {/* Nút "Quay lại" cho việc quay về chữ HTML ban đầu */}
//       {view.category === "htmlOptions" && (
//         <div className="back-button" onClick={goBackToMain}>
//           Quay lại HTML
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;


import React, { useContext } from "react";
import { ViewContext } from "../../../context/viewContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import mũi tên
import "./Sidebar.scss";

// Quản lý các thẻ và ID
const tags = {
  1: {
    name: "Thẻ định dạng",
    children: [
      { id: "1-1", name: "mark" },
      { id: "1-2", name: "del" },
      { id: "1-3", name: "address" },
      { id: "1-4", name: "code" },
      { id: "1-5", name: "kbd" },
      { id: "1-6", name: "pre" },
      { id: "1-7", name: "var" },
      { id: "1-8", name: "q" },
    ],
  },
  2: {
    name: "Thẻ tạo bảng",
    children: [
      { id: "2-1", name: "table" },
      { id: "2-2", name: "tr" },
      { id: "2-3", name: "th" },
      { id: "2-4", name: "td" },
    ],
  },
  3: {
    name: "Thẻ nhúng",
    children: [
      { id: "3-1", name: "audio" },
      { id: "3-2", name: "img" },
      { id: "3-3", name: "iframe" },
      { id: "3-4", name: "a" },
      { id: "3-5", name: "embed" },
      { id: "3-6", name: "video" },
    ],
  },
};

const Sidebar = () => {
  const { view, setView } = useContext(ViewContext);

  // Chuyển đổi giữa các view
  const goToHtml = () =>
    setView((prev) => ({ ...prev, category: "htmlOptions" }));
  const goToTag = (id) => {
    setView({
      category: "tags",
      tagId: id,
    });
  };

  // Chức năng quay lại
  const goBackToHtmlOptions = () =>
    setView((prev) => ({ ...prev, category: "htmlOptions" }));
  const goBackToMain = () => setView((prev) => ({ ...prev, category: "main" }));

  return (
    <div className="sidebar">
      {/* Hiển thị chữ HTML ban đầu */}
      {view.category === "main" && (
        <div className="category" onClick={goToHtml}>
          HTML
        </div>
      )}


      {/* Nút "Quay lại" cho việc quay về danh sách 3 thẻ với mũi tên */}
      {view.category === "tags" && (
        <div className="back-button" onClick={goBackToHtmlOptions}>
          <FontAwesomeIcon icon={faArrowLeft} /> {/* Mũi tên quay lại */}
        
        </div>
      )}

      {/* Nút "Quay lại" cho việc quay về chữ HTML ban đầu với mũi tên */}
      {view.category === "htmlOptions" && (
        <div className="back-button" onClick={goBackToMain}>
          <FontAwesomeIcon icon={faArrowLeft} /> {/* Mũi tên quay lại */}
        
        </div>
      )}
      
      {/* Hiển thị danh sách 3 thẻ: Thẻ định dạng, Thẻ tạo bảng, Thẻ nhúng */}
      {view.category === "htmlOptions" && (
        <div className="sub-category">
          <div onClick={() => goToTag(1)}>Thẻ định dạng</div>
          <div onClick={() => goToTag(2)}>Thẻ tạo bảng</div>
          <div onClick={() => goToTag(3)}>Thẻ nhúng</div>
        </div>
      )}

      {/* Hiển thị danh sách các thẻ con theo ID được chọn */}
      {view.category === "tags" && view.tagId && (
        <ul className="tag-list">
          {tags[view.tagId].children.map((tag) => (
            <li
              key={tag.id}
              style={{ background: tag.id === view.itemId && "#D8BFD8" }}
            >
              {tag.name}
            </li>
          ))}
        </ul>
      )}

      
    </div>
  );
};

export default Sidebar;
