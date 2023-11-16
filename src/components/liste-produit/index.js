import "../../styles/ListeProduit/index.css"
function ListeProduit() {


    return (
        <div className="div-liste-produits">
            <div className="div-un-produit">
                <a href="https://www.zalando.fr/michael-kors-pyper-montre-gold-coloured-1mi51m0hj-f11.html">
                    <img src="https://img01.ztat.net/article/spp-media-p1/1ce81ef89aca4d1e9c6019a0b29c33b3/1026346eade84996af469499c99ec33f.jpg?imwidth=500&filter=packshot" />
               
                <p>Michael Kors</p>
                <p>PYPER - Montre</p>
                <p>189,95 €</p>  
                </a>
            </div>
            <div className="div-un-produit">
                <a href="https://www.zalando.fr/swarovski-cosmopolitan-montre-silver-4sw51m01n-d12.html">
                    <img src="https://img01.ztat.net/article/spp-media-p1/80b6f26038764c55a36fde632715fd55/5861e66288e14b749030debf6a49bf39.jpg?imwidth=500&filter=packshot" />
               <p>Swarovski</p>
                <p>COSMOPOLITAN - Montre</p>
                <p>199,95 €</p>
                </a>  
            </div>
            <div className="div-un-produit">
                <a href="https://www.zalando.fr/daniel-wellington-classic-petite-montre-rosegold-coloured-dw251m00s-f11.html">
                    <img src="https://img01.ztat.net/article/spp-media-p1/ef67d5d3892345858107eda4ceb17f06/ee68dfb9f46e47f2babfae5965a14db5.jpg?imwidth=1800&filter=packshot" />
                <p>Daniel Wellington</p>
                <p>PETITE MELROSE 28M - Montre</p>
                <p>129,00  €</p>
                </a>  
            </div>
            <div className="div-un-produit">
                <a href="https://www.zalando.fr/liebeskind-berlin-montre-a-aiguilles-silber-gold-li351m02p-d13.html">
                    <img src="https://img01.ztat.net/article/spp-media-p1/d96a6fbb1a8b3870a3b5d6a9a87b9340/e6d7b3755b674f33bacd9268c81cb817.jpg?imwidth=1800&filter=packshot" />
             <p>Liebeskind Berlin</p>
                <p>Montre à aiguilles</p>
                <p>229,90 €</p>
                </a>  
            </div>
        </div>
    );
}

export default ListeProduit;
