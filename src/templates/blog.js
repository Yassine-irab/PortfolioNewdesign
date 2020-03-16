import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Skeleton from 'react-loading-skeleton';

//Import Component
import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends Component {
  render() {
    const blog = this.props.data.wordpressPost;

    return (
      <>
        <Layout>
          <SEO
            title={blog.title}
            description={blog.excerpt}
          />
          <div className="mainsection">
              <article className="post-single">

                <header className="post-header">
                  <div className="post-thumbnail">
                    <Img
                      sizes={blog.featured_media.localFile.childImageSharp.fixed || <Skeleton />}
                      alt={blog.title}
                    />
                  </div>
                  <div className="contain contentContain">
                    <h2>{blog .title || <Skeleton count={2}/>}</h2>
                    <div className="post-meta">
                      <p> Written by {blog.author.name || <Skeleton />} on {blog.date || <Skeleton />}</p>
                    </div>
                  </div>                                    
                </header>
                  <div className="post-content">
                    <div className="contain contentContain">
                      <div
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                      />
                    </div>
                </div>
                <div className="contain contentContain">
                  <div className="gobackBtn">
                  <AniLink paintDrip to="/blogs" hex="#5c6ac4"> &lt; Go back and see more posts</AniLink>
                  </div>
                </div>
              </article>
          </div>
        </Layout>

      </>
    )
  }
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Blog

export const blogQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            fixed(width: 1500, height: 1500) {
              src
              width
              height
            }
          }
        }
      }      
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`