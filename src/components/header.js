import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="menu">

      <nav className="navbar-change">

        <div className="contain">

          <div className="logo design">

            <Link to="/">Yassine <span>Irab</span></Link>

          </div>
          <div className="standard">

            <ul>
              <li><Link to="/story" className="link-1" title="About me">My story</Link></li><li><Link to="/Work" className="link-1" title="Portfolio">Work</Link></li><li><Link to="/Contact" className="link-1" title="Contact me">Contact</Link></li><li className="underMore"><Link to="/blogs" className="link-1" title="Blog">blog</Link></li>
            </ul>

          </div>
        </div>

      </nav>
    </div>
  </header>
)

export default Header
