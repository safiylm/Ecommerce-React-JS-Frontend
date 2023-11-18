import '../../styles/connexion.css'



function Connexion() {
  
    return ( 
      <div id="page-connexion">
      <div id="div-connexion">
        <form>
          <label>Email : </label><input type="text" placeholder="Saisir son e-mail" className="" />
          <label>Password : </label><input type="password" placeholder="Saisir son mot de passe " className=""/>
          <button type="button">Se connecter </button>
          </form>
      </div>
      </div>
    );

  }
  
  export default Connexion;
  