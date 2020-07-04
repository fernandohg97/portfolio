import React, {Fragment} from 'react'
import {Link} from 'gatsby'
import Media from 'react-media'
import HamburgerMenu from '../components/hamburger-menu'
import headerStyle from './modules/header.module.css'

const Header = () => {
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
                  to="/about">Acerca</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block',
                  marginRight: '2em'
                }}
                  to="/contact">Contacto</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block',
                  marginRight: '2em'
                }}
                  to="/blog">Blog</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block'
                }}
                  to="/projects">Proyectos</ListLink>
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
              <ul
                style={{
                listStyle: 'none',
                margin: 0,
                padding: 0
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
                  to="/about">Acerca</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block',
                  marginRight: '4em'
                }}
                  to="/contact">Contacto</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block',
                  marginRight: '4em'
                }}
                  to="/blog">Blog</ListLink>
                <ListLink
                  customStyle={{
                  display: 'inline-block'
                }}
                  to="/projects">Proyectos</ListLink>
              </ul>
            </header>
          </div>}
        </Fragment>
      )
}
    </Media>

  )
}

const ListLink = props => (
  <li style={props.customStyle}>
    <Link className={headerStyle.links} to={props.to}>{props.children}</Link>
  </li>
)


export default Header
