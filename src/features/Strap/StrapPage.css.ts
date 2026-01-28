import { style } from "@vanilla-extract/css";

import { Breakpoints } from "../../styles/breakpoints";
import { Dimensions } from "../../styles/dimensions";
import { ThemeContract } from "../../styles/themeContract.css";
import { Typography } from "../../styles/typography";

export const panel = style({
  background: ThemeContract.colors.page.surface,
  borderRadius: Dimensions.cardRadius,
  border: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`,
  boxShadow: `${Dimensions.shadowPrimary} ${ThemeContract.colors.page.cardShadow}`,
  overflow: "hidden",
  flex: 1,
  minHeight: 0
});

export const page = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: 0
});

export const split = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
  height: "100%",
  "@media": {
    [`screen and (max-width: ${Breakpoints.split})`]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "minmax(0, 1fr) minmax(0, 1fr)"
    }
  }
});

export const drawArea = style({
  background: ThemeContract.colors.page.surfaceMuted,
  padding: Dimensions.splitPanelPadding,
  overflow: "auto",
  minHeight: 0,
  display: "flex"
});

export const configArea = style({
  padding: Dimensions.splitPanelPadding,
  overflow: "auto",
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  gap: Dimensions.splitPanelGap,
  borderLeft: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`,
  "@media": {
    [`screen and (max-width: ${Breakpoints.split})`]: {
      borderLeft: "none",
      borderTop: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`
    }
  }
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: Dimensions.headerStackGap
});

export const title = style({
  ...Typography.headingMd,
  color: ThemeContract.colors.text.primary,
  margin: 0
});

export const totalBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: Dimensions.totalBlockGap
});

export const totalValue = style({
  ...Typography.numberLg,
  color: ThemeContract.colors.text.accent
});

export const totalLabel = style({
  ...Typography.label,
  color: ThemeContract.colors.text.muted
});

export const controls = style({
  background: ThemeContract.colors.page.surfaceMuted,
  borderRadius: Dimensions.panelRadius,
  padding: Dimensions.controlPadding,
  border: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`
});

export const controlsGrid = style({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(${Dimensions.gridMinColumn}, 1fr))`,
  gap: Dimensions.gridGap
});
