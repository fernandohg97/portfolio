import React from 'react'
import minimalParagraphStyle from './modules/minimal-paragraph.module.css'

const MinimalParagraph = (props) => {
  return (
    <p className={minimalParagraphStyle.paragraph} style={props.customStyle}>{props.paragraph}</p>
  )
}

export default MinimalParagraph
