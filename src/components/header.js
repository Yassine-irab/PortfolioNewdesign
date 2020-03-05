import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

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

                <Link to="/">Yassine <span>Irab</span></Link>

              </div>
              <div className="standard">

                <ul>
                  {data.wordpressWpApiMenusMenusItems.items.map(item => (
                    <li key={item.object_slug}>
                      <Link to={`${item.url}`} className="link-1" title="About me">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

          </nav>
        </div>
      </header>

    )}
  />
)

export default Header
