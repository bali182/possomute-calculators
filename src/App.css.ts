import { style } from "@vanilla-extract/css";

import { Dimensions } from "./styles/dimensions";
import { ThemeContract } from "./styles/themeContract.css";

export const app = style({
  minHeight: "100vh",
  padding: Dimensions.pagePadding,
  backgroundColor: ThemeContract.colors.page.background,
  backgroundImage: `radial-gradient(${Dimensions.pageGlowPrimary} at 10% -10%, ${ThemeContract.colors.page.glowPrimary}, transparent 70%), radial-gradient(${Dimensions.pageGlowSecondary} at 90% 0%, ${ThemeContract.colors.page.glowSecondary}, transparent 65%)`
});

export const layout = style({
  margin: "0 auto",
  maxWidth: Dimensions.pageMaxWidth,
  display: "flex",
  flexDirection: "column",
  gap: Dimensions.sectionGap
});
