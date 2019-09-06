import React, {useState} from 'react';
import './App.css';
import Palette from './Palette';
import colorHelper from './colorHelper';
import seedColors from './seedColors';
import { Switch, Route, Link } from "react-router-dom";
import PaletteList from './PaletteList';
import SinglePalette from './SinglePalette';
import NewPaletteForm from './NewPaletteForm';

function App(props) {
  const [palettes, setPalettes] = useState(seedColors);
  const findPalette = (id) => {
    return seedColors.find(palette => palette.id === id);
  }

  const addPalette = (palette) => {
    setPalettes([...palettes, palette]);
  }


  return (
    <Switch>
      <Route exact path='/palette/new' render={(routeProps) => <NewPaletteForm {...routeProps} allPaletteName={palettes.map(palette => palette.paletteName)} addPalette={addPalette}/>}/>
      <Route exact path='/:id/:colorId' render={(routeProps) => <SinglePalette  {...routeProps} palette={colorHelper(findPalette(routeProps.match.params.id))}/>}/>
      <Route exact path='/:id' render={(routeProps) => <Palette  {...routeProps} palette={colorHelper(findPalette(routeProps.match.params.id))}/>}/>
      <Route exact path='/' render={(routeProps) => <PaletteList {...routeProps} palettes={palettes}/>}/>
    </Switch>
  );
}

export default App;
