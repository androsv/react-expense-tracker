import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const ExpenseListItem = ({dispatch,id,description, amount, createdAt})=> (

    <div>
    <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
    <h5>{"₹ " }{numeral(amount).format('0,0.00')} { moment(createdAt).format('MMMM Do, YYYY')}</h5>

    </div>
);

export default ExpenseListItem;