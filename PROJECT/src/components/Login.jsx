import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS
import './Login.css'


function Login() {
  return (
    <>
     <div className="container d-flex justify-content-center align-items-center vh-100 text-start">
      <div className="form-container p-4 shadow-lg rounded">
        <h2 className="text-center mb-4">Zomato Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label ">
              Email Address
            </label>
            <input
              type="email"
              className="form-control custom-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control custom-input"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn custom-btn w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
