import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import CosaFacciamo from "./pages/CosaFacciamo";
import ServiceDetail from "./pages/ServiceDetail";
import Journal from "./pages/Journal";
import ArticleDetail from "./pages/ArticleDetail";
import { ContactProvider } from "./context/ContactContext";

export default function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progetti" element={<Projects />} />
          <Route path="/progetti/:id" element={<ProjectDetail />} />
          <Route path="/cosa-facciamo" element={<CosaFacciamo />} />
          <Route path="/cosa-facciamo/:id" element={<ServiceDetail />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:id" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
}
