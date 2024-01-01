import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Basket from "./Pages/Basket";
import { StoreProvider } from "./context and reducer/StoreContext";

function App() {
  return (
    <>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
