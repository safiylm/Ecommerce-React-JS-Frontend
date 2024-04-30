import "../../styles/ListeProduit/index.css"
import { liste_produits } from './array-liste-produit'
import ProduitCard from '../produit/card'


function ListeProduitHomme({  listeFavoris, setListeFavoris  }) {
    const queryParameters = new URLSearchParams(window.location.search)
    const categorie = queryParameters.get("ctg")


    return (
        <div className="div-liste-produits">
            {(categorie != null) ?

                liste_produits.filter(prod => prod.categorie[0] == categorie).filter(prod => prod.sexe == "Homme").map((produit) =>
                    < ProduitCard prod={produit} listeFavoris={listeFavoris}
                    setListeFavoris={setListeFavoris}/>
                )
                :
                liste_produits.filter(prod => prod.sexe == "Homme").map((produit) =>
                    < ProduitCard prod={produit} listeFavoris={listeFavoris}
                    setListeFavoris={setListeFavoris}/>
                )

            }
        </div>
    );
}

export default ListeProduitHomme;
