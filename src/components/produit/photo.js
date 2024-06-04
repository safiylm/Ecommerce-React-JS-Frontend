import '../../styles/Produit/photos.css'


function ClickImage(e){
   // alert(e)
    document.getElementById("photoViewer").src=e;
}

function PhotosProduit({liste_photos, nomproduit}) {
   
    return (

        <div className='divPhotos'>
            <div className='listePhotoVertical'>

                {liste_photos.map((url, index) => (
                    <img key={`${url}-${index}`} src={url} onClick={() => ClickImage(url)} alt={nomproduit + " "+ index} />
                ))}
            </div>

            <div>
                <img id="photoViewer" src={liste_photos[0]} alt={nomproduit}/>
            </div>
        </div>
    );
}

export default PhotosProduit;
