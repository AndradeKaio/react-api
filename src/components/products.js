import React from 'react'
import '../App.css';

class Products extends React.Component {

    constructor(products) {
        super();
        this.state = {
            products:products,
            search:"",
            filter:1,
        };
    }
    updateSearch() {
        this.setState({search:event.target.value});
    }
    updateFilter(){
        this.setState({filter:event.target.value});
    }
    
    render() {
        let filterProducts = this.props.products.filter(
            (product) => {
                if (this.state.filter == 1) {
                    return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                } else if (this.state.filter == 2) {
                    return product.price.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                } else if (this.state.filter == 3) {
                    return product.store.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                } else if (this.state.filter == 4) {
                    return product.store.location.city.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                } else if (this.state.filter == 5) {
                    return product.store.location.state.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            }  
        );
        return (
            <div>
            <ul>
                <li><a class="active" href="/">Obra Azul</a></li>
                <li><a href="#news">Departamentos</a></li>
                <li><a href="#contact">Novidades</a></li>
                <li><a href="#about">Contato</a></li>
            </ul>
              <center><h1 className="primary">Materiais</h1></center>
              <center><input type="text" className="input" placeholder="Busque um material" value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
              <select onChange={this.updateFilter.bind(this)}>
                  <option value="1" selected>Nome Produto</option>
                  <option value="2">Valor</option>
                  <option value="3">Fornecedor</option>
                  <option value="4">Cidade</option>
                  <option value="5">Estado</option>
              </select></center>
            <center>
              {filterProducts.map((product) => (
                <div className="card">
                  <div className="container">
                    <h3>{product.name}</h3>
                    <img className="image" src={product.picture} width="300" height="300"/>
                    <p><b>Preço:</b> R$ {product.price}</p>
                  </div>
                  <div className="bottom">
                    <button className="button" onClick="">Detalhes</button>
                    <button className="" onClick="">Comprar</button>
                  </div>
                </div>
              ))}
            </center>
            </div>
          )
    }
  }
  
// const Products = ({ products }) => {
//   return (
//     <div>
//       <center><h1>Product List</h1></center>
//       <input type="text" value="" onChange=""></input>

//       {products.map((product) => (
//         <div className="card">
//           <div className="container">
//             <h5>{product.name}</h5>
//             <img src={product.picture} width="50" height="50"/>
//             <h6>{product.price}</h6>
//             <p>{product.ean}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// };

export default Products