import { collection, query, orderBy, onSnapshot  } from "firebase/firestore";
import { db } from "../helpers/firebaseConfig";
import {useContext, useEffect, useRef} from "react"
import {appContext} from "../helpers/context"
import ChatMessage from "./ChatMessage";

function Main() {

  const {user, messages, setMessages} = useContext(appContext)
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("time"));
  
  const scrollDownRef = useRef()
  

  useEffect(()=>{
    onSnapshot(q, (snapshot)=>{
      setMessages(snapshot.docs.map((doc)=> ({...doc.data(), id:doc.id})))
      
    })
  },[user])


  useEffect(()=>{
    scrollDownRef.current?.scrollIntoView();
  },[messages])
  


  return (
    <>
      {
        user===null?
        <p className="text-center display-6">Please Connect First</p> :
        <>
          {
            messages.length > 0?
            <>
            {
              messages.map(message =>{
                return <ChatMessage user={user} message={message} key={message.id} />
              })
            }
            </>
            :
            <p className="display-6 text-center">Send the first message</p>
          }
          

          


        </>
      }
      <div ref={scrollDownRef} ></div>
      
        
    </>
  )
}

export default Main