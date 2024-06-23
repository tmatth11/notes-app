import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center px-3">
                <h1 className="navbar-brand mb-0 h1 text-light">Notes App</h1>
                <Link to="/edit" className="btn btn-outline-light">
                    <i className="bi bi-pencil-square"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar