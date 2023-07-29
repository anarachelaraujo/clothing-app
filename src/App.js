import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddPiecePage from "./pages/AddPiecePage";
import TablePage from "./pages/TablePage";
import CombinePage from "./pages/Combine";

const App = () => {
  const [clothes, setClothes] = useState([]);

  const addClothing = (newClothing) => {
    setClothes([...clothes, newClothing]);
  };

  const removeClothing = (index) => {
    const updatedClothes = [...clothes];
    updatedClothes.splice(index, 1);
    setClothes(updatedClothes);
  };

  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<AddPiecePage onAddClothing={addClothing} />}
            />
            <Route
              path="/table"
              element={
                <TablePage clothes={clothes} onRemove={removeClothing} />
              }
            />
            <Route
              path="/combine"
              element={<CombinePage clothes={clothes} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
