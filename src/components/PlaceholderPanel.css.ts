import { style } from "@vanilla-extract/css";

import { Dimensions } from "../styles/dimensions";
import { ThemeContract } from "../styles/themeContract.css";
import { Typography } from "../styles/typography";

export const panel = style({
  width: "100%",
  background: ThemeContract.colors.page.surface,
  borderRadius: Dimensions.cardRadius,
  border: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`,
  boxShadow: `${Dimensions.shadowPrimary} ${ThemeContract.colors.page.cardShadow}`,
  padding: Dimensions.cardPadding,
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  gap: Dimensions.headerStackGap,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
});

export const title = style({
  ...Typography.headingMd,
  margin: 0,
  color: ThemeContract.colors.text.primary
});

export const body = style({
  ...Typography.body,
  margin: 0,
  color: ThemeContract.colors.text.secondary
});
