import { style } from "@vanilla-extract/css";

import { Breakpoints } from "./styles/breakpoints";
import { Dimensions } from "./styles/dimensions";
import { ThemeContract } from "./styles/themeContract.css";

export const app = style({
  minHeight: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: Dimensions.pagePaddingWide,
  backgroundColor: ThemeContract.colors.page.background,
  "@media": {
    [`screen and (max-width: ${Breakpoints.pageWide})`]: {
      padding: Dimensions.pagePaddingMedium
    },
    [`screen and (max-width: ${Breakpoints.pageMedium})`]: {
      padding: Dimensions.pagePaddingNarrow
    }
  }
});

export const layout = style({
  margin: "0 auto",
  maxWidth: Dimensions.pageMaxWidth,
  display: "flex",
  flexDirection: "column",
  gap: Dimensions.sectionGap,
  flex: 1,
  minHeight: 0
});

export const content = style({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column"
});
