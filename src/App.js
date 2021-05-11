import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Dashboard path="/dashboard" />
    </Router>
  );
};

export default App;
