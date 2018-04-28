import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpense from '../selectors/expenses'
import expenseTotal from '../selectors/expense-total';
import numeral from 'numeral';
const ExpenseList = (props) => (

    <div className="list-conatiner">
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            {
                props.expenses.length === 0
                ? (<p className="empty-text">No Expenses</p>)
                : ( props.expenses.map((expense) => {
                    return <ExpenseListItem {...expense}/>
                }))
            }

        </div>
    </div>
);

const mapStateToProps = (state) => {

    return {expenses: state.expenses}

}

function mapProps(state) {

    return {
        expenses: filterExpense(state.expenses, state.filters)

    }
}

const ConnectedExpenseList = connect(mapProps)(ExpenseList);

export default ConnectedExpenseList;