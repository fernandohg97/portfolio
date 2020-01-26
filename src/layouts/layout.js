import React from 'react'
import {useStaticQuery, graphql} from "gatsby"
import Media from 'react-media'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'
import Header from '../components/header'

// Define font awesome icons globally
library.add(fab, faEnvelope)

const Layout = ({children}) => {

  const data = useStaticQuery(graphql `
      query {
        site {
          siteMetadata {
            title,
            description,
            author,
            image
          }
        }
      }
    `)
  return (
    <div>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        image={data.site.siteMetadata.image}
      />
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
              maxHeight: '100%'
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
