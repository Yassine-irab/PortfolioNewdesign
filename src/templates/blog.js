import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

class Blog extends Component {
  render() {
    const blog = this.props.data.wordpressPost;
    const resolutions = blog.featured_media.localFile.childImageSharp.resolutions;

    return (
      <>
        <h1>{blog.title}</h1>

        {resolutions &&
          <Img resolutions={resolutions} />
        }
        
        <div>{blog.content}</div>
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
      featured_media {
        localFile {
          childImageSharp {
            resolutions(width: 300, height: 300) {
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