import '../../App.css';
import PanierListe from './panier-liste.js'
import ReductionBarreHorizontale from './reduction-barre-horizontale.js'
import PanierTotale from './panier-totale.js'
import PanierFormBonDeReduction from './panier-form-bon-de-reduction.js'
import PanierInfoLivraison from './panier-info-livraison.js'
import {useState} from "react"


function Panier({panier, setPanier, addInPanier}) {
  
  const [numberArticle, setNumberArticle] = useState(1);
  return ( 
    <div className="App">
     
      <ReductionBarreHorizontale />
      <div className="panier-main">
        <div className="left">
          <PanierListe panier={panier} setPanier={setPanier} numberArticle={numberArticle} setNumberArticle={setNumberArticle}/>
          <PanierInfoLivraison/>
        </div>
        <div className="right">
          <PanierTotale  panier={panier} numberArticle={numberArticle} setNumberArticle={setNumberArticle} />
          <PanierFormBonDeReduction />

        </div>
      </div>

    </div>
  );
}

export default Panier;
