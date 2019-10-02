import React from 'react'
import minimalTitleStyle from './modules/minimal-title.module.css'

const MinimalTitle = (props) => {
  return (
    <h1 className={minimalTitleStyle.title}>{props.title}</h1>
  )
}

export default MinimalTitle
