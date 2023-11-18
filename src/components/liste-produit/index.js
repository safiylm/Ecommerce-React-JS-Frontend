import "../../styles/ListeProduit/index.css"



function ListeProduit() {
    const liste_produits = [{
        "id": 1,
        "marque": "Michael Kors",
        "nom": "PYPER - Montre",
        "image_url": [ "https://img01.ztat.net/article/spp-media-p1/1ce81ef89aca4d1e9c6019a0b29c33b3/1026346eade84996af469499c99ec33f.jpg?imwidth=500&filter=packshot"],
        "prix": 189.95, 
        "url" : "https://www.zalando.fr/michael-kors-pyper-montre-gold-coloured-1mi51m0hj-f11.html"
    },
    {
        "id": 1,
        "marque": "Swarovski",
        "nom": "COSMOPOLITAN - Montre",
        "image_url": [ "https://img01.ztat.net/article/spp-media-p1/80b6f26038764c55a36fde632715fd55/5861e66288e14b749030debf6a49bf39.jpg?imwidth=500&filter=packshot"],
        "prix": 199.95, 
        "url" : "https://www.zalando.fr/swarovski-cosmopolitan-montre-silver-4sw51m01n-d12.html"
    },
    {
        "id": 1,
        "marque": "Daniel Wellington",
        "nom": "PETITE MELROSE 28M - Montre",
        "image_url":[ "https://img01.ztat.net/article/spp-media-p1/ef67d5d3892345858107eda4ceb17f06/ee68dfb9f46e47f2babfae5965a14db5.jpg?imwidth=1800&filter=packshot" ] ,
        "prix":129.00,
        "url" : "https://www.zalando.fr/daniel-wellington-classic-petite-montre-rosegold-coloured-dw251m00s-f11.html"
    }, 
    {
        "id": 1,
        "marque": "Liebeskind Berlin",
        "nom": "Montre à aiguilles",
        "image_url": [ "https://img01.ztat.net/article/spp-media-p1/d96a6fbb1a8b3870a3b5d6a9a87b9340/e6d7b3755b674f33bacd9268c81cb817.jpg?imwidth=1800&filter=packshot" ] ,
        "prix": 229.90, 
        "url" : "https://www.zalando.fr/liebeskind-berlin-montre-a-aiguilles-silber-gold-li351m02p-d13.html"
    }



    ];

    return (
        <div className="div-liste-produits">
           
           {liste_produits.map((number) => <div key={number.id} className="div-un-produit">
                <a href={number.url}>
                    <img src={number.image_url[0]} />
                    <p>{number.marque}</p> <p>{number.nom}</p><p>{number.prix}€</p>
                </a>
            </div>

            )}
        </div>
    );
}

export default ListeProduit;
