import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ComingSoonPage from "./pages/ComingSoon";
import { MENU_ITEMS } from "./constants";
import MentorsPage from "./pages/Mentors";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/mentors" replace />} />
          {MENU_ITEMS.map((item) => (
            <Route
              key={item.id}
              path={item.path}
              element={
                item.disabled ? (
                  <ComingSoonPage />
                ) : item.id === "mentors" ? (
                  <MentorsPage />
                ) : null
              }
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
