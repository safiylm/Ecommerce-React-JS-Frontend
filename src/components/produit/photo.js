import '../../styles/Produit/photos.css'


function ClickImage(e){
   // alert(e)
    document.getElementById("photo-viewer").src=e;
}

function PhotosProduit({liste_photos, nomproduit}) {
   
    return (

        <div className='produit-photos-container'>
            <div className='liste-photo_vertical'>

                {liste_photos.map((url, index) => (
                    <img key={`${url}-${index}`} src={url} onClick={() => ClickImage(url)} alt={nomproduit + " "+ index} />
                ))}
            </div>

            <div>
                <img id="photo-viewer" src={liste_photos[0]} alt={nomproduit}/>
            </div>
        </div>
    );
}

export default PhotosProduit;
