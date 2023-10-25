import '../../styles/Panier/panier-un-article.css'
import { Outlet, Link } from "react-router-dom";

function UnArticle({ numberArticle, setNumberArticle }) {

    return (

        <div className='div-un-article'>
            <img src="https://img01.ztat.net/article/spp-media-p1/397fd247583d49adbc68ae58a24a4c23/b8d1b875cf974fe7af40aa28246f977b.jpg?filter=packshot" alt="produit" />

            <div className="article-info">
                <Link to="/produit">
                    <p>Escarpins à talons hauts</p>
                    <p>49,99$</p>
                </Link>
                <div className="div-taille">
                    <div> Taille &nbsp;&nbsp;</div>
                    <select>
                        <option>EU 36</option>
                        <option>EU 38</option>
                        <option>EU 40</option>
                        <option>EU 42</option>
                    </select>
                </div>

                <div className="div-quantite">
                    <div> Quantité &nbsp;&nbsp;</div>
                    <select>
                        <option onClick={() => setNumberArticle(1)}> 1</option>
                        <option onClick={() => setNumberArticle(2)}> 2</option>
                        <option onClick={() => setNumberArticle(3)}> 3</option>
                        <option onClick={() => setNumberArticle(4)}> 4</option>
                        <option onClick={() => setNumberArticle(5)}> 5</option>
                    </select>
                </div>
                <button>Sauvegarder pour plus tard </button>
            </div>
        </div>



    );
}

export default UnArticle;