import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <h2 className='postTitle'>{post.frontmatter.title}</h2>
      <h5 className='date'>{post.frontmatter.date}</h5>
      <div className='postText' dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`