import '../../styles/connexion.css'



function Connexion() {

    return (
      <div id="page-connexion">
      <div id="div-connexion">
        <form>
          <label>Email : </label><input type="text" placeholder="Saisir son e-mail" className="form-control" autocomplete="off" />
          <label>Password : </label><input type="password" placeholder="Saisir son mot de passe " className="form-control" autocomplete="off" />
          <button type="button">Se connecter </button>
          <a id="go_page_inscription" href="/inscription"> S'inscrire </a>
          </form>
      </div>
      </div>
    );

  }

  export default Connexion;
