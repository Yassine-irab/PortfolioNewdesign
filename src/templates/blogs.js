import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import dataBlogs from '../datablogs.json';
import Skeleton from 'react-loading-skeleton';


//Import Component
import Layout from "../components/layout"
import SEO from "../components/seo"



const BlogsTemplate = ({data}) => {
        
        return (
            <Layout>
                <SEO title="Blogs" keywords={[`blogs`, `articles`]} />
                <div className="blogsPages">
                    <div className="SectionBlog">
                        <div className="contain">
                            <div className="leftBlog">

                                <h2>{dataBlogs.blogtitlesecond || <Skeleton />}</h2>
                                <p>{dataBlogs.descriptionblogs || <Skeleton />}</p>

                            </div>
                            <article className={"rightBlog"}>
                                <ul className={"card-list"}>
                                    {data.allWordpressPost.edges.map(({ node }) => (
                                        <li key={node.slug} className={"card"}>
                                            <AniLink to={'blog/' + node.slug} hex="#5c6ac4" className={"card-image"}>
                                                {node.featured_media.localFile.childImageSharp.fixed &&
                                                    <Img resolutions={node.featured_media.localFile.childImageSharp.fixed || <Skeleton />} />
                                                }
                                            </AniLink>
                                            <AniLink to={'blog/' + node.slug} hex="#5c6ac4" className={"card-description"}>
                                                <h2>{node.title || <Skeleton />}</h2>
                                            </AniLink>
                                            <div className={"card-description"} dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
                                            {node.date || <Skeleton />}
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

BlogsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default BlogsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost (sort: { fields: [date] }, filter: { status: { eq: "publish" } }){
            edges{
                node{
                    id
                    title
                    excerpt                  
                    featured_media {
                        localFile {
                          childImageSharp {
                            fixed(width: 1500, height: 1500, quality: 100) {
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