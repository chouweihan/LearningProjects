import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'showSidebar' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links
          styleclass="sidebar-links"
          toggleSidebar={toggleSidebar}
          link={true}
        >
          <Categories />
        </Links>
      </div>
    </aside>
  )
}

export default Sidebar
