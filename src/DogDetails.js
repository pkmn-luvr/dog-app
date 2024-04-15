import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './DogDetails.css';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
  const imagePath = require(`./images/${dog.name.toLowerCase()}.jpg`);

  if (!dog) {
    return <Navigate to="/dogs" replace />;
  }

  return (
    <div className="details-container">
      <h2 className="details-header">{dog.name}</h2>
      <p className="details-age">Age: {dog.age}</p>
      <img src={imagePath} alt={dog.name} className="details-image" />
      <ul className="details-facts">
        {dog.facts.map((fact, index) => (
          <li key={index} className="details-fact">{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
