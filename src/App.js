import React, { useState, useEffect  } from 'react';
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import AfterSignIn from './components/AfterSignIn/AfterSignIn';

function App () {

  const [route, setRoute] = useState('Home');
  function routeChange(path){
    setUserName('');
    setRoute(path);
  }

  const [userName, setUserName] = useState('');   
  const [accessToken, setaccessToken] = useState('');
  
  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  function requestAccessToken(){
    
    const tokenEndPoint = 'https://login.salesforce.com/services/oauth2/token'+
                        '?grant_type=password'+
                        '&client_id=3MVG9n_HvETGhr3D.BDWp3YDxY6ntlC8XAmDPOkFJ4HpwTlV5CBcey.TTrnc86x4tcGDSxjJ7WKs.2009ADL1'+
                        '&client_secret=7AB9CDD39F1DB9A2EDD467BD18466FF95C8C41AB1290E871CCF2E0948F570F62'+
                        '&username=ashish258@test.com'+
                        '&password=alsahlijsehe@258MZPirCLpkwrFswBQJrF7wv27r';

    fetch(proxyurl+tokenEndPoint, { 
      method: "POST",
      headers: { 
          "Content-type": "application/json; charset=UTF-8"
      } 
    }) 
    .then(response => response.json()) 
    .then(json => {
      setaccessToken(json.access_token);
      console.log(json);
    });                   
  }
  useEffect(() => {
    requestAccessToken();
  }, []);

  
    return (
      <div>  
        <Navigation userName={userName} route={route} onRouteChange={routeChange} />
        {userName?<AfterSignIn userName={userName}/>:(
            route==='Home'
            ?<Slider />
            :(route==='SignIn'?<SignIn getUserName={(user)=>{setUserName(user)}} accessToken={accessToken} />
                     :<Register getUserName={(user)=>{setUserName(user)}} accessToken={accessToken} />)
        ) 
        }
      
      </div>
    );
  }
export default App;
