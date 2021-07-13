import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Error" />
      <main className="error-page">
        <div className="error-container">
          <h1>error 404, page not found</h1>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
