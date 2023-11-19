import "../../styles/ListeProduit/index.css"
import { liste_produits } from './array-liste-produit'


function ListeProduitFemme() {
    const queryParameters = new URLSearchParams(window.location.search)
    const categorie = queryParameters.get("ctg")

    return (
        <div className="div-liste-produits">
            {(categorie != null) ?

                liste_produits.filter(prod => prod.categorie[0] == categorie).filter(prod => prod.sexe == "Femme").map((number) =>
                    <div key={number.id} className="div-un-produit">
                        <a href={'/produit?id=' + number.id}>
                            <img src={number.image_url[0]} />
                            <p>{number.marque}</p> <p>{number.nom}</p><p>{number.prix}€</p>
                        </a>
                    </div>

                )
                :
                liste_produits.filter(prod => prod.sexe == "Femme").map((number) =>
                    <div key={number.id} className="div-un-produit">
                        <a href={'/produit?id=' + number.id}>
                            <img src={number.image_url[0]} />
                            <p>{number.marque}</p> <p>{number.nom}</p><p>{number.prix}€</p>
                        </a>
                    </div>

                )

            }
        </div>
    );
}

export default ListeProduitFemme;