import {ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY} from "../types";

export const addCategory = (categoryName)=>(
    {
        type:ADD_CATEGORY,
        payload:categoryName
    }
)


export const removeCategory = (categoryId)=>(
    {
        type:DELETE_CATEGORY,
        payload:categoryId
    }
)


export const editCategory = (categoryId, categoryName)=>(
    {
        type:EDIT_CATEGORY,
        payload:{
            id:categoryId,
            name:categoryName
        }
    }
)
