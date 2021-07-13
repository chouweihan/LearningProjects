import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ showPerson = false }) => {
  return (
    <header className="hero">
      {showPerson && (
        <StaticImage
          src="../assets/person.png"
          placeholder="blurred"
          className="hero-person"
          alt="typing image"
        />
      )}
    </header>
  )
}

export default Hero
