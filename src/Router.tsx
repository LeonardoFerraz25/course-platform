import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Course } from "./pages/Course";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Course /> } />
      <Route path="/lesson/:slug" element={ <Course /> } />
      <Route path="/about" element={ <About /> } />
    </Routes>
  );
}
