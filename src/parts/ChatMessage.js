import React from 'react'

function ChatMessage({message, user}) {
    const {userEmail, content}= message
    

    let messageClass="flex-row";
    let bgColor="bg-main";
    if(message.userId === user.uid){
        messageClass="flex-row-reverse"
        bgColor="bg-warning"
    }

    


  return (
    <div className={`d-flex align-items-center mb-4 ${messageClass}`} >
        <div className="col-md-1 col-2">
            <p className='fw-bold fst-italic text-break'>{userEmail.substring(0, userEmail.lastIndexOf("@")) }</p>
            
        </div>
            
        <div className={`mx-3 bg-main  px-3 py-1 rounded-3 ${bgColor}`}>
            <p className="my-0 text-break">{content}</p>
        </div>
            
    </div>
  )
}

export default ChatMessage