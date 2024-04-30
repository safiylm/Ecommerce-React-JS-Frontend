import "../../styles/ListeProduit/index.css"
import { liste_produits } from './array-liste-produit'
import ProduitCard from '../produit/card'


function ListeProduitFemme({ panier, addInPanier }) {
    const queryParameters = new URLSearchParams(window.location.search)
    const categorie = queryParameters.get("ctg")

    return (
        <div className="div-liste-produits">
            {(categorie != null) ?

                liste_produits.filter(prod => prod.categorie[0] == categorie).filter(prod => prod.sexe == "Femme").map((produit) =>
                    < ProduitCard prod={produit} panier={panier} addInPanier={addInPanier} />
                )
                :
                liste_produits.filter(prod => prod.sexe == "Femme").map((produit) =>
                    < ProduitCard prod={produit} panier={panier} addInPanier={addInPanier} />
                )

            }
        </div>
    );
}

export default ListeProduitFemme;
