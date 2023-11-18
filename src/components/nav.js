import '../styles/nav.css'
import { Outlet, Link } from "react-router-dom";


function displayNavFemme() {
  document.getElementById("nav-femme-supplementaire").style.display = 'block'
  document.getElementById("nav-homme-supplementaire").style.display = 'none'
  document.getElementById("nav-enfant-supplementaire").style.display = 'none'

}
function displayNavHomme() {
  document.getElementById("nav-homme-supplementaire").style.display = 'block'
  document.getElementById("nav-enfant-supplementaire").style.display = 'none'
  document.getElementById("nav-femme-supplementaire").style.display = 'none'


}
function displayNavEnfant() {
  document.getElementById("nav-enfant-supplementaire").style.display = 'block'
  document.getElementById("nav-homme-supplementaire").style.display = 'none'
  document.getElementById("nav-femme-supplementaire").style.display = 'none'


}


function hideNavFemme() {
  document.getElementById("nav-femme-supplementaire").style.display = 'none'
}
function hideNavHomme() {
  document.getElementById("nav-homme-supplementaire").style.display = 'none'
}
function hideNavEnfant() {
  document.getElementById("nav-enfant-supplementaire").style.display = 'none'
}

const Nav = () => {

  return (
    <>
      <nav>
        <div>
          <Link id="nav-femme" to="/femme" onMouseOver={displayNavFemme} >Femme</Link>
          <Link id="nav-homme" to="/homme" onMouseOver={displayNavHomme} >Homme</Link>
          <Link id="nav-enfant" to="/enfant" onMouseOver={displayNavEnfant} >Enfant</Link>
        </div>
        <div>
          <Link to="/">BSKA</Link>
        </div>
        <div>
          <Link to="/search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg> Chercher</Link>
          <Link to="/panier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
          </svg></Link>
          <Link to="/connexion"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg></Link>
        </div>
      </nav>
      <div id='nav-femme-supplementaire' onMouseLeave={hideNavFemme} >
        <a>Nouveautés femmes</a>
        <a>Vêtements</a>
        <a>Chaussures</a>
        <a>Accessoires</a>

      </div>

      <div id='nav-homme-supplementaire' onMouseLeave={hideNavHomme} >
        <a>Nouveautés hommes</a>
        <a>Vêtements</a>
        <a>Chaussures</a>
        <a>Accessoires</a>
      </div>

      <div id='nav-enfant-supplementaire' onMouseLeave={hideNavEnfant} >
        <a>Nouveautés enfants</a>
        <a>Vêtements</a>
        <a>Chaussures</a>
        <a>Accessoires</a>
      </div>
      <Outlet />
    </>
  )
};

export default Nav;
