import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
// import TagApp from "./tests/TagApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/" element={<TagApp />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
