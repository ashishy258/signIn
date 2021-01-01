import React, { useState } from 'react';


function Register({getUserName, accessToken}){

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function onFieldChange(event){
    if(event.target.name === 'First-Name'){
      setFirstName(event.target.value);
    }else if(event.target.name === 'Last-Name'){
      setLastName(event.target.value);
    }else if(event.target.name === 'email-address'){
      setEmail(event.target.value);
    }else{
      setPassword(event.target.value);
    }
  }

  function inputUser(){
    
    const endPoint = 'https://pharma-store-dev-ed.my.salesforce.com/services/apexrest/Contact';

    fetch(proxyurl+endPoint, {
      method: "POST",
      body: JSON.stringify({ 
        firstName: firstName, 
        lastName: lastName, 
        email: email,
        password: password 
    }), 
      headers: { 
        "Authorization": "Bearer "+accessToken,
        "Content-type": "application/json"
    } 
    }) 
    .then(response => response.json()) 
    .then(json => {getUserName(json)})
    .catch(error => console.error('There has been a problem with your fetch operation:',error));
  }

    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" >First Name</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="First-Name"
                    id="First-Name"
                    onChange={onFieldChange}
                  />
                  
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" >Last Name</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="Last-Name"
                    id="Last-Name"
                    onChange={onFieldChange}
                  />
                  
                </div>
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
                  onClick={inputUser}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
      );
}
export default Register;