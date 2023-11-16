import Panier from './components/panier/index'
import Produit from './components/produit/index'
import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListeProduit from './components/liste-produit';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Nav />}>
          <Route index element={<ListeProduit />} />
          <Route path="panier" element={<Panier />} />
          <Route path="produit" element={<Produit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
