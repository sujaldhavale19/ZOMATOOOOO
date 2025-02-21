import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 text-start">
        <div className="form-container p-4 shadow-lg rounded">
            <h2 className="text-center mb-4">Zomato Signup</h2>
            <form>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control custom-input" id="fullName" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control custom-input" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control custom-input" id="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control custom-input" id="confirmPassword" />
            </div>
            <button type="submit" className="btn custom-btn w-100">Sign Up</button>
            </form>
        </div>
        </div>
  )
}

export default SignUp
