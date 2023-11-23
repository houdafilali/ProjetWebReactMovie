import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { FilmPage } from "./pages/FilmPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<FilmPage />} />
    </Routes>
  );
}
