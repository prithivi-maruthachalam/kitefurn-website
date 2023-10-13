import { Route, Routes } from "react-router-dom";
import React from "react";
import Favicon from "react-favicon";

import Header from "./components/header.js";
import Home from "./components/home";
import ModularKitchens from "./components/modularKitchens";
import CustomInteriors from "./components/customInteriors";
import WorkInProgress from "./components/workInProgress.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/fonts.css";
import "./App.css";

import favIconImage from "./media/branding/logoIcon.png";

const App = () => {
  return (
    <div className="fluid-container text-center">
      <Favicon url={favIconImage} />

      <Header />

      <div className="fluid-container globalContainer">
        <Routes>
          <Route path="/modularKitchens" element={<ModularKitchens />}></Route>

          <Route path="/customInteriors" element={<CustomInteriors />}></Route>

          <Route path="/work-in-progress" element={<WorkInProgress />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
