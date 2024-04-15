import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({ dogs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
          <button className="nav-button" onClick={() => setIsOpen(!isOpen)}>
              Meet The Pups! {isOpen ? '▲' : '▼'}
          </button>
          {isOpen && (
              <ul className="dropdown-content">
                  <li className="dropdown-item">
                      <Link to="/dogs">Home</Link>  
                  </li>
                  {dogs.map(dog => (
                      <li key={dog.name} className="dropdown-item">
                          <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                      </li>
                  ))}
              </ul>
          )}
      </div>
    </div>
  );
}

export default Nav;
