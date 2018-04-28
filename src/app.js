import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter,{history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {startSetExpenses, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {firebase} from './firebase/firebase'
import {login,logout} from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Loader from './components/Loading'
// import firebase from './firebase/firebase'

const store = configureStore();

// const unsubscribe = store.subscribe(()=>{
//     const state = store.getState();
//     const filteredExpenses = getVisibleExpenses(state.expenses,state.filters)
//     console.log(filteredExpenses);
// });


// const expenseOne = store.dispatch(addExpense({description:'Rent March',amount:'8000',createdAt:0}));
// const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:'100',createdAt:195}));
 



ReactDOM.render(<Loader/>, document.getElementById('app-root'));

const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

let hasRendered=false


const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app-root'));
        hasRendered=true;

    }
}


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login({uid:user.uid,name:user.displayName}))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
        });

        if(history.location.pathname==='/'){

            history.push('/dashboard');
        }
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})