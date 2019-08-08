import React from 'react';
import './App.css';
import MainComponent from "./MainComponent";

function App() {
  componentDidMount() {
    document.title = 'React Wiki';
  }
  
  return (
    <div className="App">
        <MainComponent />
    </div>
  );
}

export default App;
