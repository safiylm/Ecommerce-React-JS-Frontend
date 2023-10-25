import '../../styles/Panier/panier-liste.css'
import UnArticle from '../../components/panier/panier-un-article'

function PanierListe({numberArticle,setNumberArticle}) {
  return (
    <div className="div-mon-panier">
    <h4>
        MON PANIER 
    </h4>
    <UnArticle  numberArticle={numberArticle} setNumberArticle={setNumberArticle} />

</div>
  );
}

export default PanierListe;