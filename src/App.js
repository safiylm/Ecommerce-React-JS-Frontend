import Panier from './components/panier/index'
import Produit from './components/produit/index'
import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListeProduit from './components/liste-produit';
import Search from './components/search/search';
import Connexion from './components/auth/connexion';
import Accueil from './components/accueil';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Nav />}>
          <Route index element={<Accueil />} />
          <Route path="panier" element={<Panier />} />
          <Route path="produit" element={<Produit />} />
          <Route path="femme" element={<ListeProduit />} />
          <Route path="homme" element={<ListeProduit />} />
          <Route path="enfant" element={<ListeProduit />} />

          <Route path="search" element={<Search />} />
          <Route path="connexion" element={<Connexion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
