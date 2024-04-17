import { useState } from "react"
import { Link } from "react-router-dom"
const Product = () => {
    
  return (
    <div className="px-1 mt-5">
    <div className="d-flex justify-content-between">
    <h3>Products</h3>
    <Link to="/dashboard/addproduct" className="btn btn-success">
      add new
    </Link>
  </div>
  </div>
  )
}

export default Product