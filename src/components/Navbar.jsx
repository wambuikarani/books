import React from 'react'

function Navbar() {
  return (
    <section class="row">
    <div class="col-md-12">
        <nav class="navbar navbar-expand-md navbar-light bg-info">
            <a href="index.html" class="navbar-brand"><b className='text-warning'>Readers<span className='text-danger'>corner</span></b></a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcontent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarcontent" class="collapse navbar-collapse                                                        ">
                <div class="navbar-nav ms-auto" >
                    <a href="/" class="nav-link active">home</a>
                    <a href="addbook" class="nav-link active">Add book</a>
                    <a href="signin" class="nav-link active">Sign in</a>
                    <a href="getbook" class="nav-link active">Get book</a>
                    <a href="signup" class="nav-link active">Sign up</a>
                    
                </div>
            </div>

        </nav>
    </div>
 </section>
  )
}

export default Navbar