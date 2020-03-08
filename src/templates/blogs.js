import React, { Component } from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

//Import Component
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogsTemplate extends Component {
    render() {
        const data = this.props.data;

        return (
            <Layout>
                <SEO
                    title={data.title}
                    description={data.excerpt}
                />
                <div className="blogsPages">
                    <div className="SectionBlog">
                        <div className="contain">
                            <div className="leftBlog">

                                <h2>Blog</h2>
                                <p>Publish what you think, don't put it on social media, Pofo provides a large collection of home and inner pages, carefully crafted elements, and easily customizable templates.</p>

                            </div>
                            <article className={"rightBlog"}>
                                <ul className={"card-list"}>
                                    {data.allWordpressPost.edges.map(({ node }) => (
                                        <li key={node.slug} className={"card"}>
                                            <AniLink paintDrip to={'blog/' + node.slug} hex="#5c6ac4" className={"card-image"}>
                                                {node.featured_media.localFile.childImageSharp.resolutions &&
                                                    <Img resolutions={node.featured_media.localFile.childImageSharp.resolutions} />
                                                }
                                            </AniLink>
                                            <AniLink paintDrip to={'blog/' + node.slug} hex="#5c6ac4" className={"card-description"}>
                                                <h2>{node.title}</h2>
                                            </AniLink>
                                            <div className={"card-description"} dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
                                            {node.date}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                            <div className="clear"></div>
                        </div>
                    </div>

                </div>
            </Layout>
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
                            resolutions(width: 1500, height: 1500) {
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