import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcategory = () => {
  const [category, setCategory] = useState();
  const [descriptioninfo, setDescriptioninfo] = useState();
  const [statusinfo, setStatusinfo] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/auth/addcategory", {category,descriptioninfo,statusinfo})
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/category");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleCancel = () => {
    navigate("/dashboard/category"); 
  };
  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="p-1 rounded w-100">
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between">
            <div className="mb-3 p-4">
              <label htmlFor="category">
                <strong>name</strong>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter name"
                onChange={(e) => setCategory(e.target.value)}
                className="form-control rounded-3"
              />
            </div>
            <div className="mb-3 p-4">
              <label htmlFor="category">
                <strong>description</strong>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter description"
                onChange={(e) => setDescriptioninfo(e.target.value)}
                className="form-control rounded-3"
              />
            </div>
            <div className="mb-3 p-4">
              <label htmlFor="status">
                <strong>Status</strong>
              </label>
              <select
                name="status"
                type="text"
                value={statusinfo}
                onChange={(e) => setStatusinfo(e.target.value)}
                className="form-select rounded-3"
              >
                <option value="select">Select</option> 
                <option value="active">Active</option> 
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <button
            className="btn btn-success w-10 rounded-0 mb-2 m-3 rounded-3 btnwork"
            onClick={handleCancel}
          >
            cancel
          </button>
          <button
            className="btn btn-success w-10 rounded-0 mb-2 m-4 rounded-3"
            type="submit"
          >
            add category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcategory;
