import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchNumberInfo } from "../services/numbersAPI";

function NumberInfoForm({ setNumberData }) {
  const [number, setNumber] = useState("");
  const [type, setType] = useState("trivia");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (number && isNaN(number)) {
      setError("Input must be a number");
      return;
    }

    try {
      const response = await fetchNumberInfo(number || "random", type);
      setNumberData({ response, type, number: number || "random" });
      navigate("/info");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Get Information about a Number</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Choose information type:
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="trivia">Trivia</option>
              <option value="math">Math</option>
              <option value="date">Date</option>
            </select>
          </label>
          <label>
            Enter a number (or leave blank for random):
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Get Information</button>
        </form>
      </div>
    </div>
  );
}

export default NumberInfoForm;
