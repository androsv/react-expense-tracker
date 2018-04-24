import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {startSetExpenses, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import firebase from './firebase/firebase'
const store = configureStore();

// const unsubscribe = store.subscribe(()=>{
//     const state = store.getState();
//     const filteredExpenses = getVisibleExpenses(state.expenses,state.filters)
//     console.log(filteredExpenses);
// });


// const expenseOne = store.dispatch(addExpense({description:'Rent March',amount:'8000',createdAt:0}));
// const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:'100',createdAt:195}));


const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);


ReactDOM.render(<h1><center>Loading....</center></h1>, document.getElementById('app-root'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app-root'));
});

