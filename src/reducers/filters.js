//FILTERS REDUCER
import moment from 'moment';

const filterReducerDefaultState = {

    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
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
export default filtersReducer;