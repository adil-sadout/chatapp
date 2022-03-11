import {useContext, useState, useEffect} from 'react'
import {appContext} from "../../helpers/context"



function CreateUserForm({setIsLoginModal}) {

    const [checkbox, setCheckbox] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user, signup, errorMessageSignup, setErrorMessageSignup, setModalShow} = useContext(appContext)

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
                <input type="password"  className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <div className="form-check">
                <input type="checkbox" required checked={checkbox} onChange={()=> setCheckbox(!checkbox)} className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">I Agree To Not Be Rude To Others</label>
            </div>
            <div className='d-flex justify-content-between pt-4'>
                <button disabled={!checkbox} onClick={(e)=>{
                    e.preventDefault()
                    signup(email, password)
                    
                }} type="submit" className="btn btn-primary">Submit</button>
                <button onClick={()=> {
                    setIsLoginModal(true)
                    setErrorMessageSignup("")
                }}
                className="btn btn-outline-dark border-0">Login</button>
            </div>

            <p className='text-center m-0 pt-3'>{errorMessageSignup}</p>
            
        </form>
    </div>
  )
}

export default CreateUserForm