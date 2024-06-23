import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <section className="mt-3 p-2">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-exclamation-square-fill fs-1 text-warning"></i>
                <h1>404 Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link to="/" className="btn btn-primary">
                    Go Back
                </Link>
            </div>
        </section>
    )
}

export default NotFoundPage