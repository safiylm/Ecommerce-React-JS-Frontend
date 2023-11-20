import Photo from "./photo"
import InfoProduit from "./info-produit";
import "../../styles/Produit/produit.css"
import { liste_produits } from '../liste-produit/array-liste-produit'



function Produit({panier}) {

    const queryParameters = new URLSearchParams(window.location.search)
    const id_param = queryParameters.get("id")


    return (
        <div className="div-photo-info">
            <Photo liste_photos={liste_produits[id_param].image_url}/>
            <InfoProduit info_prod={liste_produits[id_param]} />
        </div>

    );
}

export default Produit;
