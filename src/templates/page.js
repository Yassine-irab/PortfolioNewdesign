import React, { Component } from "react"


//Import Component
import Layout from "../components/layout"
import SEO from "../components/seo"

class PageTemplate extends Component {
    render() {
        const page = this.props.data.wordpressPage;
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage

        console.log(currentPage)

        return (

            <Layout>
                <SEO
                    title={page.title}
                    description={page.excerpt}
                />
                <div className="mainsection">
                    <div className="contain">
                        <main className="page-single">

                            <header className="page-header">
                                <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                            </header>

                            <div className="page-content">
                                <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
                            </div>

                        </main>
                    </div>
                </div>
            </Layout>

        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            excerpt
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`