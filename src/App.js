import React, { Component } from 'react';
import Products from './components/products';

class App extends Component {

  componentDidMount() {
    fetch('https://www.obrazul.com.br/api/recruitment/products/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data['products'] })
    })
    .catch(console.log)
  }

  state = {
    products: []
  }

  render() {

    return (
      <Products products={this.state.products} />
    );
  }
}

export default App;
