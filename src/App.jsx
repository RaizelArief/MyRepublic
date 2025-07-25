import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import { Routes, Route } from "react-router";
import Homepage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import SyaratPage from "./pages/SyaratPage";
import FaqPage from "./pages/FaqPage";
import TestimonialPage from "./pages/TestimonialPage";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white">
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/produk" element={<KelasPage />}/>
          <Route path="/syarat" element={<SyaratPage />}/>
          <Route path="/faq" element={<FaqPage />}/>
          <Route path="/testimonial" element={<TestimonialPage />}/>
        </Routes>
        <FooterComponent/> 
      </div>
    </>
  );
}

export default App;
