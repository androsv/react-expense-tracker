import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import Header from "../components/Header";
import NotFoundPage from "../components/PageNotFound";
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';

const AppRouter = ()=> {
    return(
        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage}/>
        </Switch>
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;