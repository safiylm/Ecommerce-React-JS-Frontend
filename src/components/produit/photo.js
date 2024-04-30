import '../../styles/Produit/photos.css'


function ClickImage(e){
   // alert(e)
    document.getElementById("photoViewer").src=e;
}

function PhotosProduit({liste_photos}) {
   
    return (

        <div className='divPhotos'>
            <div className='listePhotoVertical'>

                {liste_photos.map((url, index) => (
                    <img key={`${url}-${index}`} src={url} onClick={() => ClickImage(url)} ></img>
                ))}
            </div>

            <div>
                <img id="photoViewer" src={liste_photos[0]} />
            </div>
        </div>
    );
}

export default PhotosProduit;
