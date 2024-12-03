import React, { useState, useEffect } from "react";
import { Select, Slider, Input, InputNumber, Row, Col } from "antd";
import { ColorPicker, Space, DatePicker } from "antd";
import dayjs from "dayjs";

import config from "../../config";

function HtmlAttributeInput({ property, value, onChange }) {
  const { type, options, unitOptions, min, max } = property;
  const [unit, setUnit] = useState(unitOptions ? unitOptions[0] : "px");
  const [inputValue, setInputValue] = useState(value || 0);

  useEffect(() => {
    if (typeof value === "string") {
      const numericValue = parseFloat(value);
      setInputValue(numericValue || 0);
      const currentUnit = value.replace(/[0-9.]+/, "");
      setUnit(currentUnit || "px");
    } else {
      setInputValue(value);
    }
  }, [value]);

  const handleSliderChange = (val) => {
    if (!Number.isNaN(val)) {
      setInputValue(val);
      onChange(property, unitOptions ? `${val}${unit}` : val);
    }
  };

  const handleInputChange = (val) => {
    if (val !== undefined) {
      setInputValue(val);
      onChange(property, `${val}${unit}`);
    } else {
      onChange(property, "");
    }
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    const numericValue =
      typeof value === "string" ? value.replace(/[a-zA-Z%]+$/, "") : value;
    onChange(property, `${numericValue}${newUnit}`);
  };

  switch (type) {
    case "select":
      return (
        <Select
          value={value}
          onChange={(val) => onChange(property, val)}
          style={{ width: 120 }}
        >
          {options.map((option) => (
            <Select.Option key={option} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
      );

    case "color":
      return (
        <Space>
          <Space direction="vertical">
            <ColorPicker
              defaultValue={value || "#1677ff"}
              size="large"
              showText
              onChangeComplete={(color) => onChange(property, color.hex)}
            />
          </Space>
        </Space>
      );

    case "number":
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <InputNumber
            value={inputValue}
            onChange={handleInputChange}
            style={{ width: 80 }}
          />
          {unitOptions && (
            <Select
              value={unit}
              onChange={handleUnitChange}
              style={{ width: 70, marginLeft: 8 }}
            >
              {unitOptions.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          )}
        </div>
      );

    case "slider":
      return (
        <Row>
          <Col span={12}>
            <Slider
              min={min}
              max={max}
              step={0.01}
              value={inputValue}
              onChange={handleSliderChange}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={min}
              max={max}
              step={0.01}
              style={{ margin: "0 16px" }}
              value={inputValue}
              onChange={(val) => {
                setInputValue(val);
                handleSliderChange(val);
              }}
            />
          </Col>
        </Row>
      );

    case "date":
      return (
        <DatePicker
          value={dayjs(value || new Date())}
          showTime
          onChange={(val) => {
            if (val) {
              const isoDateTime = val.format("YYYY-MM-DDTHH:mm:ssZ");
              onChange(property, isoDateTime);
            }
          }}
        />
      );

    default:
      return (
        <Input
          value={value}
          onChange={(e) => onChange(property, e.target.value)}
        />
      );
  }
}

export default HtmlAttributeInput;
