"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  config: () => config,
  createTheme: () => createTheme,
  css: () => css,
  getCssText: () => getCssText,
  globalCss: () => globalCss,
  keyframes: () => keyframes,
  styled: () => styled,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);
var import_react = require("@stitches/react");

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  primary500: "#ffc600",
  secondary500: "#282829"
};
var fontSizes = {
  10: "0.625rem",
  12: "0.75rem",
  14: "0.875rem",
  16: "1rem",
  18: "1.125rem",
  20: "1.25rem",
  24: "1.5rem",
  28: "1.75rem",
  32: "2rem",
  36: "2.25rem",
  40: "2.5rem",
  48: "3rem",
  64: "4rem",
  72: "4.5rem",
  96: "6rem"
};
var fontWeights = {
  light: "300",
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts = {
  default: "Robot, sans-serif",
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space = {
  4: "0.25rem",
  8: "0.5rem",
  10: "0.625rem",
  12: "0.75rem",
  14: "0.875rem",
  16: "1rem",
  18: "1.125rem",
  20: "1.25rem",
  24: "1.5rem",
  28: "1.75rem",
  32: "2rem",
  36: "2.25rem",
  40: "2.5rem",
  48: "3rem",
  64: "4rem",
  72: "4.5rem",
  80: "5rem",
  256: "16rem",
  320: "20rem"
};

// src/index.ts
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: {
    ...import_react.defaultThemeMap,
    width: "space",
    height: "space"
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
});
