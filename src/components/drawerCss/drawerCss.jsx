import React, { useState } from "react";
import { Drawer, Input, Tabs } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { getCssProperties } from "../../utils";
import CssPropertyInput from "../cssPropertyInput";

import config from "../../config";

const { TabPane } = Tabs;

function DrawerCss({ open, properties, setOpen, setProperties }) {
  const [placement, setPlacement] = useState("left");
  const [searchTerm, setSearchTerm] = useState("");

  const onClose = () => {
    setOpen(false);
  };

  if (!properties) return null;

  const cssProperties = getCssProperties(properties.name);
  const filteredProperties = cssProperties
    .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const isExactMatchA = a.toLowerCase() === searchTerm.toLowerCase();
      const isExactMatchB = b.toLowerCase() === searchTerm.toLowerCase();
      return isExactMatchA ? -1 : isExactMatchB ? 1 : 0;
    });

  const filteredHtmlAttributes = config.htmlAttributes[properties.name] || [];

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
          <span>{properties.name || "CSS Properties"}</span>
          <CloseOutlined
            onClick={onClose}
            style={{ fontSize: "16px", cursor: "pointer" }}
          />
        </div>
      }
      placement={placement}
      closable={false}
      onClose={onClose}
      open={open}
      key={placement}
      mask={false}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="CSS Properties" key="1">
          <Input
            placeholder="Search CSS properties"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: 16 }}
            allowClear
          />

          {filteredProperties.map((item, index) => (
            <div
              key={index}
              className="flex-col"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{item}</span>
              <CssPropertyInput
                property={item}
                value={properties?.style ? properties.style[item] : ""}
                onChange={(property, value) => {
                  if (!value || value === "") {
                    const newStyle = { ...properties.style };
                    delete newStyle[property];
                    setProperties({
                      ...properties,
                      style: newStyle,
                    });
                    return;
                  }
                  setProperties({
                    ...properties,
                    style: {
                      ...properties.style,
                      [property]: value,
                    },
                  });
                }}
              />
            </div>
          ))}
        </TabPane>

        <TabPane tab="Html Attribute" key="2">
          <div>
            <Input
              placeholder="Search HTML attributes"
              value={searchTerm}
              
              style={{ marginBottom: 16 }}
              allowClear
            />
            {filteredHtmlAttributes.map((item, index) => (
              <div
                key={index}
                className="flex-col"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>{item.name}</span>
                <CssPropertyInput
                  property={item.name}
                  value={properties?.attributes ? properties.attributes[item.name] : ""}
                  onChange={(property, value) => {
                    if (!value || value === "") {
                      const newAttributes = { ...properties.attributes };
                      delete newAttributes[property];
                      setProperties({
                        ...properties,
                        attributes: newAttributes,
                      });
                      return;
                    }
                    setProperties({
                      ...properties,
                      attributes: {
                        ...properties.attributes,
                        [property]: value,
                      },
                    });
                  }}
                />
              </div>
            ))}
          </div>
        </TabPane>
      </Tabs>
    </Drawer>
  );
}

export default DrawerCss;
