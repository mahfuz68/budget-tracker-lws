import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewAll from "./pages/ViewAll";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewAll" element={<ViewAll />} />
      </Routes>
    </Router>
  );
}

export default App;
