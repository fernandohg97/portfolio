import React, {Fragment} from 'react'
import Layout from '../layouts/layout'
import MinimalTitle from '../components/minimal-title'
import MinimalParagraph from '../components/minimal-paragraph'
import SocialMediaLink from '../components/social-media'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Media from 'react-media'

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
                  title="Ask me, work together or say hello!"></MinimalTitle>
                <MinimalParagraph customStyle={{
                  fontSize: '16px'
                }}
                  paragraph="Feel free to send me a message through the following social media."></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <SocialMediaLink></SocialMediaLink>
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
                  title="Ask me, collaborate together or say hello!"></MinimalTitle>
                <MinimalParagraph
                  paragraph="Feel free to send me a message through the following social media."></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <SocialMediaLink></SocialMediaLink>
                  <Img
                    style={{
                    float: 'right',
                    marginTop: '3em'
                  }}
                    fluid={data.file.childImageSharp.fluid}/>
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
                  title="Ask me, collaborate together or say hello!"></MinimalTitle>
                <MinimalParagraph
                  paragraph="Feel free to send me a message through the following social media."></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <SocialMediaLink></SocialMediaLink>
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
                  title="Ask me, collaborate together or say hello!"></MinimalTitle>
                <MinimalParagraph
                  paragraph="Feel free to send me a message through the following social media."></MinimalParagraph>
                <div style={{
                  marginTop: '2em'
                }}>
                  <SocialMediaLink></SocialMediaLink>
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
