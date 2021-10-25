import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Pokedex from "./containers/Pokedex";
import AppNavigator from "./components/AppNavigator";


function App(){
  return(
    <Router>
        <AppNavigator />
        <Route path="/" component={Pokedex}/>
    </Router>
  )
}


export default App;