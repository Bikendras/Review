import React, { useState } from 'react'

const error_message="Age must be greater then 18";
export default function Error() {
    const [text,setText]=useState("");
    const [error,setError]=useState(false);
    const handletextInput=(e)=>{
        setError(false);
        setText(e.target.value);
        if(e.target.value<18){
            setError(true);
        }
    }
  return (
    <div>
        <h2>Error Checking Input box</h2>
        <input type="number" value={text} onChange={handletextInput}/>
        <p>{error?error_message:""}</p>
    </div>
  )
}
