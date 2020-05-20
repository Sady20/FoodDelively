import React ,{useState, useContext, useEffect} from 'react';
import Logout from '../Logout';
import {FirebaseContext} from '../Firebase';

const Welcome=(props)=> {

const [session, setSession] = useState(null);
const contextBase = useContext(FirebaseContext);

useEffect(() => {
    let listener = contextBase.auth.onAuthStateChanged(user => {
         user ? setSession({user}): props.history.push('/');
    });
    return () => {
        listener();
    }
}, [])

return session===null ? 
      ( <p>Loading</p>)
      :
      (

        <div>
            <Logout/>
        </div>
     )
}

export default Welcome
