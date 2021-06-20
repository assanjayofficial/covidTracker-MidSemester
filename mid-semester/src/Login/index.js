import React, {useState, useEffect } from 'react';

// const Login = () => {

//   const [titlePage, setTitlePage] = useState("Login Page")
  
//   const handleSubmit = () => {
//     const data = {
//       username : username,
//       password : password,
//     }
//     console.log (data);
//   }
//   useEffect (() => {
//     setTimeout(()=> {
//       setTitlePage('Welcome')
//     }, 3000)
//   }, [])

//   const [username, setUsername] = useState ('');
//   const [password, setPassword] = useState ('');
//   return (
//     <div className="container">
//     <h1 className="mt-5">{titlePage}</h1>
//     <label className = "form-label">Username/Email</label>
//     <input className="form-control" placeholder="Masukan Username or Email" value={username} 
//     onChange={(event)=>setUsername(event.target.value)}/>
//     <label className = "form-label">Password</label>
//     <input className="form-control" placeholder="Masukan Password"value={password} type="password"
//     onChange={(event)=>setPassword(event.target.value)}/>
//     <br/>
//     <br/>
//     <button className='btn- btn-primary' onClick={handleSubmit}>Submit</button>
//   </div>
//   )
// }

// export default Login;
const Register = () => {

  const [titlePage, setTitlePage] = useState("Halaman Register")
  
  const handleSubmit = () => {
    const data = {
      username : username,
      password : password,
      email : email,
    }
    console.log (data);
  }
  useEffect (() => {
    setTimeout(()=> {
      setTitlePage('Welcome New Member')
    }, 3000)
  }, [])

  const [username, setUsername] = useState ('');
  const [email, setEmail] = useState ('');
  const [asalkota, setAsalKota] = useState ('');
  const [password, setPassword] = useState ('');
  return (
    <div className="container">
    <h1 className="mt-5">{titlePage}</h1>
    <label className = "form-label">Username</label>
    <input className="form-control" placeholder="Masukan Username or Email" value={username} 
    onChange={(event)=>setUsername(event.target.value)}/>
    <label className = "form-label">Email</label>
    <input className="form-control" placeholder="Masukan Email" value={email} 
    onChange={(event)=>setEmail(event.target.value)}/>
    <label className = "form-label">Asal Kota</label>
    <input className="form-control" placeholder="Masukan Asal Kota" value={asalkota} 
    onChange={(event)=>setAsalKota(event.target.value)}/>
    <label className = "form-label">Password</label>
    <input className="form-control" placeholder="Masukan Password"value={password} type="password"
    onChange={(event)=>setPassword(event.target.value)}/>
    <br/>
    <br/>
    <button className='btn- btn-primary' onClick={handleSubmit}>Submit</button>
  </div>
  )
}

export default Register;