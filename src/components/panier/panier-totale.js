import '../../styles/Panier/totale.css'
import React, { useEffect, useState } from "react";
import { liste_produits } from '../liste-produit/array-liste-produit'
import 'bootstrap/dist/css/bootstrap.min.css';
import InformationDeLivraison from './information-de-livraison.js'

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

        <div className="d-flex flex-column align-items-center justify-content-center ">
           
               
            <p></p><p></p>
                {panier.length <= 0 ? <div> 0.00 € </div> :

                    panier.map((panier_index) =>
                        liste_produits.filter(prod => prod.id == panier_index.id_produit ).map((prod) =>
                            <p> {prod.nom }     -    <strong> {panier_index.quantite} * {  (Math.round(prod.prix * 100) / 100).toFixed(2) } </strong> </p>
                        ))
                }
                <p></p>
                <p></p>
               <div style={{ "font-size": "20.5px"}}>  TOTAL : <strong>{(Math.round( sommeTotal* 100) / 100).toFixed(2)} € </strong></div>
               <p></p>
               <p></p>

          
            <button  id="paiement-btn">PAIEMENT</button>
          <InformationDeLivraison/>
           
         
        </div>
          



    );
}

export default PanierTotale;