import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPiecePage from "./pages/AddPiecePage";
import TablePage from "./pages/TablePage";
import CombinePage from "./pages/CombinePage";
import Register from "./pages/RegisterPage";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";

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
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/addClothes"
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
