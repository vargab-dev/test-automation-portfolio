import React, { useState } from "react";
import "../styles/Test.css";

function Test() {
  const [selectedOption, setSelectedOption] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");

  return (
    <div className="test-page">
      <h1>Test Page</h1>

      {/* Lista */}
      <h2>List</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      {/* Dropdown */}
      <h2>Dropdown</h2>
      <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <p>Selected: {selectedOption}</p>

      {/* Checkbox */}
      <h2>Checkbox</h2>
      <label>
        <input
          type="checkbox"
          checked={checkboxValue}
          onChange={() => setCheckboxValue(!checkboxValue)}
        />
        Accept terms and conditions
      </label>
      <p>{checkboxValue ? "Checked" : "Unchecked"}</p>

      {/* Radio Button */}
      <h2>Radio Buttons</h2>
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="radio1"
          checked={radioValue === "radio1"}
          onChange={(e) => setRadioValue(e.target.value)}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="radio2"
          checked={radioValue === "radio2"}
          onChange={(e) => setRadioValue(e.target.value)}
        />
        Option 2
      </label>
      <p>Selected: {radioValue}</p>
    </div>
  );
}

export default Test;