import '../../styles/search.css';
import { liste_produits } from '../liste-produit/array-liste-produit'
import { Component } from 'react';
import ProduitCard from '../produit/card'



class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      productSearch_: "Escarpins à talons hauts",
      attributSearch_: "nom",

    };
  }


  render() {
  
    const listeFavoris = this.props.listeFavoris;
    const setListeFavoris = this.props.setListeFavoris;


    return (
      <>
        <div className="div-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input id="inputProductSearch" placeholder="Search" className="search-input"
            onKeyUp={() => this.setState({ productSearch_: document.getElementById("inputProductSearch").value })} />
        </div>

        
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <button
            onClick={() => this.setState({ attributSearch_: "nom" })}
          >Nom</button>
          <button onClick={() => this.setState({ attributSearch_: "marque" })} >Marque</button>
        </div >


        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          {liste_produits.filter(prod => prod.nom.includes( this.state.productSearch_) ).map((produit) =>
            < ProduitCard prod={produit}   listeFavoris={this.listeFavoris}
            setListeFavoris={this.setListeFavoris} />
          )}
        </div>

      </>
    );
  }
}

export default Search;
