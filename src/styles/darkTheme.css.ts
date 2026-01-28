import { createTheme } from "@vanilla-extract/css";

import { Palette } from "./palette";
import { ThemeContract } from "./themeContract.css";

export const darkThemeClass = createTheme(ThemeContract, {
  colors: {
    page: {
      background: Palette.umber,
      backdrop: Palette.ink,
      surface: Palette.leatherDeep,
      surfaceMuted: Palette.ink,
      border: Palette.mocha,
      glowPrimary: Palette.glowTealDusk,
      glowSecondary: Palette.glowEmberDusk,
      cardShadow: Palette.shadowInkSoft,
      insetHighlight: Palette.insetIvorySoft
    },
    text: {
      primary: Palette.ivory,
      secondary: Palette.fog,
      muted: Palette.steel,
      accent: Palette.tealSoft,
      inverse: Palette.ink
    },
    accent: {
      primary: Palette.tealSoft,
      secondary: Palette.ember,
      danger: Palette.ember
    },
    input: {
      shadow: Palette.shadowInkSoft,
      focusRing: Palette.focusTealSoft
    },
    strap: {
      leather: Palette.leather,
      lining: Palette.tealSoft,
      stitch: Palette.ivory,
      hole: Palette.ink,
      stiffener: Palette.fog
    },
    svg: {
      woodLight: Palette.clay,
      woodMid: Palette.sand,
      woodDark: Palette.leatherDeep,
      guideBlue: Palette.sky,
      guideRed: Palette.ember,
      guideCyan: Palette.tealSoft,
      grid: Palette.ink
    }
  }
});
