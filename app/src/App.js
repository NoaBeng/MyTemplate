import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
