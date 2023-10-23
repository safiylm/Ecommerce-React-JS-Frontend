import '../../styles/panier-totale.css'

function PanierTotale() {
    return (

        <div className="div-total-paiement">
            <h4>TOTAL</h4>
            <div className="somme">
                <div>Sous-total</div>
                <div>61,98$</div>
            </div>
            <div className="livraison-x">
                <div>Livraison</div>
                <select>
                    <option>Livraison Standard en Point de relais ...</option>
                </select>
            </div>

            <button id="paiement-btn">PAIEMENT</button>
            {/* <div>
                NOUS ACCEPTIONS:
            </div>
            <div class="div-liste-carte"></div>
 */}

        </div>




    );
}

export default PanierTotale;