import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleclass="footer-icons"></SocialLinks>
        <p>&copy; {new Date().getFullYear()} Gatsby Blog Project</p>
      </div>
    </footer>
  )
}

export default Footer
