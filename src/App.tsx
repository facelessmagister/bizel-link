import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusinessCard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;