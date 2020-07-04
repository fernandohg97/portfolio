import React, {Fragment} from 'react'
import Layout from '../layouts/layout'
import MinimalTitle from '../components/minimal-title'
import MinimalParagraph from '../components/minimal-paragraph'
import SocialMediaLink from '../components/social-media'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Media from 'react-media'
import MinimalButtonStyle from '../components/modules/minimal-button.module.css'

const Contact = ({data}) => {

  return (
    <Layout>
      <div
        style={{
        maxWidth: '90%',
        textAlign: 'left',
        margin: '0 auto'
      }}>
        <Media
          queries={{
          small: {
            maxWidth: 599
          },
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px) and (max-width: 1599px)",
          extraLarge: {
            minWidth: 1600
          }
        }}>
          {matches => (
            <Fragment>
              {matches.small && <div
                style={{
                width: '100%',
                margin: '0 auto'
              }}>
                <MinimalTitle
                  customStyle={{
                  textAlign: 'left',
                  fontSize: '40px'
                }}
                  title="Pregúntame, colaboremos juntos o manda mensaje!"></MinimalTitle>
                <MinimalParagraph customStyle={{
                  fontSize: '16px'
                }}
                  paragraph="Sientete libre de mandarme algun mensaje por alguno de estos medios."></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <SocialMediaLink/>
                  <a className={MinimalButtonStyle.minimalButton} style={{
                      fontSize: '16px',
                      marginTop: '2em',
                      marginLeft: 0,
                      width: '40%',
                      textAlign: 'center',
                      padding: '0.7em',
                      fontWeight: '400'
                  }} href={data.allImageSharp.edges[0].node.fixed.src} download>Resume</a>
                  <Img
                    style={{
                    marginTop: '2em'
                  }}
                    fluid={data.file.childImageSharp.fluid}/>
                </div>
              </div>
}
              {matches.medium && <div
                style={{
                width: '90%',
                margin: '0 auto'
              }}>
                <MinimalTitle
                  customStyle={{
                  textAlign: 'left'
                }}
                  title="Pregúntame, colaboremos juntos o manda mensaje!"></MinimalTitle>
                <MinimalParagraph
                  paragraph="Sientete libre de mandarme algun mensaje por alguno de estos medios."></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <SocialMediaLink/>
                  <a className={MinimalButtonStyle.minimalButton} style={{
                      fontSize: '16px',
                      marginTop: '2em',
                      marginLeft: 0,
                      width: '26%',
                      textAlign: 'center',
                      padding: '0.7em',
                      fontWeight: '400'
                  }} href={data.allImageSharp.edges[0].node.fixed.src} download>Resume</a>
                  <Img
                    style={{
                    float: 'right',
                    marginTop: '3em'
                  }}
                    fluid={data.file.childImageSharp.fixed}/>
                </div>
              </div>
}
              {matches.large && <div
                style={{
                width: '70%',
                margin: '0 auto'
              }}>
                <MinimalTitle
                  customStyle={{
                  textAlign: 'left'
                }}
                  title="Pregúntame, colaboremos juntos o manda mensaje!"></MinimalTitle>
                <MinimalParagraph
                  paragraph="Sientete libre de mandarme algun mensaje por alguno de estos medios."></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <SocialMediaLink></SocialMediaLink>
                  <a className={MinimalButtonStyle.minimalButton} style={{
                      fontSize: '16px',
                      marginTop: '2em',
                      marginLeft: 0,
                      width: '14%',
                      textAlign: 'center',
                      padding: '0.7em',
                      fontWeight: '400'
                  }} href={data.allImageSharp.edges[0].node.fixed.src} download>Resume</a>
                  <Img
                    style={{
                    float: 'right'
                  }}
                    fixed={data.file.childImageSharp.fixed}/>
                </div>
              </div>
}
              {matches.extraLarge && <div
                style={{
                width: '70%',
                margin: '0 auto',
                marginTop: '4em'
              }}>
                <MinimalTitle
                  customStyle={{
                  textAlign: 'left'
                }}
                  title="Pregúntame, colaboremos juntos o manda mensaje!"></MinimalTitle>
                <MinimalParagraph
                  paragraph="Sientete libre de mandarme algun mensaje por alguno de estos medios."></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <SocialMediaLink></SocialMediaLink>
                  <a className={MinimalButtonStyle.minimalButton} style={{
                      fontSize: '16px',
                      marginTop: '2em',
                      marginLeft: 0,
                      width: '14%',
                      textAlign: 'center',
                      padding: '0.7em',
                      fontWeight: '400'
                  }} href={data.allImageSharp.edges[0].node.fixed.src} download>Resume</a>
                  <Img
                    style={{
                    float: 'right'
                  }}
                    fixed={data.file.childImageSharp.fixed}/>
                </div>
              </div>
}
            </Fragment>
          )
}
        </Media>

      </div>
    </Layout>
  )
}

export default Contact

export const query = graphql `
  query {
    allImageSharp(filter: {fixed: {originalName: {eq: "Resume.jpg"}}}) {
      edges {
        node {
          fixed {
            src
            originalName
          }
        }
      }
    }
    file(relativePath: {eq: "contact.jpg"}) {
      childImageSharp {
        fixed(width: 450) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
