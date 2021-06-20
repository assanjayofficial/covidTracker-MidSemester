import React, {useEffect, useState} from 'react'
import Navbar from '../../molecules/NavBar'
import Card from '../../molecules/Card'
import Axios from 'axios'

const Dashboard = () => {

    const [users, setUsers] = useState([])

    useEffect (() => {
        //fetch
        // fetch('https://reqres.in/api/users').then(res=> res.json()).then(json => setUsers(json.data))
        //axios
        Axios.get('http://localhost:3004/data').then(res=> setUsers(res.data));
    }, [users])

    console.log(users);


    return (
        <div className='container'>
            <Navbar/>
            <h3>Data Indonesia</h3>
            <hr/>
            <br/>
            <div className='row align-items-start'>
                {
                    users.map( (item) => [
                        <Card
                        pos={`${item.positif}`}
                        semb={`${item.sembuh}`}
                        men={`${item.meninggal}`}
                        />
                    ])
                }
            </div>
        </div>
    )
}

export default Dashboard
