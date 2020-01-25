import React from 'react'
import {Link} from 'gatsby'
import {slide as Menu} from 'react-burger-menu'

const HamburgerMenu = () => {

  return (
    <Menu disableAutoFocus styles={hamburgerStyle} width={250}>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/about">About</Link>
      <Link className="menu-item" to="/contact">Contact</Link>
      <Link className="menu-item" to="/blog">Blog</Link>
      <Link className="menu-item" to="/projects">Projects</Link>
    </Menu>
  )
}

const hamburgerStyle = {
  bmBurgerButton: {
    position: 'relative',
    width: '32px',
    height: '26px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#262626'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#FBFBFB'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#3B3B3B',
    padding: '3em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#FFFFFF',
    textAlign: 'center'
  },
  bmItem: {
    display: 'block',
    marginBottom: '1em',
    textDecoration: 'none',
    fontFamily: "Quicksand, sans-serif",
    fontSize: '18px'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default HamburgerMenu
