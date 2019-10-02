import React from 'react'
import {Link} from 'gatsby'
import Media from 'react-media'
import headerStyle from './modules/header.module.css'
import HamburgerMenu from '../components/hamburger-menu'

const ListLink = props => (
  <li style={{
    display: 'inline-block',
    marginRight: '3em'
  }}>
    <Link className={headerStyle.links} to={props.to}>{props.children}</Link>
  </li>
)

const header = () => {
  return (
    <Media query={{
      maxWidth: 599
    }}>
      {matches => matches
        ? (
          <HamburgerMenu></HamburgerMenu>
        )
        : (
          <div
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
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about">About</ListLink>
                <ListLink to="/blog">Blog</ListLink>
                <ListLink to="/projects">Projects</ListLink>
                <ListLink to="/store">Store</ListLink>
                <ListLink to="/contact">Contact</ListLink>
              </ul>
            </header>
          </div>
        )
      }
    </Media>
  )
}

export default header
