import React from 'react'
import Helmet from 'react-helmet'
import {useStaticQuery, graphql} from "gatsby"
import Media from 'react-media'
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
        <script src="https://kit.fontawesome.com/2c2a6d4195.js" crossorigin="anonymous"></script>
      </Helmet>
      <Header></Header>
      <Media query={{
        maxWidth: 599
      }}>
        {matches => matches
          ? (
            <div
              style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0 2rem',
              paddingTop: 0,
              marginTop: '80px',
              textAlign: 'center'
            }}>
              {children}
            </div>
          )
          : (
            <div
              style={{
              margin: '0 auto',
              maxWidth: '100%',
              padding: '0',
              maxHeight: '100%',
              overflow: 'hidden'
            }}>
              {children}
            </div>
          )
}
      </Media>

    </div>
  )
}

export default Layout
