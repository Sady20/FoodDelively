import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase'

const Logout = (props) => {
   // console.log(props);

    const contextFireBase = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) { 
            contextFireBase.signoutUser();             
        }

    }, [checked, contextFireBase]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
        <div >
            
            <label >
                <input  onChange={handleChange} type="checkbox" checked={checked}/>                
            </label>
        </div>
    )
}

export default Logout
