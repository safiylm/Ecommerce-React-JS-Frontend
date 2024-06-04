import { useState } from "react"


function ButtonFavoris({ produitId }) {
    const [isLiked, setIsLiked] = useState(JSON.parse(localStorage.getItem('favoris')).filter(f => f === produitId).length > 0);
    const like_ = () => {
        let fav_ = JSON.parse(localStorage.getItem('favoris'))
        fav_.push(produitId)
        localStorage.setItem('favoris', JSON.stringify(fav_))
        setIsLiked( !isLiked)
    }

    const dislike_ = () => {

        let fav_ = JSON.parse(localStorage.getItem('favoris'))
        fav_ = fav_.filter(a =>
            a !== produitId
        )
        localStorage.setItem('favoris', JSON.stringify(fav_))
        setIsLiked( !isLiked)
    }
    return (
        <div>
            {isLiked ?
                <button id="btnRemoveHeart" onClick={dislike_}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="pinkhot" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                   
                </button>
                :
                <button id="btnAddHeart" onClick={like_}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="pinkhot" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    </button>
                     
            }</div>
    )
}

export default ButtonFavoris;
