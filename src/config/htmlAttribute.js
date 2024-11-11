const htmlAttributes = {
  table: [
    {
      name: "border",
      type: "number",
      description: "Specifies the width of the border of a table.",
      unitOptions: ["px"],
    },
    {
      name: "cellpadding",
      type: "number",
      description:
        "Specifies the space between the cell wall and the cell content.",
      unitOptions: ["px"],
    },
    {
      name: "cellspacing",
      type: "number",
      description: "Specifies the space between cells.",
      unitOptions: ["px"],
    },
    {
      name: "width",
      type: "number",
      description: "Specifies the width of a table.",
      unitOptions: ["px", "%"],
    },
  ],
  div: [
    {
      name: "align",
      type: "string",
      description: "Specifies the alignment according to surrounding elements.",
      options: ["left", "right", "center", "justify"],
    },
    {
      name: "title",
      type: "string",
      description: "Specifies extra information about an element.",
    },
    {
      name: "style",
      type: "string",
      description: "Specifies an inline CSS style for an element.",
    },
    {
      name: "class",
      type: "string",
      description: "Specifies one or more class names for an element.",
    },
  ],
  img: [
    {
      name: "src",
      type: "string",
      description: "Specifies the URL of an image.",
    },
    {
      name: "alt",
      type: "string",
      description: "Specifies an alternate text for an image.",
    },
    {
      name: "width",
      type: "number",
      description: "Specifies the width of an image.",
      unitOptions: ["px"],
    },
    {
      name: "height",
      type: "number",
      description: "Specifies the height of an image.",
      unitOptions: ["px"],
    },
  ],
  mark: [
    {
      name: "class",
      type: "string",
      description: "Specifies one or more class names for the element.",
    },
    {
      name: "id",
      type: "string",
      description: "Specifies a unique id for the element.",
    },
    {
      name: "title",
      type: "string",
      description:
        "Specifies extra information about the element (usually displayed as a tooltip when hovered).",
    },
    {
      name: "lang",
      type: "string",
      description: "Specifies the language of the element's content.",
    },
    {
      name: "dir",
      type: "string",
      description:
        "Specifies the direction of the text. Can be 'ltr' (left-to-right), 'rtl' (right-to-left), or 'auto'.",
    },
    {
      name: "hidden",
      type: "boolean",
      description:
        "Specifies that the element is not yet, or is no longer, relevant.",
    },
    {
      name: "tabindex",
      type: "number",
      description: "Specifies the tabbing order of the element.",
    },
    {
      name: "accesskey",
      type: "string",
      description: "Specifies a shortcut key to activate/focus an element.",
    },
  ],
  del: [
    {
      name: "class",
      type: "string",
      description: "Specifies one or more class names for the element.",
    },
    {
      name: "id",
      type: "string",
      description: "Specifies a unique id for the element.",
    },
    {
      name: "title",
      type: "string",
      description:
        "Specifies extra information about the element (usually displayed as a tooltip when hovered).",
    },
    {
      name: "lang",
      type: "string",
      description: "Specifies the language of the element's content.",
    },
    {
      name: "dir",
      type: "string",
      description:
        "Specifies the direction of the text. Can be 'ltr' (left-to-right), 'rtl' (right-to-left), or 'auto'.",
    },
    {
      name: "datetime",
      type: "date",
      description:
        "Specifies the date and time when the content was deleted, in the format 'YYYY-MM-DDThh:mm:ssTZD'.",
    },
    {
      name: "hidden",
      type: "boolean",
      description:
        "Specifies that the element is not yet, or is no longer, relevant.",
    },
    {
      name: "tabindex",
      type: "number",
      description: "Specifies the tabbing order of the element.",
    },
    {
      name: "accesskey",
      type: "string",
      description: "Specifies a shortcut key to activate/focus an element.",
    },
  ],
};

export default htmlAttributes;
