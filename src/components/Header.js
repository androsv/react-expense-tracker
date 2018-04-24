import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

const Header = (props)=> {
    return(
    <div>
    <h1>Expensify</h1>
    <NavLink to="/" >Go Home</NavLink>
    <br/>
    <NavLink to="/create">Go to add</NavLink>
    <br/>
    <NavLink to="/help">Go to help</NavLink>
    <br/>
    <button onClick={props.signOut}>LOGOUT</button>
    <hr/>
    </div>
    );
};

const mapDispatchToProps = (dispatch)=>{
    return{
        signOut:()=>dispatch(startLogout())
    }
}

export default connect(undefined,mapDispatchToProps)(Header);