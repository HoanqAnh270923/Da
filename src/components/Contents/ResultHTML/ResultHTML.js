import React from "react";
import "./ResultHTML.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { CopyOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";

const escapeHtml = (htmlString) => {
  return htmlString
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const ResultHtml = ({ htmlstring }) => {
  const escapedHtmlString = escapeHtml(htmlstring);
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
        <code
          className="text-black block whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[1200px]"
          dangerouslySetInnerHTML={{ __html: escapedHtmlString }}
        ></code>
      </div>
    </div>
  );
};

export default ResultHtml;
