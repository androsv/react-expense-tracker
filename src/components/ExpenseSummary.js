import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpense from '../selectors/expenses'
import expenseTotal from '../selectors/expense-total';
import numeral from 'numeral';

const ExpenseSummary = (props)=>{
    return(

    <h2>viewing {props.expenses.length} {props.expenses.length > 1 ? "expenses": "expense"} totalling {"₹ " } {numeral(expenseTotal(props.expenses)).format('0,0.00')}</h2>
    );
}

function mapStateToProps(state){

    return{
        expenses:filterExpense(state.expenses,state.filters)

    }
}


export default connect(mapStateToProps)(ExpenseSummary);