import { globalStyle } from "@vanilla-extract/css";

import { Typography } from "./typography";
import { ThemeContract } from "./themeContract.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box"
});

globalStyle("html, body", {
  height: "100%"
});

globalStyle("body", {
  margin: 0,
  height: "100%",
  backgroundColor: ThemeContract.colors.page.background,
  color: ThemeContract.colors.text.primary,
  fontFamily: Typography.body.fontFamily,
  fontSize: Typography.body.fontSize,
  lineHeight: Typography.body.lineHeight
});

globalStyle("#root", {
  height: "100%"
});

globalStyle("button, input, select, textarea", {
  font: "inherit"
});

globalStyle("input[type='number']", {
  appearance: "textfield"
});

globalStyle("input[type='number']::-webkit-outer-spin-button", {
  margin: 0,
  WebkitAppearance: "none"
});

globalStyle("input[type='number']::-webkit-inner-spin-button", {
  margin: 0,
  WebkitAppearance: "none"
});

globalStyle("body *", {
  "@media": {
    print: {
      visibility: "hidden"
    }
  }
});

globalStyle("#printable-area, #printable-area *", {
  "@media": {
    print: {
      visibility: "visible"
    }
  }
});

globalStyle("#printable-area", {
  "@media": {
    print: {
      position: "absolute",
      left: "0",
      top: "0"
    }
  }
});
