import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const ExpenseListItem = ({dispatch,id,description, amount, createdAt})=> (

    
    <div className="list-group">
    
    <NavLink className="list-style" to={`/edit/${id}`}>
    <div className="list-group__item">
    <div>{description}</div>
    <div className="list-item">
    <div>
    {"₹ " }{numeral(amount).format('0,0.00')}
    </div> 
    <div>
    { moment(createdAt).format('MMMM Do, YYYY')}
    </div>
    </div>
    </div>
    </NavLink>
    
    </div>
    
);

export default ExpenseListItem;