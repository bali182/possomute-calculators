import type { StrapData, StrapInputs, StrapSegment } from "../model/types";

export function calculateStrapData(inputs: StrapInputs): StrapData {
  const {
    thickness,
    liningThickness,
    strapWidth,
    boxLength,
    boxHeight,
    woodThickness,
    magnetDiameter,
    magnetGap,
    stiffenerGap,
  } = inputs;

  const PI = Math.PI;
  const cornerStandard = (PI * thickness) / 4;

  const radiusMainFat = thickness + liningThickness + 0.5 * thickness;
  const cornerFat = (PI * radiusMainFat) / 2;

  const magRadius = magnetDiameter / 2;

  const segments = buildSegments({
    boxHeight,
    boxLength,
    cornerStandard,
    cornerFat,
  });

  const segmentsWithPos = addSegmentPositions(segments);
  const totalLength = segmentsWithPos[segmentsWithPos.length - 1]?.endX ?? 0;

  const distFromBottom = woodThickness + magnetGap + magRadius;
  const distFromTop = boxHeight - distFromBottom;

  const hole1Abs = distFromTop;
  const seg9Start = segmentsWithPos[8]?.startX ?? 0;
  const hole2Abs = seg9Start + distFromTop;

  const punchDist1 = hole1Abs - magRadius;
  const punchDist2 = totalLength - (hole2Abs + magRadius);

  const segTop = segmentsWithPos[6];
  const stiffLenRaw = boxLength - 2 * woodThickness - 2 * stiffenerGap;
  const stiffLen = stiffLenRaw > 0 ? stiffLenRaw : 0;
  const stiffOffset = woodThickness + stiffenerGap;
  const stiffX = (segTop?.startX ?? 0) + stiffOffset;
  const stiffXEnd = stiffX + stiffLen;

  const radiusLining = thickness + 0.5 * liningThickness;
  const liningCornerLen = (PI * radiusLining) / 2;
  const liningTotalLen = boxLength + liningCornerLen + boxHeight;
  const liningStartX = segTop?.startX ?? 0;

  return {
    segments: segmentsWithPos,
    totalLength,
    hole1: { x: hole1Abs, r: magRadius },
    hole2: { x: hole2Abs, r: magRadius },
    magCenterYFromTop: distFromTop,
    punchDist1,
    punchDist2,
    stiffener: {
      len: stiffLen,
      x: stiffX,
      endX: stiffXEnd,
      offset: stiffOffset,
      distFromStart: stiffX,
      distFromEnd: totalLength - stiffXEnd,
    },
    lining: {
      len: liningTotalLen,
      startX: liningStartX,
      endX: totalLength,
      distFromStart: liningStartX,
    },
  };
}

type BuildSegmentsInput = {
  boxHeight: number;
  boxLength: number;
  cornerStandard: number;
  cornerFat: number;
};

function buildSegments(input: BuildSegmentsInput): StrapSegment[] {
  const { boxHeight, boxLength, cornerStandard, cornerFat } = input;

  return [
    {
      id: 1,
      labelKey: "segments.leftIn",
      len: boxHeight,
      type: "flat",
    },
    { id: 2, labelKey: "segments.corner1", len: cornerStandard, type: "corner" },
    {
      id: 3,
      labelKey: "segments.bottom",
      len: boxLength,
      type: "flat",
    },
    { id: 4, labelKey: "segments.corner2", len: cornerStandard, type: "corner" },
    { id: 5, labelKey: "segments.right", len: boxHeight, type: "flat" },
    { id: 6, labelKey: "segments.corner3", len: cornerStandard, type: "corner" },
    {
      id: 7,
      labelKey: "segments.topHollow",
      len: boxLength,
      type: "flat",
    },
    {
      id: 8,
      labelKey: "segments.fatTurn",
      len: cornerFat,
      type: "corner-fat",
    },
    {
      id: 9,
      labelKey: "segments.overlap",
      len: boxHeight,
      type: "flat-end",
    },
  ];
}

function addSegmentPositions(segments: StrapSegment[]): StrapSegment[] {
  let currentX = 0;
  return segments.map((segment) => {
    const item = { ...segment, startX: currentX, endX: currentX + segment.len };
    currentX += segment.len;
    return item;
  });
}
