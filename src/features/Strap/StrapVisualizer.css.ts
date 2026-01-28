import { style } from "@vanilla-extract/css";

import { Dimensions } from "../../styles/dimensions";
import { ThemeContract } from "../../styles/themeContract.css";

export const frame = style({
  border: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`,
  borderRadius: Dimensions.panelRadius,
  background: ThemeContract.colors.page.surface,
  boxShadow: `inset 0 0 0 ${Dimensions.borderThin} ${ThemeContract.colors.page.insetHighlight}`,
  overflow: "auto",
  height: "100%",
  width: "100%",
  flex: 1,
  minHeight: 0
});

export const gridArea = style({
  display: "block",
  backgroundSize: "10mm 10mm",
  backgroundImage: `linear-gradient(to right, ${ThemeContract.colors.svg.grid} ${Dimensions.borderThin}, transparent ${Dimensions.borderThin}), linear-gradient(to bottom, ${ThemeContract.colors.svg.grid} ${Dimensions.borderThin}, transparent ${Dimensions.borderThin})`
});

export const svg = style({
  display: "block"
});
