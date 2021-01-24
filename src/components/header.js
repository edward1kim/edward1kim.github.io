import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div>
      <div>
        <nav>
          <ul className="navbar">
            {menuLinks.map(link => (
              <li className='navbarLink' key={link.name}>
                <Link to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header