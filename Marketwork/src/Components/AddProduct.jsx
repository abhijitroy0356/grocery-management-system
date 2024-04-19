
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddProduct = () => {
  const [category, setCategory] = useState();
  const [selectCategory, setSelectcategory]=useState()
  const [productname, setProductname] = useState();
  const [packsize, setPacksize] = useState();
  const [mrp, setMrp] = useState();
  const [imginfo, setImginfo]=useState()
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/auth/addproduct",{selectCategory,productname,packsize,mrp,imginfo,status})
    .then(result=>{
      if(result.data.Status){
        navigate("/dashboard/product")
      }
      else{
        console.log(result.data.Error)
      }
    })
    .catch(err=>(console.log(err)))

  }
  function handleCancel() {
    navigate("/dashboard/product");
  }
 console.log(category)
  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="p-1 rounded w-100">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          {/* First row */}
          <div className="row mb-3">
            <div className="col-md-4 p-4">
              <label htmlFor="category">
                <strong>Category</strong>
              </label>
              <select
                name="category"
                id="category"
                className="form-control rounded-3"
                value={selectCategory}
                onChange={(e)=>{
                  setSelectcategory(e.target.value)
                }}
              >
                <option>Select</option>
                {category &&
                  category.map((c) => {

                        return <option key={c.id}>{c.name}</option>  
                              
                    })}
              </select>
            </div>
            <div className="col-md-4 p-4">
              <label htmlFor="category">
                <strong>Product Name</strong>
              </label>
              <input
                type="text"
                name="Product Name"
                placeholder="Enter Product Name"
                onChange={(e) => setProductname(e.target.value)}
                className="form-control rounded-3"
              />
            </div>
            <div className="col-md-4 p-4">
              <label htmlFor="category">
                <strong>pack size</strong>
              </label>
              <input
                type="text"
                name="pack size"
                placeholder="Enter pack size"
                onChange={(e) => setPacksize(e.target.value)}
                className="form-control rounded-3"
              />
            </div>
          </div>
          {/* Second row */}
          <div className="row mb-3">
            <div className="col-md-4 p-4">
              <label htmlFor="category">
                <strong>MRP</strong>
              </label>
              <input
                type="number"
                name="pack size"
                placeholder="Enter MRP"
                onChange={(e) => setMrp(e.target.value)}
                className="form-control rounded-3"
              />
            </div>
            <div className="col-md-4 p-4">
              <label htmlFor="image">
                <strong>Product Image</strong>
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setImginfo(e.target.files[0])}
                className="form-control rounded-3"
              />
            </div>
            <div className="col-md-4 p-4">
              <label htmlFor="status">
                <strong>Status</strong>
              </label>
              <select
                name="status"
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="form-select rounded-3"
              >
                <option value="select">Select</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <button
            className="btn btn-success w-10 rounded-0 mb-2 m-4 rounded-3 btnwork"
            onClick={handleCancel}
          >
            cancel
          </button>
          <button
            className="btn btn-success w-10 rounded-0 mb-2 m-4 rounded-3"
            type="submit"
          >
                Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
