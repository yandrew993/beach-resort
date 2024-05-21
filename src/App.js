import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms" element={<Rooms />} />

        <Route path="/rooms/:slug" element={<SingleRoom />} />

        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
