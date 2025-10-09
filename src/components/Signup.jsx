import React, { useState } from 'react'
import axios from 'axios'

const Signup=() =>{
   const [username,setUsername]=useState("")
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [phone,setPhone]=useState("")

   // initialize 3 states of posting data

   const[loading,setLoading]=useState("")
   const[success,setSuccess]=useState("")
   const[error,setError]=useState("")
 
   // function to Signup
   const handlesubmit=async (e) =>{
     e.preventDefault()
     setLoading("please wait")
     // define an empty envelope
     const envelopedata=new FormData()
     // append our data
     envelopedata.append("username",username)
     envelopedata.append("email",email)
     envelopedata.append("password",password)
     envelopedata.append("phone",phone)
 
     // post data
     try {
       const response=await axios.post("https://pintoz.pythonanywhere.com/api/signup",envelopedata)
       setSuccess(response.data.message)
       // reset
       setLoading("")
       
     } catch (error) {
       setError(error.message)
       // reset
       setLoading("")
       
     }
   
 
   }
   

  return (


    <div className=' mb-4 d-flex justify-content-center align-items-center mt-4'>
      <form className='shadow rounded w-50 p-4' onSubmit={handlesubmit}>
      <fieldset><legend className='text-center'><b>Sign Up</b> </legend>
       {/* bind the states */}
       <h1 className="text-primary">{loading}</h1>
      <h2 className='text-info'>{success}</h2>
      <h1 className='text-warning'>{error}</h1>

  <input type="text" class="form-control mb-2" placeholder=" Enter Username" onChange={(e) =>setUsername (e.target.value)} />

  <input type="email" class="form-control mb-2" placeholder="Enter Email" onChange={(e) =>setEmail (e.target.value)} />

  <input type="password" class="form-control mb-2" placeholder="Enter password" onChange={(e) =>setPassword (e.target.value)} />

  <input type="number" class="form-control mb-3" placeholder="Enter phone" onChange={(e) =>setPhone (e.target.value)} />
  <button type="submit" class=" form-control btn btn-info text-centre">Sign up</button><br />
  <button type="" class=" form-control btn btn-light text-centre">Already have an account?<span className='text-primary'><a href="/signin">Sign in</a></span></button>
    
    

  </fieldset>

</form>

    </div>
  )
}

export default Signup