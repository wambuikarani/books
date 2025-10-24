
import axios from 'axios';
import React ,{useState} from 'react'
import { useLocation } from 'react-router-dom'

function Mpesapayment() {
  // we use location to retrieve our data
  const {book} = useLocation().state  ||{};
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // initialize two states for mpesa payment
  const[amount,setAmount]=useState("")
  const[phone,setPhone]=useState("")

  
  
  
  // function to make payment
  const handlesubmit = async (e) =>{

  
    e.preventDefault()
  setLoading("please wait")
  // define an empty envelope
  const envelopedata=new FormData()
  // append data
  envelopedata.append("amount",book.price)
  envelopedata.append("phone",phone)

  // post data
  try {
    const response=await axios.post("http://pintoz.pythonanywhere.com/api/mpesa_payment",envelopedata)
    setSuccess(response.data.message)

    // reset
    setLoading("")
    
  } catch (error) {
    setError(error.message)

    // reset
    setLoading("")
  }
  }
  const imagepath="https://pintoz.pythonanywhere.com/static/images/"

  return (
  <div className="row justify-content-center mt-4 mb-4">
    <div className='col-md-6 p-4 card shadow'>
      <h3 className='text-warning'>{loading}</h3>
      <h3 className='text-primary'>{error}</h3>
      <h3 className='text-success'>{success}</h3>
      <h1 className='text-info text-center'>Lipa na mpesa</h1>
      <img src= {imagepath + book.book_photo} alt={book.book_name}className='mt-4 bookimage'/>
    <div className='card-body '>
    
      

          <h3 className='text-info'>Tittle: {book.name}</h3>
          <h5 className='text-warning fst-italics'>Category: {book.category}</h5>
          <h6 className='text-info'>Author: {book.author}</h6>
         
          <h6 className='text-warning '>{book.tittle}</h6>
          <h6 className='text-warning'>publication year: {book.publication_year}</h6>
          <h6 className='text-info'>stock quantity: {book.stock_quantity}</h6>
          <h6 className='text-warning fst-italics'>Publisher: {book.publisher}</h6>
          <h6 className='text-info'>Price: KSH.{book.price}</h6>
          <form onSubmit={handlesubmit} >
            <input type="tel" placeholder='Enter your phone number here 254xxxxxxxx' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/> <br />
            <input type="number" value={book.price} disabled className='form-control'/>


          <button className='btn btn-info w-100 mt-2'>purchase now</button>
          </form>



         
          
         
          </div>

        </div>
        </div>

    

    
  )
}

export default Mpesapayment