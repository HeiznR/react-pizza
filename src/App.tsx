import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
