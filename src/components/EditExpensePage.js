import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense,startRemoveExpense} from '../actions/expenses'

const EditExpensePage = (props) => {
  return (
    <div>
    <div className="page-header">
    <div className="content-container">
    <h1>Edit Expense</h1>
    <button className="button__remove" onClick={()=>{

      // {console.log(props.match.params.id)}
 
       props.dispatch(startRemoveExpense({id:props.match.params.id}));
       props.history.push('/');
 
   }}>Remove Expense
   </button>
    </div>
    </div>

    <ExpenseForm expense={props.expense}
      onSubmit={(expense)=>{
      props.dispatch(startEditExpense(props.match.params.id,expense));
      props.history.push('/');
    }} />
    <div className="content-container">

  </div>
  </div>
  );
};


const mapStateToProps = (state,props)=>({expense:state.expenses.find((expense)=> expense.id === props.match.params.id)});

export default connect(mapStateToProps)(EditExpensePage);
