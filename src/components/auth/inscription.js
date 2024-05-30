import '../../styles/connexion.css'



function Inscription() {

    return (
      <div id="page-connexion">
      <div id="div-connexion">
        <form>
          <label>Prénom : </label><input type="text" name="prenom" placeholder="Saisir son prénom" className="form-control" autocomplete="off" />
          <label>Nom : </label><input type="text" name="nom" placeholder="Saisir son nom" className="form-control" autocomplete="off"  />
          <label>Email : </label><input type="text" name="email" placeholder="Saisir son e-mail" className="form-control" autocomplete="off" />
          <label>Password : </label><input type="password" name="password" placeholder="Saisir son mot de passe " className="form-control" autocomplete="off" />
          <button type="button">S'inscrire </button>
          </form>
      </div>
      </div>
    );

  }

  export default Inscription;
