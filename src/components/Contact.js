import React from "react";

export default function Contact() {
    return (
       <div>
           Enter your Contact info
           <input type="text" placeholder='Username' onChange={(event)=> console.log(event.target.value)}/>
           <input type="text" placeholder='Email' onChange={(event)=> console.log(event.target.value)}/>
           <input type="text box" placeholder='Reason for Contact' onChange={(event)=> console.log(event.target.value)}/>
       </div> 
    )
}