import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase'

const Logout = () => {

    const contextBase = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) { 
                        contextBase.signoutUser();             
        }

    }, [checked, contextBase]);

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
