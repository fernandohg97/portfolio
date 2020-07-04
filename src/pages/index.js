import React, {Fragment} from 'react'
import {graphql} from 'gatsby'
import Layout from '../layouts/layout'
import MinimalTitle from '../components/minimal-title'
import MinimalParagraph from '../components/minimal-paragraph'
import SocialMedia from '../components/social-media'
import MinimalButton from '../components/minimal-button'
import Img from 'gatsby-image'
import Media from 'react-media'

export default function Index({data}) {
  return (
    <Layout>
      <Media
        queries={{
        small: {
          maxWidth: 599
        },
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: {
          minWidth: 1200
        }
      }}>
        {matches => (
          <Fragment>
            {matches.small && <div
              style={{
              maxWidth: '90%',
              padding: 0,
              margin: '0 auto',
              marginTop: '5em',
              height: '100%'
            }}>
              <div style={{
                textAlign: 'center'
              }}>
                <MinimalTitle
                  customStyle={{
                  fontSize: '50px'
                }}
                  title="Hola, soy Fernando"></MinimalTitle>
                <MinimalParagraph paragraph={data.site.siteMetadata.description}></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <MinimalButton customStyle={{
                    fontSize: '14px'
                  }} to="/contact" localLink={true}>Let's build something!</MinimalButton>
                </div>
                <div style={{
                  marginTop: '3em'
                }}>
                  <SocialMedia></SocialMedia>
                </div>
              </div>
              <div
                style={{
                padding: 0,
                marginTop: '3em'
              }}>
                <Img fluid={data.file.childImageSharp.fluid} alt="Personal home photo"/>
              </div>
            </div>
}
            {matches.medium && <div
              style={{
              maxWidth: '90%',
              padding: 0,
              margin: '0 auto',
              height: '100%'
            }}>
              <div style={{
                textAlign: 'center'
              }}>
                <MinimalTitle title="Hola, soy Fernando"></MinimalTitle>
                <MinimalParagraph paragraph={data.site.siteMetadata.description}></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <MinimalButton to="/contact" localLink={true}>Let's build something!</MinimalButton>
                </div>
                <div style={{
                  marginTop: '3em'
                }}>
                  <SocialMedia></SocialMedia>
                </div>
              </div>
              <div
                style={{
                padding: 0,
                marginTop: '3em'
              }}>
                <Img fluid={data.file.childImageSharp.fluid} alt="Personal home photo"/>
              </div>
            </div>
}
            {matches.large && <div
              style={{
              maxWidth: '90%',
              padding: 0,
              margin: '0 auto',
              marginRight: 0,
              marginTop: '3em',
              display: 'flex',
              height: '100%'
            }}>
              <div
                style={{
                textAlign: 'center',
                paddingRight: '5em',
                paddingTop: '5em'
              }}>
                <MinimalTitle title="Hola, soy Fernando"></MinimalTitle>
                <MinimalParagraph paragraph={data.site.siteMetadata.description}></MinimalParagraph>
                <div style={{
                  marginTop: '3em'
                }}>
                  <MinimalButton to="/contact" localLink={true}>Construyamos algo!</MinimalButton>
                </div>
                <div style={{
                  marginTop: '9em'
                }}>
                  <SocialMedia></SocialMedia>
                </div>
              </div>
              <div
                style={{
                flex: 1,
                padding: 0,
                marginRight: 0,
                marginLeft: '6em'
              }}>
                <Img fixed={data.file.childImageSharp.fixed} alt="Personal home photo"/>
              </div>
            </div>
          } 
          </Fragment>
        )
      } 
      </Media>

    </Layout>
  )
}

export const query = graphql `
  query {
    site {
      siteMetadata {
        description
      }
    }
    file(relativePath: {eq: "about-2.jpg"}) {
      childImageSharp {
        fixed(width: 800) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
