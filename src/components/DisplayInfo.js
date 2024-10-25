import React from "react";
import { useNavigate } from "react-router-dom";

function DisplayInfo({ numberData }) {
  const navigate = useNavigate();

  if (!numberData) {
    return <p>No data to display.</p>;
  }

  return (
    <div className="container">
      <div className="info-container">
        <h2>Information about {numberData.number}</h2>
        <p>Type: {numberData.type}</p>
        <p>Fact: {numberData.response}</p>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}

export default DisplayInfo;
