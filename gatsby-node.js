const path = require('path')

exports.createPages = ({actions, graphql}) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/BlogPost.js')

  return graphql(`
  {
    allMarkdownRemark {
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
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}
