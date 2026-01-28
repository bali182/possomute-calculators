import type { FC } from "react";
import { useMemo, useState } from "react";

import { useTranslation } from "react-i18next";

import type { StrapInputs } from "../../model/types";
import { calculateStrapData } from "../../utils/strapCalculations";

import { InputGroup } from "./InputGroup";
import * as styles from "./StrapPage.css";
import { StrapVisualizer } from "./StrapVisualizer";

export const StrapPage: FC = () => {
  const [thickness, setThickness] = useState(1.5);
  const [liningThickness, setLiningThickness] = useState(0.5);
  const [strapWidth, setStrapWidth] = useState(30);
  const [boxLength, setBoxLength] = useState(105);
  const [boxHeight, setBoxHeight] = useState(25);
  const [woodThickness, setWoodThickness] = useState(5);
  const [magnetDiameter, setMagnetDiameter] = useState(12);
  const [magnetGap, setMagnetGap] = useState(2);
  const [stiffenerGap, setStiffenerGap] = useState(3);

  const { t } = useTranslation();

  const data = useMemo(
    () =>
      calculateStrapData({
        thickness,
        liningThickness,
        strapWidth,
        boxLength,
        boxHeight,
        woodThickness,
        magnetDiameter,
        magnetGap,
        stiffenerGap
      }),
    [
      thickness,
      liningThickness,
      strapWidth,
      boxLength,
      boxHeight,
      woodThickness,
      magnetDiameter,
      magnetGap,
      stiffenerGap
    ]
  );

  const inputs: StrapInputs = {
    thickness,
    liningThickness,
    strapWidth,
    boxLength,
    boxHeight,
    woodThickness,
    magnetDiameter,
    magnetGap,
    stiffenerGap
  };

  const mmLabel = t("units.mm");

  return (
    <main>
      <section className={styles.panel}>
        <div className={styles.split}>
          <div className={styles.drawArea}>
            <StrapVisualizer data={data} inputs={inputs} />
          </div>
          <div className={styles.configArea}>
            <header className={styles.header}>
              <h1 className={styles.title}>{t("app.title")}</h1>
              <div className={styles.totalBlock}>
                <div className={styles.totalValue}>
                  {data.totalLength.toFixed(1)} {mmLabel}
                </div>
                <div className={styles.totalLabel}>{t("app.totalCutLength")}</div>
              </div>
            </header>
            <section className={styles.controls}>
              <div className={styles.controlsGrid}>
                <InputGroup
                  id="leather-thickness"
                  label={t("inputs.leatherThickness")}
                  value={thickness}
                  onChange={setThickness}
                  step={0.1}
                  unitLabel={t("units.mm")}
                />
                <InputGroup
                  id="lining-thickness"
                  label={t("inputs.liningThickness")}
                  value={liningThickness}
                  onChange={setLiningThickness}
                  step={0.1}
                  unitLabel={t("units.mm")}
                />
                <InputGroup
                  id="strap-width"
                  label={t("inputs.strapWidth")}
                  value={strapWidth}
                  onChange={setStrapWidth}
                  step={1}
                  unitLabel={t("units.mm")}
                />
                <InputGroup
                  id="box-length"
                  label={t("inputs.boxLength")}
                  value={boxLength}
                  onChange={setBoxLength}
                  step={1}
                  unitLabel={t("units.mm")}
                />
                <InputGroup
                  id="box-height"
                  label={t("inputs.boxHeight")}
                  value={boxHeight}
                  onChange={setBoxHeight}
                  step={1}
                  unitLabel={t("units.mm")}
                />
                <InputGroup
                  id="wood-thickness"
                  label={t("inputs.woodThickness")}
                  value={woodThickness}
                  onChange={setWoodThickness}
                  step={0.5}
                  unitLabel={t("units.mm")}
                />
                <InputGroup
                  id="magnet-diameter"
                  label={t("inputs.magnetDiameter")}
                  value={magnetDiameter}
                  onChange={setMagnetDiameter}
                  step={1}
                  unitLabel={t("units.mm")}
                />
                <InputGroup
                  id="magnet-gap"
                  label={t("inputs.magnetGap")}
                  value={magnetGap}
                  onChange={setMagnetGap}
                  step={0.5}
                  unitLabel={t("units.mm")}
                />
                <InputGroup
                  id="stiffener-gap"
                  label={t("inputs.stiffenerGap")}
                  value={stiffenerGap}
                  onChange={setStiffenerGap}
                  step={0.5}
                  unitLabel={t("units.mm")}
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};
