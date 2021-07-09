
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Parte1 from './components/parte1/Parte1';
import Parte2 from './components/parte2/Parte2';
import Exposiciones1 from './components/exposiciones1/Exposiciones1';
import Exposiciones2 from './components/exposiciones2/Exposiciones2';
import Principal from './paginas/principal/Principal';
import Experiencia from './paginas/experiencia/Experiencia';
import Error404 from './components/error404/Error404';
import Footer from './components/footer/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
            <Switch>
               <Route exact path="/principal">
               <Principal />
               </Route>
               <Route exact path="/experiencia">
               <Experiencia />
               </Route>
               <Route exact path="/"> 
               <Principal />  
               </Route>    
               <Route path="*">
               <Error404 />
               </Route>
           </Switch>   
      </Router>
    </div>
  );
}

export default App;
