import React from 'react';
import {connect} from 'react-redux'
import {Add} from '../redux/action/action'
 function Main ({Cars,nameFilter,stockFilter,addCar}) {
  const carsTodisplay=(Cars,nameFilter, stockFilter)=>{
     return Cars.filter(
       el=>el.name.toLowerCase().includes(nameFilter.toLowerCase().trim())
       &&
       (stockFilter!=='all' ?
        el.stock.toLowerCase()===stockFilter.toLowerCase() :
        el.stock.includes(''))
       )
      
  }


  return (
    <div className="row">
      {
        carsTodisplay(Cars,nameFilter,stockFilter).map ((el,i) => (
        <div class="card" style={{width: '300px', marginTop: '50px'}} key={i} >
          <div class="card-body">
            <img
              class="image-bottom"
              src={el.image}
              alt="Card example image"
            />

            <h4 class="card-title">{el.name} </h4>
            <h5 class="card-subtitle">{el.stock}.</h5>
            <p class="card-text">price {el.price}$.</p>

            <button onClick={()=>addCar(i)}>Add!</button>
          </div>
        </div>
      ))}

    </div>
  );
}
const MapStateToProps=(state)=>{
return {
  Cars:state.cars,
  nameFilter:state.nameFilter,
  stockFilter:state.stockFilter
}

}
const MapDispatchToProps=(dispatch)=>{
  return {
    addCar:(x)=>dispatch(Add(x))
  }
}
export default connect(MapStateToProps,MapDispatchToProps)(Main)