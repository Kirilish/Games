import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Info from "./pages/Info/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
