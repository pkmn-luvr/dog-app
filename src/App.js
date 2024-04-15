import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DogList from './DogList'; 
import DogDetails from './DogDetails'; 
import Nav from './Nav'; 
import './App.css';

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "path_to_whiskey_image",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: "path_to_duke_image",
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: "path_to_perry_image",
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "path_to_tubby_image",
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  };

  render() {
    return (
      <Router>
        <div className="app-container">
          <Nav dogs={this.props.dogs} />
          <div className="app-content">
            <Routes>
              <Route path="/dogs" element={<DogList dogs={this.props.dogs} />} />
              <Route path="/dogs/:name" element={<DogDetails dogs={this.props.dogs} />} />
              <Route path="*" element={<Navigate to="/dogs" replace />} /> 
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
