import { Route, Routes } from "react-router-dom";
import { Course } from "./pages/Course";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Course /> } />
      <Route path="/lesson/:slug" element={ <Course /> } />
    </Routes>
  );
}
