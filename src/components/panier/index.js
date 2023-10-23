import '../../App.css';
import Nav from '../nav.js'
import PanierListe from './panier-liste.js'
import ReductionBarreHorizontale from './reduction-barre-horizontale.js'
import PanierTotale from './panier-totale.js'
import PanierFormBonDeReduction from './panier-form-bon-de-reduction.js'
import PanierInfoLivraison from './panier-info-livraison.js'

function Panier() {
  return (

   
    <div className="App">
     
      <ReductionBarreHorizontale />
      <div className="panier-main">
        <div className="left">
          <PanierListe />
          <PanierInfoLivraison/>
        </div>
        <div className="right">
          <PanierTotale />
          <PanierFormBonDeReduction />

        </div>
      </div>

    </div>
  );
}

export default Panier;
