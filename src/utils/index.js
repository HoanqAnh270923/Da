export function getCssProperties(elementName) {
  const element = document.createElement(elementName);
  const cssProperties = Object.keys(element.style).filter((prop) =>
    isNaN(prop)
  );

  return cssProperties;
}

export function generateHTML(items) {
  const styleToString = (styleObj) => {
    return Object.entries(styleObj)
      .map(
        ([key, value]) =>
          `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value}`
      )
      .join("; ");
  };

  const attributeToString = (attributes) => {
    return Object.entries(attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  };

  const createElementHTML = (item, indent = "") => {
    const style = item.style ? ` style="${styleToString(item.style)}"` : "";

    const attributes = item.attributes
      ? attributeToString(item.attributes)
      : "";

    const content = item.content || "";

    let childrenHTML = "";
    if (item.children && item.children.length > 0) {
      const childIndent = `${indent}  `;
      childrenHTML = item.children
        .map((child) => createElementHTML(child, childIndent))
        .join("");
    }

    if (item.id.split("-")[0] === "3") {
      return `${indent}<${item.name}${style} ${attributes} /> \n`;
    }

    return `${indent}<${item.name}${style} ${attributes}>${content}${
      childrenHTML ? `\n${childrenHTML}${indent}` : ""
    }</${item.name}>\n`;
  };

  return items
    .map((item) => createElementHTML(item))
    .join("")
    .trim();
}

export const getNodeByPath = (nodes, path) => {
  let current = [...nodes];
  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]].children;
  }
  return current[path[path.length - 1]];
};

export const setNodeByPath = (nodes, path, value) => {
  const result = [...nodes];
  let current = result;
  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]].children;
  }
  current[path[path.length - 1]] = value;
  return result;
};

export const removeNodeByPath = (nodes, path) => {
  const result = [...nodes];
  let current = result;
  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]].children;
  }
  current.splice(path[path.length - 1], 1);
  return result;
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
