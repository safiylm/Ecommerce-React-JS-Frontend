import InformationsProduit from "./information";
import "../../styles/Produit/produit.css"
import { liste_produits } from '../liste-produit/array-liste-produit'
import PhotosProduit from "./photo";


function PageProduit({ setPanier}) {

    const queryParameters = new URLSearchParams(window.location.search)
    const id_param = queryParameters.get("id")


    return (
        <div className="div-photo-info">
            <PhotosProduit liste_photos={liste_produits[id_param].image_url} nomproduit={liste_produits[id_param].nom} />
            <InformationsProduit setPanier={setPanier} 
            produit={liste_produits[id_param]} 
            id_prod={id_param} 
            />
            
        </div>

    );
}

export default PageProduit;
