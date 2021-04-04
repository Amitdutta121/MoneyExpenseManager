//validation service for editing and adding expense
export const validateAddExpense = (note,
                                   categorySelect,
                                   amount)=>{
    if (note == ""){
        return "You must add a note"
    }else if (categorySelect == "" || categorySelect == null){
        return "You must select a category"
    }else if(amount == "" || amount == 0){
        return "amount cannot be zero"
    }else{
        return "ok"
    }
}
