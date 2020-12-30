import React from 'react';
import './Navigation.css';

const Navigation = ({route, onRouteChange}) =>{
    return(
        <div>
          <div>
            <h1 className='tc'>FREE PHOTO GALLERY</h1>
            {route==='Home'
            ?<nav style={{display: 'flex', justifyContent: 'center'}} className="pa1 pa1-ns">
                <p onClick={()=>onRouteChange('Home')} className="f3 link dim black pa3 pointer">Home</p>
                <p onClick={()=>onRouteChange('SignIn')} className="f3 link dim black pa3 pointer">SignIn</p>
                <p onClick={()=>onRouteChange('Register')} className="f3 link dim black pa3 pointer">Register</p>
             </nav>
             :
             (route==='SignIn'
             ?<nav style={{display: 'flex', justifyContent: 'center'}} className="pa1 pa1-ns">
                  <p onClick={()=>onRouteChange('Home')} className="f3 link dim black pa3 pointer">Home</p>
                  <p onClick={()=>onRouteChange('Register')} className="f3 link dim black pa3 pointer">Register</p>
              </nav>
              :<nav style={{display: 'flex', justifyContent: 'center'}} className="pa1 pa1-ns">
                  <p onClick={()=>onRouteChange('Home')} className="f3 link dim black pa3 pointer">Home</p>
                  <p onClick={()=>onRouteChange('SignIn')} className="f3 link dim black pa3 pointer">SignIn</p>
               </nav>)
            }
            
          </div>   
        </div>
    );
}

export default Navigation;