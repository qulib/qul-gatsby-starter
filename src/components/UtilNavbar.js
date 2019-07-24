import React from 'react'
import { FaRandom } from 'react-icons/fa'

const UtilNavbar = class extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-menu">
            <a className="navbar-item" href="#">
              <span className="icon">
                <FaRandom />
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default UtilNavbar
