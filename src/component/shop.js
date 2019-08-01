import React from 'react'
import {connect} from 'react-redux'

 function Shop({addList}) {
    return (
        
        <div>{
            addList.map((el,i)=>
            <div>
                <span>{i} </span>
                <img src={el.image} alt='' style={{width:'50px'}} />
                <button>+</button>
                <span>0</span>
                <button>-</button>
                <span>{el.price}</span>
                <button>X</button>
            </div>
            )}
        </div>
    )
}
function mapStateToProps(state){
    return{
        addList:state.shop
    }
}
export default connect(mapStateToProps)(Shop)
