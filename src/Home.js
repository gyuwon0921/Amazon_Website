import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return <div className = "home">
      <div className = "home__container">
          <img 
          className = "home__image"
          src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt = "" />

          <div className = "home__row">
              <Product title = "The lean startup" price = {29.99} image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating = {5}/>
              <Product title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
              price = {239.0} image = "https://m.media-amazon.com/images/I/91QlrgIeLOL._AC_SY450_.jpg"
              rating = {4}/>
          </div>

          <div className = "home__row">
              <Product title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
              price = {42349.0} image = "https://m.media-amazon.com/images/I/91QlrgIeLOL._AC_SY450_.jpg"
              rating = {5}/>
              <Product title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
              price = {9.0} image = "https://m.media-amazon.com/images/I/91QlrgIeLOL._AC_SY450_.jpg"
              rating = {2}/>
              <Product title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
              price = {39.0} image = "https://m.media-amazon.com/images/I/91QlrgIeLOL._AC_SY450_.jpg"
              rating = {3}/>
            
          </div>

          <div className = "home__row">
              <Product title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
              price = {2390.0} image = "https://m.media-amazon.com/images/I/91QlrgIeLOL._AC_SY450_.jpg"
              rating = {4}/>
          </div>
      </div>
  </div>;
}

export default Home;
