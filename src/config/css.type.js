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
  borderBlockColor: {
    type: "color",
  },
  color: {
    type: "color",
  },
  accentColor: {
    type: "color",
  },
  backgroundColor: {
    type: "color",
  },
  borderBlockColor: {
    type: "color",
  },
  borderBlockEndColor: {
    type: "color",
  },
  borderBlockStartColor: {
    type: "color",
  },
  borderBottomColor: {
    type: "color",
  },
  borderColor: {
    type: "color",
  },
  borderInlineColor: {
    type: "color",
  },
  borderInlineEndColor: {
    type: "color",
  },
  borderInlineStartColor: {
    type: "color",
  },
  borderLeftColor: {
    type: "color",
  },
  borderRightColor: {
    type: "color",
  },
  borderTopColor: {
    type: "color",
  },
  caretColor: {
    type: "color",
  },
  colorInterpolation: {
    type: "color",
  },
  colorInterpolationFilters: {
    type: "color",
  },
  colorRendering: {
    type: "color",
  },
  colorScheme: {
    type: "color",
  },
  columnRuleColor: {
    type: "color",
  },
  floodColor: {
    type: "color",
  },
  forcedColorAdjust: {
    type: "color",
  },
  lightingColor: {
    type: "color",
  },
  outlineColor: {
    type: "color",
  },
  overrideColors: {
    type: "color",
  },
  scrollbarColor: {
    type: "color",
  },
  stopColor: {
    type: "color",
  },
  textDecorationColor: {
    type: "color",
  },
  textEmphasisColor: {
    type: "color",
  },
  webkitBorderAfterColor: {
    type: "color",
  },
  webkitBorderBeforeColor: {
    type: "color",
  },
  webkitBorderEndColor: {
    type: "color",
  },
  webkitBorderStartColor: {
    type: "color",
  },
  webkitColumnRuleColor: {
    type: "color",
  },
  webkitPrintColorAdjust: {
    type: "color",
  },
  webkitTapHighlightColor: {
    type: "color",
  },
  webkitTextEmphasisColor: {
    type: "color",
  },
  webkitTextFillColor: {
    type: "color",
  },
  webkitTextStrokeColor: {
    type: "color",
  },
  alignContent: {
    type: "select",
    options: [
      "center",
      "flex-end",
      "flex-start",
      "space-around",
      "space-between",
      "stretch",
    ],
  },
  alignItems: {
    type: "select",
    options: ["baseline", "center", "flex-end", "flex-start", "stretch"],
  },
  alignSelf: {
    type: "select",
    options: [
      "auto",
      "baseline",
      "center",
      "flex-end",
      "flex-start",
      "stretch",
    ],
  },
  alignmentBaseline: {
    type: "select",
    options: [
      "auto",
      "baseline",
      "center",
      "flex-end",
      "flex-start",
      "stretch",
    ],
  },
  all: {
    type: "select",
    options: ["initial", "inherit", "unset"],
  },
  animationComposition: {
    type: "select",
    options: ["none", "paused", "running"],
  },
  animationDelay: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["s", "ms"],
  },
  animationDirection: {
    type: "select",
    options: ["alternate", "alternate-reverse", "normal", "reverse"],
  },

  animationDuration: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["s", "ms"],
  },
  animationDirection: {
    type: "select",
    options: ["alternate", "alternate-reverse", "normal", "reverse"],
  },

  backgroundRepeat: {
    type: "select",
    options: ["no-repeat", "repeat", "repeat-x", "repeat-y", "space", "round"],
  },

  borderStyle: {
    type: "select",
    options: [
      "none",
      "solid",
      "dotted",
      "dashed",
      "double",
      "groove",
      "ridge",
      "inset",
      "outset",
    ],
  },

  boxSizing: {
    type: "select",
    options: ["content-box", "border-box"],
  },

  display: {
    type: "select",
    options: [
      "block",
      "inline",
      "inline-block",
      "none",
      "flex",
      "grid",
      "inline-flex",
      "inline-grid",
      "list-item",
      "run-in",
    ],
  },

  flexDirection: {
    type: "select",
    options: ["row", "row-reverse", "column", "column-reverse"],
  },

  flexWrap: {
    type: "select",
    options: ["nowrap", "wrap", "wrap-reverse"],
  },

  justifyContent: {
    type: "select",
    options: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },

  alignItems: {
    type: "select",
    options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
  },

  alignSelf: {
    type: "select",
    options: [
      "auto",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "stretch",
    ],
  },

  textAlign: {
    type: "select",
    options: ["left", "right", "center", "justify"],
  },

  verticalAlign: {
    type: "select",
    options: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"],
  },

  visibility: {
    type: "select",
    options: ["visible", "hidden", "collapse"],
  },

  whiteSpace: {
    type: "select",
    options: ["normal", "nowrap", "pre", "pre-wrap", "pre-line"],
  },

  wordWrap: {
    type: "select",
    options: ["normal", "break-word"],
  },

  cursor: {
    type: "select",
    options: [
      "auto",
      "default",
      "pointer",
      "move",
      "text",
      "wait",
      "help",
      "not-allowed",
      "zoom-in",
      "zoom-out",
    ],
  },

  overflow: {
    type: "select",
    options: ["visible", "hidden", "scroll", "auto"],
  },

  position: {
    type: "select",
    options: ["static", "relative", "absolute", "fixed", "sticky"],
  },

  resize: {
    type: "select",
    options: ["none", "both", "horizontal", "vertical"],
  },

  transitionTimingFunction: {
    type: "select",
    options: [
      "linear",
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "step-start",
      "step-end",
      "steps()",
    ],
  },

  transformOrigin: {
    type: "select",
    options: ["top", "right", "bottom", "left", "center"],
  },

  animationTimingFunction: {
    type: "select",
    options: [
      "linear",
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "steps()",
    ],
  },

  overflowWrap: {
    type: "select",
    options: ["normal", "break-word"],
  },

  objectFit: {
    type: "select",
    options: ["fill", "contain", "cover", "none", "scale-down"],
  },

  objectPosition: {
    type: "select",
    options: ["left", "right", "center", "top", "bottom", "x%", "y%"],
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

  fontSize: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "pt", "%"],
  },

  lineHeight: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%"],
  },

  margin: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%"],
  },

  padding: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%"],
  },

  borderWidth: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em"],
  },

  borderRadius: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em"],
  },

  top: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%"],
  },

  right: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%"],
  },

  bottom: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%"],
  },

  left: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%"],
  },

  boxShadowBlur: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px"],
  },

  boxShadowSpread: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px"],
  },

  transformScale: {
    type: "number",
    min: 0,
    max: 10,
  },

  letterSpacing: {
    type: "number",
    min: 0,
    max: 10,
    unitOptions: ["px", "rem", "em"],
  },

  textIndent: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em"],
  },

  textStrokeWidth: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px"],
  },

  animationDuration: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["s", "ms"],
  },

  transitionDuration: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["s", "ms"],
  },

  transitionDelay: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["s", "ms"],
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
  columnCount: {
    type: "number",
    min: 0,
    max: 100,
  },
  columnFill: {
    type: "select",
    options: ["auto", "balance", "balance-all"],
  },
  columnGap: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  columnRule: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  columnRuleStyle: {
    type: "select",
    options: [
      "none",
      "solid",
      "dotted",
      "dashed",
      "double",
      "groove",
      "ridge",
      "inset",
      "outset",
    ],
  },
  columnRuleWidth: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  columnSpan: {
    type: "select",
    options: ["none", "all"],
  },
  columnWidth: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%", "vh", "vw"],
  },
  columns: {
    type: "number",
    min: 0,
    max: 100,
  },
  contain: {
    type: "select",
    options: ["none", "strict", "content", "size", "layout", "style", "paint"],
  },
  containIntrinsicBlockSize: {
    type: "select",
    options: ["auto", "fill", "fit-content", "max-content", "min-content"],
  },
  containIntrinsicHeight: {
    type: "select",
    options: ["auto", "fill", "fit-content", "max-content", "min-content"],
  },
  containIntrinsicInlineSize: {
    type: "select",
    options: ["auto", "fill", "fit-content", "max-content", "min-content"],
  },
  containIntrinsicSize: {
    type: "select",
    options: ["auto", "fill", "fit-content", "max-content", "min-content"],
  },
  containIntrinsicWidth: {
    type: "select",
    options: ["auto", "fill", "fit-content", "max-content", "min-content"],
  },
  container: {
    type: "select",
    options: ["none", "strict", "content", "size", "layout", "style", "paint"],
  },
  containerType: {
    type: "select",
    options: ["none", "strict", "content", "size", "layout", "style", "paint"],
  },
  content: {
    type: "select",
    options: ["normal", "none", "counter", "attr"],
  },
  contentVisibility: {
    type: "select",
    options: ["visible", "hidden"],
  },
  counterIncrement: {
    type: "number",
    min: 0,
    max: 100,
  },
  counterReset: {
    type: "number",
    min: 0,
    max: 100,
  },
  counterSet: {
    type: "number",
    min: 0,
    max: 100,
  },
  cx: {
    type: "number",
    min: 0,
    max: 100,
  },
  cy: {
    type: "number",
    min: 0,
    max: 100,
  },
  d: {
    type: "select",
    options: [
      "none",
      "block",
      "inline",
      "inline-block",
      "flex",
      "grid",
      "inline-flex",
      "inline-grid",
      "list-item",
      "run-in",
    ],
  },
  descentOverride: {
    type: "number",
    min: 0,
    max: 100,
  },
  direction: {
    type: "select",
    options: ["ltr", "rtl"],
  },
  dominantBaseline: {
    type: "select",
    options: [
      "auto",
      "use-script",
      "no-change",
      "reset-size",
      "ideographic",
      "alphabetic",
      "hanging",
      "mathematical",
      "central",
      "middle",
      "text-after-edge",
      "text-before-edge",
    ],
  },
  emptyCells: {
    type: "select",
    options: ["show", "hide"],
  },
  fieldSizing: {
    type: "select",
    options: ["auto", "min-content", "max-content", "auto-fill", "auto-fit"],
  },
  fill: {
    type: "select",
    options: ["none", "auto", "paint", "stroke", "evenodd", "nonzero"],
  },
  fillOpacity: {
    type: "slider",
    min: 0,
    max: 1,
    step: 0.1,
  },
  fillRule: {
    type: "select",
    options: ["nonzero", "evenodd"],
  },
  filter: {
    type: "text",
  },
  flexBasis: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%"],
  },
  flexGrow: {
    type: "number",
    min: 0,
    max: 100,
  },
  flexShrink: {
    type: "number",
    min: 0,
    max: 100,
  },
  float: {
    type: "select",
    options: ["none", "left", "right"],
  },
  floodOpacity: {
    type: "number",
    min: 0,
    max: 1,
  },
  fontKerning: {
    type: "select",
    options: ["auto", "normal", "none"],
  },
  fontOpticalSizing: {
    type: "select",
    options: ["auto", "none"],
  },
  flex: {
    type: "number",
    min: 0,
    max: 100,
  },
  flexFlow: {
    type: "select",
    options: ["row", "row-reverse", "column", "column-reverse"],
  },
  fontDisplay: {
    type: "select",
    options: ["auto", "block", "swap", "fallback", "optional"],
  },
  fontPalette: {
    type: "select",
    options: ["auto", "light", "dark"],
  },
  fontSizeAdjust: {
    type: "number",
    min: 0,
    max: 100,
  },
  fontStretch: {
    type: "select",
    options: [
      "normal",
      "ultra-condensed",
      "extra-condensed",
      "condensed",
      "semi-condensed",
      "semi-expanded",
      "expanded",
      "extra-expanded",
      "ultra-expanded",
    ],
  },
  fontStyle: {
    type: "select",
    options: ["normal", "italic", "oblique"],
  },
  fontSynthesis: {
    type: "select",
    options: ["none", "weight", "style", "weight style"],
  },
  fontSynthesisSmallCaps: {
    type: "select",
    options: ["none", "weight", "style", "weight style"],
  },
  fontSynthesisStyle: {
    type: "select",
    options: ["none", "weight", "style", "weight style"],
  },
  fontSynthesisWeight: {
    type: "select",
    options: ["none", "weight", "style", "weight style"],
  },
  fontVariant: {
    type: "select",
    options: [
      "normal",
      "small-caps",
      "all-small-caps",
      "petite-caps",
      "unicase",
      "titling-caps",
      "fraktur",
      "slashed-zero",
    ],
  },
  fontVariantAlternates: {
    type: "select",
    options: ["normal", "historical-forms", "stylistic(0-20)"],
  },
  fontVariantCaps: {
    type: "select",
    options: [
      "normal",
      "small-caps",
      "all-small-caps",
      "petite-caps",
      "unicase",
      "titling-caps",
    ],
  },
  fontVariantEastAsian: {
    type: "select",
    options: [
      "normal",
      "jis78",
      "jis83",
      "jis90",
      "jis04",
      "simplified",
      "traditional",
    ],
  },
  fontVariantLigatures: {
    type: "select",
    options: [
      "normal",
      "none",
      "common-ligatures",
      "no-common-ligatures",
      "discretionary-ligatures",
      "no-discretionary-ligatures",
      "historical-ligatures",
      "no-historical-ligatures",
      "contextual",
    ],
  },
  fontVariantNumeric: {
    type: "select",
    options: [
      "normal",
      "lining-nums",
      "oldstyle-nums",
      "proportional-nums",
      "tabular-nums",
      "diagonal-fractions",
      "stacked-fractions",
      "ordinal",
      "slashed-zero",
    ],
  },
  fontVariantPosition: {
    type: "select",
    options: ["normal", "sub", "super"],
  },
  fontWeight: {
    type: "select",
    options: [
      "normal",
      "bold",
      "bolder",
      "lighter",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
    ],
  },
  gap: {
    type: "number",
    min: 0,
    max: 100,
    unitOptions: ["px", "rem", "em", "%"],
  },
  gridAutoColumns: {
    type: "select",
    options: ["auto", "min-content", "max-content", "auto-fill", "auto-fit"],
  },
  gridAutoFlow: {
    type: "select",
    options: ["row", "column", "dense"],
  },
  gridAutoRows: {
    type: "select",
    options: ["auto", "min-content", "max-content", "auto-fill", "auto-fit"],
  },
  gridColumn: {
    type: "number",
    min: 0,
    max: 100,
  },
  gridColumnEnd: {
    type: "number",
    min: -1,
    max: 100,
  },
  gridColumnGap: {
    type: "number",
    min: 0,
    max: 999,
    unitOptions: ["px", "rem", "em", "%"],
  },
  gridColumnStart: {
    type: "number",
    min: 0,
    max: 100,
  },
  gridGap: {
    type: "number",
    min: 0,
    max: 999,
    unitOptions: ["px", "rem", "em", "%"],
  },
  gridRow: {
    type: "number",
    min: 0,
    max: 100,
  },
  gridRowEnd: {
    type: "number",
    min: 0,
    max: 100,
  },
  gridRowGap: {
    type: "number",
    min: 0,
    max: 999,
    unitOptions: ["px", "rem", "em", "%"],
  },
  gridRowStart: {
    type: "number",
    min: 0,
    max: 100,
  },
  gridTemplateRows: {
    type: "select",
    options: ["auto", "min-content", "max-content", "auto-fill", "auto-fit"],
  },
};
