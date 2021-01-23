import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `black`,
      maxWidth: 900,
      margin: `0 auto`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 300
      }}
    >
      <div>
        <nav>
          <ul style={{ display: "flex", flex: 1, margin: `0 auto`, padding: `0px`, justifyContent: `center` }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link style={{ color: `white` }} to={link.link}>
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