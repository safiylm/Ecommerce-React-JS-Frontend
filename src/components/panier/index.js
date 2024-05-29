import ListeDeProduit from './liste-de-produit.js'
import PanierTotale from './panier-totale.js'
import {useState} from "react"


function Panier({ }) {
  
  const [numberArticle, setNumberArticle] = useState(1);
  return ( 
      <div className="panier-main">
        
        <div className="left">
          <ListeDeProduit numberArticle={numberArticle} setNumberArticle={setNumberArticle}/>
        </div>

        <div className="right">
          <PanierTotale numberArticle={numberArticle} setNumberArticle={setNumberArticle} />
        </div>

      </div>
  );
}

export default Panier;
