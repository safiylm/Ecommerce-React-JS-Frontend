import '../../styles/Panier/panier-un-article.css'

function UnArticle() {
    return (

        <div className='div-un-article'>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRE4JC5A2v1bo6Aplu06NDSWXoUwsaff1hVAKw3so_ofXYfjZ3TWRObGzhFdR3iMevKZklQMsJxwg5SR7dNoLb7xjNrxpwtB2s80NfpBggEkHfZ271-2tEXspsiEBXyHVNex4rCpIGmZKyaESj82w&usqp=CAc"></img>
            <div className="article-info">
                <p>47,99$</p>
                <p>Robe longue verte satin, très élégante.</p>
                <div className="div-taille">
                    <div> Taille </div>
                    <select>
                        <option>EU 36</option>
                        <option>EU 38</option>
                        <option>EU 40</option>
                        <option>EU 42</option>
                    </select>
                </div>

                <div className="div-quantite">
                    <div> Quantité </div>
                    <select>
                        <option> 1</option>
                        <option> 2</option>
                        <option> 3</option>
                        <option> 4</option>
                        <option> 5</option>
                    </select>
                </div>
                <button>Sauvegarder pour plus tard </button>
            </div>
        </div>



    );
}

export default UnArticle;