import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const Profile = () => {
      const {user} = useAuth0();

      return (
            <div>
                  <h2>Profile</h2>
                  <p>
                        {JSON.stringify(user,null, 2)}
                  </p>
            </div>
      )
}

export default Profile
