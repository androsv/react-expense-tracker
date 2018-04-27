import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

const Header = (props)=> {
    return(
    <div className="header-section" >
    <div className="content-container">
    <div className="header-section__content">
    <NavLink className="header-section__title" to="/dashboard" ><h1>Expensify</h1></NavLink>
    <div className="header-section__logout">
    <h4>{props.name}</h4>
    <button className="button__logout" onClick={props.signOut}>LOGOUT</button>
    </div>
    </div>
    </div>
    </div>
    );
};

const mapDispatchToProps = (dispatch)=>{
    return{
        signOut:()=>dispatch(startLogout())
    }
}

const mapStateToProps = (state)=>{
    return{
        name:state.auth.name
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);