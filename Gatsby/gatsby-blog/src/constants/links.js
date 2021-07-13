import React from 'react'
import { Link } from 'gatsby'
const Links = ({
  styleclass,
  children,
  link = false,
  toggleSidebar = () => {},
}) => {
  return (
    <ul className={styleclass}>
      <li>
        <Link to="/" className="page-link" onClick={() => toggleSidebar(link)}>
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/posts"
          className="page-link"
          onClick={() => toggleSidebar(link)}
        >
          Posts
        </Link>
        {children}
      </li>
      <li>
        <Link
          to="/newsletter"
          className="page-link"
          onClick={() => toggleSidebar(link)}
        >
          Newsletter
        </Link>
      </li>
      <li>
        <Link
          to="/post"
          className="page-link"
          onClick={() => toggleSidebar(link)}
        >
          MDXPost
        </Link>
      </li>
    </ul>
  )
}

export default Links
