import React from "react"
import Helmet from "react-helmet"
import { graphql, Link, withPrefix } from "gatsby"
import Img from "gatsby-image"


//Import Component
import Banner from "../components/banner"
import Aboutme from "../components/aboutme"
import Skills from "../components/skills"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = ({ data }) => (

    <Layout>

    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id="showcase">
      <Banner />
    </div>
    <Aboutme />
    <Skills />

    <div className="SectionBlog">
      <div className="contain">

        <div className="leftBlog">

          <h2>Blog</h2>
          <p>Publish what you think, don't put it on social media, Pofo provides a large collection of home and inner pages, carefully crafted elements, and easily customizable templates.</p>
          <Link to="/blogs/" className="btn" title="Blog">Discover more</Link>

        </div>

        <div className="rightBlog">
          <ul className={"card-list"}>
            {data.allWordpressPost.edges.map(post => (
              <li key={post.node.slug} className={"card"}>
                <Link to={`/category/${post.node.categories.slug}`} className={"card-categorie"}>
                  <span dangerouslySetInnerHTML={{ __html: post.node.categories.name }} />
                </Link>                
                <Link to={`/blog/${post.node.slug}`} className={"card-image"}>
                  <Img
                    sizes={post.node.featured_media.localFile.childImageSharp.resolutions}
                    alt={post.node.title} />
                </Link>
                <Link to={`/blog/${post.node.slug}`} className={"card-description"}>
                  <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                </Link>
                <div className={"card-description"} dangerouslySetInnerHTML={{ __html: post.node.excerpt }} ></div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
    <Helmet>
      <script src={withPrefix('/jquery.min.js')} type="text/javascript" />
      <script src={withPrefix('/script.js')} type="text/javascript" />
    </Helmet>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  allWordpressPost{
      edges{
          node{
              id
              title
              excerpt
              categories {
                name
                link
                slug
              }
              featured_media {
                  localFile {
                    childImageSharp {
                      resolutions {
                        src
                        width
                        height
                      }
                    }
                  }
                }
              slug                   
          }
      }
  }
}
`