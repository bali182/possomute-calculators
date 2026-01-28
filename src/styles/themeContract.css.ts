import { createThemeContract } from "@vanilla-extract/css";

export const ThemeContract = createThemeContract({
  colors: {
    page: {
      background: null,
      backdrop: null,
      surface: null,
      surfaceMuted: null,
      border: null,
      glowPrimary: null,
      glowSecondary: null,
      cardShadow: null,
      insetHighlight: null
    },
    text: {
      primary: null,
      secondary: null,
      muted: null,
      accent: null,
      inverse: null
    },
    accent: {
      primary: null,
      secondary: null,
      danger: null
    },
    input: {
      focusRing: null
    },
    strap: {
      leather: null,
      lining: null,
      stitch: null,
      hole: null,
      stiffener: null
    },
    svg: {
      woodLight: null,
      woodMid: null,
      woodDark: null,
      guideBlue: null,
      guideRed: null,
      guideCyan: null,
      grid: null
    }
  }
});
