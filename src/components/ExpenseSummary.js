import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpense from '../selectors/expenses'
import expenseTotal from '../selectors/expense-total';
import {Link} from 'react-router-dom';
import numeral from 'numeral';

const ExpenseSummary = (props)=>{
    return(
        <div className="page-header">
        <div className="content-container">
        <h2 className="page-header__title">viewing <span>{props.expenses.length}</span> {props.expenses.length > 1 ? "expenses": "expense"} totalling <span>{"₹ " } {numeral(expenseTotal(props.expenses)).format('0,0.00')}</span></h2>
        
        <div className="page-header__actions">
        <Link className="button__add"  to="/create">Add Expense</Link>
        </div>
        </div>
        </div>
        

    );
}

function mapStateToProps(state){

    return{
        expenses:filterExpense(state.expenses,state.filters)

    }
}


export default connect(mapStateToProps)(ExpenseSummary);