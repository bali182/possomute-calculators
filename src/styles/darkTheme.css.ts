import { createTheme } from "@vanilla-extract/css";

import { Palette } from "./palette";
import { ThemeContract } from "./themeContract.css";

export const darkThemeClass = createTheme(ThemeContract, {
  colors: {
    page: {
      background: Palette.midnight,
      backdrop: Palette.slate900,
      surface: Palette.slate800,
      surfaceMuted: Palette.slate700,
      border: Palette.slate500,
      glowPrimary: Palette.glowBlueDusk,
      glowSecondary: Palette.glowTealDusk,
      cardShadow: Palette.shadowDeep,
      insetHighlight: Palette.insetDark
    },
    text: {
      primary: Palette.slate50,
      secondary: Palette.slate300,
      muted: Palette.slate500,
      accent: Palette.blue400,
      inverse: Palette.midnight
    },
    accent: {
      primary: Palette.blue400,
      secondary: Palette.teal400,
      danger: Palette.red500
    },
    input: {
      focusRing: Palette.focusTeal
    },
    strap: {
      leather: Palette.brown700,
      lining: Palette.blue400,
      stitch: Palette.slate50,
      hole: Palette.slate900,
      stiffener: Palette.slate300
    },
    svg: {
      woodLight: Palette.tan200,
      woodMid: Palette.tan400,
      woodDark: Palette.tan600,
      guideBlue: Palette.blue400,
      guideRed: Palette.red500,
      guideCyan: Palette.teal400,
      grid: Palette.slate700
    }
  }
});
