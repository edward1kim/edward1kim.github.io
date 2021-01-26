import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"

const Header = ({ siteTitle, menuLinks }) => {


  return (
    <header>
      <nav>
        <div className="navbar">
          <Logo />
          {menuLinks.map(link => (
            <Link to={link.link}>
              <div className='navbarLink' key={link.name}>
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header