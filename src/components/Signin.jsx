import React, { useState } from 'react'
import axios from 'axios'


import { Link,useNavigate } from 'react-router-dom'
function Signin() {
  let Navigate=useNavigate()

  
  // initialize the states
  const [email,setEmail]=useState ("")
  const [password,setPassword]=useState ("")

  // initialize three states  for posting data
  const [loading,setLoading] =useState ("")
  const [success,setSuccess] =useState ("")
  const [error,setError] =useState ("")
  
  // function to signin
  const handlesubmit=async (e) =>{
    e.preventDefault()
    setLoading("please wait")
    // define an empty envelope
    const envelopedata=new FormData()
    // append our data
    envelopedata.append("email",email)
    envelopedata.append("password",password)
    

    // post data
    try {
      const response=await axios.post("https://pintoz.pythonanywhere.com/api/signin",envelopedata)
      setSuccess(response.data.message)
      // redirect the user upon success signin
      // we check if the user exists

      if(response.data.user){
        Navigate("/")

        // save user to local storage
        localStorage.setItem("user",response.data.user)

        // reset
   

      }
      setLoading("")




      
      
    }catch(error) {
      setError(error.message)
      // reset
      setLoading("")

      
      }
      
    }
  return (
    <div className='d-flex justify-content-center align-items-center mt-4'>
      <form  className='mb-4 mt-4 shadow rounded w-50 p-4' onSubmit={handlesubmit}>
      <fieldset><legend className='text-center'><b>Sign in</b></legend></fieldset>

      {/* bind  the states*/}
      <h1 className="text-primary">{loading}</h1>
      <h1 className="text-warning">{success}</h1>
      <h1 className="text-danger">{error}</h1>



        <input type="text" className='form-control mb-2' placeholder='Email' onChange={(e) =>setEmail(e.target.value)}  />
        <input type="password" className='form-control mb-2' placeholder='Password' onChange={(e) =>setPassword (e.target.value)} />
        <button type='submit' class=' form-control btn btn-info text-center'>Sign in</button>
        <button type="" class=" form-control btn btn-light text-centre">Don't have an account?<span className='text-info'><a href="/signup">Sign up</a></span></button>








      </form>






    </div>
  )
}

export default Signin