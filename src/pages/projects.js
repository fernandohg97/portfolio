import React, {Fragment} from 'react'
import {graphql} from 'gatsby'
import Layout from '../layouts/layout'
import MinimalTitle from '../components/minimal-title'
import MinimalParagraph from '../components/minimal-paragraph'
import MinimalButton from '../components/minimal-button'
import Media from 'react-media'

const Projects = ({data}) => {
  return (
    <Layout>
      <div
        style={{
        maxWidth: '90%',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '2em'
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
                <MinimalTitle
                  customStyle={{
                  fontSize: '40px'
                }}
                  title="Projects"></MinimalTitle>
                <MinimalParagraph
                  customStyle={{
                  fontSize: '16px'
                }}
                  paragraph="Some of my personal and professional projects."></MinimalParagraph>
                <div style={{
                  marginTop: '3.5em'
                }}>
                  {getProjects(data, 'small')}
                </div>
              </div>
}
              {matches.medium && <div
                style={{
                width: '80%',
                margin: '0 auto'
              }}>
                <MinimalTitle title="Projects"></MinimalTitle>
                <MinimalParagraph paragraph="Some of my personal and professional projects."></MinimalParagraph>
                <div style={{
                  marginTop: '3.5em'
                }}>
                  {getProjects(data, 'medium')}
                </div>
              </div>
}
              {matches.large && <div
                style={{
                width: '60%',
                margin: '0 auto'
              }}>
                <MinimalTitle title="Projects"></MinimalTitle>
                <MinimalParagraph paragraph="Some of my personal and professional projects."></MinimalParagraph>
                {/* Projects Content */}
                <div style={{
                  marginTop: '3.5em'
                }}>
                  {getProjects(data)}
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

export default Projects

const getProjects = (data, mediaQuery = 'notSmall') => {

  return data
    .allProjectsJson
    .edges
    .map(project => {

      if (mediaQuery === 'small' || mediaQuery === 'medium') {
        return (
          <div key={project.node.id} style={{
            marginTop: '1em',
            marginBottom: '2.5em'
          }}>
            <MinimalTitle
              customStyle={{
              fontSize: '26px',
              textAlign: 'left',
              margin: 0,
              padding: 0
            }}
              title={project.node.projectName}></MinimalTitle>
            <MinimalParagraph
              customStyle={{
              textAlign: 'left',
              fontSize: '16px',
              margin: '10px 0 15px 0',
              padding: 0
            }}
              paragraph={project.node.description}></MinimalParagraph>
            <MinimalButton
              customStyle={{
              fontSize: '14px',
              marginLeft: 0,
              width: '24%',
              padding: '0.7em',
              fontWeight: '400'
            }}
              to={project.node.urlCode}>See code</MinimalButton>
          </div>
        )
      } else {
        return (
          <div key={project.node.id} style={{
            marginTop: '1em',
            marginBottom: '2.5em'
          }}>
            <MinimalTitle
              customStyle={{
              fontSize: '26px',
              textAlign: 'left',
              margin: 0,
              padding: 0
            }}
              title={project.node.projectName}></MinimalTitle>
            <MinimalParagraph
              customStyle={{
              textAlign: 'left',
              fontSize: '16px',
              margin: '10px 0 15px 0',
              padding: 0
            }}
              paragraph={project.node.description}></MinimalParagraph>
            <MinimalButton
              customStyle={{
              fontSize: '14px',
              marginLeft: 0,
              width: '14%',
              padding: '0.7em',
              fontWeight: '400'
            }}
              to={project.node.urlCode}>See code</MinimalButton>
          </div>
        )
      }
    })

}
export const query = graphql `
  query {
    allProjectsJson {
      edges {
        node {
          id
          projectName
          description
          urlCode
        }
      }
    }
  }
`
