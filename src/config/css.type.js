export const cssPropertyComponents = {
  display: {
    type: "select",
    options: ["block", "inline", "flex", "grid", "none"],
  },
  color: {
    type: "color",
  },
  backgroundColor: {
    type: "color",
  },
  accentColor: {
    type: "color",
  },
  fontSize: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"], 
  },
  opacity: {
    type: "slider",
    min: 0,
    max: 1,
    step: 0.1,
  },
  zIndex: {
    type: "number",
    min: 0,
    max: 100,
  },
  width: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  height: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  maxWidth: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },  
  maxHeight: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  lineHeight: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  padding: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  border: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  borderRadius: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  margin: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  boxShadow: {
    type: "text",
  },
  cursor: {
    type: "select",
    options: ["pointer", "default", "none"],
  },
};
