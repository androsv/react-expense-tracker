import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpense from '../selectors/expenses'
import expenseTotal from '../selectors/expense-total';
import numeral from 'numeral';
const ExpenseList = (props)=>(

    <div>
    <h3>Expense List</h3>
    
    {props.expenses.map((expense)=>{
        return <ExpenseListItem {...expense}/>
    })}
    </div>
);


const mapStateToProps = (state)=>{

    return{
        expenses:state.expenses

    }

}

function mapProps(state){

    return{
        expenses:filterExpense(state.expenses,state.filters)

    }
}

const ConnectedExpenseList = connect(mapProps)(ExpenseList);

export default ConnectedExpenseList;