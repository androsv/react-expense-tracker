import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseListItem = ({dispatch,id,description, amount, createdAt})=> (

    <div>
    <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
    <h5>Amount - {amount} Created at - {createdAt}</h5>

    </div>
);

export default ExpenseListItem;