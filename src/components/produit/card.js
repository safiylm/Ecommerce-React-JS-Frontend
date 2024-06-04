import "../../styles/Produit/produit.css"
import ButtonFavoris from '../favoris/button-favoris'



function ProduitCard({ produit }) {

  return (
    <div key={produit.id} className="div-un-produit">

      <a href={'/produit?id=' + produit.id}> <img src={produit.image_url[0]} alt={produit.nom}/>
      </a>

      <div className="d-flex flex-row align-items-center justify-content-between">

        <div>
          <a href={'/produit?id=' + produit.id}>
            <p>{produit.marque}</p>
            <p>{produit.nom}</p>
            <p>{produit.prix}€</p>
          </a>
        </div>
        <ButtonFavoris produitId={produit.id} />
      </div>
    </div >

  );
}

export default ProduitCard;
