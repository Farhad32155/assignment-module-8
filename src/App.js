import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IncomePage from "./pages/IncomePage.jsx";
import ExpensePage from "./pages/ExpensePage.jsx";
import Home from "./pages/Home.jsx"

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;