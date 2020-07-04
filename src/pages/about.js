import React, {Fragment} from 'react'
import {graphql} from 'gatsby'
import Layout from '../layouts/layout'
import MinimalTitle from '../components/minimal-title'
import MinimalParagraph from '../components/minimal-paragraph'
import Img from 'gatsby-image'
import Media from 'react-media'

export default function About({data}) {
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
              marginTop: '1em',
              height: '100%'
            }}>
              <div
                style={{
                margin: '0 auto',
                textAlign: 'justify'
              }}>
                <MinimalTitle
                  customStyle={{
                  fontSize: '40px'
                }}
                  title="Acerca de mí"></MinimalTitle>
                <div
                  style={{
                  padding: 0,
                  margin: '2em 0'
                }}>
                  <Img fluid={data.file.childImageSharp.fluid} alt="Personal about photo"/>
                </div>
                {getAboutParagraphs(data, 'small')}
              </div>

            </div>
}
            {matches.medium && <div
              style={{
              maxWidth: '80%',
              padding: 0,
              margin: '0 auto',
              height: '100%',
              marginBottom: '2em'
            }}>
              <div
                style={{
                margin: '0 auto',
                textAlign: 'justify'
              }}>
                <MinimalTitle title="Acerca de mí"></MinimalTitle>
                <div
                  style={{
                  padding: 0,
                  margin: '3em 0'
                }}>
                  <Img fluid={data.file.childImageSharp.fluid} alt="Personal about photo"/>
                </div>
                {getAboutParagraphs(data)}
              </div>
            </div>
}
            {matches.large && <div
              style={{
              maxWidth: '90%',
              padding: 0,
              margin: '0 auto',
              marginLeft: 0,
              display: 'flex',
              height: '100%',
              alignItems: 'center'
            }}>
              <div
                style={{
                flex: 1,
                paddingTop: '5em',
                margin: 0
              }}>
                <Img fixed={data.file.childImageSharp.fixed} alt="Personal about photo"/>
              </div>
              <div
                style={{
                margin: '0 auto',
                textAlign: 'left',
                paddingLeft: '5em'
              }}>
                <MinimalTitle
                  customStyle={{
                  marginTop: '0.6em'
                }}
                  title="Acerca de mí"></MinimalTitle>
                {getAboutParagraphs(data)}
              </div>
            </div>}
          </Fragment>
        )}
      </Media>

    </Layout>
  )
}

const getAboutParagraphs = (data, mediaQuery = 'notSmall') => {
  const aboutParagraphs = []
  data
    .allAboutJson
    .edges
    .forEach(paragraph => {
      if (mediaQuery === 'small') {
        aboutParagraphs.push(
          <MinimalParagraph
            customStyle={{
            fontSize: '16px'
          }}
            key={paragraph.node.value}
            paragraph={paragraph.node.value}></MinimalParagraph>
        )
      } else {
        aboutParagraphs.push(
          <MinimalParagraph key={paragraph.node.value} paragraph={paragraph.node.value}></MinimalParagraph>
        )
      }

    })
  return aboutParagraphs
}

export const query = graphql `
  query {
    allAboutJson {
      edges {
        node {
          value
        }
      }
    }
    file(relativePath: {eq: "home.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
        fixed(width: 800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
