import React from 'react';
import './App.css';
import Product from './components/Product';
function App() {
    var product = [
      {
        id:1,
        name:"TAO LA DAN CHOi",
        price:"12323232d",
        status: true
      },
      {
        id:2,
        name:"TAO bbbbbbbbOi",
        price:"12323232d",
        status: true
      },
      {
        id:3,
        name:"TAO asdasdasi",
        price:"1666663232d",
        status: true
      },
      {
        id:4,
        name:"hheheh heh h ",
        price:"125123122d",
        status: false
      },
    ]
    let element = product.map((item,index)=>{
      if(item.status)
        return(
          <Product
            name={item.name}
            price={item.price}
            id={item.id}
          />
        )
    })
    return ( 
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <a className="navbar-brand">HOME</a>
          </nav>
          <div className="container">
            <div className="row">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   {element}
                </div>
            </div>
            </div>
          </div>
        </div>
    );
}

export default App;