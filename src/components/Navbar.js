import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/qul-logo-middle.svg'
import searchIcon from '../img/search-icon.svg'

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
        className="navbar is-transparent is-fixed-top"
        id="site-nav"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
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
            <div className="navbar-start has-text-centered">
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
            </div>

            <div className="navbar-end has-text-centered">
              <a className="navbar-item" href="#" rel="noopener noreferrer">
                <span className="icon">
                  <img src={searchIcon} alt="Site Search" />
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
