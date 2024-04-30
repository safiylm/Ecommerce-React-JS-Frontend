import '../../styles/Panier/panier-un-article.css'
import { Outlet, Link } from "react-router-dom";
import { liste_produits } from '../liste-produit/array-liste-produit'




function CardProduitPanier({ id_produit, panier, setPanier }) {



    // This function change quantity of product in panier 
    const ChangeQuantite = (nb) => {

        let updatedUser = { "id_produit": id_produit, "quantite": nb }

        const updatedObject = panier.map((p) =>
            p.id_produit == id_produit ? updatedUser : p
        );
        console.log(updatedObject)
        // update the users state with the updated user
        setPanier(updatedObject);
    }




    return (
        <>
            {
                liste_produits.filter(prod => prod.id == id_produit).map((prod) =>

                    <div className='div-un-article' key={prod.id} >
                        <img src={prod.image_url[0]} alt="produit" />

                        <div className="article-info">
                            <Link to={"/produit?id=" + prod.id}>
                                <p>{prod.nom}</p>
                                <p>{prod.prix} €</p>
                            </Link>
                            <div className="div-taille">
                                <div> Taille &nbsp;&nbsp;</div>
                                <select>
                                    {prod.taille.map((t) => (
                                        <option>{t}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="div-quantite">
                                <div> Quantité &nbsp;&nbsp;</div>
                                <select>
                                    <option onClick={() => ChangeQuantite(1)}> 1</option>
                                    <option onClick={() => ChangeQuantite(2)}> 2</option>
                                    <option onClick={() => ChangeQuantite(3)}> 3</option>
                                    <option onClick={() => ChangeQuantite(4)}> 4</option>
                                    <option onClick={() => ChangeQuantite(5)}> 5</option>
                                </select>
                            </div>


                        </div>
                    </div>

                )}
        </>
    );

}

export default CardProduitPanier;