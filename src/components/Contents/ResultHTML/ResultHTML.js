import React from "react";
import "./ResultHTML.scss";

import { CopyOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

const ResultHtml = ({ htmlstring }) => {
  console.log("htmlstring", htmlstring);

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlstring);
  };
  return (
    <div className="result__html">
      <div className="result__html__code overflow-hidden">
        <div className="w-full flex justify-end items-end p-2">
          <Tooltip title="Coppy">
            <Button
              type="default"
              shape="circle"
              icon={<CopyOutlined />}
              onClick={handleCopy}
            />
          </Tooltip>
        </div>
        <code className="text-black block whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[1200px]">
          {htmlstring}
        </code>
      </div>
    </div>
  );
};

export default ResultHtml;
