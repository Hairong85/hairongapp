
const fetchPatients = async()=>{
        try{
                const res = await fetch('http://localhost:8080/patients', {method: 'GET', headers:{Accept: 'application/json',
                'Content-Type': 'application/json'}})
                const data = await res.json()
                return data
                
        }
        catch(e){
                console.log(e);
                throw e
        }
        return [];
        
}

export default fetchPatients;