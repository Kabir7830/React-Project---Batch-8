"use client"
import { useState } from "react"



export default function ContactForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [messge, setMessge] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);
    function handleSubmit(){
        setLoading(true);
        event.preventDefault();
        const formData = {
            first_name:firstName,
            last_name:lastName,
            email:email,
            phone_number:phoneNumber,
            message:messge,
        }
        console.log("Form Data = ",formData);
        setTimeout(()=>{
            setLoading(false);
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessge("");
            setPhoneNumber("");
        },2000)
    }

    return (

        <>
            <form action="" className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col max-w-[300px]">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" id="first_name" value={firstName} className="border-black border-solid border" onInput={(e)=>{setFirstName(e.target.value)}}/>
                    <p className="text-[12px] text-red-700">First name is required</p>
                </div>
                <div className="flex flex-col max-w-[300px]">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" id="last_name" value={lastName} className="border-black border-solid border" onInput={(e)=>{setLastName(e.target.value)}}/>
                </div>
                <div className="flex flex-col max-w-[300px]">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} className="border-black border-solid border" onInput={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="flex flex-col max-w-[300px]">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input type="tel" name="phone_number" id="phone_number" value={phoneNumber} className="border-black border-solid border" onInput={(e)=>{setPhoneNumber(e.target.value)}}/>
                </div>
                <div className="flex flex-col max-w-[300px]">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" className="border-black border-solid border" onInput={(e)=>{setMessge(e.target.value)}} value={messge}></textarea>
                </div>
                <div>
                    {loading?
                    <button className="bg-black text-white p-4 mt-20" disabled>Sending...</button>
                    :
                    <button className="bg-black text-white p-4 mt-20">Submit Button</button>
                    
                }
                </div>
            </form>
        </>
    )
}