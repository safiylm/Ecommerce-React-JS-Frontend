import '../../styles/Panier/liste.css'
import CardProduitPanier from './card-article'
import { liste_produits } from '../liste-produit/array-liste-produit'

function ListeDeProduit({ panier, setPanier, numberArticle, setNumberArticle }) {


  return (
    <div className="div-mon-panier">
      <h4>
        MON PANIER
      </h4>
      {panier.length <= 0 ? <p>Panier vide </p> :

        panier.map((panier_index) =>
          liste_produits.filter(prod => prod.id == panier_index.id_produit).map((prod) =>
          
              <CardProduitPanier id_produit={prod.id}  setPanier={setPanier} panier={panier} />
          
          ))}

    </div>
  );
}

export default ListeDeProduit;