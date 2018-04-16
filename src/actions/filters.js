
//SET FILTER TEXT

export const setTextFilter = (text="")=>{
    return {
        type:'SET_TEXT',
        text
    }

}

//SORT BY AMOUNT

export const sortByAmount = ()=>{
    return {

        type:"SORT_BY_AMOUNT",
        sortBy:'amount'        
    }
}

//SORT BY DATE

export const sortByDate = ()=>{
    return {
        
        type:"SORT_BY_DATE",
        sortBy:'date'        
    }
}

//SET START DATE

export const setStartDate = (startDate=undefined)=>{
    return {
        type:'SET_START_DATE',
        startDate
    }
}

//SET END DATE


export const setEndDate = (endDate=undefined)=>{
    return {
        type:'SET_END_DATE',
        endDate
    }
}