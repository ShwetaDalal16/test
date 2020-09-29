import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/main";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
