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
  const [panier, setPanier] = useState([{"id_produit": 16, "quantite" : 1 },
                                        {"id_produit": 9, "quantite" : 1 },
                                        {"id_produit": 5, "quantite" : 1 } ]);

  const addInPanier=(newProduct)=>{setPanier(prevArray => [...prevArray, {"id_produit":2, "quantite" : 1  }]) }
  
  const removeInPanier=()=>{}
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Nav />}>
          <Route index element={<Accueil />} />
          <Route path="panier" element={<Panier panier={panier} setPanier={setPanier}/>} />
          <Route path="produit" element={<Produit panier={panier} addInPanier={addInPanier} />} />
          <Route path="femme" element={<ListeProduitFemme panier={panier}  addInPanier={addInPanier}/>} />
          <Route path="homme" element={<ListeProduitHomme panier={panier} addInPanier={addInPanier}/>} />
          <Route path="search" element={<Search />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="inscription" element={<Inscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


