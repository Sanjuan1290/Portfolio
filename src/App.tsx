import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SecretUpload from "./pages/SecretUpload";
import Gallery from "./components/Gallery";

const Portfolio: React.FC = () => (
  <div className="bg-gradient-to-b from-[#0a0a0f] to-[#1c1c28] text-white min-h-screen">
    <Header />
    <Home />
    <About />
    <Gallery />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/secret/upload" element={<SecretUpload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;