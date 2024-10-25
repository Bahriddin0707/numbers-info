import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NumberInfoForm from "./components/NumberInfoForm";
import DisplayInfo from "./components/DisplayInfo";

function App() {
  const [numberData, setNumberData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<NumberInfoForm setNumberData={setNumberData} />}
        />
        <Route path="/info" element={<DisplayInfo numberData={numberData} />} />
      </Routes>
    </Router>
  );
}

export default App;
