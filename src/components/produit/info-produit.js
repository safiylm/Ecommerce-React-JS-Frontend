import '../../styles/Produit/info-produit.css'
import PanierInfoLivraison from '../panier/panier-info-livraison'



function InfoProduit() {

    return (
        <div className='div-info-produit1'>
            <div className='div-info-produit2'>
                <h1 className='titreProduit'>Escarpins à talons hauts</h1>
                <h2 className='prix'>34,99 $ </h2>
                <p className='couleur'>Couleur:black</p>

                <div className="div-taille">
                    <select>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                    </select>
                </div>
                <div className='div-add-panier-herat'>
                    <button id="btn-panier">Ajouter au panier</button>
                    <button id="btn-heart"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-through-heart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z" />
                    </svg></button>
                </div>
            </div>
            <PanierInfoLivraison />
            <div>
                <button className='btn-infosupp-matiere'>Matière et entretien</button>
                <div className='div-infosupp-matiere'>
                    <p>Dessus / Tige:   Polyuréthane</p>
                    <p>Doublure: Imitation cuir / textile</p>
                    <p>Semelle de propreté: Synthétique</p>
                    <p>Semelle d'usure: Matière synthétique</p>
                    <p>Épaisseur de la doublure: Non doublé</p>
                    <p>Matière: Cuir synthétique</p>
                </div>
                <button className='btn-infosupp-detail'>Détails du produit </button>
                <div className='div-infosupp-detail'>
                    <p>Bout de la chaussure: Rond</p>
                    <p>Forme du talon: Bloc, plateforme</p>
                    <p>Fermeture: Boucle</p>
                    <p>Motif / Couleur: Couleur unie</p>
                    <p>Référence: BEJ11B02O-Q11</p>
                </div>
                <button className='btn-infosupp-taille'>Taille & coupe </button>
                <div className='div-infosupp-taille'>
                    <p>Hauteur du talon: 11 cm en taille 37</p>
                    <p>Hauteur de talon: Haut</p>
                    <p>Hauteur de plateau: 4.5 cm en taille 37</p>
                </div>
            </div>
        </div >
    );
}

export default InfoProduit;
