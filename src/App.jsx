import "@/App.css";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/Home";
import { PlacePage } from "./pages/Place";
import { PresentsPage } from "./pages/Presents";
import { GiftsPage } from "./pages/Gifts";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout menuSpace={false} />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/" element={<MainLayout menuSpace={true} />}>
        <Route path="/local" element={<PlacePage />} />
        <Route path="/presentes" element={<PresentsPage />} />
        <Route path="/gifts" element={<GiftsPage />} />
      </Route>
    </Routes>
  );
}
