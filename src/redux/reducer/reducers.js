import {Cars} from './cars'
import{ searchByName,searchByStock} from '../action/actionType'
const initialState={
    cars:Cars,
    nameFilter:'',
    stockFilter:'all'
}
const reducersroot =(state=initialState,action)=>{
    switch(action.type){
        case searchByName:
            return {...state,nameFilter:action.payload}
        case searchByStock:
            return{...state,stockFilter:action.payload}
        default: return state
        }
}


export default reducersroot