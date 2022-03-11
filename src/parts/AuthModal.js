import {useState} from 'react'
import { Modal } from 'react-bootstrap'
import CreateUserForm from './forms/CreateUserForm'
import LoginUserForm from './forms/LoginUserForm'

function AuthModal(props) {

    const [isLoginModal, setIsLoginModal] = useState(true)
    

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
            {
              (isLoginModal===true) ?
              <p>Log In</p> :
              <p>Sign Up</p>
            }
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            {
              (isLoginModal===true) ?
              <LoginUserForm setIsLoginModal={setIsLoginModal} />:
              <CreateUserForm setIsLoginModal={setIsLoginModal} />
            }
        
      </Modal.Body>
      
    </Modal>
  )
}

export default AuthModal