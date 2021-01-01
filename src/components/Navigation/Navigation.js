import React from 'react';

const Navigation = ({userName, route, onRouteChange}) =>{
    return(
        <div>
          <div>
            <h1 className='tc'>FREE PHOTO GALLERY</h1>
            {userName
            ?<nav className="db dt-l w-100 border-box pa0 ph5-l bg-black-90">
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                  <p onClick={()=>onRouteChange('Home')} className="link dim white f3 f3-l dib mr3 mr4-l pointer">SignOut</p>
                </div>
              </nav>
            :(route==='Home'
            ?
              <nav className="db dt-l w-100 border-box pa0 ph5-l bg-black-90">
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                  <p onClick={()=>onRouteChange('Home')} className="link dim white f3 f3-l dib mr3 mr4-l pointer">Home</p>
                  <p onClick={()=>onRouteChange('SignIn')} className="link dim white f3 f3-l dib mr3 mr4-l pointer">SignIn</p>
                  <p onClick={()=>onRouteChange('Register')} className="link dim white f3 f3-l dib mr3 mr4-l pointer">Register</p>
                </div>
              </nav>
             :
             (route==='SignIn'
             ?<nav className="db dt-l w-100 border-box pa0 ph5-l bg-black-90">
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                  <p onClick={()=>onRouteChange('Home')} className="link dim white f3 f3-l dib mr3 mr4-l pointer">Home</p>
                  <p onClick={()=>onRouteChange('Register')} className="link dim white f3 f3-l dib mr3 mr4-l pointer">Register</p>
                </div>
              </nav>
              :<nav className="db dt-l w-100 border-box pa0 ph5-l bg-black-90">
                  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <p onClick={()=>onRouteChange('Home')} className="link dim white f3 f3-l dib mr3 mr4-l pointer">Home</p>
                    <p onClick={()=>onRouteChange('SignIn')} className="link dim white f3 f3-l dib mr3 mr4-l pointer">SignIn</p>
                  </div>
                </nav>))
            }
            
          </div>   
        </div>
    );
}

export default Navigation;