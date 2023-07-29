import React from "react";
import colors from "../colors.json";

const ColorDropdown = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Select a color</option>
      {colors.map((color, index) => (
        <option key={index} value={color.value}>
          {color.name}
        </option>
      ))}
    </select>
  );
};

export default ColorDropdown;
