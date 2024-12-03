import React from "react";
import "./ResultContent.scss";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const ResultContent = ({ content, open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };
<<<<<<< HEAD
=======
  const isImageUrl = (url) => {
    if (url.includes(".jpg") || url.includes(".jpeg") || url.includes(".png") || url.includes(".gif") || url.includes(".bmp") || url.includes(".webp")) {
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
    }
  };
>>>>>>> f94a4f3 (fix the nhung, them input,v.v)

  return (
    <Drawer
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Kết quả</span>
        </div>
      }
      placement={"bottom"}
      onClose={onClose}
      open={open}
      key={"bottom"}
      mask={true}
      style={{
        height: "100vh",
        padding: 0,
      }}
      height={"100vh"}
    >
<<<<<<< HEAD
      <iframe
        srcDoc={content}
        title="result"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "auto",
        }}
      />
=======
        <iframe
          srcDoc={content}
          title="result"
          style={{ width: "100%", height: "100%", border: "none", overflow: "auto" }}
        />
>>>>>>> f94a4f3 (fix the nhung, them input,v.v)
    </Drawer>
  );
};

<<<<<<< HEAD
export default ResultContent;
=======
export default ResultContent;
>>>>>>> f94a4f3 (fix the nhung, them input,v.v)
