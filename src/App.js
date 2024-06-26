import Panier from './components/panier/index'
import PageProduit from './components/produit/index'
import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListeProduitHomme from './components/liste-produit/homme';
import ListeProduitFemme from './components/liste-produit/femme';
import Search from './components/search/search';
import Connexion from './components/auth/connexion';
import Accueil from './components/accueil';
import Inscription from './components/auth/inscription';
import React from "react";
import ListeFavoris from './components/favoris/index'

function App() {
  
  //localStorage.clear();

  let panier = [];
  if(localStorage.getItem("panier") ==null)
    localStorage.setItem('panier', JSON.stringify(panier));

  let fav = []
  if(localStorage.getItem("favoris")==null )
  localStorage.setItem('favoris', JSON.stringify(fav));


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Nav />}>
            <Route index element={<Accueil />} />
            
            <Route path="panier" element={<Panier />} />
            <Route path="produit" element={<PageProduit  />} />

            <Route path="femme" element={<ListeProduitFemme />} />
            <Route path="homme" element={<ListeProduitHomme  />} />
            <Route path="search" element={<Search />} />
            <Route path="favoris" element={<ListeFavoris />} />
            <Route path="connexion" element={<Connexion />} />
            <Route path="inscription" element={<Inscription />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


