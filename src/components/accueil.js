import '../styles/accueil.css'
function Accueil() {

    return (
        <div className="div-accueil">
            <div className="div-femme">
                <img src="https://static.bershka.net/4/static/itxwebstandard/images/worldwide/D_index_woman.jpg?t=20231118021204"/>
                <h1>FEMME</h1>
            </div>
            
            <div className="div-homme">
            <img src="https://static.bershka.net/4/static/itxwebstandard/images/worldwide/D_index_man.jpg?t=20231118021204"/>

                <h1>HOMME</h1>
            </div> 
            
            <div className="div-enfant">
            <img src="https://static.bershka.net/4/static/images/home/master_home/D_index_bskteen_master.jpg?t=20231118021204"/>

                <h1>ENFANT</h1>
            </div>
        </div>
    );
}

export default Accueil;
