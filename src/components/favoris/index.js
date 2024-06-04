import "../../styles/ListeProduit/index.css"
import { liste_produits } from '../liste-produit/array-liste-produit'
import ProduitCard from '../produit/card'

function ListeFavoris() {

    return (
        <>

            <h1 style={{ textAlign: "center", margin: "35px" }}> Favoris </h1>
            <div className="div-liste-produits">

                {JSON.parse(localStorage.getItem('favoris')).length <= 0
                    ?
                    <p>Liste des produits favorites vide </p>
                    :
                    JSON.parse(localStorage.getItem('favoris')).map((panier_index) =>
                        liste_produits.filter(prod => prod.id === panier_index).map((prod) =>
                            <ProduitCard produit={prod} />
                        ))
                }
            </div>
        </>
    );
}




export default ListeFavoris;
