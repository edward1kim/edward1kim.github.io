import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <nav>
      <ul className="navbar">
        {menuLinks.map(link => (
          <Link to={link.link}>
            <li className='navbarLink' key={link.name}>
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header