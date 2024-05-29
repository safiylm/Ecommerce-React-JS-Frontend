import '../../styles/Produit/info-produit.css'
import InformationDeLivraison from '../panier/information-de-livraison'
import 'bootstrap/dist/css/bootstrap.css';
import ButtonFavoris from '../favoris/button-favoris'
import ButtonPanier from '../panier/button-panier'

function InformationsProduit({ produit }) {

  return (
    <div class="divInfo-container">
      <div className='div-info-produit'>
        <h1 className='titreProduit'>{produit.nom}</h1>
        <h2 className='prix'>{produit.prix} € </h2>
        <p className='couleur'> Couleur : {produit.couleur} </p>

        <div className="div-taille">
          <select>
            {produit.taille.map((t) => (
              <option>{t}</option>
            ))}
          </select>
        </div>

        <div className='div-add-panier-herat'>
          <ButtonPanier produitId={produit.id}  produitQuantite={produit.quantite} />
          <ButtonFavoris produitId={produit.id} />
        </div>

      </div>

      <InformationDeLivraison />

      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Matière et entretien
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {produit.matiere_entretien.map((t) => (
                <p>{t}</p>
              ))}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Détails du produit
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {produit.detail_produit.map((t) => (
                <p>{t}</p>
              ))}

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Taille & coupe
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {produit.taille_coupe.map((t) => (
                <p>{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}

export default InformationsProduit;
