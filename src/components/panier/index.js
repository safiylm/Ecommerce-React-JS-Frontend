import '../../App.css';
import ListeDeProduit from './liste-de-produit.js'
import PanierTotale from './panier-totale.js'
import InformationDeLivraison from './information-de-livraison.js'
import {useState} from "react"


function Panier({panier, setPanier, addInPanier}) {
  
  const [numberArticle, setNumberArticle] = useState(1);
  return ( 
    <div className="App">
      <div className="panier-main">
        <div className="left">
          <ListeDeProduit panier={panier} setPanier={setPanier} numberArticle={numberArticle} setNumberArticle={setNumberArticle}/>
        </div>
        <div className="right">
          <PanierTotale  panier={panier} numberArticle={numberArticle} setNumberArticle={setNumberArticle} />
          <InformationDeLivraison/>


        </div>
      </div>

    </div>
  );
}

export default Panier;
