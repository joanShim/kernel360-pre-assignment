import Header from "./components/layout/Header";
import SideMenu from "./components/layout/SideMenu";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Mentors from "./pages/Home";
import HomePage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideMenu />
      <HomePage />
      <Routes>
        <Route path="/" element={<Navigate to="/mentors" replace />} />
        <Route path="/mentors" element={<Mentors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
