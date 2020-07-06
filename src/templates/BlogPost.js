import React, {Fragment} from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../layouts/layout'
import MinimalTitle from '../components/minimal-title'
import Media from 'react-media'

const ClearButton = () => {
  return (
    <Link
      style={{
      textDecoration: 'none',
      padding: '1em 1em 1em 0',
      margin: 0,
      color: '#262626',
      textAlign: 'left',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontFamily: 'QuickSand'
    }}
      to="/blog">Atrás</Link>
  )
}

export default function BlogPost({data}) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div
        style={{
        maxWidth: '90%',
        margin: '0 auto',
        textAlign: 'left'
      }}>
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
                width: '100%',
                margin: '0 auto'
              }}>
                <ClearButton></ClearButton>
                <MinimalTitle
                  customStyle={{
                  fontSize: '40px',
                  textAlign: 'left',
                  marginTop: '10px'
                }}
                  title={post.frontmatter.title}></MinimalTitle>
                <div
                  style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span
                    style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>{post.frontmatter.date}</span>
                  {/* <span
                    style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>Read in Medium</span> */}
                </div>
                <div
                  style={{
                  marginTop: '3em'
                }}
                  dangerouslySetInnerHTML={{
                  __html: post.html
                }}/>
              </div>}
              {matches.medium && <div
                style={{
                width: '80%',
                margin: '0 auto'
              }}>
                <ClearButton></ClearButton>
                <MinimalTitle
                  customStyle={{
                  fontSize: '48px',
                  textAlign: 'left',
                  marginTop: '10px'
                }}
                  title={post.frontmatter.title}></MinimalTitle>
                <div
                  style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span
                    style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>{post.frontmatter.date}</span>
                  {/* <span
                    style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>Read in Medium</span> */}
                </div>
                <div
                  style={{
                  marginTop: '3em'
                }}
                  dangerouslySetInnerHTML={{
                  __html: post.html
                }}/>
              </div>}
              {matches.large && <div
                style={{
                width: '50%',
                margin: '0 auto'
              }}>
                <ClearButton></ClearButton>
                <MinimalTitle
                  customStyle={{
                  fontSize: '40px',
                  textAlign: 'left',
                  marginTop: '10px'
                }}
                  title={post.frontmatter.title}></MinimalTitle>
                <div
                  style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span
                    style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '550'
                  }}>{post.frontmatter.date}</span>
                  {/* <span
                    style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '550'
                  }}>Read in Medium</span> */}
                </div>
                <div
                  style={{
                  marginTop: '3em'
                }}
                  dangerouslySetInnerHTML={{
                  __html: post.html
                }}/>
              </div>}
            </Fragment>
          )}
        </Media>
      </div>
    </Layout>
  )
}

export const postQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
