import '../../styles/Produit/info-produit.css'
import InformationDeLivraison from '../panier/information-de-livraison'
import 'bootstrap/dist/css/bootstrap.css';

function InformationsProduit({ info_prod, id_prod, panier, setPanier, listeFavoris, setListeFavoris }) {

  return (
    <div class="divInfo-container">
      <div className='div-info-produit'>
        <h1 className='titreProduit'>{info_prod.nom}</h1>
        <h2 className='prix'>{info_prod.prix} € </h2>
        <p className='couleur'> Couleur : {info_prod.couleur} </p>



        <div className="div-taille">
          <select>
            {info_prod.taille.map((t) => (
              <option>{t}</option>
            ))}
          </select>
        </div>
        <div className='div-add-panier-herat'>

          { panier.filter(p => p.id_produit== info_prod.id).length <= 0 ?

            <button id="btn-panier" onClick={() => {
              panier.push({
                id_produit: info_prod.id,
                quantite: info_prod.quantite,
              });
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </button>

            :
            <button id="btn-panier"  onClick={() => {
              setPanier(
                panier.filter(a =>
                  a.id_produit !== info_prod.id
                )
              );
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </button>
          }


          {listeFavoris.filter(p => p == info_prod.id).length <= 0 ?
            <button id="btn-heart" onclick={() => { listeFavoris.push(info_prod.id) }} >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-through-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z" />
              </svg> </button>
            :
            <button id="btn-heart"   onClick={() => {
              setListeFavoris(   
                listeFavoris.filter(a =>
                  a !== info_prod.id
                )
              );
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" color="pinkhot" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>

            </button>
          }

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
              {info_prod.matiere_entretien.map((t) => (
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
              {info_prod.detail_produit.map((t) => (
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
              {info_prod.taille_coupe.map((t) => (
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
