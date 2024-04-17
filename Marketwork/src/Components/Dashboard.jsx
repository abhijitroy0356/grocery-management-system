import "bootstrap-icons/font/bootstrap-icons.css"
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    
    const anvigate = useNavigate()
  axios.defaults.withCredentials = true
  
  const handleLogout = () => {
    
    axios.get('http://localhost:3000/auth/logout')
    .then(result => {
      if(result.data.Status) { 
        localStorage.removeItem("valid")
        anvigate('/')
      }
    })
}
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-4 fw-bolder d-none d-sm-inline bg-dark text-white rounded-2 p-2">
                DigitalFlake
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2 text-dark"></i>
                  <span className="ms-2 d-none d-sm-inline text-dark">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/category"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2 text-dark"></i>
                  <span className="ms-2 d-none d-sm-inline text-dark">
                    Category
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/product"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2 text-dark"></i>
                  <span className="ms-2 d-none d-sm-inline text-dark">Product</span>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col p-0 m-3">
        <div className="w-100 text-end bg-dark rounded-2 mt-2" onClick={handleLogout}>
              <Link
                  className="nav-link px-4 align-middle text-dark"
                >
                  <i className="fs-2 rounded-2 bi-power bg-dark text-white ms-2"></i>
                </Link>
              </div>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard