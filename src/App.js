import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

function App () {

  const [route, setRoute] = useState('Home');
  function routeChange(path){
    setRoute(path);
  }
  //var accessToken = '';
  function requestAccessToken(){
    let tokenEndPoint = 'https://login.salesforce.com/services/oauth2/token'+
                        '?grant_type=password'+
                        '&client_id=3MVG9n_HvETGhr3D.BDWp3YDxY6ntlC8XAmDPOkFJ4HpwTlV5CBcey.TTrnc86x4tcGDSxjJ7WKs.2009ADL1'+
                        '&client_secret=7AB9CDD39F1DB9A2EDD467BD18466FF95C8C41AB1290E871CCF2E0948F570F62'+
                        '&username=ashish258@test.com'+
                        '&password=alsahlijsehe@258MZPirCLpkwrFswBQJrF7wv27r';
    // POST request using fetch() 
    fetch(tokenEndPoint, { 
          
      // Adding method type 
      method: "POST", 
      //mode: 'no-cors',
        
      // Adding headers to the request 
      headers: { 
          "Content-type": "application/json; charset=UTF-8"
      } 
    }) 

    // Converting to JSON 
    .then(response => response.json()) 

    // Displaying results to console 
    .then(json => console.log(json));                   
  }
    return (
      <div>
        
        <Navigation route={route} onRouteChange={routeChange} />
        {route==='Home'
        ?<Slider />
        :(route==='SignIn'?<SignIn onSignIn={requestAccessToken} />:<Register />)
        }
        
      </div>
    );
  }


export default App;
