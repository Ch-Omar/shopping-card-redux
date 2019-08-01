import {searchByName,searchByStock,add} from './actionType'
 export const SearchByName=(payload)=>{
return{
    type:searchByName,
    payload
}
}
export const SearchByStock=(payload)=>{
    return{
        type:searchByStock,
        payload
    }
}
export const Add =(payload)=>{
    return{
        type:add,
        payload
    }
}