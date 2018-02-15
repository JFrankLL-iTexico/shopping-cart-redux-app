import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions/productsActions';

import Product from '../components/Product';

import './App.css';

import SearchProducts from './search/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <SearchProducts
          goSearch={this.props.fetchProducts}
        />

        <div className="products-grid">
          {this.props.products.map((product, idx) => {
              const productBody = (
                <Product
                  key={`product-${idx.toString()}`}
                  product={product}
                />
              );
              return productBody;
            })}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: (query) => {
    dispatch(fetchProducts(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
