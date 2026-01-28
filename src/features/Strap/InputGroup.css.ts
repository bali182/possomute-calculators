import { style } from "@vanilla-extract/css";

import { Dimensions } from "../../styles/dimensions";
import { ThemeContract } from "../../styles/themeContract.css";
import { Typography } from "../../styles/typography";

export const group = style({
  display: "flex",
  flexDirection: "column",
  gap: Dimensions.inputGap
});

export const labelRow = style({
  display: "flex",
  alignItems: "baseline",
  gap: Dimensions.inputLabelGap
});

export const label = style({
  ...Typography.label,
  color: ThemeContract.colors.text.muted
});

export const unit = style({
  ...Typography.unit,
  color: ThemeContract.colors.text.muted
});

export const input = style({
  padding: Dimensions.fieldPadding,
  borderRadius: Dimensions.fieldRadius,
  border: `${Dimensions.borderThin} solid ${ThemeContract.colors.page.border}`,
  background: ThemeContract.colors.page.surface,
  color: ThemeContract.colors.text.primary,
  boxShadow: `${Dimensions.shadowPrimary} ${ThemeContract.colors.page.cardShadow}`,
  transition: "border-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: ThemeContract.colors.accent.primary,
      boxShadow: `0 0 0 ${Dimensions.focusRing} ${ThemeContract.colors.input.focusRing}`
    }
  }
});
