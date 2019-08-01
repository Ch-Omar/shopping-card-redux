import {searchByName,searchByStock} from './actionType'
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