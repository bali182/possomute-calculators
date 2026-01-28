import { style } from "@vanilla-extract/css";

import { Dimensions } from "../styles/dimensions";
import { ThemeContract } from "../styles/themeContract.css";
import { Typography } from "../styles/typography";

export const nav = style({
  display: "flex",
  alignItems: "center"
});

export const tabList = style({
  display: "inline-flex",
  alignItems: "center",
  gap: Dimensions.tabsGap,
  padding: Dimensions.tabsContainerPadding,
  borderRadius: Dimensions.panelRadius,
  background: ThemeContract.colors.page.surfaceMuted,
  border: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`
});

export const tab = style({
  ...Typography.bodyStrong,
  textDecoration: "none",
  padding: Dimensions.tabPadding,
  borderRadius: Dimensions.tabRadius,
  color: ThemeContract.colors.text.secondary,
  background: ThemeContract.colors.page.surfaceMuted,
  border: `${Dimensions.borderThin} solid transparent`,
  transition: "all 160ms ease",
  selectors: {
    "&:focus-visible": {
      outline: "none",
      borderColor: ThemeContract.colors.accent.primary,
      boxShadow: `0 0 0 ${Dimensions.focusRing} ${ThemeContract.colors.input.focusRing}`
    }
  }
});

export const tabActive = style({
  color: ThemeContract.colors.text.primary,
  background: ThemeContract.colors.page.surface,
  borderColor: ThemeContract.colors.page.border,
  boxShadow: `${Dimensions.tabShadow} ${ThemeContract.colors.page.cardShadow}`
});
