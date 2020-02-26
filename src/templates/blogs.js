import React, { Component } from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import PropTypes from "prop-types"

class BlogsTemplate extends Component {
    render() {
        const data = this.props.data;

        return(
            <>
            <div>
                <div className="SectionBlog">
                    <div className="contain">
                        <div className="leftBlog">

                            <h2>Blog</h2>
                            <p>Publish what you think, don't put it on social media, Pofo provides a large collection of home and inner pages, carefully crafted elements, and easily customizable templates.</p>
                            <Link to="/" className="btn" title="Blog">Discover more</Link>

                        </div>                
                    <div className={"rightBlog"}>
                        <ul className={"card-list"}>
                        {data.allWordpressPost.edges.map(({node}) => (
                            <li key={node.slug} className={"card"}>
                                    <Link to={'blog/' + node.slug} className={"card-image"}>
                                    {node.featured_media.localFile.childImageSharp.resolutions &&
                                        <Img resolutions={node.featured_media.localFile.childImageSharp.resolutions} />
                                    }
                                    </Link>                                                               
                                <Link to={'blog/' + node.slug} className={"card-description"}>
                                    <h2>{node.title}</h2>
                                </Link>
                                <div className={"card-description"} dangerouslySetInnerHTML={{__html: node.excerpt}}></div>
                                {node.date}
                            </li>
                        ))}                            
                        </ul>
                    </div> 
                </div>
                </div>                 

            </div>
            </>
        )
    }
}

BlogsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default BlogsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
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
                    slug                   
                }
            }
        }
    }
`