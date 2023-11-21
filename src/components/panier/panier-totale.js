import '../../styles/Panier/panier-totale.css'
import React, { useEffect, useState } from "react";
import { liste_produits } from '../liste-produit/array-liste-produit'

function calculeSommeTotale(panier) {

    let t = 0;
    panier.map((panier_index) =>
        liste_produits.filter(prod => prod.id == panier_index.id_produit).map((prod) =>
            t = t + prod.prix * panier_index.quantite
        )
    )
    

    return t;
}


function PanierTotale({ panier, numberArticle, setNumberArticle }) {
    const sommeTotal = calculeSommeTotale(panier)
    return (

        <div className="div-total-paiement">
            <h4>TOTAL</h4>
            <div className="somme">
               

                {panier.length <= 0 ? <div> 0.00 € </div> :

                    panier.map((panier_index) =>
                        liste_produits.filter(prod => prod.id == panier_index.id_produit ).map((prod) =>
                            <div> {prod.nom }     -    <strong> {panier_index.quantite} * {  (Math.round(prod.prix * 100) / 100).toFixed(2) } </strong> </div>
                        ))
                }
                <p></p>
                <p></p>
               <div style={{ "font-size": "20.5px"}}>  <strong>{(Math.round( sommeTotal* 100) / 100).toFixed(2)} € </strong></div>
            </div> 

            <div className="livraison-x">
                <div>Livraison</div>
                <select>
                    <option>Livraison Standard en Point de relais ...</option>
                </select>
            </div>
            <button  id="paiement-btn">PAIEMENT</button>
            {/* <div>
                NOUS ACCEPTIONS:
            </div>
            <div class="div-liste-carte"></div>
 */}

        </div>




    );
}

export default PanierTotale;