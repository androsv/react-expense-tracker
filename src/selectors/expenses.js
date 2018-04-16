import moment from 'moment';


const getVisibleExpenses = (expenses,filters)=>{
    return expenses.filter((expense)=>{
        //console.log(expense.createdAt >= moment(filters.startDate).valueOf());
        const startDateMatch = filters.startDate ? expense.createdAt >= moment(filters.startDate).valueOf() : true;
        const endDateMatch =  filters.endDate ? expense.createdAt <= moment(filters.endDate).valueOf():true;
        const textMatch = typeof filters.text !== 'string' || expense.description.toLowerCase().includes(filters.text.toLowerCase());
        //console.log(startDateMatch);
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if(filters.sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else{
            return a.amount < b.amount ? 1 : -1;
        }

    });
}

export default getVisibleExpenses;