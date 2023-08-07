import React, { useState, useEffect } from "react";
import colors from "../colors.json";
import axios from "axios";

const ClothingForm = ({ onAddClothing }) => {
  const [type, setType] = useState("top");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [color, setColor] = useState("");

  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://127.0.0.1:5000/api/options")
      .then((response) => {
        setOptions(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !photo) {
      alert("Please fill in all fields");
      return;
    }
    const newClothing = {
      id: new Date().getTime(),
      type,
      description,
      photo,
      color,
    };
    onAddClothing(newClothing);
    setType("top");
    setDescription("");
    setPhoto("");
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select the type:
        <br></br>
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={type === option}
              onChange={() => setType(option)}
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        ))}
      </label>
      <label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description"
        />
      </label>
      <label>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Enter the url of the photo"
        />
      </label>
      <label>
        <select
          className="select-dropdown"
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="">Select a color</option>
          {colors.map((color, index) => (
            <option key={index} value={color.value}>
              {color.name}
            </option>
          ))}
          <span className="select-icon">&#9662;</span>
        </select>
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default ClothingForm;
