import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"


import '../styles/style.scss'

//Import Component
import Header from "../components/header"
import Banner from "../components/banner"
import Aboutme from "../components/aboutme"
import Skills from "../components/skills"
import Blogsection from "../components/blogsection"



const IndexPage = () => (

  <div>
    <div id="showcase">
      <Header />
      <Banner />
    </div>
    <Aboutme />
    <Skills />
    <Blogsection />
    <Helmet>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script src={withPrefix('/script.js')} type="text/javascript" />
    </Helmet>    
  </div>
)

export default IndexPage
