import React from 'react';
import './App.css';
import Palette from './Palette';
import { Switch, Route, Link } from "react-router-dom";
import PaletteList from './PaletteList';

function App() {
  return (
    <div>
      <PaletteList />
    </div>
  );
}

export default App;
