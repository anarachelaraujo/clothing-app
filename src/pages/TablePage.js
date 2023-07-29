import React from "react";
import ClothingList from "../components/ClothingList";

const TablePage = ({ clothes, onEdit, onRemove }) => {
  return (
    <div>
      <ClothingList clothes={clothes} onRemove={onRemove} />
    </div>
  );
};

export default TablePage;
