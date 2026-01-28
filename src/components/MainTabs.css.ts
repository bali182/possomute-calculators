import { style } from "@vanilla-extract/css";

import { Dimensions } from "../styles/dimensions";
import { ThemeContract } from "../styles/themeContract.css";
import { Typography } from "../styles/typography";

export const nav = style({
  display: "flex",
  alignItems: "center",
  width: "100%"
});

export const tabList = style({
  display: "inline-flex",
  alignItems: "center",
  gap: Dimensions.tabsGap,
  padding: Dimensions.tabsContainerPadding,
  width: "auto"
});

export const tab = style({
  ...Typography.bodyStrong,
  textDecoration: "none",
  padding: Dimensions.tabPadding,
  color: ThemeContract.colors.text.secondary,
  borderBottom: `${Dimensions.tabUnderline} solid transparent`,
  transition: "color 160ms ease, border-color 160ms ease",
  width: Dimensions.tabWidth,
  textAlign: "center",
  selectors: {
    "&:focus-visible": {
      outline: "none",
      borderColor: ThemeContract.colors.accent.primary
    }
  }
});

export const tabActive = style({
  color: ThemeContract.colors.text.primary,
  borderColor: ThemeContract.colors.accent.primary
});
