import { createStore } from 'redux';


const incrementBy = ({ incrementBy = 1 } = {} )=>{
    return{
        type:'INCREMENT',
        incrementBy
    }

}

const store = createStore((state = {count :0 },action) => {
    if(action.type === 'INCREMENT'){
        return{
            count : state.count + 1
        }
        
    }else {
        return state
    }

});



store.dispatch({
    type:'INCREMENT'
});


store.dispatch({
    type:'INCREMENT'
});


console.log(incrementBy({incrementBy:6}));

console.log(store.getState());