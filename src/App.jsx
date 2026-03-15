import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ScrollFadeIn from "./components/ScrollFadeIn";
import "./App.css";
import ServicePage from "./servicePage/ServicePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollFadeIn>
                <Navbar />
              </ScrollFadeIn>
              <ScrollFadeIn>
                <Landing />
              </ScrollFadeIn>
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <ServicePage />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
