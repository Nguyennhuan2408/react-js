import React, { Component } from 'react'; class Product extends Component { render() { return (
<div style={{marginTop:100}}>

    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <a href="#" className="thumbnail">
                {this.props.name}
                    <img data-src="#" alt />
                </a>
                <p>
                    {this.props.price}
                </p>
        <p>
            <button>MUA NGAY</button>
        </p>
    </div>

</div>
); } } export default Product;