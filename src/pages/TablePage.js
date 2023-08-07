import React from "react";
import ClothingList from "../components/ClothingList";
import Header from "../components/Header";

const TablePage = ({ clothes, onEdit, onRemove }) => {
  return (
    <div>
      <Header/>
      <ClothingList clothes={clothes} onRemove={onRemove} />
    </div>
  );
};

export default TablePage;
