import '../../styles/Panier/totale.css'
import { liste_produits } from '../liste-produit/array-liste-produit'
import 'bootstrap/dist/css/bootstrap.min.css';

function calculeSommeTotale(panier) {

    let t = 0;
    JSON.parse(localStorage.getItem('panier')).map((panier_index) =>
        liste_produits.filter(prod => prod.id === panier_index.produitId).map((prod) =>
            t = t + prod.prix * panier_index.quantite
        )
    )
    return t;
}


function PanierTotale({  numberArticle, setNumberArticle }) {
    const sommeTotal = calculeSommeTotale(JSON.parse(localStorage.getItem('panier')))
    return (

        <div className="d-flex flex-column align-items-center justify-content-center ">

            {JSON.parse(localStorage.getItem('panier')).length <= 0 ? <div> 0.00 € </div> :

                JSON.parse(localStorage.getItem('panier')).map((panier_index) =>
                    liste_produits.filter(prod => prod.id === panier_index.produitId).map((prod) =>
                        <p> {prod.nom}     -    <strong> {panier_index.quantite} * {(Math.round(prod.prix * 100) / 100).toFixed(2)} </strong> </p>
                    ))
            }

            <div style={{ "font-size": "20.5px" }}>  TOTAL : <strong>{(Math.round(sommeTotal * 100) / 100).toFixed(2)} € </strong></div>
            <button id="paiement-btn">PAIEMENT</button>
        </div>
    );
}

export default PanierTotale;