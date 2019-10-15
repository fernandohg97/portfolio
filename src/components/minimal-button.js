import React from 'react'
import { Link } from 'gatsby'
import MinimalButtonStyle from './modules/minimal-button.module.css'

const MinimalButton = props => {
  return (
    <Link className={MinimalButtonStyle.minimalButton} style={props.customStyle} to={props.to}>{props.children}</Link>
  )
}

export default MinimalButton
