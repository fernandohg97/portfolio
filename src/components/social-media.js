import React from 'react'
import {Link} from 'gatsby'
import Media from 'react-media'

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
          <Link
            style={{
            color: '#000',
            paddingRight: '2.5em'
          }}
            to={props.to}>{props.children}</Link>
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
        <i className="fab fa-instagram"></i>
      </SocialMediaLink>
      <SocialMediaLink to="/">
        <i className="far fa-envelope"></i>
      </SocialMediaLink>
      <SocialMediaLink to="https://github.com/fernandohg97/">
        <i className="fab fa-github"></i>
      </SocialMediaLink>
      <li
        style={{
        display: 'inline-block',
        margin: 0,
        padding: 0
      }}>
        <Link style={{
          color: '#000'
        }} to="https://twitter.com/_ferh97">
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
    </ul>
  )
}

export default SocialMedia
