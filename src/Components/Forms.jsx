
import React from "react";
import { useState } from "react";
import axios from 'axios';

function Forms(){
    const[formData, setFormData] =useState({
       
       email:"" ,
       password:"",

    })
    const[message, setmessage] =useState('')

    const handleChange =(event) =>{
        const {name, value}= event.target
        console.log (event.target)
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleReset=()=>{
setFormData({
     email:"" ,
       password:"",
})
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();

        try{
            const  response= await  axios.post("https://reqres.in/api/users", formData,{
               headers:{
                        'x-api-key': "reqres-free-v1",
               } 
            })

            setmessage("Profile created successfully")
        }catch (error){
        console.error(error)
        setmessage("Error creatin user" + error.message)
        }
    }

    return(
        <div className="forms">
            <h1>React Forms</h1>

            <form onSubmit={handleSubmit}>
                <div className="control-row">
                    <div className="control">
                    <label htmlFor="email"  className="bel">Email</label>
                     <input id="email" type="email" name="email" placeholder="you@example.com" 
                     required  className="put" onChange={handleChange}  value={formData.email}/>
    
                    </div>

                    <div className="control">
                        <label htmlFor="password" className="bel">Password</label>
                        <input id="password" type="password" name="password" placeholder="password" required  className="put" 
                       onChange={handleChange} value={formData.password} />


                    </div>
<div className="togs">
    <button className="ton" type="submit">Log In</button>
    <button className="ton" type="reset" onClick={handleReset}> Reset</button>

</div>
                </div>

            </form>
{message && <p className="message">{message}</p>}
        </div>
    )

}
export default Forms;