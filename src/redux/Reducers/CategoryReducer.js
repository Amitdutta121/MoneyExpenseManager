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
            let dum = [...state.categoryList];
            for(let i=0; i<dum.length; i++){
                if (dum[i].id === actions.payload.id){
                    dum[i].name = actions.payload.name
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
export default categoryReducer;
