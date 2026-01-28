import { style } from "@vanilla-extract/css";

import { Dimensions } from "../../styles/dimensions";
import { ThemeContract } from "../../styles/themeContract.css";
import { Typography } from "../../styles/typography";

export const page = style({
  minHeight: "100vh",
  padding: Dimensions.pagePadding,
  backgroundColor: ThemeContract.colors.page.background,
  backgroundImage:
    `radial-gradient(${Dimensions.pageGlowPrimary} at 10% -10%, ${ThemeContract.colors.page.glowPrimary}, transparent 70%), radial-gradient(${Dimensions.pageGlowSecondary} at 90% 0%, ${ThemeContract.colors.page.glowSecondary}, transparent 65%)`,
  color: ThemeContract.colors.text.primary
});

export const card = style({
  margin: "0 auto",
  maxWidth: Dimensions.pageMaxWidth,
  background: ThemeContract.colors.page.surface,
  borderRadius: Dimensions.cardRadius,
  padding: Dimensions.cardPadding,
  border: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`,
  boxShadow: `${Dimensions.cardShadow} ${ThemeContract.colors.page.cardShadow}`,
  display: "flex",
  flexDirection: "column",
  gap: Dimensions.sectionGap
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: Dimensions.headerGap,
  borderBottom: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`,
  paddingBottom: Dimensions.headerPaddingBottom,
  flexWrap: "wrap"
});

export const title = style({
  ...Typography.headingLg,
  color: ThemeContract.colors.text.primary,
  margin: 0
});

export const totalBlock = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
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

export const visualizer = style({
  display: "flex",
  flexDirection: "column",
  gap: Dimensions.visualizerGap
});
