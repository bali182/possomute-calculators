import en from "../locales/en_EN.json";

export type TranslationKey = keyof typeof en;

export type StrapInputs = {
  thickness: number;
  liningThickness: number;
  strapWidth: number;
  boxLength: number;
  boxHeight: number;
  woodThickness: number;
  magnetDiameter: number;
  magnetGap: number;
  stiffenerGap: number;
};

export type StrapSegmentType = "flat" | "corner" | "corner-fat" | "flat-end";

export type StrapSegment = {
  id: number;
  labelKey: TranslationKey;
  len: number;
  type: StrapSegmentType;
  startX: number;
  endX: number;
};

export type StrapSegmentInput = Omit<StrapSegment, "startX" | "endX">;

export type StrapHole = {
  x: number;
  r: number;
};

export type StrapStiffener = {
  len: number;
  x: number;
  endX: number;
  offset: number;
  distFromStart: number;
  distFromEnd: number;
};

export type StrapLining = {
  len: number;
  startX: number;
  endX: number;
  distFromStart: number;
};

export type StrapData = {
  segments: StrapSegment[];
  totalLength: number;
  hole1: StrapHole;
  hole2: StrapHole;
  magCenterYFromTop: number;
  punchDist1: number;
  punchDist2: number;
  stiffener: StrapStiffener;
  lining: StrapLining;
};
