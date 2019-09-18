import React, {useState, useEffect} from 'react';
import './App.css';
import Palette from './Palette';
import colorHelper from './colorHelper';
import seedColors from './seedColors';
import { Switch, Route } from "react-router-dom";
import PaletteList from './PaletteList';
import SinglePalette from './SinglePalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
import {CSSTransition,TransitionGroup,} from 'react-transition-group';

function App(props) {
  const [palettes, setPalettes] = useState( JSON.parse(localStorage.getItem('palettes')) || seedColors);

  useEffect(() => {
    // Update palettes
    localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  const findPalette = (id) => {
    return palettes.find(palette => palette.id === id);
  }

  const addPalette = (palette) => {
    setPalettes([...palettes, palette]);
  }

  const removePalette = (id) => {
    setPalettes(palettes.filter(palette => palette.id !== id));
  }

  return (
    <div className='App'>
      <Route render={({location}) =>
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={500} classNames ='fade'>
            <Switch location={location}>
              <Route 
                exact path='/palette/new' 
                render={(routeProps) =><Page><NewPaletteForm {...routeProps} allPaletteName={palettes.map(palette => palette.paletteName)} addPalette={addPalette}/></Page>}
                />
              <Route 
                exact path='/:id/:colorId' 
                render={(routeProps) =><Page> <SinglePalette  {...routeProps} palette={colorHelper(findPalette(routeProps.match.params.id))}/></Page>}          
                />
              <Route 
                exact path='/:id' 
                render={(routeProps) =><Page> <Palette  {...routeProps} palette={colorHelper(findPalette(routeProps.match.params.id))}/></Page>}         
                />
              <Route 
                exact path='/' 
                render={(routeProps) =><Page> <PaletteList {...routeProps} palettes={palettes} removePalette={removePalette}/></Page>}       
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      }/>
    </div>
  );
}

export default App;
