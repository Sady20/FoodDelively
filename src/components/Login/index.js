import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const Login=(props)=> {

    const contextBase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        contextBase.loginUser(email,password)
        .then(user=>{
            props.history.push('/welcome');
            setEmail('');
            setPassword('');
        })
        .catch(error=>{
            setEmail('');
            setPassword('');
            alert(error);
        })
     }


    return (        <div >    

                    <h2>Connexion</h2>
                    <form onSubmit={handleSubmit}>

                        <div >
                            <input  type="email" onChange={e => setEmail(e.target.value)} value={email} required />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div >
                            <input type="password" onChange={e => setPassword(e.target.value)} value={password} required />
                            <label htmlFor="password">Mot de passe</label>
                        </div>

                        { email !==''&& password.length > 5
                             ? <button >S'inscrire</button> : <button disabled>S'inscrire</button>}

                    </form>
                    <div className="linkContainer">
                        <Link className="simpleLink" to="/signup">Nouveau ? Inscrivez-vous maintenant.</Link>
                        <br />
                        <Link className="simpleLink" to="/forgetpassword">Mot de passe oublié? Récupérez-le ici.</Link>
                    </div>
                </div>
            
    )
}

export default Login
