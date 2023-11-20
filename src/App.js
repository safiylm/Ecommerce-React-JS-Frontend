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
import React, { useEffect, useState } from "react";


function App() {
  const [panier, setPanier] = useState([12, 8,11,15]);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Nav />}>
          <Route index element={<Accueil />} />
          <Route path="panier" element={<Panier panier={panier} setPanier={setPanier}/>} />
          <Route path="produit" element={<Produit panier={panier} />} />
          <Route path="femme" element={<ListeProduitFemme panier={panier} />} />
          <Route path="homme" element={<ListeProduitHomme panier={panier} />} />
          <Route path="search" element={<Search />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="inscription" element={<Inscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


