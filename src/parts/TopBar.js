import {useContext} from 'react'
import {appContext} from "../helpers/context"
import AuthModal from "./AuthModal"

function TopBar() {
  const {user, logout, modalShow, setModalShow} = useContext(appContext)
  


  
  return (
    <>
        <p className="col-sm-2 col-3"></p>
        <p className="display-6 col-sm-8 col-6 m-0 text-center">Chat Room</p>
        {
          (user == null) ?
          <button variant="primary" onClick={() => setModalShow(true)} className="col-sm-2 col-3 btn btn-outline-dark">Login</button> :
          <button onClick={(e)=>{
            e.preventDefault()
            logout()
          }} className="col-sm-2 col-3 btn btn-outline-dark">Logout</button>
        }

    <>
      

      <AuthModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
        
        
    </>
  )
}

export default TopBar