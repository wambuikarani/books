import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Getbook() {
  const navigate = useNavigate()

  // initialize states
  const [loading, setLoading] = useState("")
  const [books, setBooks] = useState([])
  const [error, setError] = useState("")

  // sorting and filtering states
  const [sortByField, setSortByField] = useState("price")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortDirection, setSortDirection] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All categories")

  // fetch books
  const getBooks = async () => {
    setLoading("Please wait...")
    try {
      const response = await axios.get("https://pintoz.pythonanywhere.com/api/get_books")
      setBooks(response.data)
      setLoading("") // ✅ clear loading after success
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  // extract categories
  const categories = ["All categories", ...new Set(books.map(p => p.category))]

  // filter and sort
  const filteredBooks = books
    .filter(book =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All categories" || book.category === selectedCategory)
    )
    .sort((a, b) => {
      if (!sortByField || !sortDirection) return 0

      let aValue = a[sortByField]
      let bValue = b[sortByField]

      // handle price sorting as number
      if (sortByField === "price") {
        aValue = parseFloat(aValue)
        bValue = parseFloat(bValue)
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      } else {
        return sortDirection === "asc"
          ? aValue - bValue
          : bValue - aValue
      }
    })

  // reset filters and sorting
  const handleReset = () => {
    setSearchTerm("")
    setSortDirection("")
    setSortByField("price")
    setSelectedCategory("All categories")
  }

  const imagePath = "https://pintoz.pythonanywhere.com/static/images/"

  return (
    <div className="container-fluid">
      <h3 className="text-primary text-center mb-4">Available Books</h3>

      {/* Loading and Error Messages */}
      {loading && <div className="text-center text-info mb-3">{loading}</div>}
      {error && <div className="text-center text-danger mb-3">{error}</div>}

      {/* Filtering & Sorting Controls */}
      <div className="row p-4">
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%", height: "35px" }}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ width: "100%", height: "35px" }}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <select
            onChange={(e) => {
              setSortByField("price")
              setSortDirection(e.target.value)
            }}
            style={{ width: "100%", height: "35px" }}
          >
            <option value="">Price</option>
            <option value="asc">Min Price</option>
            <option value="desc">Max Price</option>
          </select>
        </div>

        <div className="col-md-2">
          <select
            onChange={(e) => {
              const value = e.target.value
              if (value === "az" || value === "za") {
                setSortByField("name")
                setSortDirection(value === "az" ? "asc" : "desc")
              } else {
                setSortByField("name")
                setSortDirection("")
              }
            }}
            style={{ width: "100%", height: "35px" }}
          >
            <option value="">Sort by Name</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-dark w-100 border rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Display Books */}
      <div className="row p-4">
        {filteredBooks.length === 0 ? (
          <div className="text-center text-muted">No books found</div>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id} className="col-md-4 justify-content-center mb-4">
              <div className="card shadow card-margin">
                <img
                  src={imagePath + book.book_photo}
                  alt={book.name}
                  className="mt-4 bookimage"
                />
                <div className="card-body">
                  <h3 className="text-info">Title: {book.name}</h3>
                  <h5 className="text-warning fst-italic">
                    Category: {book.category}
                  </h5>
                  <h6 className="text-info">Author: {book.author}</h6>
                  <h6 className="text-warning">
                    Publication Year: {book.publication_year}
                  </h6>
                  <h6 className="text-info">
                    Stock Quantity: {book.stock_quantity}
                  </h6>
                  <h6 className="text-warning fst-italic">
                    Publisher: {book.publisher}
                  </h6>
                  <h6 className="text-info">KSH {book.price}</h6>
                  <button
                    onClick={() => navigate("/mpesapayment", { state: { book } })}
                    className="btn btn-info w-100 mt-2"
                  >
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Getbook
