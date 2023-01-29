import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Info from "./pages/Info/Info";
import SignIn from "./pages/SignIn/SignIn";
import Admin from "./pages/Admin/Admin";
import Screenshots from "./pages/Screenshots/Screenshots"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/screens/:id" element={<Screenshots/>} />
      </Routes>
    </div>
  );
}

export default App;