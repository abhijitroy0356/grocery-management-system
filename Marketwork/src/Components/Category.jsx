import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Category = () => {
  const [category, setCategory] = useState([]);
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
  return (
    <div className="px-1 mt-5">
      <div className="d-flex justify-content-between">
        <h3>category</h3>
        <Link to="/dashboard/addcategory" className="btn btn-success">
          add new
        </Link>
      </div>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Description</th>
              <th className="table-header">Status</th>
            </tr>
          </thead>
          <tbody>
            {category.map((c) => (
              <tr key={c.id}>
                <td className="table-data">{c.name}</td>
                <td className="table-data">{c.description}</td>
                <td className={`table-data ${c.status === 'inactive' ? 'inactive' : 'active'}`}>{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
