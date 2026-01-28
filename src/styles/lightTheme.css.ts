import { createTheme } from "@vanilla-extract/css";

import { Palette } from "./palette";
import { ThemeContract } from "./themeContract.css";

export const lightThemeClass = createTheme(ThemeContract, {
  colors: {
    page: {
      background: Palette.parchment,
      backdrop: Palette.sand,
      surface: Palette.ivory,
      surfaceMuted: Palette.mist,
      border: Palette.clay,
      glowPrimary: Palette.glowTealSoft,
      glowSecondary: Palette.glowEmberSoft,
      cardShadow: Palette.shadowUmber,
      insetHighlight: Palette.insetIvory
    },
    text: {
      primary: Palette.umber,
      secondary: Palette.slate,
      muted: Palette.steel,
      accent: Palette.teal,
      inverse: Palette.ivory
    },
    accent: {
      primary: Palette.teal,
      secondary: Palette.ember,
      danger: Palette.leatherDeep
    },
    input: {
      shadow: Palette.shadowInkStrong,
      focusRing: Palette.focusTeal
    },
    strap: {
      leather: Palette.leather,
      lining: Palette.teal,
      stitch: Palette.ivory,
      hole: Palette.umber,
      stiffener: Palette.slate
    },
    svg: {
      woodLight: Palette.clay,
      woodMid: Palette.sand,
      woodDark: Palette.leatherDeep,
      guideBlue: Palette.sky,
      guideRed: Palette.ember,
      guideCyan: Palette.tealSoft,
      grid: Palette.fog
    }
  }
});
