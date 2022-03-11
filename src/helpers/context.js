import { createContext, useState } from "react";
import { AuthKey } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';

const appContext = createContext()

function AppContProv(props){

    const [modalShow, setModalShow] = useState(false);
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [filteredMessages, setFilteredMessages] = useState([]);
    const [errorMessageLogin, setErrorMessageLogin] = useState("");
    const [errorMessageLogout, setErrorMessageLogout] = useState("");
    const [errorMessageSignup, setErrorMessageSignup] = useState("");

    function signup(email, password){

        
        
        createUserWithEmailAndPassword(AuthKey, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            // ...
        })
        .catch((error) => {
            setErrorMessageSignup(error.message)
            // ..
        });
    }

    function login(email, password){
        
        signInWithEmailAndPassword(AuthKey, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            // ...
        })
        .catch((error) => {
            setErrorMessageLogin(error.message)
        });
    }


    function logout(){
        
        signOut(AuthKey).then(() => {
            setUser(null);
            console.log("signout successful!")
        }).catch((error) => {
            setErrorMessageLogout(error.message)
        });
    
    }

    const values={
        user,
        setUser,
        messages,
        setMessages,
        filteredMessages,
        setFilteredMessages,
        logout,
        login,
        signup,
        errorMessageLogin,
        setErrorMessageLogin,
        errorMessageLogout,
        setErrorMessageLogout,
        errorMessageSignup,
        setErrorMessageSignup,
        modalShow,
        setModalShow
    }

    return(
        <appContext.Provider value={values} >
            {props.children}
        </appContext.Provider>
    )
}

export {appContext, AppContProv}