import InformationsProduit from "./information";
import "../../styles/Produit/produit.css"
import { liste_produits } from '../liste-produit/array-liste-produit'
import PhotosProduit from "./photo";
import ProduitCard from "./card"
import InformationDeLivraison from '../panier/information-de-livraison'

function PageProduit({ setPanier }) {

  const queryParameters = new URLSearchParams(window.location.search)
  const id_param = queryParameters.get("id")
  const produit = liste_produits[id_param]

  return (
    <>
      <div className="div-photo-info">
        <PhotosProduit liste_photos={liste_produits[id_param].image_url} nomproduit={liste_produits[id_param].nom} />
        <InformationsProduit setPanier={setPanier}
          produit={liste_produits[id_param]}
          id_prod={id_param}
        />
      </div>

      <div className='informations-descriptive d-flex flex-wrap align-items-center justify-content-center'>
        <div className="informations-descriptive-item">
          <h2>Matière et entretien</h2>
          {
            produit.matiere_entretien.map((t) => (
              <p>{t}</p>
            ))
          }</div>
               <div className="informations-descriptive-item">

          <h2>Détails du produit</h2>
          {
            produit.detail_produit.map((t) => (
              <p>{t}</p>
            ))
          }
        </div>
        <div className="informations-descriptive-item">

          <h2>Taille & coupe</h2>
          {
            produit.taille_coupe.map((t) => (
              <p>{t}</p>
            ))
          }</div>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-center w-100">
        {(liste_produits[id_param].categorie != null) &&
          liste_produits.sort()
            .filter(prod => prod.categorie[0] === liste_produits[id_param].categorie[0]).
            filter((prod, index) => prod.sexe === liste_produits[id_param].sexe && index < 3).
            map((produit) =>
              < ProduitCard produit={produit} />
            )}
      </div>
      
      <br />
      <InformationDeLivraison />
    </>
  );
}

export default PageProduit;
