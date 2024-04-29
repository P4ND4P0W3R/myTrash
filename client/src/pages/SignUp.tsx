import "./css/SignUp.css";
import logo from "../assets/logo.png"


export default function SignUp() {


    return (
        <>
            <div className="registerContainer d-flex justify-content-center align-items-center vh-100">
                <div className="registerContainer4" style={{ borderRadius: '15px' }}>
                    <div className="card-body mt-1">
                        <div className="w-100 d-flex justify-content-center align-items-center">
                            <img src={logo} alt="logo" className="logo  " />
                        </div>
                        <h5 className="cardtitle text-center"><strong>Créer un compte myTrash</strong></h5>
                        <div className="mt-2 text-center">
                            <p >Déjà un compte? <a className="connect">Connectez-vous</a></p>
                            <p className="mb-1"> Saisissez vos informations</p>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center INPUTOS">


                            {/* input email */}
                            <div className="mb-1 m-auto position-relative">
                                <label className="ms-1">Email</label>
                                <input type="email" className="form-control"  />
                            </div>

                            {/* input mdp */}
                                <div className="mb-1 m-auto position-relative">
                                <label className="ms-1">Password</label>
                                <input type="name" className="form-control"  />
                            </div>

                        </div>
                        <div className="d-flex justify-content-end mt-3 me-3">
                            <div className="b1 text-center"><strong>Suivant</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
