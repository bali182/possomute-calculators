import type { FC } from "react";
import { useTranslation } from "react-i18next";

import type { TranslationKey } from "../model/types";
import * as styles from "./PlaceholderPanel.css";

export type PlaceholderPanelProps = {
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
};

export const PlaceholderPanel: FC<PlaceholderPanelProps> = ({
  titleKey,
  bodyKey
}) => {
  const { t } = useTranslation();

  return (
    <section className={styles.panel}>
      <h1 className={styles.title}>{t(titleKey)}</h1>
      <p className={styles.body}>{t(bodyKey)}</p>
    </section>
  );
};
