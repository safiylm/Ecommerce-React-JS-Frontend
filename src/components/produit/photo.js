import '../../App.css';
import '../../styles/Produit/photos.css'



function Photos() {
    const url_image = [
        "https://img01.ztat.net/article/spp-media-p1/be3b5e32ce3d43678cf987a41c93dd23/959a22df7ddf44a680ee9c610120e24a.jpg",
        "https://img01.ztat.net/article/spp-media-p1/397fd247583d49adbc68ae58a24a4c23/b8d1b875cf974fe7af40aa28246f977b.jpg?filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/d7464e8c4b264b76a06e3b23fbe955da/4163523c93454836884128c7abab5292.jpg",
        "https://img01.ztat.net/article/spp-media-p1/7fb045e154e14acdb0e928783de9f970/f5eedc1566d04d5a97974ddcd0c33713.jpg",
        "https://img01.ztat.net/article/spp-media-p1/6d35b28fba2842aaa280ac4a3a72e1ad/eff8309e8ed94bfb87551234b3326c98.jpg",
        "https://img01.ztat.net/article/spp-media-p1/a0344a6f24ed4943bbac54d07e669947/c275e18fdc7448748ed14cc8c653b090.jpg"

    ]
    return (

        <div className='divPhotos'>
            <div className='listePhotoVertical'>

                {url_image.map((url, index) => (
                    <img key={`${url}-${index}`} src={url} ></img>
                ))}
            </div>

            <div>
                <img id="photoViewer" src="https://img01.ztat.net/article/spp-media-p1/be3b5e32ce3d43678cf987a41c93dd23/959a22df7ddf44a680ee9c610120e24a.jpg"></img>
            </div>
        </div>
    );
}

export default Photos;
