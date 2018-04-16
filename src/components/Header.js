import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const Header = ()=> {
    return(
    <div>
    <h1>Expensify</h1>
    <NavLink to="/" >Go Home</NavLink>
    <br/>
    <NavLink to="/create">Go to add</NavLink>
    <br/>
    <NavLink to="/help">Go to help</NavLink>
    <hr/>
    </div>
    );
};


export default Header;