import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

function DogList({ dogs }) {
  return (
    <div className="dog-list-container">
  {dogs.map(dog => (
    <div key={dog.name} className="dog-item">
      <h1>{dog.name}</h1>
      <Link to={`/dogs/${dog.name.toLowerCase()}`}>
        <img src={require(`./images/${dog.name.toLowerCase()}.jpg`)} alt={dog.name} className="dog-image" />
      </Link>
    </div>
  ))}
</div>
  );
}

export default DogList;
