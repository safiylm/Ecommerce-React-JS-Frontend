import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.js'
import PanierListe from './components/panier/panier-liste.js'
import ReductionBarreHorizontale from './components/panier/reduction-barre-horizontale'
import PanierTotale from './components/panier/panier-totale.js'
import PanierFormBonDeReduction from './components/panier/panier-form-bon-de-reduction'
import PanierInfoLivraison from './components/panier/panier-info-livraison'

function App() {
  return (
    <div className="App">
      < Nav />
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

export default App;
