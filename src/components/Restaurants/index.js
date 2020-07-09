import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import firebase from '../../firebase';
import { error } from 'jquery';

function Restaurants(){

    const [restaurants, setRestaurants] = React.useState([])
    const [name, setName] = React.useState([])
    const [description, setDescription] = React.useState([])

    const [imageAsFile, setImageAsFile] = useState(null)


    const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(image)
  }

     React.useEffect(()=>{
        const fetchData = async () =>{
            const db  = firebase.firestore()
            const data = await db.collection('restaurants').get()
            setRestaurants(data.docs.map(doc => doc.data()))
        }
        fetchData()
    },[])


    return(
         <div >
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              restaurant list
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>nom</th>
                  <th>Description</th>
                  <th>logo</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map(restaurant =>
                  <tr key={restaurant.description}>
                    <td >{restaurant.nom}</td>
                    <td >{restaurant.description}</td>
                    <td >{restaurant.logo}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div>
              <form onSubmit={()=>{
                    const db = firebase.firestore()
                    db.collection('restaurants').doc(name).set({
                    nom : name,
                    description : description,
                    }).then(()=>{console.log("restaurant added")})
                    .catch((erreur)=>{console.log("erreur added restaurant", erreur)}) 
                    console.log("image :", imageAsFile)           
                    firebase.storage().ref(`restaurants/${name}/logo`).put(imageAsFile)
                    .then(function(snapshot) {
                    console.log('Uploaded a blob or file!');
                    }).catch((error)=>{console.log("error to uplead", error)})
                    }
                    } >
                    <input type="text" name="name" value={name} onChange={e=>{setName(e.target.value)}}></input>
                    <input type="text" name="description" value={description} onChange={e=>{setDescription(e.target.value)}}></input>
                    <input type="file" onChange={handleImageAsFile}></input>
                    
                    <input type="submit" value="add restaurent"></input>
              </form>
          </div>
        </div>

        </div>
    

        
    );
}

export default Restaurants

/* 
class Restaurants extends React.Component{


    constructor(props){
    super(props)
    this.state = {
        Restaurants : []
    }
        React.useEffect(()=>{
        const fetchData = async () =>{
            const db  = firebase.firestore()
            const data = await db.collection('restaurants').get()
            this.setState(data.docs.map(doc => doc.data()))
        }
        fetchData()
    },[])
    
}

   

    render() {
    return (
        <div >
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              restaurant list
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">add restaurant</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>nom</th>
                  <th>Description</th>
                  <th>logo</th>
                </tr>
              </thead>
              <tbody>
                {this.state.map(restaurant =>
                  <tr>
                    <td>{restaurant.nom}</td>
                    <td>{restaurant.description}</td>
                    <td>{restaurant.logo}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        </div>
    
    )
}

}
export default Restaurants
 */