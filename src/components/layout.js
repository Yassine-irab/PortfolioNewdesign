/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import '../../fontawesome/css/font-awesome.min.css'; 

//Import Component
import Header from "./header"
import '../styles/style.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>    
      <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <div id="footer">
          <footer className="greyBack">
            © {new Date().getFullYear()}, All rights reserved . 
            {` `}
            <a href="https://www.gatsbyjs.org">Yassine Irab</a>
          </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
