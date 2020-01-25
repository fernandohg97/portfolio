import React from 'react'
import {Link} from 'gatsby'
import Media from 'react-media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMediaLink = props => (
  <Media queries={{
    small: {
      maxWidth: 599
    }
  }}>
    {matches => matches.small
      ? (
        <li
          style={{
          display: 'inline-block',
          margin: 0,
          padding: 0
        }}>
          <Link
            style={{
            color: '#000',
            paddingRight: '1.5em'
          }}
            to={props.to}>{props.children}</Link>
        </li>
      )
      : (
        <li
          style={{
          display: 'inline-block',
          margin: 0,
          padding: 0
        }}>
          <a
            style={{
            color: '#000',
            paddingRight: '2.5em'
          }}
            href={props.to}>{props.children}</a>
        </li>
      )
}

  </Media>

)

const SocialMedia = () => {
  return (
    <ul
      style={{
      textDecoration: 'none',
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }}>
      <SocialMediaLink to="https://www.instagram.com/_ferh97/">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </SocialMediaLink>
      <SocialMediaLink to="mailto:fernando.hdz97@gmail.com">
        <FontAwesomeIcon icon='envelope' />
      </SocialMediaLink>
      <SocialMediaLink to="https://github.com/fernandohg97/">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </SocialMediaLink>
      <li
        style={{
        display: 'inline-block',
        margin: 0,
        padding: 0
      }}>
        <a style={{
          color: '#000'
        }} href="https://twitter.com/_ferh97">
          <FontAwesomeIcon icon={['fab', 'medium']} />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia
