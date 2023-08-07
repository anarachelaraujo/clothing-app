import React, { useState } from "react";
import ClothingForm from "../components/ClothingForm";
import ConfirmationMessage from "../components/ConfirmationMessage";
import Header from "../components/Header";

const AddPiecePage = ({ onAddClothing }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddClothing = (newClothing) => {
    onAddClothing(newClothing);
    setShowConfirmation(true);
  };

  return (
    <div>
      <Header/>
      <h2>Add New Piece</h2>
      <ClothingForm onAddClothing={handleAddClothing} />
      {showConfirmation && <ConfirmationMessage />}
    </div>
  );
};

export default AddPiecePage;
