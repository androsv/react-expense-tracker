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

        case 'SET_EXPENSES':
        return action.expenses;    
      
        default:return state;
    }
}

export default expensesReducer;