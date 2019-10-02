import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import MinimalTitle from '../components/minimal-title'
import MinimalParagraph from '../components/minimal-paragraph'

export default ({data}) => {
    return (
      <Layout>
        <div>
          <MinimalTitle title="Hello, I'm Fernando"></MinimalTitle>
          <MinimalParagraph paragraph={data.site.siteMetadata.description}></MinimalParagraph>
        </div>
      </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`
