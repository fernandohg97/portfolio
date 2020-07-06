import React, {Fragment} from 'react'
import {graphql} from 'gatsby'
import Layout from '../layouts/layout'
import MinimalTitle from '../components/minimal-title'
import MinimalParagraph from '../components/minimal-paragraph'
import MinimalButton from '../components/minimal-button'
import Img from 'gatsby-image'
import Media from 'react-media'

const Blog = ({data}) => {
  return (
    <Layout>
      <div
        style={{
        maxWidth: '90%',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: '2em'
      }}>

        <Media
          queries={{
          small: {
            maxWidth: 649
          },
          medium: "(min-width: 650px) and (max-width: 1199px)",
          large: {
            minWidth: 1200
          }
        }}>
          {matches => (
            <Fragment>
              {matches.small && <div
                style={{
                width: '100%',
                margin: '0 auto'
              }}>
                <MinimalTitle customStyle={{
                  fontSize: '40px'
                }} title="Bienvenido al blog"></MinimalTitle>
                <MinimalParagraph customStyle={{
                  fontSize: '16px'
                }} paragraph="Encuentra artículos, recursos y tutoriales sobre café, fotografía y emprendimiento."></MinimalParagraph>
                <div>
                  <Img fluid={data.file.childImageSharp.fluid}/>
                </div>
                {/* Posts content */}
                <div style={{
                  marginTop: '3.5em'
                }}>
                  {getBlogPosts(data, 'small')}
                </div>
              </div>
}
              {matches.medium && <div
                style={{
                width: '80%',
                margin: '0 auto'
              }}>
                <MinimalTitle title="Bienvenido al blog"></MinimalTitle>
                <MinimalParagraph paragraph="Encuentra artículos, recursos y tutoriales sobre café, fotografía y emprendimiento."></MinimalParagraph>
                <div>
                  <Img fluid={data.file.childImageSharp.fluid}/>
                </div>
                {/* Posts content */}
                <div style={{
                  marginTop: '3.5em'
                }}>
                  {getBlogPosts(data, 'medium')}
                </div>
              </div>
}
              {matches.large && <div
                style={{
                width: '60%',
                margin: '0 auto'
              }}>
                <MinimalTitle title="Bienvenido al blog"></MinimalTitle>
                <MinimalParagraph
                  customStyle={{
                  textAlign: 'center'
                }}
                  paragraph="Encuentra artículos, recursos y tutoriales sobre café, fotografía y emprendimiento."></MinimalParagraph>
                <div
                  style={{
                  margin: '0 auto',
                  textAlign: 'center'
                }}>
                  <Img fixed={data.file.childImageSharp.fixed}/>
                </div>
                {/* Posts content */}
                <div style={{
                  marginTop: '3.5em'
                }}>
                  {getBlogPosts(data)}
                </div>
              </div>
}
            </Fragment>
          )}

        </Media>
      </div>

    </Layout>
  )
}

export default Blog

const getBlogPosts = (data, mediaQuery = 'notSmall') => {

  return data
    .allMarkdownRemark
    .edges
    .map(post => {

      if (mediaQuery === 'small') {
        return (
          <div key={post.node.id} style={{
            marginBottom: '3em'
          }}>
              <MinimalTitle
                customStyle={{
                textAlign: 'left',
                fontSize: '26px',
                margin: 0,
                padding: 0,
                color: post.node.frontmatter.status !== null ? '#454545' : false
              }}
                title={post.node.frontmatter.title}></MinimalTitle>
              <span
                style={{
                textAlign: 'left',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                marginTop: '10px',
                padding: 0,
                display: 'block'
              }}>{post.node.frontmatter.date}</span>
            <MinimalParagraph
              customStyle={{
              textAlign: 'left',
              fontSize: '16px',
              margin: '10px 0 15px 0',
              padding: 0
            }}
              paragraph={post.node.frontmatter.description}></MinimalParagraph>
            <MinimalButton
              customStyle={{
              fontSize: '14px',
              marginLeft: 0,
              width: '30%',
              padding: '0.7em',
              fontWeight: '400'
            }}
              to={post.node.frontmatter.path}>Leer artículo</MinimalButton>
          </div>
        )
      } else if (mediaQuery === 'medium') {
        return (
          <div key={post.node.id} style={{
            marginBottom: '3em'
          }}>
            <div
              style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <MinimalTitle
                customStyle={{
                textAlign: 'left',
                fontSize: '26px',
                margin: 0,
                padding: 0,
                width: '85%',
                color: post.node.frontmatter.status !== null ? '#454545' : false
              }}
                title={post.node.frontmatter.title}></MinimalTitle>
              <span
                style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                fontWeight: '500'
              }}>{post.node.frontmatter.date}</span>
            </div>
            <MinimalParagraph
              customStyle={{
              textAlign: 'left',
              fontSize: '16px',
              margin: '10px 0 15px 0',
              padding: 0
            }}
              paragraph={post.node.frontmatter.description}></MinimalParagraph>
            <MinimalButton
              customStyle={{
              fontSize: '14px',
              marginLeft: 0,
              width: '30%',
              padding: '0.7em',
              fontWeight: '400'
            }}
              to={post.node.frontmatter.path}>Leer artículo</MinimalButton>
          </div>
        )
      } else {
        return (
          <div key={post.node.id} style={{
            marginBottom: '3em'
          }}>
            <div
              style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <MinimalTitle
                customStyle={{
                textAlign: 'left',
                fontSize: '26px',
                margin: 0,
                padding: 0,
                color: post.node.frontmatter.status !== null ? '#454545' : false
              }}
                title={post.node.frontmatter.title}></MinimalTitle>
              <span
                style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                fontWeight: '500'
              }}>{post.node.frontmatter.date}</span>
            </div>
            <MinimalParagraph
              customStyle={{
              textAlign: 'left',
              fontSize: '16px',
              margin: '10px 0 15px 0',
              padding: 0
            }}
              paragraph={post.node.frontmatter.description}></MinimalParagraph>
            <MinimalButton
              customStyle={{
              fontSize: '14px',
              marginLeft: 0,
              width: '16%',
              padding: '0.7em',
              fontWeight: '400'
            }}
              to={post.node.frontmatter.path}>Leer artículo</MinimalButton>
          </div>
        )
      }

    })
}

export const query = graphql `
  query {
    file(relativePath: {eq: "blog.png"}) {
      childImageSharp {
        fixed(width: 550) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(filter: {}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          html
          frontmatter {
            date
            path
            title
            description
            status
          }
          excerpt
        }
      }
    }
  }
`
