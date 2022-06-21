import React from "react";
import { Route, Routes } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
