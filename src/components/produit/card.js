import Photo from "./photo"
import InfoProduit from "./information";
import "../../styles/Produit/produit.css"
import { liste_produits } from '../liste-produit/array-liste-produit'



function ProduitCard({prod, panier, addInPanier }) {

    return (
        <div key={prod.id} className="div-un-produit">
              <a href={'/produit?id=' + prod.id}>
                <img src={prod.image_url[0]} />

                <div className="d-flex flex-row align-items-center justify-content-between">

                  <div><p>{prod.marque}</p> <p>{prod.nom}</p><p>{prod.prix}€</p>
                  </div>
                   {panier.filter(p => p.id_produit == prod.id).length <= 0 ?
                    <button id="btnAddHeart" >
                    {/* onclick={() => addInPanier(2)}  */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="pinkhot" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg> </button>
                    :
                     <button id="btnRemoveHeart">
                        {/* // onclick="removeInPanier()" */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="pinkhot" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                      </svg>
                    </button>
                  } 
                </div>
              </a>
                      
            </div>

    );
}

export default ProduitCard;
