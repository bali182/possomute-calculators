import type { FC } from "react";

import { useTranslation } from "react-i18next";

import type { StrapData, StrapInputs } from "../../model/types";
import { ThemeContract } from "../../styles/themeContract.css";

import * as styles from "./StrapVisualizer.css";

export type StrapVisualizerProps = {
  data: StrapData;
  inputs: StrapInputs;
};

export const StrapVisualizer: FC<StrapVisualizerProps> = ({ data, inputs }) => {
  const { t } = useTranslation();
  const padY = 50;
  const padX = 10;
  const vbWidth = data.totalLength + padX * 2;
  const strapZoneHeight = inputs.strapWidth + padY * 2;
  const woodZoneHeight = inputs.boxHeight + 40;
  const vbHeight = strapZoneHeight + woodZoneHeight;
  const mmLabel = t("units.mm");

  const outlinePath = generateOutline(data.totalLength, inputs.strapWidth);
  const stitchPath = generateStitches(data.totalLength, inputs.strapWidth);

  return (
    <div className={styles.frame} id="printable-area">
      <div
        className={styles.gridArea}
        style={{ width: `${vbWidth}mm`, height: `${vbHeight}mm` }}
      >
        <svg
          className={styles.svg}
          width={`${vbWidth}mm`}
          height={`${vbHeight}mm`}
          viewBox={`0 0 ${vbWidth} ${vbHeight}`}
          xmlns="http://www.w3.org/2000/svg"
        >
        <defs>
          <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="2" height="2">
            <path
              d="M-1,1 l2,-2 M0,2 l2,-2 M1,3 l2,-2"
              stroke={ThemeContract.colors.text.primary}
              strokeWidth="0.2"
              opacity="0.3"
            />
          </pattern>
          <marker
            id="arrowBlue"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill={ThemeContract.colors.svg.guideBlue} />
          </marker>
          <marker
            id="arrowBlueReverse"
            markerWidth="6"
            markerHeight="6"
            refX="1"
            refY="3"
            orient="auto"
          >
            <path d="M6,0 L6,6 L0,3 z" fill={ThemeContract.colors.svg.guideBlue} />
          </marker>
          <marker
            id="tickBlue"
            markerWidth="2"
            markerHeight="6"
            refX="1"
            refY="3"
            orient="auto"
          >
            <rect x="0" y="0" width="1" height="6" fill={ThemeContract.colors.svg.guideBlue} />
          </marker>
          <marker
            id="arrowRed"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill={ThemeContract.colors.svg.guideRed} />
          </marker>
          <marker
            id="arrowRedReverse"
            markerWidth="6"
            markerHeight="6"
            refX="1"
            refY="3"
            orient="auto"
          >
            <path d="M6,0 L6,6 L0,3 z" fill={ThemeContract.colors.svg.guideRed} />
          </marker>
          <marker
            id="tickRed"
            markerWidth="2"
            markerHeight="6"
            refX="1"
            refY="3"
            orient="auto"
          >
            <rect x="0" y="0" width="1" height="6" fill={ThemeContract.colors.svg.guideRed} />
          </marker>
          <marker
            id="arrowCyan"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill={ThemeContract.colors.svg.guideCyan} />
          </marker>
          <marker
            id="tickCyan"
            markerWidth="2"
            markerHeight="6"
            refX="1"
            refY="3"
            orient="auto"
          >
            <rect x="0" y="0" width="1" height="6" fill={ThemeContract.colors.svg.guideCyan} />
          </marker>
        </defs>

        <g transform={`translate(${padX}, ${padY})`}>
          <rect
            x={data.lining.startX}
            y={0}
            width={data.lining.endX - data.lining.startX}
            height={inputs.strapWidth}
            fill="none"
            stroke={ThemeContract.colors.strap.lining}
            strokeWidth="1"
            strokeDasharray="4 2"
            opacity="0.35"
          />
          <path d={outlinePath} fill={ThemeContract.colors.strap.leather} fillOpacity="0.92" />

          {data.stiffener.len > 0 && (
            <g>
              <rect
                x={data.stiffener.x}
                y={(inputs.strapWidth - (inputs.strapWidth - 8)) / 2}
                width={data.stiffener.len}
                height={inputs.strapWidth - 8}
                fill="url(#diagonalHatch)"
                stroke={ThemeContract.colors.strap.stiffener}
                strokeWidth="0.3"
                strokeDasharray="2 1"
              />
              <text
                x={data.stiffener.x + data.stiffener.len / 2}
                y={inputs.strapWidth / 2 + 1}
                textAnchor="middle"
                fontSize="3"
                fill={ThemeContract.colors.text.primary}
                fontWeight="bold"
              >
                {t("labels.stiffener", { value: data.stiffener.len.toFixed(1) })}
              </text>
            </g>
          )}

          <path
            d={stitchPath}
            fill="none"
            stroke={ThemeContract.colors.strap.stitch}
            strokeWidth="0.6"
            strokeDasharray="4 1.5"
            strokeLinecap="round"
          />

          <circle
            cx={data.hole1.x}
            cy={inputs.strapWidth / 2}
            r={data.hole1.r}
            fill={ThemeContract.colors.strap.hole}
          />
          <circle
            cx={data.hole2.x}
            cy={inputs.strapWidth / 2}
            r={data.hole2.r}
            fill={ThemeContract.colors.strap.hole}
          />

          {data.stiffener.len > 0 && (
            <g>
              <line
                x1={0}
                y1={-18}
                x2={data.stiffener.x}
                y2={-18}
                stroke={ThemeContract.colors.svg.guideRed}
                strokeWidth="0.5"
                markerStart="url(#tickRed)"
                markerEnd="url(#arrowRed)"
              />
              <text
                x={data.stiffener.x / 2}
                y={-20}
                fontSize="3"
                fill={ThemeContract.colors.svg.guideRed}
                textAnchor="middle"
              >
                {t("labels.stiffenerStart", {
                  value: data.stiffener.distFromStart.toFixed(1)
                })}
              </text>
              <line
                x1={data.stiffener.x}
                y1={-18}
                x2={data.stiffener.x}
                y2={5}
                stroke={ThemeContract.colors.svg.guideRed}
                strokeWidth="0.2"
                strokeDasharray="1 1"
              />

              <line
                x1={data.stiffener.endX}
                y1={-18}
                x2={data.totalLength}
                y2={-18}
                stroke={ThemeContract.colors.svg.guideRed}
                strokeWidth="0.5"
                markerStart="url(#arrowRedReverse)"
                markerEnd="url(#tickRed)"
              />
              <text
                x={data.stiffener.endX + data.stiffener.distFromEnd / 2}
                y={-20}
                fontSize="3"
                fill={ThemeContract.colors.svg.guideRed}
                textAnchor="middle"
              >
                {t("labels.stiffenerEnd", {
                  value: data.stiffener.distFromEnd.toFixed(1)
                })}
              </text>
              <line
                x1={data.stiffener.endX}
                y1={-18}
                x2={data.stiffener.endX}
                y2={5}
                stroke={ThemeContract.colors.svg.guideRed}
                strokeWidth="0.2"
                strokeDasharray="1 1"
              />
            </g>
          )}

          <g>
            <line
              x1={0}
              y1={-28}
              x2={data.lining.startX}
              y2={-28}
              stroke={ThemeContract.colors.svg.guideCyan}
              strokeWidth="0.5"
              markerStart="url(#tickCyan)"
              markerEnd="url(#arrowCyan)"
            />
            <text
              x={data.lining.startX / 2}
              y={-30}
              fontSize="3"
              fill={ThemeContract.colors.svg.guideCyan}
              textAnchor="middle"
            >
              {t("labels.liningStart", { value: data.lining.distFromStart.toFixed(1) })}
            </text>
            <line
              x1={data.lining.startX}
              y1={-28}
              x2={data.lining.startX}
              y2={inputs.strapWidth}
              stroke={ThemeContract.colors.svg.guideCyan}
              strokeWidth="0.4"
              strokeDasharray="4 2"
            />
            <text
              x={data.lining.startX + data.lining.len / 2}
              y={-30}
              fontSize="3"
              fill={ThemeContract.colors.svg.guideCyan}
              fontWeight="bold"
              textAnchor="middle"
            >
              {t("labels.liningCut", { value: data.lining.len.toFixed(1) })}
            </text>
          </g>

          <g>
            <line
              x1={0}
              y1={-8}
              x2={data.hole1.x - data.hole1.r}
              y2={-8}
              stroke={ThemeContract.colors.svg.guideBlue}
              strokeWidth="0.5"
              markerEnd="url(#arrowBlue)"
              markerStart="url(#tickBlue)"
            />
            <text
              x={(data.hole1.x - data.hole1.r) / 2}
              y={-10}
              fontSize="3.5"
              fill={ThemeContract.colors.svg.guideBlue}
              fontWeight="bold"
              textAnchor="middle"
            >
              {data.punchDist1.toFixed(1)} {mmLabel}
            </text>
            <line
              x1={data.hole1.x - data.hole1.r}
              y1={-10}
              x2={data.hole1.x - data.hole1.r}
              y2={inputs.strapWidth / 2}
              stroke={ThemeContract.colors.svg.guideBlue}
              strokeWidth="0.2"
              strokeDasharray="1 1"
            />
          </g>
          <g>
            <line
              x1={data.hole2.x + data.hole2.r}
              y1={-8}
              x2={data.totalLength}
              y2={-8}
              stroke={ThemeContract.colors.svg.guideBlue}
              strokeWidth="0.5"
              markerStart="url(#arrowBlueReverse)"
              markerEnd="url(#tickBlue)"
            />
            <text
              x={data.hole2.x + data.hole2.r + data.punchDist2 / 2}
              y={-10}
              fontSize="3.5"
              fill={ThemeContract.colors.svg.guideBlue}
              fontWeight="bold"
              textAnchor="middle"
            >
              {data.punchDist2.toFixed(1)} {mmLabel}
            </text>
            <line
              x1={data.hole2.x + data.hole2.r}
              y1={-10}
              x2={data.hole2.x + data.hole2.r}
              y2={inputs.strapWidth / 2}
              stroke={ThemeContract.colors.svg.guideBlue}
              strokeWidth="0.2"
              strokeDasharray="1 1"
            />
          </g>

          {data.segments.map((segment, index) => {
            const centerX = segment.startX + segment.len / 2;
            const labelY = index % 2 === 0 ? inputs.strapWidth + 8 : inputs.strapWidth + 14;

            return (
              <g key={segment.id}>
                {index > 0 && (
                  <line
                    x1={segment.startX}
                    y1={0}
                    x2={segment.startX}
                    y2={inputs.strapWidth}
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                    strokeDasharray="1 1"
                  />
                )}
                <text
                  x={centerX}
                  y={labelY}
                  textAnchor="middle"
                  style={{
                    fontSize: "3px",
                    fill: ThemeContract.colors.text.secondary,
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  {t(segment.labelKey)}
                </text>
                <text
                  x={centerX}
                  y={labelY + 3}
                  textAnchor="middle"
                  style={{
                    fontSize: "3px",
                    fill: ThemeContract.colors.text.primary,
                    fontWeight: "bold"
                  }}
                >
                  {segment.len.toFixed(1)} {mmLabel}
                </text>
              </g>
            );
          })}
        </g>

        <g transform={`translate(${padX}, ${strapZoneHeight + 10})`}>
          <text x="0" y="-5" fontSize="4" fontWeight="bold" fill={ThemeContract.colors.text.primary}>
            {t("svg.woodProfile")}
          </text>
          {renderWoodProfile(inputs)}
          <circle
            cx={inputs.woodThickness / 2}
            cy={data.magCenterYFromTop}
            r={inputs.magnetDiameter / 2}
            fill="rgba(50, 50, 200, 0.3)"
            stroke={ThemeContract.colors.svg.guideBlue}
            strokeWidth="0.2"
          />
          <text
            x={inputs.woodThickness + 11}
            y={data.magCenterYFromTop + 1}
            fontSize="3"
            fill={ThemeContract.colors.svg.guideBlue}
          >
            {t("svg.magnetCenter")}
          </text>
          <line
            x1={inputs.woodThickness / 2}
            y1={inputs.boxHeight - inputs.woodThickness}
            x2={inputs.woodThickness / 2}
            y2={inputs.boxHeight - inputs.woodThickness - inputs.magnetGap}
            stroke={ThemeContract.colors.svg.guideRed}
            strokeWidth="0.6"
          />
          <text
            x={inputs.woodThickness / 2 + 2}
            y={inputs.boxHeight - inputs.woodThickness - inputs.magnetGap / 2 + 1}
            fontSize="3"
            fill={ThemeContract.colors.svg.guideRed}
            fontWeight="bold"
          >
            {t("svg.gapLabel", { value: inputs.magnetGap })}
          </text>
        </g>

        <text x={padX} y={vbHeight - 5} style={{ fontSize: "4px", fill: ThemeContract.colors.text.muted }}>
          {t("svg.gridSize")}
        </text>
        </svg>
      </div>
    </div>
  );
};

function generateOutline(totalLength: number, strapWidth: number): string {
  const radius = strapWidth / 2;
  return `M 0,0 L ${totalLength - radius},0 A ${radius},${radius} 0 0,1 ${
    totalLength - radius
  },${strapWidth} L 0,${strapWidth} Z`;
}

function generateStitches(totalLength: number, strapWidth: number): string {
  const inset = 4;
  const radius = strapWidth / 2 - inset;
  if (radius <= 0) {
    return "";
  }
  const arcCenterX = totalLength - strapWidth / 2;
  return `M ${inset},${inset} L ${arcCenterX},${inset} A ${radius},${radius} 0 0,1 ${arcCenterX},${
    strapWidth - inset
  } L ${inset},${strapWidth - inset} L ${inset},${inset}`;
}

function renderWoodProfile(inputs: StrapInputs): JSX.Element {
  const height = inputs.boxHeight;
  const length = inputs.boxLength;
  const thickness = inputs.woodThickness;

  return (
    <g stroke={ThemeContract.colors.text.primary} strokeWidth="0.5" fill={ThemeContract.colors.svg.woodMid}>
      <path
        d={`M 0,0 L ${thickness},0 L ${thickness},${height - thickness} L 0,${height} Z`}
        fill={ThemeContract.colors.svg.woodLight}
      />
      <path
        d={`M 0,${height} L ${length},${height} L ${length - thickness},${
          height - thickness
        } L ${thickness},${height - thickness} Z`}
        fill={ThemeContract.colors.svg.woodDark}
      />
      <path
        d={`M ${length},${height} L ${length},0 L ${length - thickness},0 L ${
          length - thickness
        },${height - thickness} Z`}
        fill={ThemeContract.colors.svg.woodLight}
      />
      <line
        x1="0"
        y1={height}
        x2={thickness}
        y2={height - thickness}
        stroke="rgba(0,0,0,0.3)"
      />
      <line
        x1={length}
        y1={height}
        x2={length - thickness}
        y2={height - thickness}
        stroke="rgba(0,0,0,0.3)"
      />
    </g>
  );
}
