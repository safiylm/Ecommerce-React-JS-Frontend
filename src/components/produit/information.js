import '../../styles/Produit/information.css'
import 'bootstrap/dist/css/bootstrap.css';
import ButtonFavoris from '../favoris/button-favoris'
import ButtonPanier from '../panier/button-panier'

function InformationsProduit({ produit }) {

  return (
    <div className="produit-information-container">

      <h1 className='titreProduit'>{produit.nom}</h1>
      <h2 className='prix'>{produit.prix} € </h2>
      <p className='couleur'> Couleur : {produit.couleur} </p>

      <div className="taille">
        <select>
          {produit.taille.map((t) => (
            <option>{t}</option>
          ))}
        </select>
      </div>

      <div className='panier-like'>
        <ButtonPanier produitId={produit.id} produitQuantite={produit.quantite} />
        <ButtonFavoris produitId={produit.id} />
      </div>

      <br />
      <section className='descriptionproduit'>
        <h2>Description du produit</h2>
        <div>Les escarpins à talons hauts sont des chaussures élégantes et sophistiquées, conçues pour allonger la silhouette et ajouter une touche de glamour à n'importe quelle tenue. Ils se caractérisent par une coupe décolletée qui expose le cou-de-pied, un talon fin qui peut varier en hauteur, souvent mesuré à partir de 7 centimètres ou plus, et une pointe qui peut être soit arrondie, soit pointue pour un effet plus audacieux. Fabriqués dans une variété de matériaux comme le cuir, le daim, le satin ou le vernis, ces escarpins sont souvent disponibles dans des couleurs classiques comme le noir, le nude ou le rouge, mais aussi dans des motifs ou des textures plus audacieuses pour des looks distinctifs. Parfaits pour les occasions formelles, les soirées, ou même pour donner une allure chic à une tenue de travail, ils sont l'incarnation du style et du raffinement.</div>
        <br /><br />

      </section >
    </div >
  );
}

export default InformationsProduit;
