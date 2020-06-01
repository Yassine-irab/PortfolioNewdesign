/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, withPrefix } from "gatsby"
import '../../fontawesome/css/font-awesome.min.css'; 
import Helmet from "react-helmet"
import AniLink from "gatsby-plugin-transition-link/AniLink"



//Import Component
import Header from "./header"
import '../styles/style.scss'

const Layout = ({ children }) => (

  <>
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
      <div className="layoutContainer">
      <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <div className="gooey">
            <span className="dot"></span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>          
          <main>{children}</main>
          <div id="footer">
          <footer>
            <span> © {new Date().getFullYear()}, All rights reserved</span>
            <span>.</span>
            {` `}
            <span><AniLink to="/">Yassine Irab</AniLink></span>
            <div className="social-link">

            </div>
          </footer>
          </div>
        </div>
        <Helmet>
        <script src={withPrefix('../static/jquery.js')} type="text/javascript" ></script>
        <script src={withPrefix('../static/script.js')} type="text/javascript" ></script>
        <script data-ad-client="ca-pub-8120214404020974" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Helmet>
        </div>
      </>
    )}
  />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
