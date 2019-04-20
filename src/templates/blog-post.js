import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from "../components/seo"

import '../components/blog-post.css'


const BlogPost = props => {

  const post = props.data.markdownRemark
  const url = props.data.site.siteMetadata.siteUrl
  const { title, description } = post.frontmatter

  return (
    <Layout>
      <SEO title={title} description={description} url={url} pathname={props.location.pathname} />
      <div>
        <h1>{ title }</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        description
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default BlogPost
