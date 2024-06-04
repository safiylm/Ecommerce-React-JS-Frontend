import { useState } from "react"


function ButtonPanier({ produitId, produitQuantite }) {

    const functionIsInPanier = JSON.parse(localStorage.getItem('panier')).filter((f) => f.produitId === produitId).length > 0;
    const [isInPanier, setIsInPanier] = useState(functionIsInPanier);

    const addPanier = () => {
        let panier = JSON.parse(localStorage.getItem('panier'))
        panier.push({
            produitId: produitId,
            quantite: 1,
        })
        localStorage.setItem('panier', JSON.stringify(panier))
        setIsInPanier(!isInPanier)
    }

    const removePanier = () => {
        let panier = JSON.parse(localStorage.getItem('panier'))
        panier = panier.filter((a) =>
            a.produitId !== produitId
        )
        localStorage.setItem('panier', JSON.stringify(panier))
        setIsInPanier(!isInPanier)
    }


    return (
        <>
            {isInPanier ?

                <button id="btn-panier" onClick={removePanier}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                </button>

                :

                <button id="btn-panier" onClick={addPanier}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                </button>
            }
        </>
    )
}

export default ButtonPanier;
