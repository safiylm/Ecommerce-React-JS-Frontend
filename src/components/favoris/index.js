import "../../styles/ListeProduit/index.css"
import { liste_produits } from '../liste-produit/array-liste-produit'
import ProduitCard from '../produit/card'


function ListeFavoris({ listeFavoris, setListeFavoris  }) {

    return (

        <>
        <h1 style={{textAlign: "center", margin:"35px"}}>Les Favoris </h1>
        <div className="div-liste-produits">
         
            {listeFavoris.length <= 0 ? <p>Liste des produits favorites vide </p> :

            listeFavoris.map((panier_index) =>
                    liste_produits.filter(prod => prod.id == panier_index).map((prod) =>

                        <ProduitCard prod={prod}  listeFavoris={listeFavoris}
                        setListeFavoris={setListeFavoris}/>

                    ))}
        </div>
        </>
    );
}

export default ListeFavoris;
