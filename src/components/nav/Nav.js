import './Nav.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Rediret } from "react-router-dom";


function Nav (){
	return(
        
        <div>
          <nav>
           <ul className="menu">

              <li className="item">
              <NavLink exact to='principal' activeClassName="active">INFORMACIÓN PRINCIPAL</NavLink>
              </li>

              <li className="item">
              <NavLink exact to='/experiencia' activeClassName="active">EXPERIENCIA</NavLink>
              </li>

           </ul>
          </nav>
        </div>
    

		);
} 
export default Nav;