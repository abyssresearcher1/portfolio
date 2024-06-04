import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
// import TagApp from "./tests/TagApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/" element={<TagApp />} /> */}
      </Routes>
    </>
  );
}

export default App;
