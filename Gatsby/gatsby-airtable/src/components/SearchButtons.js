import React from 'react'
import styled from 'styled-components'

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
  const [index, setIndex] = React.useState(0)

  const types = [
    'all',
    ...new Set(
      projects.map(project => {
        return project.data.type
      })
    ),
  ]

  const handleClick = (type, tIndex) => {
    setIndex(tIndex)
    if (type === 'all') {
      setBackToAll()
    } else {
      const tempProjects = projects.filter(project => {
        return project.data.type === type
      })
      setProjects(tempProjects)
    }
  }

  return (
    <Wrapper>
      {types.map((type, tIndex) => {
        return (
          <button
            key={tIndex}
            className={index === tIndex ? 'active' : ''}
            onClick={() => handleClick(type, tIndex)}
          >
            {type}
          </button>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`
export default SearchButtons
