import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Skeleton from 'react-loading-skeleton';
import dataBlogs from '../datablogs.json';

import Icon from "../assets/dots.svg";

//Import Component
import Banner from "../components/banner"
import Aboutme from "../components/aboutme"
import Skills from "../components/skills"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"



const IndexPage = ({ data }) => (
    <Layout>

    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id="showcase">
      <Banner />
    </div>
    <Aboutme />
    <Skills />
    <Portfolio />

    <div className="SectionBlog homemain">
      <div className="contain">

        <div className="leftBlog">

          <h2>{dataBlogs.blogtitlefirst}</h2>
          <p>{dataBlogs.descriptionblogs}</p>
          <AniLink to="/blogs/" hex="#5c6ac4" className="btn" title="Blog">Discover more <i className="fa fa-angle-right"></i></AniLink>

        </div>

        <article className="rightBlog">
          <ul className={"card-list"}>
            {data.allWordpressPost.edges.map(post => (
              <li key={post.node.slug} className={"card"}>              
                <AniLink to={`/blog/${post.node.slug}`} hex="#5c6ac4" className={"card-image"}>
                  <Img
                    sizes={post.node.featured_media.localFile.childImageSharp.fixed}
                    alt={post.node.title} />
                </AniLink>
                <AniLink to={`/blog/${post.node.slug}`} hex="#5c6ac4" className={"card-description"}>
                  <h2 dangerouslySetInnerHTML={{ __html: post.node.title } || <Skeleton />} />
                </AniLink>
                <div className={"card-description"} dangerouslySetInnerHTML={{ __html: post.node.excerpt } || <Skeleton />} ></div>
              </li>
            ))}
          </ul>
  
          <div className="outerDotsBox banner">
                <div className="dotsBox">
                    <Icon />
                </div>
          </div>          
        </article>

      </div>
    </div>

  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  allWordpressPost (limit: 2, sort: { fields: [date] }, filter: { status: { eq: "publish" } }){
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
                      fixed(width: 1500, height: 1500, quality: 100) {
                        src
                        width
                        height
                        srcSet
                        aspectRatio
                        base64
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