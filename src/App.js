import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayouts from "./Layouts/DefaultLayouts/DefaultLayouts";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayouts parentClass="App " component={Home} />}
      />
    </Routes>
  );
};

export default App;
