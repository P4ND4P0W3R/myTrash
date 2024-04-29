import { EnvelopeFill, EyeFill, Eye } from 'react-bootstrap-icons';
import { useState } from 'react';

//PHOTOS
import googleIcon from '../assets/icons/googleIcon.png'
import appleIcon from '../assets/icons/appleIcon.png'
import { useNavigate } from 'react-router-dom';

////GOOGLE AUTH
//const clientId = "321556096543-5lkvrb4s7m2no73kntj1ga4rpb0bv190.apps.googleusercontent.com"
//import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

// PROPS
type LoginProps = {
    email: string,
    setEmail: (arg0: string) => void,
    password: string,
    setPassword: (arg0: string) => void,
    error: string,
    handleClick: () => void,
    isLoading: boolean
}

export const LoginForm = (props: LoginProps) => {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(0)

    const passwordType = () => {
        if (showPassword == 0){
            return "password"
        } else {
            return "text"
        }
    }

    const errorText = () => {
        if (props.error.length > 0){
            return (<p className='errorText'>{props.error}</p>)
        } else return(null)
    }

    const passwordIcon = () => {
        if (showPassword == 0){
            return ( <EyeFill className='cursor' onClick={() => switchShowPassword()}/> )
        } else {
            return ( <Eye className='cursor' onClick={() => switchShowPassword()}/> )
        }
    }

    const switchShowPassword = () => {
        console.log("oo", showPassword)
        if(showPassword == 0){ setShowPassword(1) } else { setShowPassword(0) }
    }

    // ONCLICK CONNECT
    const validButton = () => {
        if(props.isLoading){
            return (<div className="py-2 px-md-0 col-md-5 m-md-0 px-4 col-6 me-2 text-center connectionText disabled">Je me connecte</div>)
        } else {
            return (<div className="py-2 px-md-0 col-md-5 m-md-0 px-4 col-6 me-2 text-center connectionText" onClick={() => props.handleClick()}>Je me connecte</div>)
        }
    }

    return (
        <div className="p-md-5 pb-4 loginContainer col-xl-5 col-lg-7 col-md-10 col-12">
            <h1 className="titleName pt-md-5 w-md-50 w-100">Je me connecte</h1>
            <div className='position-relative col-12'>
                <div className="inputContainer p-2 px-3 pe-4 d-flex justify-content-between align-items-center mt-md-5 mt-4">
                    <input type="mail" className="inputField col-11" placeholder='Alexandre.kostic@gmail.com' onChange={(e) => props.setEmail(e.target.value)}/>
                    <EnvelopeFill />
                </div>

                <div className="inputContainer p-2 px-3 pe-4 d-flex justify-content-between align-items-center mt-3">
                    <input type={passwordType()} className="inputField col-11" placeholder='Password' onChange={(e) => props.setPassword(e.target.value)}/>
                    {passwordIcon()}
                </div>
                <div className='d-flex align-items-center mt-3'>
                    <input type="checkbox" id="rememberMe" className='checkBox me-2'/>
                    <label className=' ms-2' htmlFor="rememberMe">Se rappeler de moi</label>
                </div>

                {errorText()}
            </div>

            <div className="buttonContainer d-flex align-items-center justify-content-between mt-md-4 mt-3">
                {validButton()}
                <div className="p-2 text-primary col-md-6 col-6 ms-2 text-center passwordText px-0 ">MOT DE PASSE OUBLIÉ</div>
            </div>

            {/*ACCES DIRECT*/}
            <div className="buttonContainer d-flex mt-4">
                <p className='me-4 fw-bold'>Accès direct :</p>
                {/*<GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>*/}
                <img className='me-4 icon' src={googleIcon} width={25} height={25} />
                <img className='me-4 appleIcon' src={appleIcon} width={27} height={27} />
            </div>

            {/*INSCRIPTION*/}
            <div className="buttonContainer notMember d-flex mt-md-4 mt-1">
                <p className='me-2 fw-bold'>Pas encore membre ?</p>
                <p onClick={() => navigate('/register')} className='fw-md-bold passwordText'>Créer un compte.</p>
            </div>
        </div>
    )
}