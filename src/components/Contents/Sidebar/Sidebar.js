// import React, { useContext } from "react";
// import { ViewContext } from "../../../context/viewContext";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import mũi tên
// import "./Sidebar.scss";

// // Quản lý các thẻ và ID
// const tags = {
//   1: {
//     name: "Thẻ định dạng",
//     children: [
//       { id: "1-1", name: "mark" },
//       { id: "1-2", name: "del" },
//       { id: "1-3", name: "address" },
//       { id: "1-4", name: "code" },
//       { id: "1-5", name: "kbd" },
//       { id: "1-6", name: "pre" },
//       { id: "1-7", name: "var" },
//       { id: "1-8", name: "q" },
//     ],
//   },
//   2: {
//     name: "Thẻ tạo bảng",
//     children: [
//       { id: "2-1", name: "table"},
//       { id: "2-2", name: "tr" },
//       { id: "2-3", name: "th" },
//       { id: "2-4", name: "td" },
//     ],
//   },
//   3: {
//     name: "Thẻ nhúng",
//     children: [
//       { id: "3-1", name: "audio" },
//       { id: "3-2", name: "img" },
//       { id: "3-3", name: "iframe" },
//       { id: "3-4", name: "a" },
//       { id: "3-5", name: "embed" },
//       { id: "3-6", name: "video" },
//     ],
//   },
// };

// const Sidebar = () => {
//   const { view, setView } = useContext(ViewContext);

//   // Chuyển đổi giữa các view
//   const goToHtml = () =>
//     setView((prev) => ({ ...prev, category: "htmlOptions" }));
//   const goToTag = (id) => {
//     setView({
//       category: "tags",
//       tagId: id,
//     });
//   };

//   // Chức năng quay lại
//   const goBackToHtmlOptions = () =>
//     setView((prev) => ({ ...prev, category: "htmlOptions" }));
//   const goBackToMain = () => setView((prev) => ({ ...prev, category: "main" }));

//   return (
//     <div className="sidebar">
//       {/* Hiển thị chữ HTML ban đầu */}
//       {view.category === "main" && (
//         <div className="category" onClick={goToHtml}>
//           HTML
//         </div>
//       )}

//       {/* Nút "Quay lại" cho việc quay về danh sách 3 thẻ với mũi tên */}
//       {view.category === "tags" && (
//         <div className="back-button" onClick={goBackToHtmlOptions}>
//           <FontAwesomeIcon icon={faArrowLeft} /> {/* Mũi tên quay lại */}

//         </div>
//       )}

//       {/* Nút "Quay lại" cho việc quay về chữ HTML ban đầu với mũi tên */}
//       {view.category === "htmlOptions" && (
//         <div className="back-button" onClick={goBackToMain}>
//           <FontAwesomeIcon icon={faArrowLeft} /> {/* Mũi tên quay lại */}

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

//     </div>
//   );
// };

// export default Sidebar;

// /*
// */

import React, { useContext, useState } from "react";
import { ViewContext } from "../../../context/viewContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import mũi tên
import { ReactSortable } from "react-sortablejs";
import "./Sidebar.scss";

