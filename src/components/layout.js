import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div className='layoutMain'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Edward Kim</title>
          <link rel="canonical" href="https://www.eggwardkim.com" />
        </Helmet>
          <main>{children}</main>
      </div>
      <footer>
        <h5 classNae='footerDetails'>
          © {new Date().getFullYear()} Edward Kim, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </h5>
      </footer>
    </>
  )
}

export default Layout