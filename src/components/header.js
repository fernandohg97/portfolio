import React, {Fragment} from 'react'
import {Link} from 'gatsby'
import Media from 'react-media'
import headerStyle from './modules/header.module.css'
import HamburgerMenu from '../components/hamburger-menu'

const ListLink = props => (
  <li style={props.customStyle}>
    <Link className={headerStyle.links} to={props.to}>{props.children}</Link>
  </li>
)

const header = () => {
  return (

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
          {matches.small && <HamburgerMenu></HamburgerMenu>}
          {matches.medium && <div
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
            padding: '0'
          }}>
            <header
              style={{
              padding: '2em 0',
              margin: '0 auto'
            }}>
              <ul style={{
                listStyle: 'none'
              }}>
                <ListLink
                  customStyle={{
                  display: 'inline-block',
                  marginRight: '2em'
                }}
                  to="/">Home</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block',
                  marginRight: '2em'
                }}
                  to="/about">About</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block'
                }}
                  to="/contact">Contact</ListLink>
              </ul>
            </header>
          </div>
}
          {matches.large && <div
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
            padding: '0'
          }}>
            <header
              style={{
              padding: '2em 0',
              margin: '0 auto'
            }}>
              <ul style={{
                listStyle: 'none'
              }}>
                <ListLink
                  customStyle={{
                  display: 'inline-block',
                  marginRight: '4em'
                }}
                  to="/">Home</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block',
                  marginRight: '4em'
                }}
                  to="/about">About</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block'
                }}
                  to="/contact">Contact</ListLink>
              </ul>
            </header>
          </div>}
        </Fragment>
      )
}
    </Media>

  )
}

export default header
