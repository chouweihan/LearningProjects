import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get the latest stories to your inbox!</h2>
          <h4>Recieve news every few weeks</h4>
          <form className="contact-form" action="/success">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="name"
            />
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="email"
            />

            <button type="submit" className="btn form-control submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
