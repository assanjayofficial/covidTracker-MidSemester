import React, {useEffect, useState} from 'react'
import Navbar from '../../molecules/NavBar'
import Card from '../../molecules/Card'
import Axios from 'axios'

const Dashboard = () => {

    const [positif, setPositif] = useState([])
    const [sembuh, setSembuh] = useState([])
    const [meninggal, setMeninggal] = useState([])

    useEffect (() => {
        //fetch
        // fetch('https://reqres.in/api/users').then(res=> res.json()).then(json => setUsers(json.data))
        //axios
        Axios.get('https://api.kawalcorona.com/indonesia').then((res)=> setPositif(res.data[0].positif));
    }, [])
    useEffect (() => {
        //fetch
        // fetch('https://reqres.in/api/users').then(res=> res.json()).then(json => setUsers(json.data))
        //axios
        Axios.get('https://api.kawalcorona.com/indonesia').then((res)=> setSembuh(res.data[0].sembuh));
    }, [])
    useEffect (() => {
        //fetch
        // fetch('https://reqres.in/api/users').then(res=> res.json()).then(json => setUsers(json.data))
        //axios
        Axios.get('https://api.kawalcorona.com/indonesia').then((res)=> setMeninggal(res.data[0].meninggal));
    }, [])


    return (
        <div className='container'>
            <Navbar/>
            <h3>Data Indonesia</h3>
            <hr/>
            <br/>
                <div className='container'>
                    {`Positive Case : ${positif}`}
                    <br/>
                    <br/>
                    {`Recovered : ${sembuh}`}
                    <br/>
                    <br/>
                    {`Death : ${meninggal}`}
                </div>
        </div>
    )
}

export default Dashboard
