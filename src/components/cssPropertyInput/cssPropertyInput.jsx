import React, { useState, useEffect } from "react";
import { Select, Slider, Input, InputNumber, Row, Col } from "antd";
import { SketchPicker } from "react-color";
import config from "../../config";

function CssPropertyInput({ property, value, onChange }) {
  const cssConfig = config.cssPropertyComponents[property] || {};
  const { type, options, unitOptions, min, max } = cssConfig;
  const [unit, setUnit] = useState("px");
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
        <SketchPicker
          color={value}
          onChangeComplete={(color) => onChange(property, color.hex)}
        />
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

    default:
      return (
        <Input
          value={value}
          onChange={(e) => onChange(property, e.target.value)}
        />
      );
  }
}

export default CssPropertyInput;
