import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./layout/Navbar";
import Footer from "./layout/Footer";
import "./styles/style.css";

import Home from "./pages/Home"
import About from "./pages/About"
import ApartmentPage from "./pages/ApartmentPage"
import ErrorPage from "./pages/ErrorPage"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/locations/:locationId" element={<ApartmentPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
      <Footer />
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);