import "../../styles/ListeProduit/index.css"
import { liste_produits } from '../liste-produit/array-liste-produit'
import ProduitCard from '../produit/card'


function ListeFavoris({ panier, addInPanier }) {
  

    return (
        <div className="div-liste-produits">
            {

                liste_produits.map((produit) =>
                   
                {panier.filter(p => p.id_produit == produit.id) &&
                
                < ProduitCard prod={produit} panier={panier} addInPanier={addInPanier} />
                }
            )

            }
        </div>
    );
}

export default ListeFavoris;
