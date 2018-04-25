export default (expenses=[])=>{
    if (expenses.length === 0){
        return 0;
    }else{
        let total = 0;
        const count = expenses.length;
        expenses.forEach((expense)=>{
            
            total = parseFloat(expense.amount) + total;
            //console.log("total = ",total)

         })
         return total;
         
    }
};