import {ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY} from "../types";
const initialState = {
    categoryList:[]
}

const categoryReducer = (state= initialState,actions) =>{
    switch (actions.type){
        case ADD_CATEGORY:
            return{
                ...state,
                categoryList:state.categoryList.concat({
                        id:Math.random(),
                        name:actions.payload
                    })
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categoryList: [
                    ...state.categoryList.filter((value)=> value.id !== actions.payload)
                ]
            }
        case EDIT_CATEGORY:
            let object = state.categoryList.filter((value)=> value.id === actions.payload.id)
            object.name = actions.payload.name
            return {
                ...state,
                categoryList: [
                    ...state.categoryList,
                    ...object
                ]
            }
        default:
            return state;
    }
}
export default categoryReducer;
