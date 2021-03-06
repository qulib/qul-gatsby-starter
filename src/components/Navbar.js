import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/qul-wordmark.svg'
import { FaSearch } from 'react-icons/fa'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        id="site-nav"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="Queen's University Library" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={`navbar-menu ${this.state.navBarActiveClass}`}>


            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about">
                Search
              </Link>
              <Link className="navbar-item" to="/products">
                Help & Services
              </Link>
              <Link className="navbar-item" to="/blog">
                Locations & Hours
              </Link>
              <Link className="navbar-item" to="/contact">
                About Us
              </Link>
              <a className="navbar-item" href="https://library.queensu.ca">
                <span className="icon">
                  <FaSearch />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
