import type { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainTabs } from "./components/MainTabs";
import * as styles from "./App.css";
import { FoamPage } from "./features/Foam/FoamPage";
import { FramePage } from "./features/Frame/FramePage";
import { StrapPage } from "./features/Strap/StrapPage";
import { lightThemeClass } from "./styles/lightTheme.css";

export const App: FC = () => {
  return (
    <div className={lightThemeClass}>
      <div className={styles.app}>
        <BrowserRouter>
          <div className={styles.layout}>
            <MainTabs />
            <Routes>
              <Route path="/" element={<Navigate to="/strap" replace />} />
              <Route path="/strap" element={<StrapPage />} />
              <Route path="/frame" element={<FramePage />} />
              <Route path="/foam" element={<FoamPage />} />
              <Route path="*" element={<Navigate to="/strap" replace />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};
