import React, { Component } from 'react';
import util from '../util';
import '../App.css';
class Products extends Component {
    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <p id="title">{product.title}</p>
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn " onClick={(e) => this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));
        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
export default Products;
