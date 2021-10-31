import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Pokedex from "./containers/Pokedex";
import AppNavigator from "./components/AppNavigator";
import PokemonDetails from "./containers/PokemonDetails";


function App(){
  return(
    <Router>
        <AppNavigator />
        <Route exact path="/" component={Pokedex}/>
        <Route exact path="/pokemon/:id" component={PokemonDetails}/>
    </Router>
  )
}


export default App;