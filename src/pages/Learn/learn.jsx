import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, Tabs } from "antd";

import { capitalizeFirstLetter } from "../../utils";
import NestedDragDrop from "../../components/nestedDragDrop/nestedDrapDrop";
import SidebarItem from "../../components/sideBarItem/sideBarItem";
import logo from "../../assests/images/logo.svg";
import ResultHtml from "../../components/Contents/ResultHTML/ResultHTML";

const sidebarItems = [
  {
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
  {
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
  {
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
];

const { Header, Content, Footer, Sider } = Layout;

function Learn() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [htmlString, setHtmlString] = useState("");

  useEffect(() => {
    console.log(htmlString);
  }, [htmlString]);

  const onChange = (key) => {
    setActiveTab(key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const tabsList = [
    {
      key: "1",
      label: "Code",
      children: (
        <div
          style={{
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <NestedDragDrop setHtmlString={setHtmlString} />
        </div>
      ),
    },
    {
      key: "2",
      label: "Html",
      children: <ResultHtml key={1} htmlstring={htmlString} />,
    },
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="h-[64px] w-full flex justify-start items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[35px] w-[35px] object-contain"
          />
        </div>

        {sidebarItems.map((item) =>
          item.children.map((child) => (
            <SidebarItem key={child.id} item={child} />
          ))
        )}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            zIndex: 1000,
          }}
        />
        <Content
          style={{
            margin: "80px 0px 0px 0px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Tabs defaultActiveKey="1" items={tabsList} onChange={onChange} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Learn;
