import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const demostate = {
 expense:[{
     id:'asddsafasdfqre',
     description:'March Rent',
     note:'this was rent for march',
     amount:1234,
     createdAt:0
 }],
 filters:{
     text:'rent',
     sortBy:'amount',
     startDate:undefined,
     endDate:undefined
 }
};

//ACTIONS -->

//ADD EXPENSE

const addExpense = ({description = '', note='', amount=0, createdAt=0}) => {

    return {
        type:'ADD_EXPENSE',

        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }


    }
    
};

//REMOVE EXPENSE

const removeExpense = (id) => {

    return{
        type:'REMOVE_EXPENSE',
        id
    }
}


//EDIT EXPENSE

const editExpense = (id,updates) => {
    return{
        type:'EDIT_EXPENSE',
        id,
        updates
    }
}

//EXPENSE REDUCER

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {

    switch(action.type){

        case 'ADD_EXPENSE':
        return state.concat(action.expense);//[...state,action.expense]

        case 'REMOVE_EXPENSE':
        return state.filter(({ id })=>{
            //console.log(action.id);
            return id !== action.id;
        });

        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if (expense.id===action.id){
                return Object.assign({},expense,action.updates);
            } 
                else 
                {
                    return expense
                }
            })
      
        default:return state;
    }
}



//SET FILTER TEXT

const setTextFilter = ((text="")=>{
    return {
        type:'SET_TEXT',
        text
    }

})

//SORT BY AMOUNT

const sortByAmount = ()=>{
    return {

        type:"SORT_BY_AMOUNT",
        sortBy:'amount'        
    }
}

//SORT BY DATE

const sortByDate = ()=>{
    return {
        
        type:"SORT_BY_DATE",
        sortBy:'date'        
    }
}

//SET START DATE

const setStartDate = (startDate=undefined)=>{
    return {
        type:'SET_START_DATE',
        startDate
    }
}

//SET END DATE


const setEndDate = (endDate=undefined)=>{
    return {
        type:'SET_END_DATE',
        endDate
    }
}

//FILTERS REDUCER

const filterReducerDefaultState = {

    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filtersReducer = (state = filterReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TEXT':
        return Object.assign({},state,{text:action.text});

        case 'SORT_BY_AMOUNT':
        return Object.assign({},state,{sortBy:action.sortBy});

        case 'SORT_BY_DATE':
        return Object.assign({},state,{sortBy:action.sortBy});

        case 'SET_START_DATE':
        return Object.assign({},state,{startDate:action.startDate});
        
        case 'SET_END_DATE':
        return Object.assign({},state,{endDate:action.endDate});

        default:return state;
    }

}

const store = createStore(combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
}));



const getVisibleExpenses = (expenses,filters)=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof filters.startDate !== 'number' || expense.createdAt >= filters.startDate;
        const endDateMatch =  typeof filters.endDate !== 'number' || expense.createdAt <= filters.endDate;
        const textMatch = typeof filters.text !== 'string' || expense.description.toLowerCase().includes(filters.text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if(filters.sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else{
            return a.amount < b.amount ? 1 : -1;
        }

    });
}

store.subscribe(()=>{


    const state = store.getState();
    const visiblExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visiblExpenses);


})
//store.dispatch(setStartDate(126));
const expenseOne = store.dispatch(addExpense({description:'Rent March',amount:'8000',createdAt:0}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:'100',createdAt:195}));
// store.dispatch(removeExpense(expenseOne.expense.id));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:200}))
//store.dispatch(setTextFilter('rent'));
 store.dispatch(sortByDate());
 store.dispatch(sortByAmount());
// store.dispatch(setTextFilter());



//store.dispatch(setEndDate('123'));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

