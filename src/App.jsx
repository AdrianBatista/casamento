import "@/App.css";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/Home";
import { PlacePage } from "./pages/Place";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout menuSpace={false} />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/" element={<MainLayout menuSpace={true} />}>
        <Route path="/local" element={<PlacePage />} />
      </Route>
    </Routes>
  );
}
