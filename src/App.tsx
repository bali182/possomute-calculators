import type { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { StrapPage } from "./features/Strap/StrapPage";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StrapPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
