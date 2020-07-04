import React ,{useState, useContext, useEffect} from 'react';
import Logout from '../Logout';
import {FirebaseContext} from '../Firebase';

const Welcome=(props)=> { //Pros de router! pour acceder au history...
 
const [userSession, setUserSession] = useState(null);
const [error, setError] = useState(null);
const [userData, setUserData] = useState(null);

const contextFireBase = useContext(FirebaseContext);

useEffect(() => {
    let listener = contextFireBase.auth.onAuthStateChanged(user => { //listener: si un user est connecté! session= user
         user ? setUserSession({user}): props.history.push('/');
    });
    if(!!userSession){
        console.log('ici:::');
		console.log(userSession.uid);
        contextFireBase/*.userMethod(userSession.uid)*/
        /*.get()
        .then(doc=>{
            console.log(doc);
             if(doc && doc.exists){ 
                 const myData = doc.data();
                 setUserData(myData)
                 console.log(myData);
                                }        })*/
        .lireMethod()
        /*.then()
        .catch(error=>{
            setError(error);
            alert(error);
         });*/
    }
    return () => {
      /*  listener();
        console.log('here: will did Mount');*/
    }
}, [/*userSession, contextFireBase, props.history*/]) // 1 er render : session =null et 2render: session = user ----->componentUpDate

return userSession===null ? 
      ( <p>Loading</p>)
      :
      (

        <div>            
            <Logout userData1={userData}/>                
            
        </div>
     )
}

export default Welcome
