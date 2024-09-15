import "../../styles/Produit/commentaire.css"


function Commentaire({ produit }) {

    return (
        <div key={produit.id} className="commentaire-container">

            <div className="un-commentaire d-flex aligns-item-center justify-content-start">
                <div className="d-flex aligns-item-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                </div>
                <div>
                    <div><strong>User</strong> </div>
                    <div>Article vraiement super!!</div>
                </div>
            </div>

            <div className="un-commentaire d-flex aligns-item-center justify-content-start">
                <div className="d-flex aligns-item-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                </div>
                <div>
                    <div><strong>User</strong> </div>
                    <div>Article vraiement super!!</div>
                </div>
            </div>

            <form>
                <label>Ajoutez un commentaire : </label>
                <input type="hidden" name="userId" className="form-control" />
                <textarea name="comment" className="form-control"></textarea>
                <button type='button' className="btn btn-dark">Commenter</button>
            </form>

        </div >

    );
}

export default Commentaire;
