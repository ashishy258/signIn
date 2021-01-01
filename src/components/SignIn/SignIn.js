import React, { useState } from 'react';


function SignIn({getUserName, accessToken}){

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function onFieldChange(event){
    if(event.target.name === 'email-address'){
      setEmail(event.target.value);
    }else{
      setPassword(event.target.value);
    }
  }

  function searchUser(){
    
    const endPoint = 'https://pharma-store-dev-ed.my.salesforce.com/services/apexrest/Contact/'+
                      'email='+email+'&password='+password;
    fetch(proxyurl+endPoint, {
      method: "GET",
      headers: { 
        "Authorization": "Bearer "+accessToken,
        "Content-type": "application/json"
    } 
    }) 
    .then(response => response.json()) 
    .then(json => {getUserName(json.FirstName)})
    .catch(error => {
                    setError(`we can't find you, ${error}`);
                    console.log('error');
                  });
  }


  

    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                {error?<p>Ashish</p>:<p></p>}
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={onFieldChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={onFieldChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={searchUser}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
            </div>
          </main>
        </article>
      );
}
export default SignIn;