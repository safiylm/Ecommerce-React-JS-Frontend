import '../../styles/Panier/panier-totale.css'
import React, { useEffect, useState } from "react";
import { liste_produits } from '../liste-produit/array-liste-produit'

function calculeSommeTotale (){

}



function PanierTotale({ panier, numberArticle, setNumberArticle }) {
    const [sommeTotal, setSommeTotale] = useState(0)
    return (

        <div className="div-total-paiement">
            <h4>TOTAL</h4>
            <div className="somme">
                <div>Sous-total</div>
                {panier.length <= 0 ? <div> 0.00 $ </div> :

                    panier.map((panier_index) =>
                        liste_produits.filter(prod => prod.id == panier_index).map((prod) =>
                       <div>{prod.prix}</div>
                        ))
                }
                <div>  {sommeTotal } $ </div>
            </div>
            <div className="livraison-x">
                <div>Livraison</div>
                <select>
                    <option>Livraison Standard en Point de relais ...</option>
                </select>
            </div>

            <button onClick={calculeSommeTotale()} id="paiement-btn">PAIEMENT</button>
            {/* <div>
                NOUS ACCEPTIONS:
            </div>
            <div class="div-liste-carte"></div>
 */}

        </div>




    );
}

export default PanierTotale;