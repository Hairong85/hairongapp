import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Button} from 'react-bootstrap';

const Login = () => {
      const {loginWithRedirect, logout, isAuthenticated} = useAuth0();

      return isAuthenticated? (
            <div>
                  <Button variant="outline-secondary" onClick={()=>{logout({returnTo: window.location.origin})}} >
                        Log Out
                  </Button>
            </div>
      ):
      (
            <div>
                  <Button variant="outline-primary" onClick={()=>{loginWithRedirect()}}>
                        Log In
                  </Button>
            </div>
      )
}

export default Login
