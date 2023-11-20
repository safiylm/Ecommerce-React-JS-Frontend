import '../../styles/Panier/panier-un-article.css'
import { Outlet, Link } from "react-router-dom";
import { liste_produits } from '../liste-produit/array-liste-produit'

function UnArticle({ id_produit, setNumberArticle }) {

    return (
        <>
            {
                liste_produits.filter(prod => prod.id == id_produit).map((prod) =>

                    <div className='div-un-article' key={prod.id} >
                        <img src={prod.image_url[0]} alt="produit" />

                        <div className="article-info">
                            <Link to={"/produit?id="+prod.id}>
                                <p>{prod.nom}</p>
                                <p>{prod.prix} €</p>
                            </Link>
                            <div className="div-taille">
                                <div> Taille &nbsp;&nbsp;</div>
                                <select>
                                    <option>EU 36</option>
                                    <option>EU 38</option>
                                    <option>EU 40</option>
                                    <option>EU 42</option>
                                </select>
                            </div>

                            <div className="div-quantite">
                                <div> Quantité &nbsp;&nbsp;</div>
                                <select>
                                    <option onClick={() => setNumberArticle(1)}> 1</option>
                                    <option onClick={() => setNumberArticle(2)}> 2</option>
                                    <option onClick={() => setNumberArticle(3)}> 3</option>
                                    <option onClick={() => setNumberArticle(4)}> 4</option>
                                    <option onClick={() => setNumberArticle(5)}> 5</option>
                                </select>
                            </div>
                            
                        </div>
                    </div>

                )}
        </>
    );

}

export default UnArticle;