// Quản lý các thẻ và ID
const tags = {
  1: {
    name: "Thẻ định dạng",
    children: [
      {
        id: "1-1",
        name: "mark",
        content:
          "Đánh dấu văn bản, thường được sử dụng để làm nổi bật văn bản quan trọng",
        style: {},
      },
      { id: "1-2", name: "del", content: "Đại diện cho văn bản bị xóa" },
      {
        id: "1-3",
        name: "address",
        content:
          "Thể hiện thông tin liên lạc, thường dùng để cung cấp địa chỉ liên hệ",
      },
      { id: "1-4", name: "code", content: "Đại diện cho đoạn mã nguồn" },
      {
        id: "1-5",
        name: "kbd",
        content:
          "Biểu diễn văn bản nhập từ bàn phím, thường dùng cho tổ hợp phím",
      },
      {
        id: "1-6",
        name: "pre",
        content:
          "Hiển thị văn bản giữ nguyên định dạng (khoảng trắng và xuống dòng)",
      },
      {
        id: "1-7",
        name: "var",
        content: "Đại diện cho biến trong các công thức toán học hoặc mã nguồn",
      },
      { id: "1-8", name: "q", content: "Đại diện cho trích dẫn ngắn" },
    ],
  },
  2: {
    name: "Thẻ tạo bảng",
    children: [
      {
        id: "2-1",
        name: "table",
        content:
          'Đây là thẻ bao quanh toàn bộ bảng. Thuộc tính border=""  được thêm vào để hiển thị đường viền cho bảng',
      },
      {
        id: "2-2",
        name: "tr",
        content:
          "Thẻ này tạo ra một hàng (row) trong bảng. Mỗi bảng sẽ có nhiều hàng, và mỗi hàng có thể chứa các ô dữ liệu hoặc ô tiêu đề.",
      },
      {
        id: "2-3",
        name: "th",
        content:
          "Thẻ này được sử dụng để tạo ra các ô tiêu đề (header cell) trong hàng đầu tiên của bảng. Văn bản bên trong thẻ <th> thường được hiển thị đậm và căn giữa theo mặc định.",
      },
      {
        id: "2-4",
        name: "td",
        content:
          "Thẻ này được sử dụng để tạo các ô dữ liệu (data cell) trong các hàng tiếp theo của bảng. Mỗi ô có thể chứa văn bản, hình ảnh, hoặc các nội dung khác.",
      },
    ],
  },
  3: {
    name: "Thẻ nhúng",
    children: [
      {
        id: "3-1",
        name: "audio",
        content:
          "Thẻ này được sử dụng để nhúng âm thanh vào trang web. Thuộc tính controls hiển thị các nút điều khiển phát lại (playback controls) như phát, tạm dừng, và thay đổi âm lượng",
      },
      {
        id: "3-2",
        name: "img",
        content:
          "Thẻ này được sử dụng để nhúng hình ảnh. Thuộc tính src chỉ định đường dẫn đến tệp hình ảnh, và thuộc tính alt cung cấp văn bản thay thế nếu hình ảnh không hiển thị được",
      },
      {
        id: "3-3",
        name: "iframe",
        content:
          "Thẻ này được sử dụng để nhúng một trang web hoặc tài liệu HTML khác vào trang web hiện tại. Bạn có thể điều chỉnh kích thước của iframe bằng các thuộc tính width và height",
      },
      {
        id: "3-4",
        name: "a",
        content:
          'Thẻ này được sử dụng để tạo liên kết đến một URL khác. Thuộc tính href chỉ định đường dẫn URL, và thuộc tính target="_blank" chỉ định rằng liên kết sẽ mở trong một tab mới.',
      },
      {
        id: "3-5",
        name: "embed",
        content:
          "Thẻ này được sử dụng để nhúng nội dung đa phương tiện, chẳng hạn như tệp PDF hoặc video. Thuộc tính type xác định loại tệp, và các thuộc tính width và height xác định kích thước của vùng nhúng",
      },
      {
        id: "3-6",
        name: "video",
        content:
          "Thẻ này được sử dụng để nhúng video vào trang web. Giống như thẻ <audio>, thuộc tính controls cung cấp các nút điều khiển phát lại cho video",
      },
    ],
  },
};

const Sidebar = () => {
  const { view, setView } = useContext(ViewContext);
  const [state, setState] = useState(tags[view.tagId]?.children || []);

  // Chuyển đổi giữa các view
  const goToHtml = () =>
    setView((prev) => ({ ...prev, category: "htmlOptions" }));

  const goToTag = (id) => {
    setView({
      category: "tags",
      tagId: id,
      itemName: tags[id].name,
    });
    setState(tags[id].children);
  };

  React.useEffect(() => {
    setState(tags[view.tagId]?.children || []);
  }, [view]);

  // Chức năng quay lại
  const goBackToHtmlOptions = () =>
    setView((prev) => ({ ...prev, category: "htmlOptions" }));
  const goBackToMain = () => setView((prev) => ({ ...prev, category: "main" }));

  return (
    <div className="sidebar">
      {/* Hiển thị đường dẫn HTML ở góc phải trên */}
      <div className="breadcrumb">
        {view.category === "tags" && view.tagId && (
          <span>
            HTML &gt; {tags[view.tagId].name} &gt; {view.tagName}
          </span>
        )}
      </div>

      {/* Hiển thị chữ HTML ban đầu */}
      {view.category === "main" && (
        <div
          className="category flex items-center justify-center"
          onClick={goToHtml}
        >
          <p className="text-center w-100">HTML</p>
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
        <ReactSortable
          list={state}
          setList={setState}
          clone={(item) => ({ ...item })} // Clone the dragged item
          animation={150}
          className="tag-list"
          group={{ swap: "false", name: "shared", pull: "clone", put: false }}
          sort={false}
        >
          {state?.map((tag) => (
            <div key={tag.id} className={`sortable-item `}>
              {/* {view.itemName} */}
              {tag.name}
            </div>
          ))}
        </ReactSortable>
      )}
    </div>
  );
};

export default Sidebar;
