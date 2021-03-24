import {ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE} from "../types";

export const addExpense = (note, categoryName, amount, date)=>(
    {
        type:ADD_EXPENSE,
        payload:{
            note,
            categoryName,
            amount,
            date
        }
    }
)


export const removeExpense = (id)=>(
    {
        type:DELETE_EXPENSE,
        payload:id
    }
)


export const editExpense = (id, note, categoryName, amount)=>(
    {
        type:EDIT_EXPENSE,
        payload:{
            id:id,
            note,
            categoryName,
            amount,
            date
        }
    }
)
