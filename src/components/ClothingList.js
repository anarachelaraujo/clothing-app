import React from "react";

const ClothingList = ({ clothes, onRemove }) => {
  return (
    <table className="table1">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Color</th>
          <th>Picture</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clothes.map((clothing, index) => (
          <tr key={index}>
            <td>{clothing.type}</td>
            <td>{clothing.description}</td>
            <td>{clothing.color}</td>
            <td>
              <img
                src={clothing.photo}
                alt={clothing.type}
                style={{ width: "100px" }}
              />
            </td>
            <td>
              <button onClick={() => onRemove(index)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClothingList;
