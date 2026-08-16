import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WasteCategories from "./pages/WasteCategories";
import RecyclingTracker from "./pages/RecyclingTracker";
import Pledge from "./pages/Pledge";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waste-categories" element={<WasteCategories />} />
          <Route path="/tracker" element={<RecyclingTracker />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container text-center">
          
          <div className="footer-copy">
            © 2026 CleanCity+. All rights reserved.
          </div>
          <div className="footer-credit">
            Designed and developed by <strong>Faidah Adefila</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;