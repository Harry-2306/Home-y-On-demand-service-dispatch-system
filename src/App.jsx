import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import ServicePage from "./servicePage/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
