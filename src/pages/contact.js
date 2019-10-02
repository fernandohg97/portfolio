import React from 'react'
import Layout from '../layouts/layout'
import MinimalTitle from '../components/minimal-title'
import MinimalParagraph from '../components/minimal-paragraph'

const Contact = () => {
  return (
    <Layout>
      <MinimalTitle title="Ask me, collaborate together or say hello!"></MinimalTitle>
      <MinimalParagraph paragraph="Feel free to send me a message through the following social media."></MinimalParagraph>
    </Layout>    
  )
}

export default Contact
