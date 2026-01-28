import { createTheme } from "@vanilla-extract/css";

import { Palette } from "./palette";
import { ThemeContract } from "./themeContract.css";

export const lightThemeClass = createTheme(ThemeContract, {
  colors: {
    page: {
      background: Palette.slate200,
      backdrop: Palette.slate300,
      surface: Palette.white,
      surfaceMuted: Palette.slate50,
      border: Palette.slate400,
      glowPrimary: Palette.glowBlueSoft,
      glowSecondary: Palette.glowTealSoft,
      cardShadow: Palette.shadowCool,
      insetHighlight: Palette.insetLight
    },
    text: {
      primary: Palette.slate900,
      secondary: Palette.slate700,
      muted: Palette.slate500,
      accent: Palette.blue600,
      inverse: Palette.white
    },
    accent: {
      primary: Palette.blue600,
      secondary: Palette.teal500,
      danger: Palette.red500
    },
    input: {
      focusRing: Palette.focusBlue
    },
    strap: {
      leather: Palette.brown700,
      lining: Palette.blue500,
      stitch: Palette.slate50,
      hole: Palette.slate900,
      stiffener: Palette.slate300
    },
    svg: {
      woodLight: Palette.tan200,
      woodMid: Palette.tan400,
      woodDark: Palette.tan600,
      guideBlue: Palette.blue600,
      guideRed: Palette.red500,
      guideCyan: Palette.teal500,
      grid: Palette.slate200
    }
  }
});
