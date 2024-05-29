import '../../styles/Panier/liste.css'
import CardProduitPanier from './card-article'
import { liste_produits } from '../liste-produit/array-liste-produit'

function ListeDeProduit({   numberArticle, setNumberArticle }) {


  return (
    <div className="div-mon-panier">
      <h1>
        MON PANIER
      </h1>
      {JSON.parse(localStorage.getItem('panier')).length <= 0 ? <p>Panier vide </p> :

        JSON.parse(localStorage.getItem('panier')).map((panier_index) =>
          liste_produits.filter(prod => prod.id == panier_index.produitId).map((prod) =>

            <CardProduitPanier produitId={prod.id}/>

          ))}

    </div>
  );
}

export default ListeDeProduit;