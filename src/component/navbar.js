import React from 'react';
import {connect} from 'react-redux'
import {SearchByName,SearchByStock} from '../redux/action/action'
import {Link} from 'react-router-dom'


function Navbar ({SearchByName=()=>{},SearchByStock}) {
  return (
    <div>
      <nav className="border fixed">
        <div className="nav-brand sm-3">
          <h4><Link to="/" style={{textDecoration: "none"}}>Shopping Card</Link></h4>

        </div>
        <div className="collapsible sm-9 row flex-spaces">
          <input id="collapsible2" type="checkbox" name="collapsible2" />
          <button>
            <label for="collapsible2">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </label>

          </button>

          <div className="collapsible-body row ">

          <ul class="inline">
        <li><input
                  style={{display: 'block'}}
                  className="input-block"
                  placeholder="search"
                  type="text"
                  id="paperInputs3"
                  onChange={
                    (e)=>SearchByName(e.target.value)}
                />
              </li>
              <label for="in stock" class="paper-radio">
              <input
                style={{display: 'inline'}}
                type="radio"
                name="paperRadios"
                id="in stock"
                value="option 1"
                onChange={(e)=>SearchByStock(e.target.id)}
                
              />

              <span> IN STOCK </span>
            </label>
            <label for="not in stock" class="paper-radio">
              <input
                style={{display: 'inline'}}
                type="radio"
                name="paperRadios"
                id="not in stock"
                value="option 2"
                onChange={(e)=>SearchByStock(e.target.id)}
              />
              <span class="card-subtitle">NOT IN STOCK</span>
            </label>
            <label for="all" class="paper-radio">

              <input
                style={{display: 'inline'}}
                type="radio"
                name="paperRadios"
                id="all"
                value="option 3"
                onChange={(e)=>SearchByStock(e.target.id)}
                
              />
              <span class="card-subtitle">All</span>
            </label>

            <li><Link to='/shop'  style={{textDecoration: "none"}}>Shop</Link></li>
      </ul>          </div>

        </div>
      </nav>
    </div>
  );
}

const mapsStateToProps=(state)=>{
  return {
    name:state.nameFilter
  }
}
const mapDispatchToProps=(dispatch)=>{
  
  return {
    SearchByName:(x)=>dispatch(SearchByName(x)),
    SearchByStock:(x)=>dispatch(SearchByStock(x))
    
  }
}
export default connect(mapsStateToProps,mapDispatchToProps)(Navbar)
