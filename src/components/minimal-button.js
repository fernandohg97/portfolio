import React from 'react'
import { Link } from 'gatsby'
import MinimalButtonStyle from './modules/minimal-button.module.css'

const MinimalButton = props => {

  const { localLink } = props

  return localLink ? (
      <Link className={MinimalButtonStyle.minimalButton} style={props.customStyle} to={props.to}>{props.children}</Link>
  ) : (
    <a href={props.to} className={MinimalButtonStyle.minimalButton} style={props.customStyle}>{props.children}</a>
  )

}

export default MinimalButton
