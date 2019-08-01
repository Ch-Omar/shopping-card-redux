import React from 'react';
import {connect} from 'react-redux'

 
 function Main ({Cars,nameFilter,stockFilter}) {
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
        carsTodisplay(Cars,nameFilter,stockFilter).map (el => (
        <div class="card" style={{width: '300px', marginTop: '100px', marginLeft:"20px"}}>
          <div class="card-body">
            <img
              class="image-bottom"
              src={el.image}
              alt=""
            />

            <h4 class="card-title">{el.name} </h4>
            <h5 class="card-subtitle">{el.stock}.</h5>
            <p class="card-text">price {el.price}$.</p>

            <button>Add!</button>
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
export default connect(MapStateToProps)(Main)