import { createContext, useState } from "react";
import { AuthKey } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"


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

    const sendMessage = async (message, userId, userEmail, newId)=> {
        const time = new Date();

        try{
            await setDoc(doc(db, "messages", `${newId}`), {
                userId: userId,
                userEmail: userEmail,
                content: message,
                time: `${time.getTime()}`
              });
        }catch(err){
            console.log(err)
        }
        
        
    
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
        setModalShow,
        sendMessage
    }

    return(
        <appContext.Provider value={values} >
            {props.children}
        </appContext.Provider>
    )
}

export {appContext, AppContProv}