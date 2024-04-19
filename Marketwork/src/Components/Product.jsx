import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const Product = () => {
  const [product, setPtoduct]=useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/product")
      .then((result) => {
        if (result.data.Status) {
          setPtoduct(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    
  return (
    <div className="px-1 mt-5">
    <div className="d-flex justify-content-between">
    <h3>Products</h3>
    <Link to="/dashboard/addproduct" className="btn btn-success">
      add new
    </Link>
    </div>
    <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th className="table-header">category</th>
              <th className="table-header">product name</th>
              <th className="table-header">packsize</th>
              <th className="table-header">mrp</th>
              <th className="table-header">image</th>
              <th className="table-header">status</th>
            </tr>
          </thead>
          <tbody>
            {product.map((c) => (
              <tr key={c.id}>
                <td className="table-data">{c.category}</td>
                <td className="table-data">{c.product_name}</td>
                <td className="table-data">{c.pack_size}</td>
                <td className="table-data">{c.mrp}</td>
                <td className="table-data">{c.image}</td>
                <td className={`table-data ${c.status === 'inactive' ? 'inactive' : 'active'}`}>{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>
  </div>
  )
}

export default Product