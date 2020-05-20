import React , {useState,  useContext} from 'react';
import {FirebaseContext}  from '../Firebase';
import {Link} from 'react-router-dom';

const Signup=(props)=> {

    const contextBase = useContext(FirebaseContext);  
    
    const dataInit={
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
     const [data, setData] = useState(dataInit);
     const [error, setError] = useState('');


     const handleChange=(event)=>{
        setData({...data,[event.target.id]: event.target.value});      //data from the Form
     }
     const handleSubmit=(event)=>{
        event.preventDefault();
        contextBase.signupUser(data.email, data.password)
       .then(user=>{    
           setData({...dataInit});
           setError('');
          props.history.push('/welcome');
        })
        .catch(error=>{
           setData({...dataInit});
           setError(error);
           alert(error);
        });
     }

    return (
        <div>
            <div>
            <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange}  value={data.pseudo} type="text" id="pseudo"  required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={data.email}  type="email" id="email"  required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange}  value={data.password} type="password" id="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={data.confirmPassword}  type="password" id="confirmPassword" autoComplete="off" required />
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>

                           { data.pseudo===''||data.email===''||data.password===''||data.password!==data.confirmPassword 
                             ? <button disabled>S'inscrire</button> : <button>S'inscrire</button>}
                        </form>
                        <div >
                            <Link  to="/login">Déjà inscrit? Connectez-vous.</Link>
                        </div>
            </div>
        </div>
    )
}

export default Signup;
