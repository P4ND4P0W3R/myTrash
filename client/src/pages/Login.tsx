// IMPORT CSS
import './css/Login.css'
import NavBar from '../components/NavBar';

// IMPORT IMAGE
import backgroundLogin from '../assets/svg/backgroundConnection4.svg'
import backgroundPerson from '../assets/poubelleBack.png'

import { useState } from 'react';

// IMPORT COMPONENTS
import { LoginForm } from '../components/LoginForm';

export default function Login(){
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = (email: string, password: string) => {
        console.log("handleLoding ...", email, password)
    }

    const [isLoading, setIsLoading] = useState(false)

    const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    // API CALL FOR LOGIN FORM
    const handleClick = async () => {

        if(!emailRegex.test(email)) {
            setError("Email invalide.")
            return
        } else if(password.length < 8){
            setError("Mot de passe: min. 8 caractères.")
            return
        }

        setIsLoading(true);
        try {
            await handleLogin(email, password);
            window.location.reload()
        } catch (error: unknown) {
            console.log("error")
        } finally {
            setIsLoading(false)
        }
    }



    return(
        <>
            <NavBar />
            <div className="mainContainer p-md-5 p-4">
                <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} handleClick={handleClick} isLoading={isLoading}/>
                <img src={backgroundLogin} width={1000} className='backgroundWave col-xl-7 col-md-8 col-12'/>
                <img src={backgroundPerson} width={1000} className='backgroundPerson col-xl-7 col-md-8 col-11'/>

            </div>
        </>
    )
}