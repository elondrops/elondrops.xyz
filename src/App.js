import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { Routes, Route, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Timeline />
      <Footer />
    </div>
  );
};

export default App;
