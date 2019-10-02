import React from 'react'
import Helmet from 'react-helmet'
import {useStaticQuery, graphql} from "gatsby"
import Header from '../components/header'

const Layout = ({children}) => {
  const data = useStaticQuery(graphql `
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>{data.site.siteMetadata.title}</title>
        <meta name='description' content='Fernando Hernandez website'/>
        <meta
          name='keywords'
          content='Fernando, Hernandez, website, personal, minimal'/>
      </Helmet>
      <Header></Header>
      <div
        style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0 1.0875rem 1.45rem',
        paddingTop: 0
      }}>
        {children}
      </div>
    </div>
  )
}

export default Layout
