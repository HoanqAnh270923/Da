import React from "react";
import "./ResultContent.scss";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const ResultContent = ({ content, open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };

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
    </Drawer>
  );
};

export default ResultContent;
