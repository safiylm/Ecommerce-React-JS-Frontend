import "../../styles/ListeProduit/index.css"
import { liste_produits } from './array-liste-produit'


function ListeProduitFemme({panier}) {
    const queryParameters = new URLSearchParams(window.location.search)
    const categorie = queryParameters.get("ctg")

    return (
        <div className="div-liste-produits">
            {(categorie != null) ?

                liste_produits.filter(prod => prod.categorie[0] == categorie).filter(prod => prod.sexe == "Femme").map((number) =>
                    <div key={number.id} className="div-un-produit">
                        <a href={'/produit?id=' + number.id}>
                            <img src={number.image_url[0]} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="black" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="black" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                            <p>{number.marque}</p> <p>{number.nom}</p><p>{number.prix}€</p>
                        </a>
                    </div>

                )
                :
                liste_produits.filter(prod => prod.sexe == "Femme").map((number) =>
                    <div key={number.id} className="div-un-produit">
                        <a href={'/produit?id=' + number.id}>
                            <img src={number.image_url[0]} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="black" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="black" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                            <p>{number.marque}</p> <p>{number.nom}</p><p>{number.prix}€</p>
                        </a>
                    </div>

                )

            }
        </div>
    );
}

export default ListeProduitFemme;
