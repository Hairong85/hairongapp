import React from 'react'

const UsersFunction = async(email) => {
        try{
                const res = await fetch(`http://localhost:8080/users?email=${email}`, {method: 'GET', headers:{Accept: 'application/json',
                'Content-Type': 'application/json'}})
                if(res.status == 200){
                        const roles = (await res.json()).roles;
                        return roles;
                }     
                else{
                        return [];
                }
                        
                
        }
        catch(e){
                console.log(e);
                throw e
        }
}




export default UsersFunction