import React from 'react'
import minimalImageStyle from './modules/minimal-image.module.css'

const MinimalImage = (props) => {
  return (
    <figure>
      <img className={minimalImageStyle.photo} src={props.src} alt={props.description}/>
    </figure>
  )
}

export default MinimalImage
