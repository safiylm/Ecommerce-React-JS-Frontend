import ListeDeProduit from './liste-de-produit.js'
import PanierTotale from './panier-totale.js'
import {useState} from "react"


function Panier({panier, setPanier}) {
  
  const [numberArticle, setNumberArticle] = useState(1);
  return ( 
    <div className="App">
      <div className="panier-main">
        <div className="left">
          <ListeDeProduit panier={panier} setPanier={setPanier} numberArticle={numberArticle} setNumberArticle={setNumberArticle}/>
        </div>
        <div className="right">
          <PanierTotale panier={panier} numberArticle={numberArticle} setNumberArticle={setNumberArticle} />


        </div>
      </div>

    </div>
  );
}

export default Panier;
