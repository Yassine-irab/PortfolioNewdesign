import { StaticQuery, graphql } from "gatsby"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"



const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(name: { eq: "MainNav" }) {
          items {
            title
            object_slug
            url
          }
        }
      }
    `}
    render={data => (

      <header>
        <div className="menu">

          <nav className="navbar-change">

            <div className="contain">

              <div className="logo design">

                <AniLink to="/" hex="#5c6ac4">Yassine <span>Irab</span></AniLink>

              </div>
              {/*
              <div className="standard">

                <ul>
                  {data.wordpressWpApiMenusMenusItems.items.map(item => (
                    <li key={item.object_slug}>
                      <AniLink paintDrip to={`${item.url}`} hex="#5c6ac4" className="link-1" title="About me">
                        {item.title}
                      </AniLink>
                    </li>
                  ))}
                </ul>

              </div>
                  */}
            </div>

          </nav>
        </div>
      </header>

    )}
  />
)

export default Header
