import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {startAddExpense} from '../actions/expenses';

const AddExpensePage = (props)=> {
    return(
    <div>
    <div className="page-header">
    <div className="content-container">
    <h1>Add Expense</h1>
    </div>
    </div>
    <div>
    <ExpenseForm
    onSubmit={(expense)=>{
        props.dispatch(startAddExpense(expense));
        props.history.push('/');
    }}
    />
    </div>
    </div>
    );
};

export default connect()(AddExpensePage);