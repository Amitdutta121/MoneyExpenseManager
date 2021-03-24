import {ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE} from "../types";
const initialState = {
    expenseList:[]
}

const expenseReducer = (state= initialState,actions) =>{
    switch (actions.type){
        case ADD_EXPENSE:
            return{
                ...state,
                expenseList:state.expenseList.concat({
                    id:Math.random(),
                    note:actions.payload.note,
                    categoryName:actions.payload.categoryName,
                    amount:actions.payload.amount,
                    date:actions.payload.date
                })
            }
        case DELETE_EXPENSE:
            return {
                ...state,
                expenseList: [
                    ...state.expenseList.filter((value)=> value.id !== actions.payload)
                ]
            }
        case EDIT_EXPENSE:
            let dum = [...state.categoryList];
            for(let i=0; i<dum.length; i++){
                if (dum[i].id === actions.payload.id){
                    dum[i].note = actions.payload.note
                    dum[i].categoryName = actions.payload.categoryName
                    dum[i].amount = actions.payload.amount
                    dum[i].date = actions.payload.date
                }
                console.log(actions);
            }
            return {
                ...state,
                categoryList: [...dum]

            }
        default:
            return state;
    }
}
export default expenseReducer;
