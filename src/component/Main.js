import React from 'react';

const Bugatti = {
  name: 'Bugatti',
  image: 'https://www.challenges.fr/assets/img/2018/08/27/cover-r4x3w1000-5b84072224873-pbc18-conference-09-jpg.jpg',
  price: '50',
  stock: 'In Stock',
};

const Camaro = {
    name: 'Camaro',
    image: 'https://www.tapeciarnia.pl/tapety/normalne/235359_chevrolet_camaro_zolty.jpg',
    price: '150',
    stock: 'In Stock',
  };

const Cars = [Bugatti,Camaro];

export default function Main () {
  return (
    <div class="row">
      {Cars.map (el => (
        <div class="card" style={{width: '300px', marginTop: '50px'}}>
          <div class="card-body">
            <img
              class="image-bottom"
              src={el.image}
              alt="Card example image"
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
