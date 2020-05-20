import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {FirebaseContext} from '../Firebase';

const ForgetPassword=(props)=> {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const contextBase = useContext(FirebaseContext);

   const handleSubmit =(event)=>{ //of
        event.preventDefault();
         contextBase.passwordReset(email)
        .then(()=>{
           setError('');
           setSuccess('Consultez votre email!')
           setEmail('');
           setTimeout(()=>{
               props.history.push('/login');
           },3000);
        })
        .catch(error=>{
            setError({error});
            alert (error);
            setEmail('');
        })
    }

    return (
        
           
                <div >

                    { 
                        success && <span 
                            style={{ 
                            border: "1px solid green",
                            background: "green",
                            color: "#ffffff"
                        }}
                        >
                            {success}
                        </span>
                    }

                     <h2>Mot de passe oublié?</h2>
                    <form onSubmit={handleSubmit}>

                        <div >
                            <input onChange={e => setEmail(e.target.value)} value={email} type="email"  required />
                            <label htmlFor="email">Email</label>
                        </div>

                         {email? <button >Récupérer</button>:<button disabled>Récupérer</button>} 

                    </form>

                    <div >
                        <Link to="/login">Déjà inscrit? Connectez-vous.</Link>
                    </div>
                </div>
           
)
}

export default ForgetPassword
