import Panier from './components/panier/index'
import Produit from './components/produit/index'
import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListeProduitHomme from './components/liste-produit/homme';
import ListeProduitFemme from './components/liste-produit/femme';
import Search from './components/search/search';
import Connexion from './components/auth/connexion';
import Accueil from './components/accueil';
import Inscription from './components/auth/inscription';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Nav />}>
          <Route index element={<Accueil />} />
          <Route path="panier" element={<Panier />} />
          <Route path="produit" element={<Produit />} />
          <Route path="femme" element={<ListeProduitFemme />} />
          <Route path="homme" element={<ListeProduitHomme />} />
          <Route path="search" element={<Search />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="inscription" element={<Inscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
