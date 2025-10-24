import React,{useState} from 'react'
import axios from 'axios'


import { Link,useNavigate } from 'react-router-dom'

function Addbook() {

  let navigate=useNavigate()

  // initialize the states

  const[name,setname]=useState ("")
  const[category,setcategory]=useState ("")
  const[author,setauthor]=useState ("")
  const[publisher,setpublisher]=useState ("")
  const[publicationyear,setpublicationyear]=useState ("")
  const[price,setprice]=useState ("")
  const[stockquantity,setstockquantity]=useState ("")
  const[bookphoto,setbookphoto]=useState ("")
  

  



  // initialize state for posting data
  const[loading,setLoading] =useState("")
  const[success,setSuccess] =useState("")
  const[error,setError] =useState("")


  // function to addbook
  const handlesubmit=async (e) =>{
    e.preventDefault()
    setLoading("please wait")
    // define an empty envelope
    const envelopedata=new FormData()
    // append our data
    envelopedata.append("name",name)
    envelopedata.append("category",category)
    envelopedata.append("author",author)
    envelopedata.append("publisher",publisher)
    envelopedata.append("publication_year",publicationyear)
    envelopedata.append("price",price)
    envelopedata.append("stock_quantity",stockquantity)
    envelopedata.append("book_photo",bookphoto)
    

   

     // post our data
  try {
    const response=await axios.post("https://pintoz.pythonanywhere.com/api/add_book",envelopedata)
    setSuccess(response.data.message)


    // redirect the user upon success addbook
    // we check if user exist
    if(response.data.user){

      navigate("/")
      // save user to local Storage
      localStorage.setItem("user",response.data.user)
    }


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
      <fieldset><legend className='text-center'><b>Add books</b> </legend>
      {/* bind variables */}
      <h1 className="text-primary">{loading}</h1>
      <h2 className='text-info'>{success}</h2>
      <h1 className='text-warning'>{error}</h1>
     

  <input type="text" class="form-control mb-2" placeholder=" Enter  book name" onChange={(e)=> setname(e.target.value)}/>

  <input type="text" class="form-control mb-2" placeholder="Enter the author's name" onChange={(e)=> setauthor(e.target.value)} />

  <input type="number" class="form-control mb-2" placeholder="Enter book price" onChange={(e)=> setprice(e.target.value)}/>
  <input type="text" class="form-control mb-2" placeholder="Enter book category" onChange={(e)=> setcategory(e.target.value)}/>
  <input type="text" class="form-control mb-2" placeholder="Enter book publisher" onChange={(e)=> setpublisher(e.target.value)}/>
  <input type="number" class="form-control mb-2" placeholder="Enter publicationyear" onChange={(e)=> setpublicationyear(e.target.value)} />
  <input type="number" class="form-control mb-2" placeholder="Enter the number of pages" />
  <input type="number" class="form-control mb-2" placeholder="Enter the stock quantity" onChange={(e)=> setstockquantity(e.target.value)} />

  <button type="submit" class=" form-control btn btn-light text-centre"><b>Browse/upload  book's image</b></button><br />
  <input type="file" class="form-control mb-2" placeholder="Browse...  No file selected" onChange={(e)=> setbookphoto(e.target.files[0])}/>
  <button type="submit" class=" form-control btn btn-info text-centre">Upload image</button><br />




   
    

  </fieldset>

</form> 
</div>

  
    

    
  )
} 

export default Addbook