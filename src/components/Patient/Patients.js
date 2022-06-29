import React from 'react'
import Patient from './Patient'
import {useAuth0} from '@auth0/auth0-react';
import UsersFunction from '../Users/UsersFunction';


const Patients = ({patients}) => {
        const {loginWithRedirect, logout, isAuthenticated} = useAuth0();
        const {user} = useAuth0();
        const roles = UsersFunction(user.email)
  return (
        isAuthenticated&&(
                roles.map(r=>r.roleName).includes("doctor")
        )?
          
        (<table>
                <tr>
                        <th>
                                First Name
                        </th>
                        <th>
                                Last Name
                        </th>
                        <th>
                                Email
                        </th>
                        <th>
                                Phone
                        </th>
                </tr>
                {
                        patients.map(p =>(
                            <Patient   patient={p} />
                        ))
                }
        </table>):('')
  
  )
}

export default Patients

