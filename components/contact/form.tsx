"use client"
import { useState, useEffect } from "react"



export default function ContactForm(){
   const [counter, setCounter] = useState(0);
   const [ firstName, setFirstName ] = useState("");
    function increment(){
        setCounter(counter+1);
    }
    function decrement(){
        // counter < 1 ? "": setCounter(counter-1);
        if (counter > 0){
            setCounter(counter-1)
        }
    }

    useEffect(()=>{
        console.log('called useEffect');
    },[counter])

    return (

        <>
        <h3>This is contact form</h3>
            <label htmlFor="name">First Name</label>
           <button className="bg-white text-black" onClick={increment}>Click to increment</button>
           <button className="bg-white text-black" onClick={decrement}>Click to decrement</button>
            <input type="text" name="name" id="name" onInput={(e)=>{setFirstName(e.target.value)}} className="bg-black text-white" />
        <div>
            <p>Counter - {counter}</p>
            <p>Message - {firstName}</p>
        </div>
        </>
    )
}