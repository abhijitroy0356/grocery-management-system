import { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [values, setValues]=useState({
        email:'',
        passsowrd:''
    })
    const [error, setError] = useState(null)
    const navigate= useNavigate()
    axios.defaults.withCredentials=true
    const handleSubmit =(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin',values)
        .then(result=> {
            if(result.data.loginStatus===true){
                navigate('/dashboard')
            }else{
                setError(result.data.Error)
            }
        })
        .catch(err=>console.log(err))
    }
  return (
   
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginFrom'>
            <div className='bg-danger text-white text-center'>
                    {error && error}
            </div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input  className="form-control rounded-2" type="email" name="email" autoComplete='off' placeholder='enter email' onChange={(e)=>setValues({...values, email:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="password"><strong>password</strong></label>
                    <input  className="form-control rounded-2" type="password" name="password" placeholder='enter password' onChange={(e)=>setValues({...values, passsowrd:e.target.value})}/>
                </div>
                <button className='btn btn-success w-50 rounded-0 mt-3 rounded-2'>Log-in</button>
            </form>
        </div>
    </div>
  )
}

export default Login