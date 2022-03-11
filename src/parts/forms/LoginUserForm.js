import {useContext, useState, useEffect} from 'react'
import {appContext} from "../../helpers/context"



function LoginUserForm({setIsLoginModal}) {

    const {user, login, errorMessageLogin, setErrorMessageLogin, setModalShow} = useContext(appContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    useEffect(()=>{
        if(user!==null){
            setModalShow(false)
        }
    },[user])

  return (
    <div>
        <form className='p-2'>
            <div className="form-group pb-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                
            </div>
            <div className="form-group pb-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            
            <div className='d-flex justify-content-between pt-4'>
                <button onClick={(e)=> {
                    e.preventDefault()
                    login(email,password)
                    
                }} type="submit" className="btn btn-primary">Sign In</button>
                <button onClick={()=> {
                    setIsLoginModal(false)
                    setErrorMessageLogin("")
                }}
                className="btn btn-outline-dark border-0">Signup</button>
            </div>

            <p className='fs-5 text-center m-0 pt-3'>{errorMessageLogin}</p>
            
            
        </form>
    </div>
  )
}

export default LoginUserForm