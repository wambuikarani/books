import React from 'react'

function Addbook() {
  return (
    <div className=' mb-4 d-flex justify-content-center align-items-center mt-4'>
     
 
    
    
    <form className='shadow rounded w-50 p-4'>
      <fieldset><legend className='text-center'><b>Add books</b> </legend>

  <input type="text" class="form-control mb-2" placeholder=" Enter  book tittle" />

  <input type="text" class="form-control mb-2" placeholder="Enter the author's name" />

  <input type="number" class="form-control mb-2" placeholder="Enter book cost" />
  <input type="text" class="form-control mb-2" placeholder="Enter book genre" />
  <input type="text" class="form-control mb-2" placeholder="Enter book publisher" />
  <input type="number" class="form-control mb-2" placeholder="Enter year of publication" />
  <input type="number" class="form-control mb-2" placeholder="Enter the number of pages" />
  <input type="number" class="form-control mb-2" placeholder="Enter the stock quantity" />

  <button type="submit" class=" form-control btn btn-light text-centre"><b>Browse/upload  book's image</b></button><br />
  <input type="file" class="form-control mb-2" placeholder="Browse...  No file selected" />
  <button type="submit" class=" form-control btn btn-info text-centre">Upload image</button><br />




   
    

  </fieldset>

</form> 
</div>

  
    

    
  )
} 

export default Addbook