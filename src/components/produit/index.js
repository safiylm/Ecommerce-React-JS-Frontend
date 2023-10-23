import Photo from "./photo"
import InfoProduit from "./info-produit";
import "../../styles/Produit/produit.css"

function Produit() {
    return (
        <div className="div-photo-info">
            <Photo />
            <InfoProduit />
        </div>

    );
}

export default Produit;
