import '../../styles/search.css';
import { liste_produits } from '../liste-produit/array-liste-produit'
import { Component } from 'react';
import ProduitCard from '../produit/card'



class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      productSearch_: "_",
      attributSearch_: "nom",

    };
  }


  render() {



    return (
      <>
        <div className="div-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input id="inputProductSearch" placeholder="Search" className="search-input"
            onKeyUp={() => this.setState({ productSearch_: document.getElementById("inputProductSearch").value })} />
        </div>


        <div className='btn-search d-flex flex-wrap align-items-center justify-content-center'>
          {this.state.attributSearch_ === "nom" ?
            <button onClick={() => this.setState({ attributSearch_: "nom" })} style={{ borderBottom: "2px solid black" }}>Nom</button>
            :
            <button onClick={() => this.setState({ attributSearch_: "nom" })}>Nom</button>
          }

          {this.state.attributSearch_ === "marque" ?
            <button onClick={() => this.setState({ attributSearch_: "marque" })} style={{ borderBottom: "2px solid black" }}>Marque</button>
            :
            <button onClick={() => this.setState({ attributSearch_: "marque" })} >Marque</button>
          }


        </div >


        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          {this.state.attributSearch_ === "nom" &&
            liste_produits.filter(prod => prod.nom.toLowerCase().includes(this.state.productSearch_.toLowerCase())).map((produit) =>
              < ProduitCard produit={produit} />
            )
          }

          {this.state.attributSearch_ === "marque" &&
            liste_produits.filter(prod => prod.marque.toLowerCase().includes(this.state.productSearch_.toLowerCase())).map((produit) =>
              < ProduitCard produit={produit} />
            )
          }
        </div>

      </>
    );
  }
}

export default Search;
