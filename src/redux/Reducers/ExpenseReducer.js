import {ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE, FILTER_EXPENSE} from "../types";
import {monthList} from "../../util/DateUtil";
import moment from "moment";

const initialState = {
    expenseList:[],
    filteredExpenseList:[]
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
            let dum = [...state.expenseList];
            for(let i=0; i<dum.length; i++){
                if (dum[i].id === actions.payload.id){
                    dum[i].note = actions.payload.note
                    dum[i].categoryName = actions.payload.categoryName
                    dum[i].amount = actions.payload.amount
                    dum[i].date = actions.payload.date
                }
                console.log(dum)
                console.log(actions);
            }
            return {
                ...state,
                expenseList: [...dum]

            }
        case FILTER_EXPENSE:
            let filterByYear = state.expenseList.filter((value)=>{
                let dDate = new Date(value.date);
                let year = dDate.getFullYear()
                if (actions.payload.year === "All"){
                    return true;
                }else{
                    return year == actions.payload.year
                }
            })
            let filterByMonth = filterByYear.filter((value)=>{
                let dDate = new Date(value.date);
                let month = monthList[dDate.getMonth()+1]

                if (actions.payload.month === "All"){
                    return true;
                }else{
                    return month === actions.payload.month
                }
            })

            let filterByWeek = filterByMonth.filter((value)=>{
                let dDate = new Date(value.date);
                let cDate = dDate.getDate();
                if (actions.payload.week === "All"){
                    return true;
                }else if (actions.payload.week === "Week 1"){
                    return cDate>=0 && cDate<=7
                }else if (actions.payload.week === "Week 2"){
                    return cDate>7 && cDate<=14
                }else if (actions.payload.week === "Week 3"){
                    return cDate>14 && cDate<=21
                }else if (actions.payload.week === "Week 4"){
                    return cDate>21
                }
            })

            console.log(actions)

            return {
                ...state,
                filteredExpenseList: [
                    ...filterByWeek
                ]
            }
        default:
            return state;
    }
}
export default expenseReducer;
