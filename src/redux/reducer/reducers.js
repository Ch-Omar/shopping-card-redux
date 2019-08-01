import {Cars} from './cars'
import{ searchByName,searchByStock,add} from '../action/actionType'
const initialState={
    cars:Cars,
    nameFilter:'',
    stockFilter:'all',
    shop:[]
}
const reducersroot =(state=initialState,action)=>{
    switch(action.type){
        case searchByName:
            return {...state,nameFilter:action.payload}
        case searchByStock:
            return{...state,stockFilter:action.payload}
        case add:
            return {...state,shop:state.shop.concat(state.cars[action.payload])}
        default: return state
        }
}


export default reducersroot