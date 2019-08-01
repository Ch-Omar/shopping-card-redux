import React from 'react';

export default function navbar () {
  return (
    <div>
      <nav className="border fixed">
        <div className="nav-brand sm-3">
          <h4><a link="#">Shopping Card</a></h4>

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
                 
                />
              </li>
              <label for="paperRadios1" class="paper-radio">
              <input
                style={{display: 'inline'}}
                type="radio"
                name="paperRadios"
                id="paperRadios1"
                value="option 1"
              />

              <span> IN STOCK </span>
            </label>
            <label for="paperRadios2" class="paper-radio">
              <input
                style={{display: 'inline'}}
                type="radio"
                name="paperRadios"
                id="paperRadios2"
                value="option 2"
              />
              <span class="card-subtitle">NOT IN STOCK</span>
            </label>
            <label for="paperRadios3" class="paper-radio">

              <input
                style={{display: 'inline'}}
                type="radio"
                name="paperRadios"
                id="paperRadios3"
                value="option 3"
              />
              <span class="card-subtitle">All</span>
            </label>

            <li><div><a link="#">Shop</a></div></li>
      </ul>          </div>

        </div>
      </nav>
    </div>
  );
}
