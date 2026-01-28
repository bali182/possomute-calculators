import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import * as styles from "./MainTabs.css";

type TabConfig = {
  key: string;
  to: string;
};

const Tabs: TabConfig[] = [
  { key: "nav.frame", to: "/frame" },
  { key: "nav.strap", to: "/strap" },
  { key: "nav.foam", to: "/foam" }
];

export const MainTabs: FC = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <div className={styles.tabList}>
        {Tabs.map((tab) => (
          <NavLink
            key={tab.key}
            to={tab.to}
            className={({ isActive }) =>
              isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab
            }
          >
            {t(tab.key)}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
