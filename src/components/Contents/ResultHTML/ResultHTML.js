import React, { useContext } from "react";
import "./ResultHTML.scss";

import { CopyOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { html as beautifyHtml } from "js-beautify";
import { faFileDownload, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ViewContext } from "../../../context/viewContext/viewContext";

const ResultHtml = ({ htmlstring }) => {
  const { nodes } = useContext(ViewContext);
  const handleCopy = () => {
    navigator.clipboard.writeText(htmlstring);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([htmlstring], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "index.html";
    document.body.appendChild(element);
    element.click();
  };

  const handleSave = () => {
   
    const json = JSON.stringify(nodes, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formattedHtml = beautifyHtml(htmlstring, {
    indent_size: 2,
    wrap_line_length: 80,
    space_in_empty_parent: true,
  });
  return (
    <div className="result__html">
      <div className="result__html__code">
        <div className="w-full flex justify-end items-end p-2 gap-2">
          <Tooltip title="Save">
            <Button
              type="default"
              shape="circle"
              icon={<FontAwesomeIcon icon={faSave} />}
              onClick={handleSave}
            />
          </Tooltip>
          <Tooltip title="Download">
            <Button
              type="default"
              shape="circle"
              icon={<FontAwesomeIcon icon={faFileDownload} />}
              onClick={handleDownload}
            />
          </Tooltip>
          <Tooltip title="Copy">
            <Button
              type="default"
              shape="circle"
              icon={<CopyOutlined />}
              onClick={handleCopy}
            />
          </Tooltip>
        </div>
        <pre className="formatted-code">
          <code>{formattedHtml}</code>
        </pre>
      </div>
    </div>
  );
};

export default ResultHtml;
