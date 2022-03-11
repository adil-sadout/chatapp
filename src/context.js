import { createContext, useState } from "react";
import { AuthKey } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const appContext = createContext()

function AppContProv(props){

    const [user, setUser] = useState();
    const [messages, setMessages] = useState();
    const [filteredMessages, setFilteredMessages] = useState();

    function signup(email, password){
        createUserWithEmailAndPassword(AuthKey, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            // ...
        })
        .catch((error) => {
            console.log(error)
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
            console.log(error)
        });
    }


    function logout(){
        signOut(AuthKey).then(() => {
            setUser(null);
            console.log("signout successful!")
        }).catch((error) => {
            console.log(error)
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
        signup
    }

    return(
        <appContext.Provider value={values} >
            {props.children}
        </appContext.Provider>
    )
}

export {appContext, AppContProv}