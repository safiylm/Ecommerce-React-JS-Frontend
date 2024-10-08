import '../styles/nav.css'
import { Outlet, Link } from "react-router-dom";
import ReductionBarreHorizontale from './reduction-barre-horizontale.js'


function displayNavFemme() {
  document.getElementById("nav-femme-supplementaire").style.display = 'block'
  document.getElementById("nav-homme-supplementaire").style.display = 'none'
}

function displayNavHomme() {
  document.getElementById("nav-homme-supplementaire").style.display = 'block'
  document.getElementById("nav-femme-supplementaire").style.display = 'none'
}

function hideNavFemme() {
  document.getElementById("nav-femme-supplementaire").style.display = 'none'
}

function hideNavHomme() {
  document.getElementById("nav-homme-supplementaire").style.display = 'none'
}

const Nav = () => {

  return (
    <>
      <nav>
        <div>
          <Link id="nav-femme" to="/femme" onMouseOver={displayNavFemme} >Femme</Link>
          <Link id="nav-homme" to="/homme" onMouseOver={displayNavHomme} >Homme</Link>
        </div>
        <div>
          <Link to="/">BSKA</Link>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <Link to="/search" className="d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg> <div> Chercher</div>
          </Link>

          <Link to="/favoris" className="d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="pinkhot" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg> <div> Favoris</div>
          </Link>
          <Link to="/panier" className="d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
            </svg> <div>Panier</div>
          </Link>
          <Link to="/connexion" className="d-flex  align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg> <div> Connexion</div>
          </Link>
        </div>
      </nav>
      <div id='nav-femme-supplementaire' onMouseLeave={hideNavFemme} >
        <a href="/femme?ctg=Nouveautes">Nouveautés femmes</a>
        <a href="/femme?ctg=Vetements">Vêtements</a>
        <a href="/femme?ctg=Chaussures">Chaussures</a>
        <a href="/femme?ctg=Accessoires">Accessoires</a>
      </div>

      <div id='nav-homme-supplementaire' onMouseLeave={hideNavHomme} >
        <a href="/homme?ctg=Nouveautes">Nouveautés hommes</a>
        <a href="/homme?ctg=Vetements">Vêtements</a>
        <a href="/homme?ctg=Chaussures">Chaussures</a>
        <a href="/homme?ctg=Accessoires">Accessoires</a>
      </div>

      <ReductionBarreHorizontale />

      <Outlet />

    </>
  )
};

export default Nav;
